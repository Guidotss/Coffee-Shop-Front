import { Order } from "@/interfaces";
import { useEffect, useState } from "react";

type Size = {
  size: string;
  isSelect: boolean;
};

export const useProduct = (id: string) => {
  const [size, setSize] = useState<Size[]>([
    { size: "S", isSelect: true },
    { size: "M", isSelect: false },
    { size: "L", isSelect: false },
  ]);
  const [counter, setCounter] = useState(1);
  const [currentSize, setCurrentSize] = useState<string>("S");
  const [order, setOrder] = useState({
    size: currentSize,
    quantity: counter,
  });
  const [cart, setCart] = useState([] as Order[]);

  useEffect(() => {
    setOrder({ size: currentSize, quantity: counter });
  }, [currentSize, counter]);

  const handleChangeSize = (index: number) => {
    const newSize = size.map((size, i) => {
      if (i === index) {
        setCurrentSize(size.size);
        return { ...size, isSelect: true };
      } else {
        return { ...size, isSelect: false };
      }
    });

    setSize(newSize);
  };

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 1) setCounter(counter - 1);
  };

  const handleAddToCart = () => {
    const newCart = [...cart];
    const index = newCart.findIndex(
      (item) => item.product_id === id && item.size === order.size
    );
    if (index !== -1) {
      newCart[index].quantity += order.quantity;
    } else {
      newCart.push({ product_id: id, ...order });
    }
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCounter(1);
    console.log(cart);
  };

  return {
    size,
    counter,

    handleChangeSize,
    increment,
    decrement,
    handleAddToCart,
  };
};
