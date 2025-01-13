import { type TaskItem } from "../types/task";
import { TaskListItem } from "./task-list-item";

type TaskItemProps = {
  taskItems: TaskItem[];
};

export function TaskList({ taskItems }: TaskItemProps) {
  return (
    <ul>
      {taskItems.map((taskItem, index) => {
        return (
          <TaskListItem
            key={index}
            text={taskItem.text}
            isCompleted={taskItem.isCompleted}
          />
        );
      })}
    </ul>
  );
}
