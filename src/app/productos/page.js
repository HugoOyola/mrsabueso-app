import { productList } from "@/data/products";
import ProductList from "@/components/ProductList";
import CategoryMenu from "@/components/CategoryMenu";

export default function AllProducts() {
  return (
    <div className="bg-white">
      <div className="h-[70px]"></div>
      <div className="py-4 wrapper">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold p-4">Todos los Productos</h1>
        </div>
        <div className="flex">
          <div className="w-1/3 p-4 mx-auto">
            <CategoryMenu />
          </div>
          <div className="w-3/4 p-4">
            <ProductList products={productList} />
          </div>
        </div>
      </div>
    </div>
  );
}
