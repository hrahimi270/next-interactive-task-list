"use client";

import { FiStar, FiSun, FiHome } from "react-icons/fi";
import SidebarLink from "./SidebarLink";
import { useTaskStore } from "@/store/useTasks";
import { useEffect, useState } from "react";

export default function SidebarLinksWrapper() {
  const tasks = useTaskStore((state) => state.tasks);

  const [allTasksCount, setAllTasksCount] = useState("0");
  const [importantTasksCount, setImportantTasksCount] = useState("0");
  const [dailyTasksCount, setDailyTasksCount] = useState("0");

  useEffect(() => {
    setAllTasksCount((tasks.length || 0).toString());

    const importantTasks = tasks.filter((task) => task.is_important);
    setImportantTasksCount((importantTasks.length || 0).toString());

    const dailyTasks = tasks.filter((task) => task.is_daily);
    setDailyTasksCount((dailyTasks.length || 0).toString());
  }, [tasks]);

  return (
    <div className="flex-grow mb-4">
      <SidebarLink
        path="/important"
        text="Important"
        color="fuchsia"
        icon={<FiStar />}
        count={importantTasksCount}
      />

      <SidebarLink
        path="/myday"
        text="My Day"
        color="orange"
        icon={<FiSun />}
        count={dailyTasksCount}
      />

      <SidebarLink
        path="/"
        text="Tasks"
        color="blue"
        icon={<FiHome />}
        count={allTasksCount}
      />
    </div>
  );
}
