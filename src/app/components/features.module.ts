import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersViewComponent } from './users-view/users-view.component';
import { UsersCardViewComponent } from './users-view/users-card-view/users-card-view.component';
import { UsersTableViewComponent } from './users-view/users-table-view/users-table-view.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  declarations: [
    UsersViewComponent,
    UsersCardViewComponent,
    UsersTableViewComponent,
  ],
  exports: [UsersViewComponent],
})
export class FeaturesModule {}
