import Image from "next/image";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <main>
      <div className="h-[70px]"></div>
      <section className="p-4 bg-slate-200">
        <h1 className="text-2xl text-azul font-bold">La tienda para mascotas felices</h1>
      </section>
      <Carousel />
      <section className="flex w-full p-4 justify-between items-center h-26 bg-salmon text-white">
        <div className="flex items-center space-x-2">
          <TruckIcon className="text-white h-8 w-8" />
          <div>
            <h2 className="font-bold">Despacho Gratis</h2>
            <p className="text-xs">Por compras mayores a S/90.</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <ClockIcon className="text-white h-8 w-8" />
          <div>
            <h2 className="font-bold">Delivery Express</h2>
            <p className="text-xs">Tu pedido en menos de 2 horas</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <StoreIcon className="text-white h-8 w-8" />
          <div>
            <h2 className="font-bold">Retiro en tienda</h2>
            <p className="text-xs">Servicio gratuito de retiro en tienda.</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <HelpCircleIcon className="text-white h-8 w-8" />
          <div>
            <h2 className="font-bold">Asesoria Especializada</h2>
            <p className="text-xs">Recibe asesoramiento personalizado.</p>
          </div>
        </div>
      </section>
      <section className="bg-white p-6 ">
        <h2 className="text-xl font-bold">Las marcas favoritas de tu mascota </h2>
        <div className="flex justify-between mt-2 grid-cols-6 gap-4">
          <div className="brand-img brand1"></div>
          <div className="brand-img brand2"></div>
          <div className="brand-img brand3"></div>
          <div className="brand-img brand4"></div>
          <div className="brand-img brand5"></div>
          <div className="brand-img brand6"></div>
          <div className="brand-img brand7"></div>
          <div className="brand-img brand8"></div>
        </div>
      </section>
      <section className="p-8">
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
      </section>
      <section className="p-8">
        {/* Banner de ofertas */}
        <div className="bg-salmon text-white p-4 mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-2xl text-white font-bold">¡Ofertas Especiales!</h2>
            <p>Aprovecha estas increíbles ofertas por tiempo limitado.</p>
          </div>
          <button className="bg-mostaza text-white text-lg font-bold px-6 py-2 rounded- hover:bg-red-600 uppercase">
            Ver Ofertas
          </button>
        </div>
        {/* Tarjetas de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-4 shadow-md transition-transform transform hover:scale-105">
            <Image
              src="/productos/p1.jpg"
              width={300}
              height={300}
              alt="Producto 1"
              className="w-full h-48 md:h-64 lg:h-80 object-cover mb-2"
            />
            <div className="bg-red-500 text-white px-2 py-1 rounded absolute top-0 left-0">
              Oferta
            </div>
            <h3 className="text-lg font-bold mb-2">Producto 1</h3>
            <p className="text-gray-600 mb-2">Marca 1</p>
            <div className="flex mb-2">
              <del className="text-gray-500 mr-2">S/. 129.99</del>
              <p className="text-lg font-bold text-red-500">S/. 99.99</p>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 w-full rounded hover:bg-red-600">
              Ver Detalles
            </button>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-4 shadow-md transition-transform transform hover:scale-105">
            <Image
              src="/productos/p2.jpg"
              width={300}
              height={300}
              alt="Producto 1"
              className="w-full h-48 md:h-64 lg:h-80 object-cover mb-2"
            />
            <div className="bg-red-500 text-white px-2 py-1 rounded absolute top-0 left-0">
              Oferta
            </div>
            <h3 className="text-lg font-bold mb-2">Producto 1</h3>
            <p className="text-gray-600 mb-2">Marca 1</p>
            <div className="flex mb-2">
              <del className="text-gray-500 mr-2">S/. 129.99</del>
              <p className="text-lg font-bold text-red-500">S/. 99.99</p>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 w-full rounded hover:bg-red-600">
              Ver Detalles
            </button>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-4 shadow-md transition-transform transform hover:scale-105">
            <Image
              src="/productos/p3.jpg"
              width={300}
              height={300}
              alt="Producto 1"
              className="w-full h-48 md:h-64 lg:h-80 object-cover mb-2"
            />
            <div className="bg-red-500 text-white px-2 py-1 rounded absolute top-0 left-0">
              Oferta
            </div>
            <h3 className="text-lg font-bold mb-2">Producto 1</h3>
            <p className="text-gray-600 mb-2">Marca 1</p>
            <div className="flex mb-2">
              <del className="text-gray-500 mr-2">S/. 129.99</del>
              <p className="text-lg font-bold text-red-500">S/. 99.99</p>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 w-full rounded hover:bg-red-600">
              Ver Detalles
            </button>
          </div>
          {/* Card 4 */}
          <div className="bg-white p-4 shadow-md transition-transform transform hover:scale-105">
            <Image
              src="/productos/p4.jpg"
              width={300}
              height={300}
              alt="Producto 1"
              className="w-full h-48 md:h-64 lg:h-80 object-cover mb-2"
            />
            <div className="bg-red-500 text-white px-2 py-1 rounded absolute top-0 left-0">
              Oferta
            </div>
            <h3 className="text-lg font-bold mb-2">Producto 1</h3>
            <p className="text-gray-600 mb-2">Marca 1</p>
            <div className="flex mb-2">
              <del className="text-gray-500 mr-2">S/. 129.99</del>
              <p className="text-lg font-bold text-red-500">S/. 99.99</p>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 w-full rounded hover:bg-red-600">
              Ver Detalles
            </button>
          </div>
        </div>
      </section>
      <section className="bg-white p-6">
        <h2 className="text-xl font-bold text-azul">¡Lleva más, paga menos con estas ofertas!</h2>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="w-full">
            <div>
              <Image
                layout="responsive"
                alt="Oferta 1"
                className="w-full h-auto"
                src="/banner-oferta-snacks.jpg"
                width={500} // el ancho original de la imagen
                height={300} // el alto original de la imagen
                sizes="(min-width: 768px) 33vw, 100vw" // el tamaño de la imagen en diferentes resoluciones
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <p className="text-center pt-4 pb-6 text-azul">Ofertas en alimentos seleccionados</p>
            </div>
          </div>
          <div className="w-full">
            <div>
              <Image
                layout="responsive"
                alt="Oferta 2"
                className="w-full h-auto"
                src="/banner-juguetes.jpg"
                width={500} // el ancho original de la imagen
                height={300} // el alto original de la imagen
                sizes="(min-width: 768px) 33vw, 100vw" // el tamaño de la imagen en diferentes resoluciones
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <p className="text-center pt-4 pb-6 text-azul">Descuentos únicos en juguetes seleccionados</p>
            </div>
          </div>
          <div className="w-full">
            <div>
              <Image
                layout="responsive"
                alt="Oferta 3"
                className="w-full h-auto"
                src="/banner-alimento-perro-gato.jpg"
                width={500} // el ancho original de la imagen
                height={300} // el alto original de la imagen
                sizes="(min-width: 768px) 33vw, 100vw" // el tamaño de la imagen en diferentes resoluciones
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <p className="text-center pt-4 pb-6 text-azul">Combos especiales para tu mascota</p>
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="w-full">
            <div>
              <Image
                layout="responsive"
                alt="Oferta 1"
                className="w-full h-auto"
                src="/banner-peluqueria.jpg"
                width={500} // el ancho original de la imagen
                height={300} // el alto original de la imagen
                sizes="(min-width: 768px) 33vw, 100vw" // el tamaño de la imagen en diferentes resoluciones
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <Image
                layout="responsive"
                alt="Oferta 1"
                className="w-full h-auto"
                src="/banner-verano-home.jpg"
                width={500} // el ancho original de la imagen
                height={300} // el alto original de la imagen
                sizes="(min-width: 768px) 33vw, 100vw" // el tamaño de la imagen en diferentes resoluciones
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f4f4] p-4">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <Image
              src="/banner-1.jpg"
              width={300}
              height={300}
              alt="Producto Antipulgas"
              className="w-full h-auto"
            />
            <p className="text-center">Todos en antipulgas</p>
          </div>
          <div>
            <Image
              alt="Producto Arenas y pañales"
              className="w-full h-auto"
              src="/banner-2.jpg"
              width={300}
              height={300}
            />
            <p className="text-center">Ahorra más en arenas y pañales</p>
          </div>
          <div>
            <Image
              alt="Producto Alimento perro"
              className="w-full h-auto"
              src="/banner-3.jpg"
              width={300}
              height={300}
            />
            <p className="text-center">Las mejores marcas en alimento</p>
          </div>
          <div>
            <Image
              alt="Producto Alimento gato"
              className="w-full h-auto"
              src="/banner-4.jpg"
              width={300}
              height={300}
            />
            <p className="text-center">Lo que necesitas al mejor de tu gato</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function HelpCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function StoreIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  );
}

function TruckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
      <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
      <circle cx="7" cy="18" r="2" />
      <path d="M15 18H9" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  );
}
