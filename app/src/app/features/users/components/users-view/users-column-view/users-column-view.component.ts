import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users-column-view',
  templateUrl: './users-column-view.component.html',
  styleUrls: ['./users-column-view.component.scss'],
})
export class UsersColumnViewComponent implements OnInit {
  @Input() data: User[] | null = null;
  @Input() eventEmitter: EventEmitter<any> | undefined;
  constructor() {}

  ngOnInit(): void {}
}
