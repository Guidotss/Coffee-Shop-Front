"use client";
import { useProduct } from "@/utils/hooks";
import { Price } from "@/interfaces";
import { ProductBuyButtons } from "./ProductBuyButtons";

interface Props {
  product_id: string;
  prices: Price[];
}

export const ProductPrices = ({ prices, product_id }: Props) => {
  const { size, counter, handleChangeSize, increment, decrement, handleAddToCart } =
    useProduct(product_id);

  return (
    <div className="flex flex-col ">
      <div className="flex items-center justify-center gap-x-[90px] mt-10">
        {prices.map((price, i) => (
          <div
            key={Math.random()}
            className={`flex flex-col items-center justify-center gap-2 bg-primary_orange ${
              size[i].isSelect ? "opacity-40" : "opacity-100 hover:opacity-80"
            } w-14 h-14 rounded-md cursor-pointer  transition-opacity duration-300 ease-in-out`}
            onClick={() => handleChangeSize(i)}
          >
            <div className="flex flex-col items-center">
              <h1 className="text-white text-xl lg:text-2xl font-semibold">
                {price.size}
              </h1>

              <div className="text-white">
                <span>{price.currency}</span>
                <span>{price.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center gap-x-24 mt-10">
        <button
          className="text-2xl text-white bg-primary_orange w-16 h-10  rounded-lg border-none outline-none hover:bg-opacity-80 transition-all duration-300 ease-in-out"
          onClick={decrement}
        >
          -
        </button>
        <span className="text-2xl md:text-3xl text-white w-7 text-center">
          {counter}
        </span>
        <button
          className="text-2xl text-white bg-primary_orange w-16 h-10 rounded-lg border-none outline-none hover:bg-opacity-80 transition-all duration-300 ease-in-out"
          onClick={increment}
        >
          +
        </button>
      </div>
      <ProductBuyButtons onAddToCart={handleAddToCart}/>
    </div>
  );
};
