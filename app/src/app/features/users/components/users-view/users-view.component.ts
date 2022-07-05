import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { EventType, TableEvent, OutcomeEvent } from './events';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss'],
})
export class UsersViewComponent implements OnInit {
  view: 'column' | 'grid' = 'grid';
  data$ = this.userService.getUsers();
  outcomeEventEE = new EventEmitter<OutcomeEvent>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  handleTableEvent(event: TableEvent) {
    if (event.type === EventType.EditRow) {
      this.userService.patchUser(event.user).subscribe({
        next: () =>
          this.outcomeEventEE.emit({
            user: event.user,
            type: event.type,
            success: true,
          }),
        error: () =>
          this.outcomeEventEE.emit({
            user: event.user,
            type: event.type,
            success: false,
          }),
      });
      return;
    }
    if (event.type === EventType.DeleteRow) {
      this.userService.deleteUser(event.user.id).subscribe({
        next: () =>
          this.outcomeEventEE.emit({
            user: event.user,
            type: event.type,
            success: true,
          }),
        error: () =>
          this.outcomeEventEE.emit({
            user: event.user,
            type: event.type,
            success: false,
          }),
      });
      return;
    }
  }

  private addUser(user: User) {
    this.userService.postUser(user).subscribe({
      next: () => {
        this.outcomeEventEE.emit({
          user,
          type: EventType.AddRow,
          success: true,
        });
      },
      error: () => {
        this.outcomeEventEE.emit({
          user,
          type: EventType.AddRow,
          success: false,
        });
      },
    });
  }

  onAddRowClick() {
    console.log('Add row clicked');
    // open popup
  }
}
