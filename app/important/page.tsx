import { Fragment } from "react";
import PageTitle from "@/components/PageTitle";
import PageAddTask from "@/components/PageAddTask";
import PageTasksContainer from "@/components/PageTasksContainer";
import { getImportantTasks } from "@/lib/supabase-server";

export default async function TasksPage() {
  const [tasks] = await Promise.all([getImportantTasks()]);

  return (
    <Fragment>
      {/* page title */}
      <PageTitle title="Important Tasks" />

      {/* page tasks container */}
      <PageTasksContainer
        tasks={tasks?.data}
        emptyStateImage="/empty-important.svg"
        emptyStateText="Your important tasks are empty!"
      />

      {/* add task as an important task */}
      <PageAddTask isImportant />
    </Fragment>
  );
}
