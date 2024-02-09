// import { productList } from "@/data/products";
// import ProductGrid from "@/components/ProductGrid";
// import ProductList from "@/components/ProductList";
import ProductCategory from "@/components/ProductCategory";
import CategoryMenu from "@/components/CategoryMenu";
import { Suspense } from "react";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `Mr. Sabueso - Categoria ${params.category}`,
    description: `Productos de la categoría ${params.category}`,
  };
}

export default function AllProducts({ params }) {
  const { category } = params;

  return (
    <div className="bg-white">
      <div className="h-[70px]"></div>
      <div className="py-4 wrapper">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold capitalize p-4">Categoria: {category}</h1>
        </div>
        {/* Pasar los productos filtrados al componente ProductGrid */}
        <div className="flex">
          <div className="w-1/3 p-4 mx-auto">
            <CategoryMenu />
          </div>
          <div className="w-3/4 p-4">
            <Suspense fallback={<div>Loading...</div>}>
              <ProductCategory category={category} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
