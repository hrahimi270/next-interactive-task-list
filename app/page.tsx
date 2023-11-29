import { Fragment } from "react";
import PageTitle from "@/components/PageTitle";
import PageAddTask from "@/components/PageAddTask";
import PageTasksContainer from "@/components/PageTasksContainer";
import { getTasks } from "@/lib/supabase-server";

export default async function TasksPage() {
  const [tasks] = await Promise.all([getTasks()]);

  return (
    <Fragment>
      {/* page title */}
      <PageTitle title="Tasks" />

      {/* page tasks container */}
      <PageTasksContainer
        tasks={tasks?.data}
        emptyStateImage="/empty-tasks.svg"
        emptyStateText="Your tasks are empty!"
      />

      {/* add task */}
      <PageAddTask />
    </Fragment>
  );
}
