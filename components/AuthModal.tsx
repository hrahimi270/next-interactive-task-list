import { createServerSupabaseClient } from "@/lib/supabase-server";
import AuthModalForm from "./AuthModalForm";
import Logo from "./Logo";

export default async function AuthModal() {
  const supabase = createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return !user ? (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[400px] h-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center">
          <Logo />
        </div>
        <AuthModalForm />
      </div>
    </div>
  ) : null;
}
