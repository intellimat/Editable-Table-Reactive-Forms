import { Component, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department, User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnChanges {
  @Input() data!: User[] | null;
  departments = Object.values(Department);
  usersTable = this.formBuilder.group({
    tableRows: this.formBuilder.array([]),
  });
  tableRows = this.usersTable.get('tableRows') as FormArray;

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges() {
    this.usersTable = this.formBuilder.group({
      tableRows: this.formBuilder.array([]),
    });
    this.data?.forEach((user) => {
      this.addRow(user);
    });
  }

  private createFormGroup(user: User): FormGroup {
    return this.formBuilder.group({
      name: [user.name, Validators.required],
      email: [user.email, [Validators.email, Validators.required]],
      department: [user.department, [Validators.required]],
      isEditable: [true],
    });
  }

  addRow(user: User) {
    const tableRows = this.usersTable.get('tableRows') as FormArray;
    const newUser = this.createFormGroup(user);
    tableRows.push(newUser);
  }

  deleteRow(index: number) {
    const tableRows = this.usersTable.get('tableRows') as FormArray;
    tableRows.removeAt(index);
  }

  private setIsEditable(group: FormGroup, value: boolean) {
    group.get('isEditable')!.setValue(value);
  }

  saveUserDetails() {
    console.log(this.usersTable.value);
  }

  get getFormControls() {
    const control = this.usersTable.get('tableRows') as FormArray;
    return control;
  }
}
