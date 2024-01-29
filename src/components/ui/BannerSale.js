import Image from "next/image";

export default function BannerSale() {
  return (
    <section className="p-4 wrapper">
      {/* Banner de ofertas */}
      <div className="bg-salmon text-white p-4 mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-2xl text-white font-bold">¡Ofertas Especiales!</h2>
          <p>Aprovecha estas increíbles ofertas por tiempo limitado.</p>
        </div>
        <button className="bg-mostaza text-white text-lg font-bold px-6 py-2 rounded- hover:bg-red-600 uppercase">Ver Ofertas</button>
      </div>
      {/* Tarjetas de productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="bg-white p-4 shadow-md transition-transform transform hover:scale-105">
          <Image src="/productos/p1.jpg" width={300} height={300} alt="Producto 1" className="w-full h-48 md:h-64 lg:h-80 object-cover mb-2" />
          <div className="bg-red-500 text-white px-2 py-1 rounded absolute top-0 left-0">Oferta</div>
          <h3 className="text-lg font-bold mb-2">Producto 1</h3>
          <p className="text-gray-600 mb-2">Marca 1</p>
          <div className="flex mb-2">
            <del className="text-gray-500 mr-2">S/. 129.99</del>
            <p className="text-lg font-bold text-red-500">S/. 99.99</p>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 w-full rounded hover:bg-red-600">Ver Detalles</button>
        </div>
        {/* Card 2 */}
        <div className="bg-white p-4 shadow-md transition-transform transform hover:scale-105">
          <Image src="/productos/p2.jpg" width={300} height={300} alt="Producto 1" className="w-full h-48 md:h-64 lg:h-80 object-cover mb-2" />
          <div className="bg-red-500 text-white px-2 py-1 rounded absolute top-0 left-0">Oferta</div>
          <h3 className="text-lg font-bold mb-2">Producto 1</h3>
          <p className="text-gray-600 mb-2">Marca 1</p>
          <div className="flex mb-2">
            <del className="text-gray-500 mr-2">S/. 129.99</del>
            <p className="text-lg font-bold text-red-500">S/. 99.99</p>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 w-full rounded hover:bg-red-600">Ver Detalles</button>
        </div>
        {/* Card 3 */}
        <div className="bg-white p-4 shadow-md transition-transform transform hover:scale-105">
          <Image src="/productos/p3.jpg" width={300} height={300} alt="Producto 1" className="w-full h-48 md:h-64 lg:h-80 object-cover mb-2" />
          <div className="bg-red-500 text-white px-2 py-1 rounded absolute top-0 left-0">Oferta</div>
          <h3 className="text-lg font-bold mb-2">Producto 1</h3>
          <p className="text-gray-600 mb-2">Marca 1</p>
          <div className="flex mb-2">
            <del className="text-gray-500 mr-2">S/. 129.99</del>
            <p className="text-lg font-bold text-red-500">S/. 99.99</p>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 w-full rounded hover:bg-red-600">Ver Detalles</button>
        </div>
        {/* Card 4 */}
        <div className="bg-white p-4 shadow-md transition-transform transform hover:scale-105">
          <Image src="/productos/p4.jpg" width={300} height={300} alt="Producto 1" className="w-full h-48 md:h-64 lg:h-80 object-cover mb-2" />
          <div className="bg-red-500 text-white px-2 py-1 rounded absolute top-0 left-0">Oferta</div>
          <h3 className="text-lg font-bold mb-2">Producto 1</h3>
          <p className="text-gray-600 mb-2">Marca 1</p>
          <div className="flex mb-2">
            <del className="text-gray-500 mr-2">S/. 129.99</del>
            <p className="text-lg font-bold text-red-500">S/. 99.99</p>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 w-full rounded hover:bg-red-600">Ver Detalles</button>
        </div>
      </div>
    </section>
  );
}
