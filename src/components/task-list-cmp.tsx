import { TaskType } from "../types/task";
import { TaskItemCmp } from "./task-item-cmp";

type TaskListCmpProps = {
  tasks: TaskType[];
};

export function TaskListCmp({ tasks }: TaskListCmpProps) {
  return (
    <div className="rounded-lg bg-yellow-100 p-2 shadow-md">
      <div className="flex border-b border-gray-300 py-2 font-bold">
        <span className="text-xl">Full Stack Web</span>
      </div>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <TaskItemCmp key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
