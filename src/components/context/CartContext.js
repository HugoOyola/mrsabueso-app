"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addToCart = (products) => {
    setCart([...cart, products]);
  };

  return <CartContext.Provider value={{ addToCart }}>{children}</CartContext.Provider>;
};
