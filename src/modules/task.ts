import { initialTasks } from "@/data/initialtask";
import { TaskType } from "@/types/task";

export function getTaskItemsStorage() {
  const storedTasks = localStorage.getItem("tasks");

  //   const parsedTasks = storedTasks ? JSON.parse(storedTasks) : initialTasks;
  //   const transformedTasks = parsedTasks.map((task: TaskType) => {
  //     return {
  //       ...task,
  //       date: new Date(task.dueDate),
  //     };
  //   });
  //   return transformedTasks;
  return storedTasks ? JSON.parse(storedTasks) : initialTasks;
}

export function setTaskItemsStorage(tasks: TaskType[]) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function getTaskItemById(id: number) {
  const tasks = getTaskItemsStorage();
  return tasks.find((task: TaskType) => task.id === id);
}
