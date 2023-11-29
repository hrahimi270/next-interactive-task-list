import { FiStar, FiSun, FiHome } from "react-icons/fi";
import SidebarLink from "./SidebarLink";

export default function SidebarLinksWrapper() {
  return (
    <div className="flex-grow mb-4">
      <SidebarLink
        path="/important"
        text="Important"
        color="fuchsia"
        icon={<FiStar />}
        count={10}
      />

      <SidebarLink
        path="/myday"
        text="My Day"
        color="orange"
        icon={<FiSun />}
        count={1}
      />

      <SidebarLink
        path="/"
        text="Tasks"
        color="blue"
        icon={<FiHome />}
        count={3}
      />
    </div>
  );
}
