import Link from "next/link";

export const LoginForm = () => {
  return (
    <form className="w-[450px] md:w-[30vw] flex flex-col items-center justify-center">
      <div className="mt-4 flex flex-col gap-5 w-full">
        <input
          className="py-2 px-3 bg-transparent border-[1px] border-orange-500 w-66 rounded-lg text-gray-300 placeholder-gray-500 outline-none focus:border-blue-500 transition-colors duration-300 ease-in-out"
          type="email"
          placeholder="example@email.com"
        />
        <input
          className="py-2 px-3 bg-transparent border-[1px] border-orange-500 w-66 rounded-lg text-gray-300 placeholder-gray-500 outline-none focus:border-blue-500 transition-colors duration-300 ease-in-out"
          type="password"
          placeholder="*********"
        />
        <button className="bg-primaryOrangeHex py-2 rounded-lg hover:bg-opacity-80 transition-all duration-300">
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
