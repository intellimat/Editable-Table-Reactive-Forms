export interface User {
  id: number;
  name: string;
  email: string;
  department: Department;
  created?: string; // format: '2022-07-10T22:56:28.951Z'
}

export enum Department {
  Marketing = 'Marketing',
  Development = 'Development',
}

export interface EditableUser extends User {
  isEditable: boolean;
}
