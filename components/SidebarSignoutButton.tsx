"use client"

import { useRouter } from "next/navigation";
import { useSupabase } from "./SupabaseProvider";
import { GoSignOut } from "react-icons/go";

export default function SidebarSignOutButton() {
    const router = useRouter();
    const { supabase } = useSupabase();

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.refresh()
    };

    return (
      <button
        className="flex items-center mx-auto my-4 text-red-500 hover:text-red-700 text-base px-4 rounded-3xl"
        onClick={handleSignOut}
      >
        <GoSignOut className="mr-2" />
        Sign out
      </button>
    );
  }