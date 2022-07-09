import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-department-container',
  templateUrl: './department-container.component.html',
  styleUrls: ['./department-container.component.scss'],
})
export class DepartmentContainerComponent implements OnInit, OnChanges {
  @Input() data!: User[];
  @Input() title?: string;
  filteredData = this.data;
  search: FormControl = new FormControl<string>('');

  constructor() {}

  ngOnInit(): void {
    this.updateView();
  }

  ngOnChanges(): void {
    this.filteredData = this.data.filter((user) =>
      user.email.includes(this.search.getRawValue())
    );
  }

  updateView() {
    this.search.valueChanges.subscribe((searchWord) => {
      this.filteredData = this.data.filter((user) =>
        user.email.includes(searchWord)
      );
    });
  }
}
