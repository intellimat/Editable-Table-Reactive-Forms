import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersTableComponent } from './components/standalone-users-table/users-table/users-table.component';
import { UsersTableContainerComponent } from './components/standalone-users-table/users-table-container/users-table-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UsersTableComponent, UsersTableContainerComponent],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  exports: [UsersTableContainerComponent],
})
export class FeaturesModule {}
