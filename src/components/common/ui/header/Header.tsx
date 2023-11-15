"use client";
import { setHeaderTitle } from "@/utils";
import { MenuIcon } from "..";
import { usePathname } from "next/navigation";
import { useUiStore } from "@/store/ui";


export default function Header() {
    const pathName = usePathname();
    const { toggleSidebar } = useUiStore(); 
    const title = setHeaderTitle(pathName); 

    const handleToggleSidebar = () => {
        toggleSidebar();
    }
  return (
    <header className="w-full flex justify-between items-center bg-primary_orange p-3">
      <h1 className="text-white font-semibold text-xl">{title}</h1>
      <i className="cursor-pointer z-10" onClick={handleToggleSidebar}>
        <MenuIcon />
      </i>
    </header>
  );
};
