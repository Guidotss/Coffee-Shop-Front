"use client";

import { useShopStore } from "@/store/shop";
import { useEffect } from "react";
import { ProductCard } from "./card/ProductCard";

export const ProductsGrid = () => {
  const { loading, products, loadProducts } = useShopStore();
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <section className="grid grid-cols-2 gap-4">
      {loading ? (
        <p className="self-center">Loading...</p>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </section>
  );
};
