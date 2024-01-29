import Image from "next/image";
const ProductDetail = ({ params }) => {
  return (
    <div className="bg-white wrapper">
      <div className="h-[70px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 py-6">
          <Image
            alt="Product Image"
            className="w-full h-auto object-cover rounded-lg"
            height="500"
            src="/productos/p1.jpg"
            width="500"
          />
        </div>
        <div className="w-full md:w-1/2 py-6 pl-4">
          <h2 className="text-2xl font-semibold mb-4">{params.slug}</h2>
          <p className="text-lg text-gray-600 mb-4">This is a wonderful product for your pet. It has all the features that your pet will love and enjoy.</p>
          <p className="text-red-500 font-semibold text-2xl mb-4">S/. 100.00</p>
          <p className="text-gray-400 line-through mb-4">S/. 250.00</p>
          <div className="flex items-center gap-4">
            <button className="bg-salmon text-white text-lg font-bold px-6 py-2 rounded- hover:bg-red-600 uppercase">
              Agregar al Carrito
            </button>
            <input className="w-20 border rounded-lg text-center" defaultValue="1" min="1" type="number" />
          </div>
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
};

export default ProductDetail;
