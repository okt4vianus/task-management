import { TaskList } from "./components/task-list";

export function App() {
  const taskItems = [
    { text: "Learn HTML", isCompleted: true },
    { text: "Learn CSS", isCompleted: true },
    { text: "Learn JavaScript", isCompleted: true },
    { text: "Learn React", isCompleted: false },
  ];

  return (
    <div>
      <h1>Task Management</h1>
      <TaskList taskItems={taskItems} />
    </div>
  );
}
