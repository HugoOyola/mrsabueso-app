import { productList } from "@/data/products"

import Carousel from "@/components/Carousel";
import SectionServices from "@/components/sectionHome/SectionServices";
import SectionBrands from "@/components/sectionHome/SectionBrands";
import SectionNewProducts from "@/components/sectionHome/SectionNewProducts";
import SectionSale from "@/components/sectionHome/SectionSale";
import SectionPromo from "@/components/sectionHome/SectionPromo";
import SectionPromo2 from "@/components/sectionHome/SectionPromo2";

export default function Home() {
  const promociones = [
    { imagen: '/banner-oferta-snacks.jpg', descripcion: 'Ofertas en alimentos seleccionados' },
    { imagen: '/banner-juguetes.jpg', descripcion: 'Descuentos únicos en juguetes seleccionados' },
    { imagen: '/banner-alimento-perro-gato.jpg', descripcion: 'Combos especiales para tu mascota' },
    // Agrega más ofertas según sea necesario
  ];

  const promociones2 = [
    { imagen: '/banner-1.jpg', descripcion: 'Todos en antipulgas' },
    { imagen: '/banner-2.jpg', descripcion: 'Ahorra más en arenas y pañales' },
    { imagen: '/banner-3.jpg', descripcion: 'Las mejores marcas en alimento perro' },
    { imagen: '/banner-4.jpg', descripcion: 'Lo que necesitas al mejor precio para tu gato' },
    // Agrega más promociones según sea necesario
  ];

  return (
    <main>
      <div className="h-[70px]"></div>
      <section className="bg-slate-200">
        <h1 className="text-2xl text-azul font-bold wrapper p-4">La tienda para mascotas felices</h1>
      </section>
      <Carousel />
      <SectionServices />
      <SectionBrands />
      <SectionNewProducts products={productList}  />
      <SectionSale products={productList} />
      <SectionPromo promociones={promociones} />
      <SectionPromo2 promociones2={promociones2} />
    </main>
  );
}
