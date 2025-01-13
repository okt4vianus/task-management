import { type TaskItem } from "../types/task";
import { TaskListItem } from "./task-list-item";

type TaskItemProps = {
  taskItems: TaskItem[];
};

export function TaskList({ taskItems }: TaskItemProps) {
  return (
    <ul>
      {taskItems.map((taskItem) => {
        return <TaskListItem key={taskItem.id} taskItem={taskItem} />;
      })}
    </ul>
  );
}
