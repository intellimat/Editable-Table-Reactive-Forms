import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InfoDialogComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InfoDialogComponent],
})
export class SharedModule {}
