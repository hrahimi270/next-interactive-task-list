import { Fragment } from "react";
import PageTitle from "@/components/PageTitle";
import PageAddTask from "@/components/PageAddTask";
import PageTasksContainer from "@/components/PageTasksContainer";
import { getAllTasks } from "@/lib/supabase-server";

export default async function TasksPage() {
  const [tasks] = await Promise.all([getAllTasks()]);

  return (
    <Fragment>
      {/* page title */}
      <PageTitle title="Important Tasks" />

      {/* page tasks container */}
      <PageTasksContainer
        serverTasks={tasks?.data}
        emptyStateImage="/empty-important.svg"
        emptyStateText="Your important tasks are empty!"
        isImportantPage
      />

      {/* add task as an important task */}
      <PageAddTask isImportant />
    </Fragment>
  );
}
