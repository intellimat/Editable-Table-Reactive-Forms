// import { Component } from '@angular/core';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { DialogData, DialogType } from './dialog.models';

// import { InfoDialogComponent } from './info-dialog.component';

// describe('InfoDialogComponent', () => {
//   let testHostComponent: TestHostComponent;
//   let testHostFixture: ComponentFixture<TestHostComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [InfoDialogComponent],
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     testHostFixture = TestBed.createComponent(TestHostComponent);
//     testHostComponent = testHostFixture.componentInstance;
//     testHostFixture.detectChanges();
//   });

//   it('should show dialog', () => {
//     expect(testHostFixture.nativeElement.querySelector('div')).toBeTruthy();
//   });

//   @Component({
//     selector: `host-component`,
//     template: `<app-info-dialog [data]="data"></app-info-dialog>`,
//   })
//   class TestHostComponent {
//     data: DialogData = {
//       type: DialogType.Save,
//     };
//   }
// });
