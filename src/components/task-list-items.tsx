import { type TaskItem } from "../types/task";

type TaskItemsProps = TaskItem;

export function TaskListItems({ text, isCompleted }: TaskItemsProps) {
  if (isCompleted) {
    return (
      <li>
        <s>{text}</s>
      </li>
    );
  }
  return <li>{text}</li>;
}
