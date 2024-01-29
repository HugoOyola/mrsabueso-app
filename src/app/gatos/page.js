import Image from 'next/image'
import Link from 'next/link'

import ProductGrid from '@/components/ProductGrid';

export default function DogPage() {
  const sampleProducts = [
    {
      image: '/productos/p1.jpg',
      name: 'Producto 1',
      brand: 'Brand 1',
      category: 'Categoría 1',
      price: 20.99,
    },
    {
      image: '/productos/p2.jpg',
      name: 'Producto 2',
      brand: 'Brand 2',
      category: 'Categoría 2',
      price: 20.99,
    },
    {
      image: '/productos/p3.jpg',
      name: 'Producto 3',
      brand: 'Brand 3',
      category: 'Categoría 3',
      price: 20.99,
    },
    {
      image: '/productos/p4.jpg',
      name: 'Producto 4',
      brand: 'Brand 1',
      category: 'Categoría 4',
      price: 20.99,
    },
    {
      image: '/productos/p5.jpg',
      name: 'Producto 5',
      brand: 'Brand 2',
      category: 'Categoría 5',
      price: 20.99,
    },
    {
      image: '/productos/p6.jpg',
      name: 'Producto 6',
      brand: 'Brand 3',
      category: 'Categoría 6',
      price: 20.99,
    },
    {
      image: '/productos/p7.jpg',
      name: 'Producto 7',
      brand: 'Brand 1',
      category: 'Categoría 7',
      price: 20.99,
    },
    {
      image: '/productos/p8.jpg',
      name: 'Producto 8',
      brand: 'Brand 1',
      category: 'Categoría 8',
      price: 20.99,
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