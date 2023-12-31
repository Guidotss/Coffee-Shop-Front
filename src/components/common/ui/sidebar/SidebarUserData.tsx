import { User } from "@/interfaces";
import Link from "next/link";

interface Props {
  user: User | null;
}
export default function UserData({ user }: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-20 h-20 rounded-full bg-primary_orange mb-2"></div>
      <h1 className="text-white font-semibold text-xl">{user?.name}</h1>
      <span className="text-[12px] text-gray-500">{user?.email}</span>
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
