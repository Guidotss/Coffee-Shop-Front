"use client";
export const ProductBuyButtons = () => {
  return (
    <div className="flex items-center justify-center gap-10 mt-10 p-6 md:p-0">
      <button className="bg-white text-black px-5 py-3 md:px-10 rounded-md">
        Add to cart
      </button>

      <button className="bg-primary_orange text-white px-5 py-3 md:px-10 rounded-md">
        Buy now
      </button>
    </div>
  );
};
