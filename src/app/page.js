import Image from "next/image";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <main>
      <div className="h-16"></div>
      <section className="p-4 bg-slate-200">
        <h1 className="text-2xl font-bold">La tienda para mascotas felices</h1>
      </section>
      <Carousel />
      <section className="flex w-full p-4 justify-between items-center h-26 bg-[#bd1e59] text-white">
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
      <section className="p-4">
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <Image
              alt="Banner 1"
              className="w-full h-auto"
              height="300"
              src="/banner-peluqueria.jpg"
              style={{
                aspectRatio: "600/300",
                objectFit: "cover",
              }}
              width="600"
            />
          </div>
          <div className="col-span-1 grid grid-rows-2 gap-4">
            <Image
              alt="Banner 2"
              className="w-full h-auto"
              height="150"
              src="/banner-peluqueria.jpg"
              style={{
                aspectRatio: "600/150",
                objectFit: "cover",
              }}
              width="600"
            />
            <Image
              alt="Banner 3"
              className="w-full h-auto"
              height="150"
              src="/banner-verano-home.jpg"
              style={{
                aspectRatio: "600/150",
                objectFit: "cover",
              }}
              width="600"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#f4f4f4] p-4">
        <h2 className="text-xl font-bold">Las marcas favoritas de tu mascota </h2>
        <div className="mt-4 grid grid-cols-6 gap-4">
          <img
            alt="Marca 1"
            className="w-full h-auto"
            height="100"
            src="/logos/bravery.jpg"
            style={{
              aspectRatio: "150/100",
              objectFit: "cover",
            }}
            width="150"
          />
          <img
            alt="Marca 2"
            className="w-full h-auto"
            height="100"
            src="/placeholder.svg"
            style={{
              aspectRatio: "150/100",
              objectFit: "cover",
            }}
            width="150"
          />
          <img
            alt="Marca 3"
            className="w-full h-auto"
            height="100"
            src="/placeholder.svg"
            style={{
              aspectRatio: "150/100",
              objectFit: "cover",
            }}
            width="150"
          />
          <img
            alt="Marca 4"
            className="w-full h-auto"
            height="100"
            src="/placeholder.svg"
            style={{
              aspectRatio: "150/100",
              objectFit: "cover",
            }}
            width="150"
          />
          <img
            alt="Marca 5"
            className="w-full h-auto"
            height="100"
            src="/placeholder.svg"
            style={{
              aspectRatio: "150/100",
              objectFit: "cover",
            }}
            width="150"
          />
          <img
            alt="Marca 6"
            className="w-full h-auto"
            height="100"
            src="/placeholder.svg"
            style={{
              aspectRatio: "150/100",
              objectFit: "cover",
            }}
            width="150"
          />
        </div>
      </section>
      <section className="p-4">
        <h2 className="text-xl font-bold">¡Lleva más, paga menos con estas ofertas!</h2>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="w-full">
            <div>
              <img
                alt="Oferta 1"
                className="w-full h-auto"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <p>Ofertas en alimentos seleccionados</p>
            </div>
          </div>
          <div className="w-full">
            <div>
              <img
                alt="Oferta 2"
                className="w-full h-auto"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <p>Descuentos únicos en juguetes seleccionados</p>
            </div>
          </div>
          <div className="w-full">
            <div>
              <img
                alt="Oferta 3"
                className="w-full h-auto"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <p>Combos especiales para tu mascota</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f4f4f4] p-4">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <h3 className="font-bold">Antipulgas</h3>
            <img
              alt="Producto Antipulgas"
              className="w-full h-auto"
              height="150"
              src="/placeholder.svg"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150"
            />
            <p>Todos en antipulgas!</p>
          </div>
          <div>
            <h3 className="font-bold">Arenas y pañales</h3>
            <img
              alt="Producto Arenas y pañales"
              className="w-full h-auto"
              height="150"
              src="/placeholder.svg"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150"
            />
            <p>Ahorra más en arenas y pañales!</p>
          </div>
          <div>
            <h3 className="font-bold">Alimento perro</h3>
            <img
              alt="Producto Alimento perro"
              className="w-full h-auto"
              height="150"
              src="/placeholder.svg"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150"
            />
            <p>Las mejores marcas en alimento!</p>
          </div>
          <div>
            <h3 className="font-bold">Alimento gato</h3>
            <img
              alt="Producto Alimento gato"
              className="w-full h-auto"
              height="150"
              src="/placeholder.svg"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150"
            />
            <p>Lo que necesitas al mejor de tu gato!</p>
          </div>
        </div>
      </section>
      <section className="p-4">
        <h2 className="text-xl font-bold">Super Ofertas todos los días</h2>
        <div className="mt-2" variant="secondary">
          Ver ofertas
        </div>
        <div className="mt-4 grid grid-cols-4 gap-4">
          <div className="w-full">
            <div>
              <img
                alt="Producto 1"
                className="w-full h-auto"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <p>Descripción del producto 1</p>
              <p className="text-lg font-bold">S/ 59.90 - S/ 179.30</p>
              <div>Comprar</div>
            </div>
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
