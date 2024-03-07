"use client";

import Image from "next/image";
import { useCartContext } from "@/components/context/CartContext";
import Boton from "@/components/ui/Boton";
import CartItem from "@/components/uiCart/CartItem";

const CartPage = () => {
  const { cart, removeItem, totalAmount } = useCartContext();

  return (
    <main className="container m-auto">
      <div className="h-[70px]"></div>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm my-4">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">Carrito de Compras</h3>
          <p className="text-sm text-muted-foreground">Tus productos</p>
        </div>
        <div className="p-2">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center">
              <Image src="/empty-cart.png" width="200" height="200" alt="Carrito vacio" className="" />
              <p className="pb-2">Carrito vacio, añada productos a su carrito</p>
              <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded dark:bg-gray-700" />
            </div>
          ) : (
            cart.map((products) => <CartItem products={products} removeItem={removeItem} key={products.slug} />)
          )}
        </div>
        <div className="flex flex-col items-center gap-2 p-4">
          <div className="flex justify-end">
            <p className="text-xl leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-semibold">
              Total de la orden: <span className="text-2xl">S/. {totalAmount()}</span>
            </p>
          </div>
          <Boton className="mt-4 bg-verde text-white px-4 py-2 rounded-md hover:bg-green-900 uppercase font-semibold">Finalizar Compra</Boton>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
