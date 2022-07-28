import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [InfoDialogComponent, CardComponent, LoadingSpinnerComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InfoDialogComponent, CardComponent, LoadingSpinnerComponent],
})
export class SharedModule {}
