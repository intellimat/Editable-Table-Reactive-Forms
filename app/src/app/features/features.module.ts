import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersTableComponent } from './components/users-table/users-table.component';

@NgModule({
  declarations: [UsersTableComponent],
  imports: [CommonModule],
  exports: [UsersTableComponent],
})
export class FeaturesModule {}
