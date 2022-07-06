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

  saveUserDetails() {
    console.log(this.usersTable.value);
  }

  onConfirmEdit(group: AbstractControl<any, any>, rowIndex: number) {
    const user = group.value;
    const event: TableEvent = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        department: user.department,
      },
      type: TableEventType.EditRow,
      rowIndex,
    };
    this.tableEventEE.emit(event);
  }

  onDeleteClick(group: AbstractControl<any, any>, rowIndex: number) {
    const user = group.value;
    const event: TableEvent = {
      user: { id: user.id },
      type: TableEventType.DeleteRow,
      rowIndex,
    };
    this.tableEventEE.emit(event);
  }

  private handleOutcomeEvents() {
    this.updateTableResponseEE.subscribe((response) => {
      if (!response.success) {
        this.handleErrorEvent(response);
        return;
      }
      // if (event.type === EventType.AddRow) {
      //   console.log('add user to table');
      //   // add row
      //   return;
      // }
      // if (event.type === EventType.EditRow) {
      //   console.log('edit row');
      //   // edit row
      //   return;
      // }
      // if (event.type === EventType.DeleteRow) {
      //   this.deleteRow(event.rowIndex!);
      //   return;
      // }
    });
  }

  private handleErrorEvent(event: UpdateTableResponse) {
    alert('Error occurred: ' + event);
  }

  get getFormControls() {
    const control = this.usersTable.get('tableRows') as FormArray;
    return control;
  }
}
