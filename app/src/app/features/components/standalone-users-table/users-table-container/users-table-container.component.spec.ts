import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersTableContainerComponent } from './users-table-container.component';

describe('UsersTableContainerComponent', () => {
  let component: UsersTableContainerComponent;
  let fixture: ComponentFixture<UsersTableContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersTableContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersTableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
