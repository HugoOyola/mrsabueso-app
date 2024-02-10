import { productList } from "@/data/products";
import Image from "next/image";
import SectionNewProducts from "../sectionHome/SectionNewProducts";

const ProductDetails = ({ slug }) => {

  const products = productList.find((p) => p.slug === slug);
  const discountedPrice = (parseFloat(products.price) * 0.8).toFixed(2);

  return (
    <div className="bg-white wrapper">
      <div className="h-[70px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 py-6">
          <Image alt="Product Image" className="w-full h-auto object-cover rounded-lg" height="500" src={`/productos/${products.image}`} width="500" />
        </div>
        <div className="w-full md:w-1/2 py-6 pl-4">
          <h2 className="text-2xl font-semibold mb-4">{products.name}</h2>
          <p className="text-lg text-gray-600 mb-4">{products.description}</p>
          <p className="text-red-500 font-semibold text-2xl mb-4">S/. {products.price}</p>
          <p className="text-gray-400 line-through mb-4">S/. {discountedPrice}</p>
          <div className="flex items-center gap-4">
            <button className="bg-salmon text-white text-lg font-bold px-6 py-2 rounded- hover:bg-red-600 uppercase">Agregar al Carrito</button>
            <input className="w-20 border rounded-lg text-center" defaultValue="1" min="1" type="number" />
          </div>
        </div>
      </div>

      <div className="border-t-2">
        {/* <h2 className="text-2xl font-semibold mb-4 p-4">Productos Relacionados</h2> */}
        <SectionNewProducts products={productList}  />
      </div>
    </div>
  );
};

export default ProductDetails;
