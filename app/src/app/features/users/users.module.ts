import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersViewComponent } from './components/users-view/users-view.component';
import { UsersColumnViewComponent } from './components/users-view/users-column-view/users-column-view.component';
import { UsersTableViewComponent } from './components/users-view/users-table-view/users-table-view.component';

@NgModule({
  declarations: [
    UsersTableViewComponent,
    UsersViewComponent,
    UsersColumnViewComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  exports: [UsersViewComponent],
})
export class UsersModule {}
