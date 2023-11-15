"use client";
import { User } from "@/app/auth/interfaces";
import { sidebarItems } from "@/constants";
import { useAuthStore } from "@/store/auth";
import Link from "next/link";
import { useState } from "react";

function UserData() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-20 h-20 rounded-full bg-primary_orange"></div>
      <h1 className="text-white font-semibold text-xl">User Name</h1>
      <p className="text-white text-sm">
        <Link
          href="#"
          className="text-primary_orange hover:opacity-80 transition-opacity duration-300 ease-in-out"
        >
          Edit Profile
        </Link>
      </p>
    </div>
  );
}

interface SidebarItemsProps {
  user: User | null;
}
function SidebarItems({ user }: SidebarItemsProps) {
  const [item, setItem] = useState<typeof sidebarItems>(sidebarItems);
  return (
    <ul className="text-slate-50 flex flex-col items-center gap-6 text-xl tracking-widest">
      {item.map((item) => (
        <li
          key={item.name}
          className="hover:text-orange-500 transition-colors duration-300 ease-in-out"
        >
          <Link href={item.url}>
            <span>{item.name}</span>
          </Link>
        </li>
      ))}
      {user ? (
        <>
          <li className="hover:text-orange-500 transition-colors duration-300 ease-in-out">
            <Link href="/auth/login">
              <span>Cart</span>
            </Link>
          </li>
          <button className="bg-primary_orange rounded-full px-6 py-1 text-md font-semibold hover:opacity-80 transition-opacity duration-300 ease-in-out">
            Logout
          </button>
        </>
      ) : (
        <div className="absolute bottom-10 flex flex-col items-center gap-5 text-center text-[17px] font-semibold">
          <li className="bg-primary_orange w-32 py-1 rounded-full hover:opacity-80 transition-opacity duration-300 ease-in-out">
            <Link href="/auth/login">
              <span>Login</span>
            </Link>
          </li>
          <li className="bg-primary_orange w-32 py-1 rounded-full hover:opacity-80 transition-opacity duration-300 ease-in-out">
            <Link href="/auth/register">
              <span>Register</span>
            </Link>
          </li>
        </div>
      )}
    </ul>
  );
}

export const Sidebar = () => {
  const { user } = useAuthStore();
  return (
    <div className="absolute h-screen w-full flex justify-end bg-gray-600 bg-opacity-20">
      <aside className="flex flex-col items-center gap-10 w-60 bg-primary_dark_grey py-5 mt-[59px]">
        {!user && <UserData />}
        <SidebarItems user={user} />
      </aside>
    </div>
  );
};
