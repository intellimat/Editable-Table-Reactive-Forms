import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersColumnViewComponent } from './users-column-view.component';

describe('UsersColumnViewComponent', () => {
  let component: UsersColumnViewComponent;
  let fixture: ComponentFixture<UsersColumnViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersColumnViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersColumnViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
