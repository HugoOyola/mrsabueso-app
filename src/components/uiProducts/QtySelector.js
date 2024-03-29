"use client";
import { useState } from "react";
import Counter from "../ui/Counter";
import Boton from "../ui/Boton";
import { useCartContext } from "../context/CartContext";

const QtySelector = ({ products }) => {
  const { addToCart } = useCartContext();

  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    addToCart({ ...products, quantity })
  };

  return (
    <div className="flex flex-col gap-5 mt-6">
      <div className="">
        <p className="pb-2">Cantidad:</p>
        <Counter max={products.stock} counter={quantity} setCounter={setQuantity} />
      </div>
      <Boton className="w-full hover:bg-blue-600" onClick={handleAdd}>
        Agregar al carrito
      </Boton>
    </div>
  );
};

export default QtySelector;
