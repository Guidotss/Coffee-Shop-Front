"use client";
export const ProductBuyButtons = () => {
  return (
    <div className="flex items-center justify-between md:justify-center md:gap-10 mt-10 p-5 md:p-0">
      <button className="bg-primary_orange text-white border-[1px] border-transparent px-5 py-3 md:px-10 rounded-md hover:bg-opacity-80 duration-300 ease-in-out transition-colors">
        Add to cart
      </button>
      <button className="bg-white text-black px-5 py-3 md:px-10 rounded-md border-[1px] border-transparent hover:bg-black hover:text-white hover:border-white transition-colors duration-300 ease-in-out">
        Buy now
      </button>
    </div>
  );
};
