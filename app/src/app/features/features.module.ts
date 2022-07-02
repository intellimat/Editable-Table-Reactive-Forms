import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersTableComponent } from './components/standalone-users-table/users-table/users-table.component';
import { UsersTableContainerComponent } from './components/standalone-users-table/users-table-container/users-table-container.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersTableComponent, UsersTableContainerComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [UsersTableContainerComponent],
})
export class FeaturesModule {}
