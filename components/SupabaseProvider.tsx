"use client";

import { Task, useTaskStore } from "@/store/useTasks";
import type { Database } from "@/types_db";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import type { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type SupabaseContext = {
  supabase: SupabaseClient<Database>;
};

const Context = createContext<SupabaseContext | undefined>(undefined);

export default function SupabaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [supabase] = useState(() => createPagesBrowserClient());
  const router = useRouter();

  const loadTasks = useTaskStore((state) => state.loadTasks);
  const addTask = useTaskStore((state) => state.addTask);
  const editTask = useTaskStore((state) => state.editTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  // fetching all tasks
  useEffect(() => {
    const fetchTasks = async () => {
      const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) {
        console.log(error.message);
        return;
      }

      if (data) {
        loadTasks(data);
      }
    };

    fetchTasks();
  }, [supabase]);

  // subscribe to changes on tasks table
  useEffect(() => {
    const tasks = supabase
      .channel("insert-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "tasks" },
        (payload) => {
          // update or insert tasks
          if(payload.eventType === "INSERT" || payload.eventType === "UPDATE"){
            const newTask = payload.new as Task;
            const dispatcher = payload.eventType === "INSERT" ? addTask : editTask;

            dispatcher(newTask)
          } else if (payload.eventType === "DELETE"){
            // delete tasks
            const taskToDelete = payload.old as Task;
            
            deleteTask(taskToDelete)
          }
        }
      )
      .subscribe();

    return () => {
      tasks.unsubscribe();
    };
  }, [supabase]);

  // subscribe to auth changes
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") router.refresh();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase]);

  return (
    <Context.Provider value={{ supabase }}>
      <>{children}</>
    </Context.Provider>
  );
}

export const useSupabase = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("useSupabase must be used inside SupabaseProvider");
  }

  return context;
};
