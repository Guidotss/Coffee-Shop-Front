"use client";
import { useProduct } from "@/utils/hooks";
import { Price } from "@/interfaces";
import { ProductBuyButtons } from "./ProductBuyButtons";
import { ProductCounter } from "./ProductCounter";
import { ProductPrices } from "./ProductPrices";

interface Props {
  product_id: string;
  prices: Price[];
}

export const ProductBuyActions = ({ prices, product_id }: Props) => {
  const {
    size,
    counter,
    handleChangeSize,
    increment,
    decrement,
    handleAddToCart,
  } = useProduct(product_id);

  return (
    <div className="flex flex-col ">
      <ProductPrices {...{ prices, size, handleChangeSize }} />
      <ProductCounter {...{ counter, increment, decrement }} />
      <ProductBuyButtons onAddToCart={handleAddToCart} />
    </div>
  );
};
