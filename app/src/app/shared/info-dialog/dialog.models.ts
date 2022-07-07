import { User } from 'src/app/models/user.model';

// export interface DialogData2 {
//   fields: Field[];
//   mainButton: {
//     text: string;
//     action: () => {};
//     type: 'warning' | 'confirm';
//   };
//   secondaryButton: {
//     text: string;
//     action: () => {};
//   };
// }

// export interface Field {
//   title: string;
//   editable: boolean;
//   type: 'text' | 'dropdown';
// }

export interface DialogData {
  user?: User;
  type: DialogType;
  rowIndex?: number;
}

export enum DialogType {
  Save,
  Remove,
}
