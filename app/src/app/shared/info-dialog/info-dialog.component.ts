import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss'],
})
export class InfoDialogComponent implements OnInit {
  @Output() showDialogEE = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  onCloseButtonClick() {
    this.showDialogEE.emit(false);
  }
}
