"use client";
import { useProduct } from "@/utils/hooks";
import { Price } from "@/interfaces";
import { ProductBuyButtons } from "./ProductBuyButtons";
import { ProductCounter } from "./ProductCounter";
import { ProductPrices } from "./ProductPrices";

interface Props {
  productInfo:  {
    id: string; 
    image: string; 
    name: string;
  }
  prices: Price[];
}

export const ProductBuyActions = ({ prices, productInfo }: Props) => {
  const {
    size,
    counter,
    handleChangeSize,
    increment,
    decrement,
    handleAddToCart,
  } = useProduct({ productInfo });

  return (
    <div className="flex flex-col ">
      <ProductPrices {...{ prices, size, handleChangeSize }} />
      <ProductCounter {...{ counter, increment, decrement }} />
      <ProductBuyButtons onAddToCart={handleAddToCart} />
    </div>
  );
};
