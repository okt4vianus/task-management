import { useState } from "react";

import { initialTasks } from "@/data/initialtask";
import { TaskList } from "@/components/task-list";
// import { Label } from "@radix-ui/react-label";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
// import { TaskItem } from "./components/task-item";
// import { Link, NavLink } from "react-router";

export function App() {
  const [taskItems, setTaskItems] = useState(initialTasks);

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

  function DeleteTaskItem(taskId: number) {
    // if (taskId === undefined) return;
    const updatedTaskItems = taskItems.filter((task) => task.id !== taskId);
    setTaskItems(updatedTaskItems);
  }

  function ToogleTaskCompleted(taskId: number) {
    console.log({ taskId });

    const updatedTaskItems = taskItems.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTaskItems(updatedTaskItems);
  }

  return (
    <div>
      <div className="flex justify-center p-5">
        <div className="w-full max-w-lg space-y-5">
          <header>
            <h1 className="text-center text-3xl font-bold text-blue-700 underline">
              Task Management
            </h1>
          </header>
          <div className="flex justify-between">
            <form onSubmit={addTaskItem} className="space-y-4">
              <div className="flex items-center space-x-3">
                <Label htmlFor="text" className="font-medium">
                  Description:
                </Label>
                <Input
                  id="text"
                  name="text"
                  type="text"
                  placeholder="Learn something"
                  required
                  className="flex-1"
                />
              </div>
              <div className="mt-3 flex items-center space-x-3">
                <Label htmlFor="date" className="font-medium">
                  Due Date:
                </Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  required
                  defaultValue={new Date().toISOString().split("T")[0]}
                  className="flex-1"
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="rounded bg-blue-700 text-white"
                >
                  Add Task
                </button>
                <button
                  type="button"
                  onClick={() =>
                    DeleteTaskItem(taskItems[taskItems.length - 1]?.id)
                  }
                  className="rounded bg-red-700 text-white"
                  disabled={taskItems.length === 0}
                >
                  Delete Last Task
                </button>
                <p className="bg-yellow-100 text-black">
                  Task: {taskItems.length} items
                </p>
              </div>
            </form>
          </div>

          <TaskList
            tasks={taskItems}
            DeleteTask={DeleteTaskItem}
            ToogleTaskCompleted={ToogleTaskCompleted}
          />
        </div>
      </div>
    </div>
  );
}
