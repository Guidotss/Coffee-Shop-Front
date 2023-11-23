"use client"
export const ProductCounter = () => {
  return (
    <div className="w-full flex items-center justify-center gap-[90px] mt-10">
      <button className="text-2xl text-white bg-primary_orange w-12 h-12  rounded-lg border-none outline-none hover:bg-opacity-80 transition-all duration-300 ease-in-out">
        -
      </button>
      <span className="text-2xl md:text-3xl text-white">1</span>
      <button className="text-2xl text-white bg-primary_orange w-12 h-12 rounded-lg border-none outline-none hover:bg-opacity-80 transition-all duration-300 ease-in-out">
        +
      </button>
    </div>
  );
};
