"use client";
import { useAuthStore } from "@/store/auth";
import SidebarItems from "./SidebarItems";
import UserData from "./SidebarUserData";
import { useUiStore } from "@/store/ui";
import "animate.css"; 
import { useEffect } from "react";

export const Sidebar = () => {
  const { user } = useAuthStore();
  const { isSidebarOpen } = useUiStore();
  
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isSidebarOpen]); 

  return (
    isSidebarOpen && (
      <div className="absolute h-screen w-full flex justify-end bg-gray-600 bg-opacity-20 animate__animated animate__fadeIn animate__faster">
        <aside className="flex flex-col items-center gap-10 w-60 h-[90vh] bg-primary_dark_grey py-5 animate__animated animate__slideInRight animate__faster">
          {!user && <UserData user={user} />}
          <SidebarItems user={user} />
        </aside>
      </div>
    )
  );
};
