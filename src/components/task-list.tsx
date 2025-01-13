import { type TaskItem } from "../types/task";
import { TaskListItems } from "./task-list-items";

type TaskItemProps = {
  taskItems: TaskItem[];
};

export function TaskList({ taskItems }: TaskItemProps) {
  return (
    <ul>
      {taskItems.map((taskItem, index) => {
        return (
          <TaskListItems
            key={index}
            text={taskItem.text}
            isCompleted={taskItem.isCompleted}
          />
        );
      })}
    </ul>
  );
}
