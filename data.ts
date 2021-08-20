export interface Todo {
  id: number;
  label: string;
  checked: boolean;
}

export const Todos: Todo[] = [
  {
    id: 1,
    label: 'Mandi',
    checked: false,
  },
  {
    id: 2,
    label: 'Makan',
    checked: true,
  },
];
