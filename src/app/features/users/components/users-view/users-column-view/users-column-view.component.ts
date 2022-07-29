import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Department, User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users-column-view',
  templateUrl: './users-column-view.component.html',
  styleUrls: ['./users-column-view.component.scss'],
})
export class UsersColumnViewComponent implements OnChanges {
  @Input() data: User[] | null = null;
  usersFromMarketing: User[] = [];
  usersFromDevelopment: User[] = [];

  constructor() {}

  ngOnChanges(): void {
    this.setUsersFromDevelopment();
    this.setUsersFromMarketing();
  }

  setUsersFromDevelopment() {
    if (!this.data) return;
    this.usersFromDevelopment = this.data.filter(
      (user) => user.department === Department.Development
    );
  }

  setUsersFromMarketing() {
    if (!this.data) return;
    this.usersFromMarketing = this.data.filter(
      (user) => user.department === Department.Marketing
    );
  }
}
