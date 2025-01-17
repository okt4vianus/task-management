import { TaskType } from "../types/task";

export function TaskItemCmp({ task }: { task: TaskType }) {
  return (
    <li className="flex items-center justify-between border-b border-gray-300 py-2">
      <input
        className="mr-2"
        type="checkbox"
        id={`${task.id}`}
        checked={task.isCompleted}
      />
      <label className="flex-1" htmlFor={`${task.id}`}>
        {task.desc}
      </label>
      <span className="flex-1 text-left text-sm text-gray-500">
        {task.dueDate.toDateString()}
      </span>
      <span
        className={`flex-1 text-left text-sm font-semibold ${
          task.isCompleted ? "text-green-500" : "text-red-500"
        }`}
      >
        {task.isCompleted ? "Done" : "In progress"}
      </span>
    </li>
  );
}
