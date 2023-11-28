import { Cart } from "@/interfaces/cart";
import { useEffect, useState } from "react";

type Size = {
  size: string;
  price: number;
  isSelect: boolean;
};

interface Props {
  productInfo: {
    id: string;
    image: string;
    name: string;
  };
}
export const useProduct = ({ productInfo }: Props) => {
  const [size, setSize] = useState<Size[]>([
    { size: "S", isSelect: true, price: 1.38 },
    { size: "M", isSelect: false, price: 3.15 },
    { size: "L", isSelect: false, price: 4.29 },
  ]);
  const [counter, setCounter] = useState(1);
  const [currentSize, setCurrentSize] = useState<string>("S");
  const [order, setOrder] = useState({
    name: productInfo.name,
    size: currentSize,
    quantity: counter,
    image: productInfo.image,
  });
  const [cart, setCart] = useState<Cart[]>([]);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCart(JSON.parse(cart));
    }
  }, []);

  useEffect(() => {
    setOrder({
      name: productInfo.name,
      size: currentSize,
      quantity: counter,
      image: productInfo.image,
    });
  }, [currentSize, counter, productInfo.image, productInfo.name]);

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
    console.log(cart);
    const index = newCart.findIndex(
      (item) => item.id === productInfo.id && item.size === order.size
    );
    if (index === -1) {
      newCart.push({
        id: productInfo.id,
        name: order.name,
        size: order.size,
        quantity: order.quantity,
        image: order.image,
        price: size.find((item) => item.size === order.size)?.price || 0,
      });
    } else {
      newCart[index].quantity += order.quantity;
      newCart[index].price =
        size.find((item) => item.size === order.size)?.price! *
          newCart[index].quantity || 0;
    }
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCounter(1);
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
