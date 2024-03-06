import ProductCard from "../uiProducts/ProductCard";

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const PetProducts = async ({ petType }) => {
  const products = await fetch(`http://localhost:3000/api/mascota/${petType}`, {
    cache: "force-cache",
    next: {
      tags: ["tipoMascota"],
    },
  }).then((res) => res.json());

  // console.log(products);

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 pb-6">
      <h2 className="text-2xl font-semibold mb-4">Todo tipo de productos para tu {capitalize(petType)} 🐾</h2>
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
