import { type Task } from "../types/task";
import { TaskListItem } from "./task-list-item";

type TaskItemProps = {
  taskItems: Task[];
};

export function TaskList({ taskItems }: TaskItemProps) {
  return (
    <ul className="space-y-1">
      {taskItems.map((taskItem) => {
        return <TaskListItem key={taskItem.id} taskItem={taskItem} />;
      })}
    </ul>
  );
}
