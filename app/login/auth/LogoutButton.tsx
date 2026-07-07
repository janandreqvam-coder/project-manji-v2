"use client";

import { useRouter } from "next/navigation";
import Button from "@/app/components/ui/Button";
import { supabaseBrowser } from "@/app/lib/supabase-browser";

export default function LogoutButton() {
  const router = useRouter();

  async function logout() {
    await supabaseBrowser.auth.signOut();

    router.push("/");
    router.refresh();
  }

  return (
    <Button
      onClick={logout}
      variant="secondary"
      className="w-full"
    >
      Sign Out
    </Button>
  );
}
