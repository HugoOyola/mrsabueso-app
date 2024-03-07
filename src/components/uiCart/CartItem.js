"use client";

import Boton from "../ui/Boton";
import Image from "next/image";

const CartItem = ({ products, removeItem }) => {
  const handleRemoveItem = () => {
    removeItem(products.slug);
  };

  return (
    <li className="shadow flex justify-between items-center max-w-xl gap-6 p-4 my-4">
      <Image src={`/productos/${products.image}`} alt={products.name} width={80} height={80} />
      <div>
        <h3>{products.name}</h3>
        <p className="text-sm font-semibold">S/. {products.price * products.quantity}</p>
        <p className="text-sm">Cantidad: {products.quantity}</p>
      </div>

      <Boton className="bg-red-600" onClick={handleRemoveItem}>Eliminar</Boton>
    </li>
  );
};

export default CartItem;
