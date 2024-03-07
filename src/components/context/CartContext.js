"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addToCart = (productToAdd) => {
    const existingProductIndex = cart.findIndex((product) => product.slug === productToAdd.slug);

    if (existingProductIndex !== -1) {
      // Si el producto ya está en el carrito, actualiza la cantidad
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += productToAdd.quantity;
      setCart(updatedCart);
    } else {
      // Si el producto no está en el carrito, agrégalo
      setCart([...cart, productToAdd]);
    }
  };

  const isInCart = (slug) => {
    return cart.some((products) => products.slug === slug);
  };

  const totalQty = () => {
    return cart.reduce((acc, products) => acc + products.quantity, 0);
  };

  const totalAmount = () => {
    return cart.reduce((acc, products) => acc + products.price * products.quantity, 0);
  };

  const removeItem = (slug) => {
    setCart(cart.filter((products) => products.slug !== slug));
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        isInCart,
        totalQty,
        totalAmount,
        removeItem,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
