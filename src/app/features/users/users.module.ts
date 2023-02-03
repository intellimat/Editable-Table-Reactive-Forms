import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersViewComponent } from './components/users-view/users-view.component';
import { UsersCardViewComponent } from './components/users-view/users-card-view/users-card-view.component';
import { UsersTableViewComponent } from './components/users-view/users-table-view/users-table-view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DepartmentContainerComponent } from './components/users-view/users-card-view/department-container/department-container.component';

@NgModule({
  declarations: [
    UsersTableViewComponent,
    UsersViewComponent,
    UsersCardViewComponent,
    DepartmentContainerComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, SharedModule],
  exports: [UsersViewComponent],
})
export class UsersModule {}
