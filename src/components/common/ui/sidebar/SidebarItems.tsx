import { useState } from "react";
import Link from "next/link";
import { User } from "@/app/auth/interfaces";
import { sidebarItems } from "@/constants";

interface SidebarItemsProps {
  user: User | null;
}
export default function SidebarItems({ user }: SidebarItemsProps) {
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
        <div className="absolute bottom-16 flex flex-col items-center gap-5 text-center text-[17px] font-semibold">
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
