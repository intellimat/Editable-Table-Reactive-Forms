import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [InfoDialogComponent, CardComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InfoDialogComponent, CardComponent],
})
export class SharedModule {}
