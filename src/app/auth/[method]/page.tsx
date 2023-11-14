import { MenuIcon } from "@/common/ui";
import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from "../components/RegisterForm";

interface Props {
  params: {
    method: string;
  };
}
export default function AuthMethodPage({ params }: Props) {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <header className="w-full flex justify-between items-center bg-primaryOrangeHex p-3">
        <h1 className="text-white font-semibold text-xl">
          {params.method === "register" ? "Register" : "Login"}
        </h1>
        <i className="cursor-pointer">
          <MenuIcon />
        </i>
      </header>
      <section className="flex items-center justify-center min-h-[60vh]">
        {params.method === "register" ? <RegisterForm /> : <LoginForm />}
      </section>
    </main>
  );
}
