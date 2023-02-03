import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Department, User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users-card-view',
  templateUrl: './users-card-view.component.html',
  styleUrls: ['./users-card-view.component.scss'],
})
export class UsersCardViewComponent {
  @Input() data: User[] = [];

  constructor() {}
}
