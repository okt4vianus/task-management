// import { TaskList } from "./components/task-list";
// import { Task } from "./types/task";
import { AddButton } from "./components/button";
import { TaskListCmp } from "./components/task-list-cmp";

export function App() {
  const tasks = [
    {
      id: 1,
      desc: "Learn HTML",
      dueDate: new Date("01 November 2024"),
      isCompleted: true,
    },
    {
      id: 2,
      desc: "Learn CSS",
      dueDate: new Date("01 December 2024"),
      isCompleted: true,
    },
    {
      id: 3,
      desc: "Learn JavaScript",
      dueDate: new Date("01 Januari 2025"),
      isCompleted: true,
    },
    {
      id: 4,
      desc: "Learn React",
      dueDate: new Date("1 Feb 2025"),
      isCompleted: false,
    },
  ];

  return (
    <div>
      <div className="flex justify-center p-5">
        <div className="w-full max-w-lg space-y-5">
          <header>
            <h1 className="text-center text-3xl font-bold text-blue-700 underline">
              Task Management
            </h1>
          </header>
          <TaskListCmp tasks={tasks} />
        </div>
      </div>
      <div className="flex justify-center text-xl">
        <AddButton />
      </div>
    </div>
  );
}
