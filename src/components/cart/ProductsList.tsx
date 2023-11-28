"use client"

export const ProductsList = () => {
  const cart = localStorage.getItem("cart");
  console.log(cart);
  return <div className="text-white">ProductsList</div>;
};
