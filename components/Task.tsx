"use client";

import { FiStar, FiSun, FiTrash } from "react-icons/fi";
import Checkbox from "./Checkbox";
import classNames from "classnames";
import { useSupabase } from "./SupabaseProvider";
import { useState } from "react";

interface TaskProps {
  id: number;
  task: string;
  done: boolean;
  important?: boolean | null
  myDay?: boolean | null
}

export default function Task(props: TaskProps) {
  const { supabase } = useSupabase();
  const [isDone, setIsDone] = useState(props.done)
  const [isImportant, setIsImportant] = useState(props.important)
  const [isDaily, setIsDaily] = useState(props.myDay)

  async function handleDoneTask(){
    // optimistically update the task
    setIsDone(!isDone)

    const { error } = await supabase
      .from("tasks")
      .update({ is_done: !isDone })
      .eq("id", props.id)
      .single();

    if (error) {
      console.log(error);

      // revert the optimistically change if the request fails
      setIsDone(!isDone)
    }
  }

  async function handleChangeImportantState(){
    // optimistically update the task
    setIsImportant(!isImportant)

    const { error } = await supabase
      .from("tasks")
      .update({ is_important: !isImportant })
      .eq("id", props.id)
      .single();

    if (error) {
      console.log(error);

      // revert the optimistically change if the request fails
      setIsImportant(!isImportant)
    }
  }

  async function handleChangeDailyState(){
    // optimistically update the task
    setIsDaily(!isDaily)

    const { error } = await supabase
      .from("tasks")
      .update({ is_daily: !isDaily })
      .eq("id", props.id)
      .single();

    if (error) {
      console.log(error);

      // revert the optimistically change if the request fails
      setIsDaily(!isDaily)
    }
  }
  
  async function handleDelete(){
    const { error } = await supabase
      .from("tasks")
      .delete()
      .eq("id", props.id)
      .single();

    if (error) {
      console.log(error);
    }
  }

  const buttonsBaseClassnames = classNames(
    "text-xl rounded-full p-3 focus:outline-none",
    "focus:bg-gray-200 hover:bg-gray-100"
  );
  const importantButtonClassnames = classNames(buttonsBaseClassnames, {
    "text-gray-600 hover:text-purple-600 focus:text-purple-600":
      !isImportant,
    "text-purple-600 hover:text-purple-400 focus:text-purple-400":
    isImportant,
  });
  const myDayButtonClassnames = classNames(buttonsBaseClassnames, {
    "text-gray-600 hover:text-orange-600 focus:text-orange-600": !props.myDay,
    "text-orange-600 hover:text-orange-400 focus:text-orange-400": props.myDay,
  });
  const DeleteButtonClassnames = classNames(
    buttonsBaseClassnames,
    "text-red-600 hover:text-red-400 focus:text-red-400"
  );

  return (
    <div className="flex items-center w-full mb-1 rounded-md py-1 px-3 bg-gray-300">
      <Checkbox
        label={props.task}
        checked={isDone}
        id={props.id.toString()}
        onChange={() => handleDoneTask()}
      />

      <div className="ml-auto flex items-center">
        <button
          className={importantButtonClassnames}
          onClick={() => handleChangeImportantState()}
        >
          <FiStar />
        </button>
        <button
          className={myDayButtonClassnames}
          onClick={() => handleChangeDailyState()}
        >
          <FiSun />
        </button>
        <button
          className={DeleteButtonClassnames}
          onClick={() => handleDelete()}
        >
          <FiTrash />
        </button>
      </div>
    </div>
  );
}
