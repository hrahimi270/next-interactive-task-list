import { create } from "zustand";
import { Database } from "@/types_db";

export type Task = Database["public"]["Tables"]["tasks"]["Row"];

interface TasksState {
  tasks: Task[];
  loadTasks: (tasks: Task[]) => void;
  addTask: (task: Task) => void;
  editTask: (task: Task) => void;
  deleteTask: (task: Task) => void;
}

export const useTaskStore = create<TasksState>()((set) => ({
  tasks: [],

  loadTasks: (tasks) => set(() => ({ tasks })),

  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),

  editTask: (task) =>
    set((state) => ({
      tasks: state.tasks.map((t) => (t.id === task.id ? task : t)),
    })),

  deleteTask: (task) =>
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== task.id),
    })),
}));
