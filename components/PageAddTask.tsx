"use client";

import classNames from "classnames";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useSupabase } from "./SupabaseProvider";

interface PageAddTaskProps {
  isImportant?: boolean;
  isDaily?: boolean;
}

export default function PageAddTask(props: PageAddTaskProps) {
  const { supabase } = useSupabase();
  const [value, setValue] = useState("");

  function handleKeydown(event: React.KeyboardEvent<HTMLInputElement>) {
    const { key } = event;

    if (key === "Enter") {
      handleAddTask();
    }
  }

  async function handleAddTask() {
    const { isImportant, isDaily } = props;

    const {
      data: { session },
    } = await supabase.auth.getSession();
    const userId = session?.user?.id;

    if (!userId) return;

    const { error } = await supabase.from("tasks").insert({
      title: value,
      is_important: isImportant,
      is_daily: isDaily,
      user_id: userId,
    });

    if (!error) {
      setValue("");
    }
  }

  const wrapperClassnames = classNames(
    "bg-gray-200 flex items-center w-full rounded-md mb-3 py-1 px-3"
  );

  const addButtonClassnames = classNames(
    "text-xl rounded-full p-3 focus:outline-none",
    "focus:bg-gray-300 hover:bg-gray-300",
    "text-gray-500 hover:text-gray-700 focus:text-gray-700"
  );

  const addInputClassnames = classNames(
    "bg-transparent flex-grow focus:outline-none px-3 py-2",
    "placeholder-gray-500 text-gray-700"
  );

  return (
    <div className={wrapperClassnames}>
      <button
        type="button"
        className={addButtonClassnames}
        onClick={handleAddTask}
      >
        <FiPlus />
      </button>

      <input
        type="text"
        placeholder="Write new task and press Enter"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => handleKeydown(e)}
        className={addInputClassnames}
        autoFocus
      />
    </div>
  );
}
