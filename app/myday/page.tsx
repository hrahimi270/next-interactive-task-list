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
      <PageTitle title="Daily Tasks" />

      {/* page tasks container */}
      <PageTasksContainer
        serverTasks={tasks?.data}
        emptyStateImage="/empty-myday.svg"
        emptyStateText="Your daily tasks are empty!"
        isMydayPage
      />

      {/* add task as an daily task */}
      <PageAddTask isDaily />
    </Fragment>
  );
}
