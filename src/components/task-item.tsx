import { TaskType } from "../types/task";

export function TaskItem({
  task,
  delTask,
}: {
  task: TaskType;
  delTask: (id: number) => void;
}) {
  return (
    <li className="flex items-center justify-between border-b border-gray-300 py-2">
      <input
        className="mr-2"
        type="checkbox"
        id={`${task.id}`}
        defaultChecked={task.isCompleted}
      />
      <label className="flex-1" htmlFor={`${task.id}`}>
        {task.description}
      </label>
      <span className="flex-1 text-left text-sm text-gray-500">
        {new Date(task.dueDate).toDateString()}
      </span>
      <span
        className={`flex-1 text-left text-sm font-semibold ${
          task.isCompleted ? "text-green-500" : "text-red-500"
        }`}
      >
        {task.isCompleted ? "Done" : "In progress"}
      </span>
      <span
        onClick={() => delTask(task.id)}
        className="cursor-pointer rounded bg-red-500 text-white"
      >
        ♲ Del
      </span>
    </li>
  );
}
