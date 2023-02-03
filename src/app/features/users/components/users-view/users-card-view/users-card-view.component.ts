import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Department, User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users-card-view',
  templateUrl: './users-card-view.component.html',
  styleUrls: ['./users-card-view.component.scss'],
})
export class UsersCardViewComponent implements OnChanges {
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
