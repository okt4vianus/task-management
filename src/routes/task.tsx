import { useParams } from "react-router";
import { initialTasks } from "@/data/initialtask"; // Import initial tasks data

export function TaskRoute() {
  const { id } = useParams();
  if (!id) return null;

  // Convert id to a number and find the task by id
  const taskId = parseInt(id, 10);
  const task = initialTasks.find((task) => task.id === taskId);

  if (!task) {
    return <p>Task not found.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="mb-4 text-3xl font-bold text-gray-800">Task Details</h1>
      <p className="mb-2 text-lg text-gray-700">
        <strong>Task ID:</strong> {task.id}
      </p>
      <p className="mb-2 text-lg text-gray-700">
        <strong>Description:</strong> {task.description}
      </p>
      <p className="mb-2 text-lg text-gray-700">
        <strong>Due Date:</strong> {new Date(task.dueDate).toDateString()}
      </p>
      <p className="mb-6 text-lg text-gray-700">
        <strong>Status:</strong>
        <span className={task.isCompleted ? "text-green-500" : "text-red-500"}>
          {task.isCompleted ? "Done" : "Undone"}
        </span>
      </p>
    </div>
  );
}
