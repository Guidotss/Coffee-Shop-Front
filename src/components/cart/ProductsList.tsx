"use client";

import { useShopStore } from "@/store/shop";
import Image from "next/image";
import { useEffect } from "react";

export const ProductsList = () => {
  const { cart, loadCart } = useShopStore();
  console.log(cart);
  useEffect(() => {
    loadCart();
  }, []);

  
  
  return ( 
    <>
      {cart.map((product) => ( 
        <div key={Math.random()} className="flex gap-10 p-10">
          <Image
            src={product.image}
            alt={product.name}
            width={50}
            height={50}
          />
          <div>
            <h3 className="text-white">{product.name}</h3>
            <h3 className="text-white">{product.price.toFixed(1)}</h3>
          </div>
          <span className="text-white">{product.quantity}</span>
        </div>
      ))} 
    </>
  )
};
