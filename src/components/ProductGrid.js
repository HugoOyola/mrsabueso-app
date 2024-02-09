import ProductCard from "./ProductCard";

const getProducts = async () => {
  const response = await fetch("http://localhost:3000/api/productos", { cache: "no-store",
  next:{
    revalidate: 36000,
  }});

  if (!response.ok) {
    throw new Error("Fallo la obtencioón de productos");
  }
  return response.json();
};

const ProductGrid = async () => {
  const products = await getProducts();

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      {/* <div className="text-center mt-8">
        <button className="bg-verde hover:bg-green-500 text-white font-bold py-2 px-4 rounded">Más Resultados</button>
      </div> */}
    </div>
  );
};

export default ProductGrid;
