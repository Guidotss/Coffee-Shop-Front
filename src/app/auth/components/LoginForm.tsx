"use client";
import { useState } from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useAuthStore } from "@/store/auth";
import { useToast } from "@/utils/hooks";

type LoginForm = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const { login } = useAuthStore();
  const { error } = useToast();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form.email.trim() == "" || form.password.trim() == "");
    if (form.email.trim() == "" || form.password.trim() == "")
      return error("Please fill all the fields");

    const ok = await login(form.email, form.password);
    if (!ok) {
      error("Invalid credentials");
    }
  };

  return (
    <form
      className="w-[450px] md:w-[30vw] flex flex-col items-center justify-center"
      onSubmit={handleLogin}
    >
      <div className="mt-4 flex flex-col gap-5 w-full">
        <input
          className="py-2 px-3 bg-transparent border-[1px] border-orange-500 w-66 rounded-lg text-gray-300 placeholder-gray-500 outline-none focus:border-blue-500 transition-colors duration-300 ease-in-out"
          type="email"
          placeholder="example@email.com"
          name="email"
          value={form.email}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <input
          className="py-2 px-3 bg-transparent border-[1px] border-orange-500 w-66 rounded-lg text-gray-300 placeholder-gray-500 outline-none focus:border-blue-500 transition-colors duration-300 ease-in-out"
          type="password"
          placeholder="*********"
          autoComplete="off"
          name="password"
          value={form.password}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <button
          className="bg-primaryOrangeHex py-2 rounded-lg hover:bg-opacity-80 transition-all duration-300"
          disabled={form.email.trim() == "" || form.password.trim() == ""}
        >
          <span className="text-white font-semibold text-lg">Login</span>
        </button>
      </div>
      <div className="w-full flex justify-end items-center mt-2 gap-2 text-orange-500">
        <Link
          href={"/auth/register"}
          className="text-sm underline hover:opacity-80 transition-all duration-300"
        >
          Don{"'"}t have an account?{" "}
        </Link>
      </div>
    </form>
  );
};
