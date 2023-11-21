"use client";

import { useShopStore } from "@/store/shop";
import { useEffect } from "react";
import { ProductCard } from "./card";

export const ProductsGrid = () => {
  const { loading, products, loadProducts } = useShopStore();
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <section className="grid grid-cols-2 md:grid-cols-5 gap-10 p-5">
      {loading ? (
        <p className="self-center text-white">Loading...</p>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            className="h-full w-full flex flex-col items-center justify-center bg-primary_dark_grey rounded-lg cursor-pointer"
          >
            <ProductCard.Image
              src={product.imagelink_portrait}
              alt={product.name}
            />
            <ProductCard.Title title={product.name} />
          </ProductCard>
        ))
      )}
    </section>
  );
};
