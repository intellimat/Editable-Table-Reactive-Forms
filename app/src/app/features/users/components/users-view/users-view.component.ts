import { Component, EventEmitter, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss'],
})
export class UsersViewComponent implements OnInit {
  view: 'column' | 'grid' = 'grid';
  data$ = this.userService.getUsers();
  eventEmitter = new EventEmitter();
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
}
