"use client";
import { useState } from "react";
import { Price } from "@/interfaces";

interface Props {
  prices: Price[];
}

type Size = {
  size: string;
  isSelect: boolean;
};

export const ProductPrices = ({ prices }: Props) => {
  const [size, setSize] = useState<Size[]>([
    { size: "S", isSelect: true },
    { size: "M", isSelect: false },
    { size: "L", isSelect: false },
  ]);

  const handleChangeSize = (index: number) => {
    const newSize = size.map((size, i) => {
      if (i === index) {
        return { ...size, isSelect: true };
      } else {
        return { ...size, isSelect: false };
      }
    });

    setSize(newSize);
  };

  return (
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
  );
};
