import { Task } from "../types/task";

type TaskItemsProps = {
  taskItem: Task;
};

export function TaskListItem({ taskItem }: TaskItemsProps) {
  if (taskItem.isCompleted) {
    return (
      <div className="space-x-2">
        <span>☑</span>
        <span>
          <s>{taskItem.text}</s>
        </span>
      </div>
    );
  }

  return (
    <div className="space-x-2">
      <span>☐</span>
      <span>{taskItem.text};</span>;
    </div>
  );
}
