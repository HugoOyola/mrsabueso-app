import Image from "next/image";
import ProductCard from "../ProductCard";

export default function BannerNewProducts({ products }) {
  // Filtra los productos que cumplen con las condiciones
  const newProductsToShow = products.filter(product => product.newProduct && !product.onSale);

  return (
    <section className="p-4 wrapper">
      {/* Banner de nuevos ingresos */}
      <div className="bg-verde text-white p-4 mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">¡Nuevos Ingresos!</h2>
          <p>Descubre nuestras últimas adiciones al catálogo.</p>
        </div>
        <button className="bg-salmon text-white text-lg font-bold px-6 py-2 rounded- hover:bg-red-600 uppercase">
          Ver Ingresos
        </button>
      </div>
      {/* Tarjetas de nuevos ingresos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Mostrar Tarjetas New Products */}
        {newProductsToShow.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
}
