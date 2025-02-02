import { useEffect, useState } from "react";
import { TaskList } from "@/components/task-list";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { getTaskItemsStorage, setTaskItemsStorage } from "@/modules/task";
import { TaskType } from "./types/task";

export function App() {
  const [taskItems, setTaskItems] = useState(getTaskItemsStorage());

  useEffect(() => {
    setTaskItemsStorage(taskItems);
  }, [taskItems]);

  function addTaskItem(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newTaskItem = {
      id: taskItems.length > 0 ? taskItems[taskItems.length - 1].id + 1 : 1,
      description: String(formData.get("text")),
      dueDate: new Date(String(formData.get("date"))),
      isCompleted: false,
    };

    const updatedTaskItems = [...taskItems, newTaskItem];

    setTaskItems(updatedTaskItems);

    event.currentTarget.reset();
  }

  function deleteTaskItemItem(taskId: number) {
    const updatedTaskItems = taskItems.filter(
      (task: TaskType) => task.id !== taskId,
    );
    setTaskItems(updatedTaskItems);
  }

  function toggleTaskCompleted(taskId: number) {
    const updatedTaskItems = taskItems.map((task: TaskType) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTaskItems(updatedTaskItems);
  }

  return (
    <div className="flex justify-center p-6">
      <div className="w-full max-w-3xl space-y-6 rounded-2xl bg-white bg-opacity-70 p-8 shadow-lg backdrop-blur-sm">
        {/* Increased max-width and padding */}
        <header>
          <h1 className="text-center text-4xl font-bold text-blue-700 underline">
            Task Management
          </h1>
        </header>
        <form onSubmit={addTaskItem} className="space-y-6">
          <div className="flex items-center space-x-3">
            <Label htmlFor="text" className="text-lg font-medium">
              Description:
            </Label>
            <Input
              id="text"
              name="text"
              type="text"
              placeholder="Learn something"
              required
              className="flex-1 rounded-md border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-600" // Increased padding
            />
          </div>
          <div className="flex items-center space-x-3">
            <Label htmlFor="date" className="text-lg font-medium">
              Due Date:
            </Label>
            <Input
              id="date"
              name="date"
              type="date"
              required
              defaultValue={new Date().toISOString().split("T")[0]}
              className="flex-1 rounded-md border-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-600" // Increased padding
            />
          </div>
          <div className="flex justify-between gap-3">
            <button
              type="submit"
              className="w-1/2 rounded-md bg-blue-700 p-3 text-white transition-all hover:bg-blue-800" // Increased padding
            >
              Add Task
            </button>
            <button
              type="button"
              onClick={() =>
                deleteTaskItemItem(taskItems[taskItems.length - 1]?.id)
              }
              className="w-1/2 rounded-md bg-red-700 p-3 text-white transition-all hover:bg-red-800" // Increased padding
              disabled={taskItems.length === 0}
            >
              Delete Last Task
            </button>
          </div>
          <p className="text-center text-lg text-gray-700">
            Task: {taskItems.length} items
          </p>
        </form>
        <TaskList
          tasksItems={taskItems}
          deleteTaskItem={deleteTaskItemItem}
          toggleTaskCompleted={toggleTaskCompleted}
        />
      </div>
    </div>
  );
}
