import { productList } from "@/data/products";
import Image from "next/image";
import SectionNewProducts from "../sectionHome/SectionNewProducts";
import Counter from "./QtySelector";
import GoBack from "../ui/GoBack";
// import Breadcrumb from "../Breadcrumb";

const ProductDetails = ({ slug }) => {
  const products = productList.find((p) => p.slug === slug);
  const discountedPrice = (parseFloat(products.price) * 0.8).toFixed(2);

  return (
    <div className="bg-white wrapper">
      <div className="h-[70px]"></div>
      {/* <Breadcrumb
        homeElement={"Inicio"}
        separator={<span> | </span>}
        activeClasses="text-amber-500"
        containerClasses="flex pl-10 py-5 bg-gradient-to-r from-blue-600 to-blue-600 text-white"
        listClasses="hover:underline mx-2 font-bold"
        capitalizeLinks
      /> */}
      <GoBack className="text-sm text-blue-500 underline mb-6" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 py-6">
          <Image alt="Product Image" className="w-full h-auto object-cover rounded-lg" height="500" src={`/productos/${products.image}`} width="500" />
        </div>
        <div className="w-full md:w-1/2 py-6 pl-4">
          <h2 className="text-2xl font-semibold mb-4">{products.name}</h2>
          <p className="text-lg text-gray-600 mb-4">{products.description}</p>
          <p className="text-red-500 font-semibold text-2xl mb-4">S/. {products.price}</p>
          <p className="text-gray-400 line-through mb-4">S/. {discountedPrice}</p>
          <Counter products={products} />
        </div>
      </div>

      <div className="border-t-2">
        {/* <h2 className="text-2xl font-semibold mb-4 p-4">Productos Relacionados</h2> */}
        <SectionNewProducts products={productList} />
      </div>
    </div>
  );
};

export default ProductDetails;
