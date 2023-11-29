"use client";

import { FiStar, FiSun, FiTrash, FiList } from "react-icons/fi";
import Checkbox from "./Checkbox";
import classNames from "classnames";

interface TaskProps {
  id: string;
  task: string;
  done: boolean;
  important?: boolean;
  myDay?: boolean;
  sourceList?: string;
  onEdit(): void;
  onDelete(): void;
}

export default function Task(props: TaskProps) {
  const buttonsBaseClassnames = classNames(
    "text-xl rounded-full p-3 focus:outline-none",
    "focus:bg-gray-200 hover:bg-gray-100"
  );
  const importantButtonClassnames = classNames(buttonsBaseClassnames, {
    "text-gray-600 hover:text-purple-600 focus:text-purple-600":
      !props.important,
    "text-purple-600 hover:text-purple-400 focus:text-purple-400":
      props.important,
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
        checked={props.done}
        id={props.id}
        onChange={() => console.log("checkbox clicked")}
      />

      {/* {props.sourceList ? (
        <span className={taskSourceListClassnames}>
          <FiList />
          <span className="ml-1">{props.sourceList}</span>
        </span>
      ) : null} */}

      <div className="ml-auto flex items-center">
        <button
          className={importantButtonClassnames}
          onClick={() => console.log("done")}
        >
          <FiStar />
        </button>
        <button
          className={myDayButtonClassnames}
          onClick={props.onEdit}
        >
          <FiSun />
        </button>
        <button
          className={DeleteButtonClassnames}
          onClick={props.onDelete}
        >
          <FiTrash />
        </button>
      </div>
    </div>
  );
}
