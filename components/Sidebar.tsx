import { createServerSupabaseClient } from "@/lib/supabase-server";
import Logo from "./Logo";
import SidebarLinksWrapper from "./SidebarLinksWrapper";
import SidebarSignOutButton from "./SidebarSignoutButton";

export default async function Sidebar() {
  const supabase = createServerSupabaseClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();
  
  return (
    <aside className="bg-white fixed left-0 bottom-0 top-0 overflow-y-auto overflow-hidden shadow-xl flex flex-col flex-no-wrap flex-wrap md:w-64 z-10 py-4">
      {/* logo component */}
      <Logo />

      {user ? (
        <SidebarSignOutButton />
      ) : null}

      {/* sidebar links */}
      <SidebarLinksWrapper />
    </aside>
  );
}
