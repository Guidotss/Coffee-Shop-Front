import { MenuIcon } from "@/common/ui";
import { Sidebar } from "@/common/ui/Sidebar";
import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from "../components/RegisterForm";

interface Props {
  params: {
    method: string;
  };
}
export default function AuthMethodPage({ params }: Props) {
  return (
    <main className="w-full h-full s-full flex flex-col items-center justify-center">
      <header className="w-full flex justify-between items-center bg-primary_orange p-3">
        <h1 className="text-white font-semibold text-xl">
          {params.method === "register" ? "Register" : "Login"}
        </h1>
        <i className="cursor-pointer z-10">
          <MenuIcon />
        </i>
      </header>
      <Sidebar/>
      <section className="flex items-center justify-center h-full">
        {params.method === "register" ? <RegisterForm /> : <LoginForm />}
      </section>
    </main>
  );
}
