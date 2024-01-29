import Image from "next/image";
import Carousel from "../components/Carousel";
import BannerServicios from "@/components/ui/BannerServicios";
import Brands from "@/components/ui/Brands";
import BannerNewProducts from "@/components/ui/BannerNewProducts";
import BannerSale from "@/components/ui/BannerSale";

export default function Home() {const sampleProducts = [
    {
      image: '/productos/p1.jpg',
      name: 'Alimento Premium para Gatos',
      brand: 'Whiskas',
      category: 'Alimentos',
      price: '25.99',
      onSale: true,
      newProduct: false,
    },
    {
      image: '/productos/p2.jpg',
      name: 'Shampoo Antipulgas para Perros',
      brand: 'Canbo Balance',
      category: 'Salud e Higiene',
      price: '12.49',
      onSale: false,
      newProduct: true,
    },
    {
      image: '/productos/p3.jpg',
      name: 'Juguete Interactivo para Perros',
      brand: 'Otras',
      category: 'Juguetes',
      price: '8.99',
      onSale: true,
      newProduct: false,
    },
    {
      image: '/productos/p4.jpg',
      name: 'Collar Ajustable para Gatos',
      brand: 'Canbo',
      category: 'Collares',
      price: '15.75',
      onSale: false,
      newProduct: false,
    },
    {
      image: '/productos/p5.jpg',
      name: 'Comedero Automático para Mascotas',
      brand: 'Royal Canin',
      category: 'Accesorios',
      price: '33.99',
      onSale: true,
      newProduct: true,
    },
    {
      image: '/productos/p6.jpg',
      name: 'Snacks Naturales para Perros',
      brand: 'Pedigree',
      category: 'Alimentos',
      price: '7.50',
      onSale: true,
      newProduct: false,
    },
    {
      image: '/productos/p7.jpg',
      name: 'Cepillo de Dientes para Gatos',
      brand: 'Otras',
      category: 'Salud e Higiene',
      price: '5.99',
      onSale: false,
      newProduct: true,
    },
    {
      image: '/productos/p8.jpg',
      name: 'Pelota de Goma para Perros',
      brand: 'Otras',
      category: 'Juguetes',
      price: '6.99',
      onSale: true,
      newProduct: false,
    },
    {
      image: '/productos/p9.jpg',
      name: 'Arnés Reflectante para Perros',
      brand: 'Canbo',
      category: 'Accesorios',
      price: '18.25',
      onSale: false,
      newProduct: true,
    },
    {
      image: '/productos/p10.jpg',
      name: 'Arena Aglomerante para Gatos',
      brand: 'Cat Chow',
      category: 'Salud e Higiene',
      price: '14.99',
      onSale: true,
      newProduct: false,
    },
    {
      image: '/productos/p11.jpg',
      name: 'Peluche para Gatos',
      brand: 'Otras',
      category: 'Juguetes',
      price: '9.99',
      onSale: false,
      newProduct: false,
    },
    {
      image: '/productos/p12.jpg',
      name: 'Correa Extensible para Perros',
      brand: 'Royal Canin',
      category: 'Accesorios',
      price: '22.50',
      onSale: true,
      newProduct: true,
    },
    {
      image: '/productos/p13.jpg',
      name: 'Hueso Dental para Perros',
      brand: 'Pedigree',
      category: 'Alimentos',
      price: '11.49',
      onSale: false,
      newProduct: false,
    },
    {
      image: '/productos/p14.jpg',
      name: 'Cama Suave para Gatos',
      brand: 'Otras',
      category: 'Accesorios',
      price: '29.99',
      onSale: true,
      newProduct: true,
    },
    {
      image: '/productos/p15.jpg',
      name: 'Juguete Pelota con Campana para Gatos',
      brand: 'Whiskas',
      category: 'Juguetes',
      price: '4.99',
      onSale: false,
      newProduct: true,
    },
    {
      image: '/productos/p16.jpg',
      name: 'Bolsa de Transporte para Perros',
      brand: 'Canbo',
      category: 'Accesorios',
      price: '35.75',
      onSale: true,
      newProduct: true,
    },
  ];

  return (
    <main>
      <div className="h-[70px]"></div>
      <section className="bg-slate-200">
        <h1 className="text-2xl text-azul font-bold wrapper p-4">La tienda para mascotas felices</h1>
      </section>
      <Carousel />
      <BannerServicios />
      <Brands />
      <BannerNewProducts products={sampleProducts} />
      <BannerSale />
      <section className="bg-white p-6 wrapper">
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
      <section className="bg-[#f4f4f4]">
        <div className="grid grid-cols-4 p-4 gap-4 wrapper">
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
