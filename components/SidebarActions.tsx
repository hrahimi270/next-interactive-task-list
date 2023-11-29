"use client"

import classnames from "classnames";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";

export default function SidebarActions() {
  const [inputValue, setInputValue] = useState<string>("");

  function handleKeydown(event: React.KeyboardEvent<HTMLInputElement>) {
    const { key } = event;

    if (key === "Enter") {
      console.log("add");
    }
  }

  const inputClassnames = classnames(
    "bg-transparent focus:outline-none px-2 py-1",
    "placeholder-gray-600 text-gray-800"
  );

  const buttonClassnames = classnames(
    "mr-2 focus:outline-none",
    "text-gray-500 hover:text-gray-700"
  );

  return (
    <div className="w-11/12 flex items-center justify-between px-6 mx-auto">
      <div className="flex items-center">
        <button className={buttonClassnames} onClick={() => console.log("add")}>
          <FiPlus />
        </button>

        <input
          type="text"
          placeholder="Add new list"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => handleKeydown(e)}
          className={inputClassnames}
        />
      </div>
    </div>
  );
}
