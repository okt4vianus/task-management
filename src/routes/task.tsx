import { useParams } from "react-router";
import { getTaskItemById } from "@/modules/task";

export function TaskRoute() {
  const { id } = useParams();
  if (!id) return null;

  const task = getTaskItemById(Number(id));

  if (!task) {
    return <p>Task not found.</p>;
  }

  return (
    <div className="flex justify-center p-6">
      <div className="w-full max-w-lg transform rounded-3xl bg-white bg-opacity-70 p-8 shadow-2xl backdrop-blur-sm">
        <h1 className="mb-6 text-4xl font-bold text-gray-800">
          {task.description}
        </h1>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-semibold text-gray-800">
              Due Date:
            </span>
            <span className="text-lg text-gray-800">
              {new Date(task.dueDate).toDateString()}
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-xl font-semibold text-gray-800">Status:</span>
            <span
              className={`text-lg font-semibold ${task.isCompleted ? "text-green-500" : "text-red-500"}`}
            >
              {task.isCompleted ? "Done" : "Undone"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
