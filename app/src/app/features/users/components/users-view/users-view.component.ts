import { Component, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import {
  DialogData,
  DialogType,
} from 'src/app/shared/info-dialog/dialog.models';
import { TableEvent, TableEventType, UpdateTableResponse } from './events';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss'],
})
export class UsersViewComponent {
  view: 'column' | 'grid' = 'grid';
  data$ = this.userService.getUsers();
  updateTableResponseEE = new EventEmitter<UpdateTableResponse>();
  dialog = this.initializeDialog();
  constructor(private userService: UserService) {}

  private initializeDialog() {
    return {
      open: false,
      data: {
        user: {} as User,
        type: DialogType.Remove, // initial value, will be changed
      } as DialogData,
    };
  }

  private showDialog() {
    this.dialog.open = true;
  }

  private hideDialog() {
    this.dialog.open = false;
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

  private deleteUser(user: User, rowIndex: number) {
    this.userService.deleteUser(user.id).subscribe({
      next: () =>
        this.updateTableResponseEE.emit({
          user,
          type: TableEventType.DeleteRow,
          rowIndex,
          success: true,
        }),
      error: () =>
        this.updateTableResponseEE.emit({
          user,
          type: TableEventType.DeleteRow,
          rowIndex,
          success: false,
        }),
    });
  }

  // Handle event coming from the table view
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
      this.dialog.data.user = event.user;
      this.dialog.data.type = DialogType.Remove;
      this.dialog.data.rowIndex = event.rowIndex;
      this.showDialog();
      return;
    }
  }

  onAddRowClick() {
    this.dialog.data.type = DialogType.Save;
    this.showDialog();
  }

  // ----- On events from event emitters -----
  onRemovedRow(event: { user: User; rowIndex: number }) {
    this.deleteUser(event.user, event.rowIndex);
    this.dialog = this.initializeDialog();
    this.hideDialog();
  }

  onChangesSaved(user: User) {
    this.addUser(user);
    this.dialog = this.initializeDialog();
    this.hideDialog();
  }

  onHideDialog() {
    this.dialog = this.initializeDialog();
    this.hideDialog();
  }
}
