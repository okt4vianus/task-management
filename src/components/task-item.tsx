import { Trash2 } from "lucide-react";
import { TaskType } from "@/types/task";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router";

type TaskItemProps = {
  task: TaskType;
  DeleteTask: (taskId: number) => void;
  ToogleTaskCompleted: (taskId: number) => void;
};

export function TaskItem({
  task,
  DeleteTask,
  ToogleTaskCompleted,
}: TaskItemProps) {
  return (
    <li className="flex items-center justify-between border-b border-gray-300 py-2">
      <Checkbox
        id="isCompleted"
        name="isCompleted"
        defaultChecked={task.isCompleted}
        onClick={() => ToogleTaskCompleted(task.id)}
      />
      {/* <input
        className="mr-2"
        type="checkbox"
        id={`${task.id}`}
        defaultChecked={task.isCompleted}
        onClick={() => ToogleTaskCompleted(task.id)}
      /> */}

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
        {task.isCompleted ? "Done" : "Undone"}
      </span>
      <div className="inline-flex items-center gap-2">
        <Button asChild size="sm" variant="link">
          <Link to={`/tasks/${task.id}`}>View</Link>
        </Button>
        <Button
          size="sm"
          onClick={() => DeleteTask(task.id)}
          variant="destructive"
        >
          <Trash2 /> Delete
        </Button>
      </div>
    </li>
  );
}
