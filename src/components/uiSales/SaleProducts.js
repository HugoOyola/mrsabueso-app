import ProductCard from "../uiProducts/ProductCard";

const getPetProducts = async () => {
  const response = await fetch(`http://localhost:3000/api/ofertas`, { next: {
              revalidate: 3600
          }
      } )

      if (!response.ok) {
          throw new Error("Falló petición de posts")
      }

      return response.json()
  }
  // console.log(products);
  const PetProducts = async () => {
const products = await getPetProducts();
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 pb-6">
      <h2 className="text-2xl font-semibold mb-4">Mr. Ofertas 🐾</h2>
      <div className="my-4 text-azul">
        <strong>{products.length} resultados</strong>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PetProducts;
