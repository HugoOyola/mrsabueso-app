"use client";

import Boton from "../ui/Boton";
import Image from "next/image";
import { TrashIcon } from "../IconComponents";

const CartItem = ({ products, removeItem }) => {
  const handleRemoveItem = () => {
    removeItem(products.slug);
  };

  return (
    <div className="flex items-center gap-4 p-4 border-b last:mb-0">
      <div className="grid items-start w-16 h-16">
        <Image src={`/productos/${products.image}`} alt={products.name} width={80} height={80} className="aspect-square rounded-md object-cover" />
      </div>
      <div className="grid gap-1">
        <h2 className="text-base font-semibold">{products.name}</h2>
        <p className="text-sm font-normal leading-none md:mb-0">
          <span className="font-semibold">S/. {products.price * products.quantity}</span>
        </p>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold">Cantidad: </p>
          <span className="text-sm">{products.quantity}</span>
        </div>
        <Boton className="bg-salmon hover:bg-red-700" onClick={handleRemoveItem}>
          <TrashIcon className="w-4 h-4" />
        </Boton>
      </div>
    </div>
  );
};

export default CartItem;
