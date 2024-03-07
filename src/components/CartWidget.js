"use client"
import Link from "next/link";
import { useCartContext } from "./context/CartContext";
import {ShoppingCartIcon} from "./IconComponents";

const CartWidget = () => {
  const { totalQty } = useCartContext();

  return(
  <Link href="/carrito">
    <div className="icon-container">
      <ShoppingCartIcon className="text-gray-700 hover:text-red-600" />
      <span className="sr-only">Shopping cart</span>
      <span className="text-sm font-bold bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center badge">
        {totalQty()}
      </span>
    </div>
  </Link>
  )
}

export default CartWidget;