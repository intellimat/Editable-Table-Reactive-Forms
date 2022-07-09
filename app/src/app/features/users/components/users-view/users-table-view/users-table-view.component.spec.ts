import { Component, EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UpdateTableResponse } from '../events';
import { UsersTableViewComponent } from './users-table-view.component';

describe('UsersTableViewComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersTableViewComponent, TestHostComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should show form', () => {
    expect(testHostFixture.nativeElement.querySelector('form')).toBeTruthy();
  });

  @Component({
    selector: `host-component`,
    template: `<app-users-table-view
      [data]="data$ | async"
      [updateTableResponseEE]="updateTableResponseEE"
    ></app-users-table-view>`,
  })
  class TestHostComponent {
    data = of([] as User[]);
    updateTableResponseEE = new EventEmitter<UpdateTableResponse>();
  }
});
