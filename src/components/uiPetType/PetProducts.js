import ProductCard from "../uiProducts/ProductCard";

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const PetProducts = async ({petType}) => {
  const products = await fetch(`http://localhost:3000/api/mascota/${petType}`, { cache: "force-cache", next:{
    tags:['productos']
  } }).then((res) => res.json());

  console.log(products);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold mb-4">Todo los productos para tu {capitalize(petType)} 🐾</h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetProducts;
