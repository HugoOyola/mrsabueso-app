import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  // Calcula el precio con descuento (20%)
  const discountedPrice = (parseFloat(product.price) * 0.8).toFixed(2);

  return (
    <div className="max-w-sm rounded overflow-hidden border transition duration-300 transform hover:shadow-lg relative">
      <div className="relative">
        <Image className="w-full pt-2" src={`/productos/${product.image}`} alt={product.name} width="300" height="300" />
        {/* Badge para indicar si el producto está en oferta */}
        {product.onSale && <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">Oferta</span>}
        {/* Badge para indicar si el producto es nuevo */}
        {product.newProduct && <span className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">Nuevo</span>}
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2 uppercase">{product.category}</span>
        <p className="text-gray-700 text-xs mt-3">{product.brand}</p>
        <div className="font-bold text-xl mb-2 overflow-hidden overflow-ellipsis whitespace-nowrap">{product.name}</div>
        {/* Muestra el precio con descuento si el producto está en oferta */}
        {product.onSale && (
          <div className="flex items-center">
            <p className="text-green-500 font-semibold text-2xl mt-2">S./ {discountedPrice}</p>
            <p className="text-gray-400 line-through text-sm ml-2">S/. {product.price}</p>
          </div>
        )}
        {/* Muestra el precio original si el producto no está en oferta */}
        {!product.onSale && (
          <div className="flex items-center">
            <p className="text-red-500 font-semibold text-2xl mt-2">S/. {product.price}</p>
          </div>
        )}
        <div className="mt-4">
          {/* <button className="w-full bg-salmon hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Comprar</button> */}
          {/* <Link href='/productos/details/[slug]' as={`/productos/details/${product.slug}`}> */}
          <Link href={`/productos/details/${product.slug}`}>
            <button className={`w-full bg-salmon hover:bg-red-700 text-white font-bold py-2 px-4 rounded`}>
              COMPRAR
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;