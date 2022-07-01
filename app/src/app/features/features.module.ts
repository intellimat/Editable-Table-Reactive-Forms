import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersTableComponent } from './components/standalone-users-table/users-table/users-table.component';
import { UsersTableContainerComponent } from './components/standalone-users-table/users-table-container/users-table-container.component';

@NgModule({
  declarations: [UsersTableComponent, UsersTableContainerComponent],
  imports: [CommonModule],
  exports: [UsersTableContainerComponent],
})
export class FeaturesModule {}
