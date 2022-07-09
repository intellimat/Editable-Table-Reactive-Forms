import { User } from 'src/app/models/user.model';

export interface TableEvent {
  user: User;
  type: TableEventType;
  rowIndex?: number;
}

export enum TableEventType {
  AddRow,
  EditRow,
  DeleteRow,
}

export interface UpdateTableResponse extends TableEvent {
  success: boolean;
}

// export interface UpdateTableResponse {
//   event: AddRowEvent | DeleteRowEvent | EditRowEvent;
//   success: boolean;
// }

// export class AddRowEvent implements TableEvent {
//   user: User | undefined;
// }

// export interface DeleteRowEvent extends TableEvent {
//   userId: number;
//   rowIndex: number;
// }

// export interface EditRowEvent extends TableEvent {
//   user: Partial<User>;
//   rowIndex: number;
// }
