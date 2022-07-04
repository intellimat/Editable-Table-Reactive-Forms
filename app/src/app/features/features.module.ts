import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from './users/users.module';
import { UsersViewComponent } from './users/components/users-view/users-view.component';

@NgModule({
  imports: [CommonModule, UsersModule],
  exports: [UsersViewComponent],
})
export class FeaturesModule {}
