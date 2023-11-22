"use client";
import { setHeaderTitle } from "@/utils";
import { BackArrowIcon, MenuIcon } from "..";
import { usePathname, useRouter } from "next/navigation";
import { useUiStore } from "@/store/ui";

export default function Header() {
  const pathName = usePathname();
  const router = useRouter();
  const { toggleSidebar } = useUiStore();
  const title = setHeaderTitle(pathName);

  const handleToggleSidebar = () => {
    toggleSidebar();
  };
  const handleBackRouter = () => {
    router.back();
  };
  return (
    <header className="w-full flex justify-between items-center bg-primary_orange p-3">
      <i onClick={handleBackRouter} className="cursor-pointer">
        <BackArrowIcon />
      </i>
      <h1 className="text-white font-semibold text-xl">{title}</h1>
      <i className="cursor-pointer z-10" onClick={handleToggleSidebar}>
        <MenuIcon />
      </i>
    </header>
  );
}
