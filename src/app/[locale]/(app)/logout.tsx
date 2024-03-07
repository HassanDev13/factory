"use client";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import createClient from "../../../../utils/supabase/client";

export function Logout() {
    const client = createClient();
  const logout = async () => {
    await client.auth.signOut();
    // relesh page
    window.location.reload();
  };
  return (
    <div className="">
      <Button
        onClick={() => {
            logout();
        }}
        variant="ghost"
        className=" space-x-2 rtl:space-x-reverse flex items-center p-2 hover:font-bold rounded-md flex-grow"
      >
        <LogOut
          className="w-9 h-9 bg-purple-600 rounded-full p-2"
          color="white"
        />
        <p>Logout</p>
      </Button>
    </div>
  );
}
