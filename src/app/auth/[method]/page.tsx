import { MenuIcon, Sidebar } from "@/components/common/ui";
import { LoginForm } from "../../../components/auth/LoginForm";
import { RegisterForm } from "../../../components/auth/RegisterForm";

interface Props {
  params: {
    method: string;
  };
}
export default function AuthMethodPage({ params }: Props) {
  return (
    <main className="w-full h-full s-full flex flex-col items-center justify-center">
      <section className="flex items-center justify-center h-full">
        {params.method === "register" ? <RegisterForm /> : <LoginForm />}
      </section>
    </main>
  );
}
