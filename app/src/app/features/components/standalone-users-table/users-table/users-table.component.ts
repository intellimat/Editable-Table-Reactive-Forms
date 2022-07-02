import { Component, Input, OnChanges } from '@angular/core';
import { Department, EditableUser, User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnChanges {
  @Input() data: User[] | null = [];
  editableTableData = this.createEditableTableData();
  departments = Object.values(Department);
  constructor() {}

  ngOnChanges(): void {
    this.editableTableData = this.createEditableTableData();
  }

  private createEditableTableData(): EditableUser[] {
    if (this.data != null) {
      return this.data.map(
        (user) => Object.assign({ isEditable: false }, user) as EditableUser
      );
    }
    return [];
  }
}
