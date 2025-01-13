import { TaskItem } from "../types/task";

type TaskItemsProps = {
  taskItem: TaskItem;
};

export function TaskListItem({ taskItem }: TaskItemsProps) {
  if (taskItem.isCompleted) {
    return (
      <li>
        <s>{taskItem.text}</s>
      </li>
    );
  }

  return <li>{taskItem.text}</li>;
}
