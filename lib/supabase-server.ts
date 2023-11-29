import { Database } from "@/types_db";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { cache } from "react";

export const createServerSupabaseClient = cache(() => {
  cookies().getAll();
  return createServerComponentClient<Database>({ cookies });
});

export async function getSession() {
  const supabase = createServerSupabaseClient();
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    return session;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function getTasks() {
  const supabase = createServerSupabaseClient();

  const { data, count, error } = await supabase
    .from("tasks")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.log(error.message);
  }

  return { data, count };
}

export async function getImportantTasks() {
  const supabase = createServerSupabaseClient();

  const { data, count, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("is_important", true)
    .order("created_at", { ascending: true });

  if (error) {
    console.log(error.message);
  }

  return { data, count };
}

export async function getDailyTasks() {
  const supabase = createServerSupabaseClient();

  const { data, count, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("is_daily", true)
    .order("created_at", { ascending: true });

  if (error) {
    console.log(error.message);
  }

  return { data, count };
}
