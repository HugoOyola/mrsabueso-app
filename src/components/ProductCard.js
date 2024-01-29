import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="max-w-sm rounded overflow-hidden border transition duration-300 transform hover:shadow-lg relative">
      <Image className="w-full pt-2" src={product.image} alt={product.name} width="300" height="300" />

      {/* Badge para indicar si el producto está en oferta */}
      {product.onSale && (
        <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">Oferta</span>
      )}

      {/* Badge para indicar si el producto es nuevo */}
      {product.newProduct && (
        <span className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">Nuevo</span>
      )}

      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">{product.category}</span>
        <p className="text-gray-700 text-xs mt-3">{product.brand}</p>
        <div className="font-bold text-2xl mb-2">{product.name}</div>
        <p className="text-red-500 font-semibold text-2xl mt-2">S/{product.price}</p>
        <p className="text-gray-400 line-through">S/83.60</p>
        <div className="mt-4">
          <button className="w-full bg-salmon hover:bg-red-500 text-white font-bold py-2 px-4 rounded">Comprar</button>
        </div>
      </div>
    </div>
  );
}

