import ProductCard from "../uiProducts/ProductCard";

const ProductList = async ({ category }) => {
  const products = await fetch(`http://localhost:3000/api/productos/${category}`, { cache: "force-cache" }).then((r) => r.json());

  console.log(products);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
      {/* <div className="text-center mt-8">
        <button className="bg-verde hover:bg-green-500 text-white font-bold py-2 px-4 rounded">Más Resultados</button>
      </div> */}
    </div>
  );
};

export default ProductList;
