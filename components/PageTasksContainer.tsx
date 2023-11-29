import { Database } from "@/types_db";
import PageEmptyTask from "./PageEmptyTask";
import Task from "./Task";

interface PageTasksContainerProps {
  tasks: Database["public"]["Tables"]["tasks"]["Row"][] | null;
  emptyStateImage: string;
  emptyStateText: string;
}

export default function PageTasksContainer(props: PageTasksContainerProps) {
  return (
    <div className="flex-grow h-full mb-10 overflow-y-auto">
      {props.tasks?.length ? (
        props.tasks.map((task) => {
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
