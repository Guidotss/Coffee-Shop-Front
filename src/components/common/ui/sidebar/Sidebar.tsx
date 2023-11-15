"use client";
import { useAuthStore } from "@/store/auth";
import SidebarItems from "./SidebarItems";
import UserData from "./SidebarUserData";

export const Sidebar = () => {
  const { user } = useAuthStore();
  return (
    <div className="absolute h-screen w-full flex justify-end bg-gray-600 bg-opacity-20">
      <aside className="flex flex-col items-center gap-10 w-60 bg-primary_dark_grey py-5 mt-[59px]">
        {!user && <UserData user={user} />}
        <SidebarItems user={user} />
      </aside>
    </div>
  );
};
