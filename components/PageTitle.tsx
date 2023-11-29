"use client"

import { FiTrash } from "react-icons/fi";

interface PageTitleProps {
  title: string;
  inCustomList?: boolean;
}

export default function PageTitle({ title, inCustomList = false }: PageTitleProps) {
  return (
    <div className="flex items-center justify-between mt-8 mb-4">
      <h1 className="text-2xl font-bold text-gray-700">{title}</h1>

      {inCustomList && (
        <button
          className="flex px-3 text-2xl focus:outline-none text-gray-800 hover:text-red-600"
          onClick={() => console.log("Delete list")}
        >
          <FiTrash />
        </button>
      )}
    </div>
  );
}
