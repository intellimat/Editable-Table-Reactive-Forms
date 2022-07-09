export interface User {
  id: number;
  name: string;
  email: string;
  department: Department;
  created?: string; // "2021-11-05T00:00:00"
}

export enum Department {
  Marketing = 'Marketing',
  Development = 'Development',
}

export interface EditableUser extends User {
  isEditable: boolean;
}
