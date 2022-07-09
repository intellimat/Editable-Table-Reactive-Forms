import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Department, User } from 'src/app/models/user.model';
import { TableEvent, TableEventType, UpdateTableResponse } from '../events';

@Component({
  selector: 'app-users-table-view',
  templateUrl: './users-table-view.component.html',
  styleUrls: ['./users-table-view.component.scss'],
})
export class UsersTableViewComponent implements OnInit, OnChanges {
  @Input() data: User[] | null = null;
  @Input() updateTableResponseEE!: EventEmitter<UpdateTableResponse>;
  @Output() tableEventEE = new EventEmitter<TableEvent>();

  departments = Object.values(Department);
  usersTable = this.formBuilder.group({
    tableRows: this.formBuilder.array([]),
  });
  tableRows = this.usersTable.get('tableRows') as FormArray;
  valuesBeforeEditing = new Map<number, AbstractControl<any, any>>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.handleOutcomeEvents();
  }

  ngOnChanges() {
    if (this.data) {
      this.usersTable = this.formBuilder.group({
        tableRows: this.formBuilder.array([]),
      });
      this.data.forEach((user) => {
        this.addRow(user);
      });
    }
  }

  private createFormGroup(user: User): FormGroup {
    return this.formBuilder.group({
      id: [user.id],
      name: [user.name, Validators.required],
      email: [user.email, [Validators.email, Validators.required]],
      department: [user.department, [Validators.required]],
      isEditable: [false],
    });
  }

  private addRow(user: User) {
    const tableRows = this.usersTable.get('tableRows') as FormArray;
    const newUser = this.createFormGroup(user);
    tableRows.push(newUser);
  }

  private deleteRow(index: number) {
    const tableRows = this.usersTable.get('tableRows') as FormArray;
    tableRows.removeAt(index);
  }

  setUserIsEditable(group: AbstractControl<any, any>, value: boolean) {
    group.get('isEditable')!.setValue(value);
  }

  onEditClick(group: AbstractControl<any, any>, rowIndex: number) {
    this.valuesBeforeEditing.set(rowIndex, group.getRawValue());
    this.setUserIsEditable(group, true);
  }

  onDeleteClick(group: AbstractControl<any, any>, rowIndex: number) {
    const user = group.value;
    const event: TableEvent = {
      user,
      type: TableEventType.DeleteRow,
      rowIndex,
    };
    this.tableEventEE.emit(event);
  }

  onConfirmEdit(group: AbstractControl<any, any>, rowIndex: number) {
    const user = group.value;
    const event: TableEvent = {
      user,
      type: TableEventType.EditRow,
      rowIndex,
    };
    this.tableEventEE.emit(event);
  }

  onCancelClick(group: AbstractControl<any, any>, rowIndex: number) {
    group.setValue(this.valuesBeforeEditing.get(rowIndex!));
    this.valuesBeforeEditing.delete(rowIndex);
  }

  private handleOutcomeEvents() {
    this.updateTableResponseEE.subscribe((response) => {
      if (!response.success) {
        this.handleErrorEvent(response);
        return;
      }
      if (response.type === TableEventType.AddRow) {
        this.addRow(response.user);
        return;
      }
      if (response.type === TableEventType.EditRow) {
        this.setUserIsEditable(
          this.getFormControls.at(response.rowIndex!),
          false
        );
        return;
      }
      if (response.type === TableEventType.DeleteRow) {
        this.deleteRow(response.rowIndex!);
        return;
      }
    });
  }

  private handleErrorEvent(event: UpdateTableResponse) {
    if (event.type === TableEventType.EditRow) {
      this.getFormControls
        .at(event.rowIndex!)
        .setValue(this.valuesBeforeEditing.get(event.rowIndex!));
    }
    alert('Error occurred: ' + event);
  }

  get getFormControls() {
    const control = this.usersTable.get('tableRows') as FormArray;
    return control;
  }
}
