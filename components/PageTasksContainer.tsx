"use client";

import { Database } from "@/types_db";
import PageEmptyTask from "./PageEmptyTask";
import Task from "./Task";
import { useTaskStore } from "@/store/useTasks";

type Task = Database["public"]["Tables"]["tasks"]["Row"];
interface PageTasksContainerProps {
  serverTasks: Task[] | null;
  emptyStateImage: string;
  emptyStateText: string;
  isImportantPage?: boolean;
  isMydayPage?: boolean;
}

export default function PageTasksContainer(props: PageTasksContainerProps) {
  const tasks = useTaskStore((state) => state.tasks);

  const filterTasksFn = (task: Task) => {
    if (props.isImportantPage) {
      return task.is_important;
    }
    if (props.isMydayPage) {
      return task.is_daily;
    }
    return true;
  };

  return (
    <div className="flex-grow h-full mb-10 overflow-y-auto">
      {tasks.length || props.serverTasks?.length ? (
        // if server-side-fetched tasks are not empty, map them
        // until the store tasks are fetched on client side
        (tasks || props.serverTasks).filter(filterTasksFn).map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              task={task.title}
              done={task.is_done}
              important={task.is_important}
              myDay={task.is_daily}
            />
          );
        })
      ) : (
        <PageEmptyTask
          image={props.emptyStateImage}
          text={props.emptyStateText}
        />
      )}
    </div>
  );
}
