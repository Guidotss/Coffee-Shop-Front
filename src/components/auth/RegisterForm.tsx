"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/store/auth";
import { RegisterForm as TRegisterForm } from "@/types";
import { useToast } from "@/utils/hooks";

export const RegisterForm = () => {
  const [form, setForm] = useState<TRegisterForm>({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();
  const { register } = useAuthStore();
  const { error } = useToast();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.email.trim() == "" || form.password.trim() == "")
      return error("Please fill all the fields");

    const [message, ok] = await register(form.name, form.email, form.password);
    if (!ok) return error(message);

    router.push("/");
  };

  return (
    <form
      className="w-full flex flex-col items-center justify-center"
      onSubmit={handleRegister}
    >
      <div className="mt-4 flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <input
            className="py-2 px-3 bg-transparent border-[1px] border-orange-500 w-56 rounded-lg text-gray-300 placeholder-gray-500 outline-none focus:border-blue-500 transition-colors duration-300 ease-in-out"
            type="text"
            placeholder="Guido"
            name="name"
            value={form.name}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, name: e.target.value }))
            }
          />
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
        </div>
        <input
          className="py-2 px-3 bg-transparent border-[1px] border-orange-500 w-full rounded-lg text-gray-300 placeholder-gray-500 outline-none focus:border-blue-500 transition-colors duration-300 ease-in-out"
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
          className="bg-primary_orange py-2 rounded-lg hover:bg-opacity-80 transition-all duration-300"
          disabled={form.email.trim() == "" || form.password.trim() == ""}
        >
          <span className="text-white font-semibold text-lg">Register</span>
        </button>
      </div>
      <div className="w-full flex justify-end items-center mt-2 gap-2 text-orange-500">
        <Link
          href={"/auth/login"}
          className="text-sm underline hover:opacity-80 transition-all duration-300"
        >
          Already have an account?{" "}
        </Link>
      </div>
    </form>
  );
};
