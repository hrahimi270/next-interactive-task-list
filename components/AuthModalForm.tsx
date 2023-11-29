"use client"

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { getURL } from "@/lib/helpers";
import { useSupabase } from "./SupabaseProvider";

export default function AuthModalForm() {
  const { supabase } = useSupabase();

  return (
    <Auth
      supabaseClient={supabase}
      providers={["github"]}
      redirectTo={`${getURL()}/auth/callback`}
      magicLink={true}
      appearance={{
        theme: ThemeSupa,
        variables: {
          default: {
            colors: {
              brand: "#2681ff",
              brandAccent: "#6ab1e9",
            },
          },
        },
      }}
      theme="light"
    />
  );
}
