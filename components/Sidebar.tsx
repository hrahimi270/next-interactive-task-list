import Logo from "./Logo";
import SidebarActions from "./SidebarActions";
import SidebarLinksWrapper from "./SidebarLinksWrapper";

export default function Sidebar() {
  return (
    <aside className="bg-white fixed left-0 bottom-0 top-0 overflow-y-auto overflow-hidden shadow-xl flex flex-col flex-no-wrap flex-wrap md:w-64 z-10 py-4">
      {/* logo component */}
      <Logo />

      {/* sidebar links */}
      <SidebarLinksWrapper />

      {/* sidebar action to add custom lists */}
      <SidebarActions />
    </aside>
  );
}
