import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss'],
})
export class UsersViewComponent implements OnInit {
  view: 'column' | 'grid' = 'grid';
  data$ = this.userService.getUsers();
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
}
