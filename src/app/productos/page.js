import { productList } from "@/data/products"
import ProductGrid from "@/components/ProductGrid";
import ProductList from "@/components/ProductList";

export default function AllProducts() {
  return (
    <div className="bg-white">
      <div className="h-[70px]"></div>
      <div className="py-4 wrapper">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold p-4">Listado de Productos</h1>
        </div>
        <ProductGrid products={productList} />
      </div>
    </div>
  );
}