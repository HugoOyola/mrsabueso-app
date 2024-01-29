import Image from 'next/image'
import Link from 'next/link'

import ProductGrid from '@/components/ProductGrid';

export default function DogPage() {
  const sampleProducts = [
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
      newProduct: false,
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
  <div className="bg-white">
    <div className="h-[70px]"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Image src='/category/hero-cats.jpg' alt='Hero Dog' width={1100} height={100} className="w-full h-25 mb-2 mt-6"/>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 py-6">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/category/gato-alimento.jpg"
            height="100"
            width="120"
            alt="Alimento"
            className="w-17 h-17 object-cover rounded-full"
          />
          <h3 className="text-lg font-semibold mt-4">Alimento</h3>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image
            src="/category/gato-farmacia.jpg"
            height="100"
            width="120"
            alt="Salud e Higiene"
            className="w-17 h-17 object-cover rounded-full"
          />
          <h3 className="text-lg font-semibold mt-4">Salud e Higiene</h3>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image
            src="/category/perro-accesorios.jpg"
            height="100"
            width="120"
            alt="Accesorios y otros"
            className="w-17 h-17 object-cover rounded-full"
          />
          <h3 className="text-lg font-semibold mt-4">Accesorios y otros</h3>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image
            src="/category/gato-juguetes.jpg"
            height="100"
            width="120"
            alt="Juguetes"
            className="w-17 h-17 object-cover rounded-full"
          />
          <h3 className="text-lg font-semibold mt-4">Juguetes</h3>
        </div>
        <div className="flex flex-col items-center text-center">
          <Image
            src="/category/gato-correas.jpg"
            height="100"
            width="120"
            alt="Collares"
            className="w-17 h-17 object-cover rounded-full"
          />
          <h3 className="text-lg font-semibold mt-4">Collares</h3>
        </div>
      </div>
       <div className="p-4">
        <ProductGrid products={sampleProducts} />
      </div>
    </div>
  </div>
  );
}