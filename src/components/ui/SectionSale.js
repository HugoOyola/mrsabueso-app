import ProductCard from "../ProductCard";

export default function SectionSale({ products }) {
  const newProductsToShow = products.filter((product) => product.onSale && !product.newProduct).slice(0, 4);

  return (
    <section className="p-4 wrapper">
      {/* Banner de ofertas */}
      <div className="bg-mostaza text-azul p-4 mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">¡Ofertas Especiales!</h2>
          <p>Aprovecha estas increíbles ofertas por tiempo limitado.</p>
        </div>
        <button className="bg-salmon text-white text-lg font-bold px-6 py-2 rounded- hover:bg-red-600 uppercase">Ver Ofertas</button>
      </div>
      {/* Tarjetas de productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Mostrar Tarjetas Products Sale */}
        {newProductsToShow.map((product, index) => (
          <ProductCard key={index} product={product}/>
        ))}
      </div>
    </section>
  );
}
