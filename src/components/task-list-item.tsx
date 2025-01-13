import { type TaskItem } from "../types/task";

type TaskItemsProps = TaskItem;

export function TaskListItem({ text, isCompleted }: TaskItemsProps) {
  if (isCompleted) {
    return (
      <li>
        <s>{text}</s>
      </li>
    );
  }

  return <li>{text}</li>;
}
