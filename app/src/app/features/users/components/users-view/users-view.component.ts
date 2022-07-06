import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { DialogType } from 'src/app/shared/info-dialog/dialog.models';
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
  dialog = {
    open: false,
    data: {
      type: DialogType.Remove, // initial value, will be changed
    },
  };

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
      this.dialog.data.type = DialogType.Remove;
      this.showDialog();
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
    this.dialog.data.type = DialogType.Save;
    this.dialog.open = true;
  }

  onRemovedRow() {
    // if (this.dialog.data === undefined) return;
    // this.userService.deleteUser(this.dialog.data.user.id!).subscribe({
    //   next: () =>
    //     this.updateTableResponseEE.emit({
    //       user: this.dialog.data!.user,
    //       type: this.dialog.data!.type,
    //       rowIndex: this.dialog.data!.rowIndex,
    //       success: true,
    //     }),
    //   error: () =>
    //     this.updateTableResponseEE.emit({
    //       user: this.dialog.data!.user,
    //       type: this.dialog.data!.type,
    //       rowIndex: this.dialog.data!.rowIndex,
    //       success: false,
    //     }),
    // });
  }

  onChangesSaved(user: User) {
    this.addUser(user);
  }

  onHideDialog() {
    this.dialog.open = false;
  }

  private showDialog() {
    this.dialog.open = true;
  }
}
