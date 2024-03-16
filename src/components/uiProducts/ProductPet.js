import ProductCard from "./ProductCard";

const ProductPet = async ({ pettype }) => {
  const products = await fetch(`${process.env.NEXT_URL_PROD}/mascota/${pettype}`, { cache: "force-cache", next:{
    tags:['productos']
  } }).then((res) => res.json());

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPet;
