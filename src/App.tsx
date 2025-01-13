import { TaskList } from "./components/task-list";

export function App() {
  const taskItems = [
    { id: 1, text: "Learn HTML", isCompleted: true },
    { id: 2, text: "Learn CSS", isCompleted: true },
    { id: 3, text: "Learn JavaScript", isCompleted: true },
    { id: 4, text: "Learn React", isCompleted: false },
  ];

  return (
    <div>
      <h1>Task Management</h1>
      <TaskList taskItems={taskItems} />
    </div>
  );
}
