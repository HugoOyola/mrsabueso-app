import Image from 'next/image';

export default function Cart() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 wrapper">
      <div className="h-[70px]"></div>
      <h2 className="text-2xl font-semibold mb-4">Carrito de Compras</h2>
      <div className="border rounded-lg p-4 space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image
              alt="Product 1"
              className="w-16 h-16 object-cover rounded-lg"
              height="100"
              src="/productos/p3.jpg"
              width="100"
            />
            <div>
              <h3 className="text-lg font-semibold">Product 1</h3>
              <p className="text-red-500 font-semibold text-xl mt-2">$200.00</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-red-500 text-white px-4 py-2">Remove</button>
            <input className="w-20 border rounded-lg text-center" defaultValue="1" min="1" type="number" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image
              alt="Product 2"
              className="w-16 h-16 object-cover rounded-lg"
              height="100"
              src="/productos/p2.jpg"
              width="100"
            />
            <div>
              <h3 className="text-lg font-semibold">Product 2</h3>
              <p className="text-red-500 font-semibold text-xl mt-2">$252.90</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-red-500 text-white px-4 py-2">Remove</button>
            <input className="w-20 border rounded-lg text-center" defaultValue="1" min="1" type="number" />
          </div>
        </div>
        <div className="text-center py-6">
          <button className="bg-red-500 text-white px-4 py-2">Comprar Ahora</button>
        </div>
      </div>
      <div className="border-t-2">
        <h2 className="text-2xl font-semibold mb-4 p-4">Productos Relacionados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 px-4">
          {/* Tarjeta 1 */}
          <div className="bg-white p-4 shadow-md transition-transform transform hover:scale-105 relative">
            <Image
              src="/productos/p5.jpg"
              width={300}
              height={300}
              alt="Nuevo Producto 1"
              className="w-full h-48 md:h-64 lg:h-80 object-cover mb-2"
            />
            <div className="bg-green-500 text-white px-2 py-1 rounded absolute top-0 left-0">
              Nuevo Ingreso
            </div>
            <h3 className="text-lg font-bold mb-2">Nuevo Producto 1</h3>
            <p className="text-gray-600 mb-2">Marca 1</p>
            <p className="text-lg font-bold text-blue-500 mb-2">S/. 129.99</p>
            <button className="bg-blue-500 text-white px-4 py-2 w-full rounded hover:bg-blue-600">
              Ver Detalles
            </button>
          </div>
          {/* Tarjeta 2 */}
          <div className="bg-white p-4 shadow-md transition-transform transform hover:scale-105 relative">
            <Image
              src="/productos/p6.jpg"
              width={300}
              height={300}
              alt="Nuevo Producto 1"
              className="w-full h-48 md:h-64 lg:h-80 object-cover mb-2"
            />
            <div className="bg-green-500 text-white px-2 py-1 rounded absolute top-0 left-0">
              Nuevo Ingreso
            </div>
            <h3 className="text-lg font-bold mb-2">Nuevo Producto 1</h3>
            <p className="text-gray-600 mb-2">Marca 1</p>
            <p className="text-lg font-bold text-blue-500 mb-2">S/. 129.99</p>
            <button className="bg-blue-500 text-white px-4 py-2 w-full rounded hover:bg-blue-600">
              Ver Detalles
            </button>
          </div>
          {/* Tarjeta 3 */}
          <div className="bg-white p-4 shadow-md transition-transform transform hover:scale-105 relative">
            <Image
              src="/productos/p7.jpg"
              width={300}
              height={300}
              alt="Nuevo Producto 1"
              className="w-full h-48 md:h-64 lg:h-80 object-cover mb-2"
            />
            <div className="bg-green-500 text-white px-2 py-1 rounded absolute top-0 left-0">
              Nuevo Ingreso
            </div>
            <h3 className="text-lg font-bold mb-2">Nuevo Producto 1</h3>
            <p className="text-gray-600 mb-2">Marca 1</p>
            <p className="text-lg font-bold text-blue-500 mb-2">S/. 129.99</p>
            <button className="bg-blue-500 text-white px-4 py-2 w-full rounded hover:bg-blue-600">
              Ver Detalles
            </button>
          </div>
          {/* Tarjeta 4 */}
          <div className="bg-white p-4 shadow-md transition-transform transform hover:scale-105 relative">
            <Image
              src="/productos/p8.jpg"
              width={300}
              height={300}
              alt="Nuevo Producto 1"
              className="w-full h-48 md:h-64 lg:h-80 object-cover mb-2"
            />
            <div className="bg-green-500 text-white px-2 py-1 rounded absolute top-0 left-0">
              Nuevo Ingreso
            </div>
            <h3 className="text-lg font-bold mb-2">Nuevo Producto 1</h3>
            <p className="text-gray-600 mb-2">Marca 1</p>
            <p className="text-lg font-bold text-blue-500 mb-2">S/. 129.99</p>
            <button className="bg-blue-500 text-white px-4 py-2 w-full rounded hover:bg-blue-600">
              Ver Detalles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
