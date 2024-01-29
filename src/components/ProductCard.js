import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    // <div className="max-w-sm rounded overflow-hidden shadow-lg transition duration-300 transform hover:scale-105">
    <div className="max-w-sm rounded overflow-hidden border transition duration-300 transform hover:shadow-lg">
      <Image className="w-full pt-2" src={product.image} alt={product.name} width="300" height="300" />
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
