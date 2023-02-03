import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, map } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-department-container',
  templateUrl: './department-container.component.html',
  styleUrls: ['./department-container.component.scss'],
})
export class DepartmentContainerComponent implements OnInit, OnChanges {
  @Input() data!: User[];
  filteredData = this.data;
  search = new FormControl<string>('');

  constructor() {}

  ngOnInit(): void {
    this.updateView();
  }

  ngOnChanges(): void {
    const searchValue = this.search.getRawValue();
    if (searchValue !== null)
      this.filteredData = this.data.filter(
        (user) =>
          user.email.toLowerCase().includes(searchValue) ||
          user.name.toLowerCase().includes(searchValue)
      );
  }

  private updateView() {
    this.search.valueChanges
      .pipe(
        filter((searchWord) => searchWord !== null),
        map((searchWord) => searchWord as string),
        map((searchWord: string) => searchWord.toLowerCase())
      )
      .subscribe((searchWord) => {
        this.filteredData = this.data.filter(
          (user) =>
            user.email.toLowerCase().includes(searchWord) ||
            user.name.toLowerCase().includes(searchWord)
        );
      });
  }

  getTag(user: User): string {
    const msInAday = 1000 * 60 * 60 * 24;
    const currentDateInMS = Date.now();
    const createdDate = new Date(user.created!);
    const createdDateInMS = createdDate.getTime();
    const diffTime = currentDateInMS - createdDateInMS;
    if (diffTime <= msInAday) return 'experienced';
    if (diffTime <= 2 * msInAday) return 'advanced';
    if (diffTime <= 3 * msInAday) return 'senior';
    if (diffTime > 3 * msInAday) return 'expert';
    return '';
  }
}
