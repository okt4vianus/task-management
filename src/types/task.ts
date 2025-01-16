export type Task = {
  id: number;
  text: string;
  isCompleted: boolean;
};

export type TaskType = {
  id: number;
  desc: string;
  dueDate: Date;
  isCompleted: boolean;
};
