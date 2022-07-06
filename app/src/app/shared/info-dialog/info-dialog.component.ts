import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { DialogData, DialogType } from './dialog.models';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss'],
})
export class InfoDialogComponent {
  @Input() data!: DialogData;
  @Output() hideDialogEE = new EventEmitter();
  @Output() changesSavedEE = new EventEmitter<User>();
  @Output() removedRowEE = new EventEmitter();
  DialogTypeSave = DialogType.Save;
  DialogTypeRemove = DialogType.Remove;

  constructor() {}

  onCancelButtonClick() {
    this.hideDialogEE.emit();
  }

  onConfirmButtonClick() {
    if (this.data.type === DialogType.Save) {
      this.changesSavedEE.emit();
    } else if (this.data.type === DialogType.Remove) {
      this.removedRowEE.emit();
    }
  }
}
