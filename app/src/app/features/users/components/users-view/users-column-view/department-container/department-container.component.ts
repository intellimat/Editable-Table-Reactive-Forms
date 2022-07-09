import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-department-container',
  templateUrl: './department-container.component.html',
  styleUrls: ['./department-container.component.scss'],
})
export class DepartmentContainerComponent implements OnInit, OnChanges {
  @Input() data!: User[];
  @Input() title?: string;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.data);
  }

  ngOnInit(): void {
    console.log(this.data);
  }
}
