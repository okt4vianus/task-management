import { TaskList } from "./components/task-list.tsx";

export function App() {
  const taskItems = [
    { text: "Learn HTML", isCompleted: true },
    { text: "Learn CSS", isCompleted: true },
    { text: "Learn JavaScript", isCompleted: true },
    { text: "Learn Reach", isCompleted: false },
  ];

  return (
    <div>
      <h1>Task Management</h1>
      <TaskList taskItems={taskItems} />
    </div>
  );
}
