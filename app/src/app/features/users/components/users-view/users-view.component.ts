import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { TableEvent, TableEventType, UpdateTableResponse } from './events';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss'],
})
export class UsersViewComponent implements OnInit {
  view: 'column' | 'grid' = 'grid';
  data$ = this.userService.getUsers();
  updateTableResponseEE = new EventEmitter<UpdateTableResponse>();
  dialogOpen = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  handleTableEvent(event: TableEvent) {
    if (event.type === TableEventType.EditRow) {
      this.userService.patchUser(event.user).subscribe({
        next: () =>
          this.updateTableResponseEE.emit({
            user: event.user,
            type: event.type,
            rowIndex: event.rowIndex,
            success: true,
          }),
        error: () =>
          this.updateTableResponseEE.emit({
            user: event.user,
            type: event.type,
            rowIndex: event.rowIndex,
            success: false,
          }),
      });
      return;
    }
    if (event.type === TableEventType.DeleteRow) {
      this.userService.deleteUser(event.user.id!).subscribe({
        next: () =>
          this.updateTableResponseEE.emit({
            user: event.user,
            type: event.type,
            rowIndex: event.rowIndex,
            success: true,
          }),
        error: () =>
          this.updateTableResponseEE.emit({
            user: event.user,
            type: event.type,
            rowIndex: event.rowIndex,
            success: false,
          }),
      });
      return;
    }
  }

  private addUser(user: User) {
    this.userService.postUser(user).subscribe({
      next: () => {
        this.updateTableResponseEE.emit({
          user,
          type: TableEventType.AddRow,
          success: true,
        });
      },
      error: () => {
        this.updateTableResponseEE.emit({
          user,
          type: TableEventType.AddRow,
          success: false,
        });
      },
    });
  }

  onAddRowClick() {
    this.dialogOpen = true;
  }

  showDialog(dialogOpen: boolean) {
    this.dialogOpen = dialogOpen;
  }
}
