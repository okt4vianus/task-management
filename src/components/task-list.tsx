import { TaskType } from "../types/task";
import { TaskItem } from "./task-item";

type TaskListProps = {
  tasks: TaskType[];
  DeleteTask: (taskId: number) => void;
  ToogleTaskCompleted: (taskId: number) => void;
};

export function TaskList({
  tasks,
  DeleteTask,
  ToogleTaskCompleted,
}: TaskListProps) {
  return (
    <div className="rounded-lg bg-yellow-100 p-2 shadow-md">
      <div className="flex border-b border-gray-300 py-2 font-bold">
        <span className="text-xl">Full Stack Web</span>
      </div>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            DeleteTask={DeleteTask}
            ToogleTaskCompleted={ToogleTaskCompleted}
          />
        ))}
      </ul>
    </div>
  );
}
