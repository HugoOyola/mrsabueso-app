import Carousel from "@/components/Carousel";
import SectionServices from "@/components/ui/SectionServices";
import SectionBrands from "@/components/ui/SectionBrands";
import SectionNewProducts from "@/components/ui/SectionNewProducts";
import SectionSale from "@/components/ui/SectionSale";
import SectionPromo from "@/components/ui/SectionPromo";
import SectionPromo2 from "@/components/ui/SectionPromo2";

export default function Home() {
  const sampleProducts = [
    {
      image: "/productos/p1.jpg",
      name: "Alimento Premium para Gatos",
      brand: "Whiskas",
      category: "Alimentos",
      price: "25.99",
      onSale: true,
      newProduct: false,
    },
    {
      image: "/productos/p2.jpg",
      name: "Shampoo Antipulgas para Perros",
      brand: "Canbo Balance",
      category: "Salud e Higiene",
      price: "12.49",
      onSale: false,
      newProduct: true,
    },
    {
      image: "/productos/p3.jpg",
      name: "Juguete Interactivo para Perros",
      brand: "Otras",
      category: "Juguetes",
      price: "8.99",
      onSale: true,
      newProduct: false,
    },
    {
      image: "/productos/p4.jpg",
      name: "Collar Ajustable para Gatos",
      brand: "Canbo",
      category: "Collares",
      price: "15.75",
      onSale: false,
      newProduct: false,
    },
    {
      image: "/productos/p5.jpg",
      name: "Comedero Automático para Mascotas",
      brand: "Royal Canin",
      category: "Accesorios",
      price: "33.99",
      onSale: true,
      newProduct: true,
    },
    {
      image: "/productos/p6.jpg",
      name: "Snacks Naturales para Perros",
      brand: "Pedigree",
      category: "Alimentos",
      price: "7.50",
      onSale: true,
      newProduct: false,
    },
    {
      image: "/productos/p7.jpg",
      name: "Cepillo de Dientes para Gatos",
      brand: "Otras",
      category: "Salud e Higiene",
      price: "5.99",
      onSale: false,
      newProduct: true,
    },
    {
      image: "/productos/p8.jpg",
      name: "Pelota de Goma para Perros",
      brand: "Otras",
      category: "Juguetes",
      price: "6.99",
      onSale: true,
      newProduct: false,
    },
    {
      image: "/productos/p9.jpg",
      name: "Arnés Reflectante para Perros",
      brand: "Canbo",
      category: "Accesorios",
      price: "18.25",
      onSale: false,
      newProduct: true,
    },
    {
      image: "/productos/p10.jpg",
      name: "Arena Aglomerante para Gatos",
      brand: "Cat Chow",
      category: "Salud e Higiene",
      price: "14.99",
      onSale: true,
      newProduct: false,
    },
    {
      image: "/productos/p11.jpg",
      name: "Peluche para Gatos",
      brand: "Otras",
      category: "Juguetes",
      price: "9.99",
      onSale: false,
      newProduct: false,
    },
    {
      image: "/productos/p12.jpg",
      name: "Correa Extensible para Perros",
      brand: "Royal Canin",
      category: "Accesorios",
      price: "22.50",
      onSale: true,
      newProduct: true,
    },
    {
      image: "/productos/p13.jpg",
      name: "Hueso Dental para Perros",
      brand: "Pedigree",
      category: "Alimentos",
      price: "11.49",
      onSale: false,
      newProduct: false,
    },
    {
      image: "/productos/p14.jpg",
      name: "Cama Suave para Gatos",
      brand: "Otras",
      category: "Accesorios",
      price: "29.99",
      onSale: true,
      newProduct: true,
    },
    {
      image: "/productos/p15.jpg",
      name: "Juguete Pelota con Campana para Gatos",
      brand: "Whiskas",
      category: "Juguetes",
      price: "4.99",
      onSale: false,
      newProduct: true,
    },
    {
      image: "/productos/p16.jpg",
      name: "Bolsa de Transporte para Perros",
      brand: "Canbo",
      category: "Accesorios",
      price: "35.75",
      onSale: true,
      newProduct: true,
    },
  ];

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
      <SectionNewProducts products={sampleProducts} />
      <SectionSale products={sampleProducts} />
      <SectionPromo promociones={promociones} />
      <SectionPromo2 promociones2={promociones2} />
    </main>
  );
}
