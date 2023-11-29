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

      <div className="block h-[2px] w-11/12 my-2 mx-auto bg-gray-100" />

      <SidebarLink path="/" text="My custom list" count={1} />
      <SidebarLink path="/" text="My custom list" count={2} />
      <SidebarLink path="/" text="My custom list" count={3} />
    </div>
  );
}
