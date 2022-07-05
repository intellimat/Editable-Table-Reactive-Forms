import { User } from 'src/app/models/user.model';

export interface TableEvent {
  user: User;
  type: EventType;
}

export interface OutcomeEvent {
  user: User;
  type: EventType;
  success: boolean;
}

export enum EventType {
  AddRow,
  DeleteRow,
  EditRow,
}
