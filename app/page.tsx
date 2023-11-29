import { Fragment } from "react";
import PageTitle from "@/components/PageTitle";
import PageAddTask from "@/components/PageAddTask";
import PageTasksContainer from "@/components/PageTasksContainer";

export default async function TasksPage() {
  return (
    <Fragment>
      {/* page title */}
      <PageTitle title="Tasks" inCustomList />

      {/* page tasks container */}
      <PageTasksContainer
        emptyStateImage="/empty-tasks.svg"
        emptyStateText="Your tasks are empty!"
      />

      {/* add task */}
      <PageAddTask />
    </Fragment>
  );
}
