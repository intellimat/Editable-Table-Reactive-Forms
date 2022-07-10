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
  @Input() name?: string;
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

  private updateView() {
    this.search.valueChanges.subscribe((searchWord) => {
      this.filteredData = this.data.filter((user) =>
        user.email.includes(searchWord)
      );
    });
  }

  getTag(user: User): string {
    const msInAday = 1000 * 60 * 60 * 24;
    const currentDateInMS = Date.now();
    const d = new Date(user.created!);
    const createdTimeInMS = d.getTime();
    const diffTime = currentDateInMS - createdTimeInMS;
    if (diffTime <= msInAday) return 'experienced';
    if (diffTime > msInAday && diffTime <= 2 * msInAday) return 'advanced';
    if (diffTime > 2 * msInAday && diffTime <= 3 * msInAday) return 'senior';
    if (diffTime > 3 * msInAday) return 'expert';
    return '';
  }
}
