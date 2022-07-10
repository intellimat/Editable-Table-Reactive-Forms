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
