import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-table-container',
  templateUrl: './users-table-container.component.html',
  styleUrls: ['./users-table-container.component.scss'],
})
export class UsersTableContainerComponent {
  data$ = this.userService.getUsers();
  constructor(private userService: UserService) {}
}
