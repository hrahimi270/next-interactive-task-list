import { Fragment } from "react";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import PageTitle from "@/components/PageTitle";
import PageAddTask from "@/components/PageAddTask";
import PageTasksContainer from "@/components/PageTasksContainer";

export default async function Index() {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

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
