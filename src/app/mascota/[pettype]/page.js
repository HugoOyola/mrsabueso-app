import Image from "next/image";
import Link from "next/link";

import PetProducts from "@/components/uiPetType/PetProducts";

// Esta función capitaliza la primera letra de una cadena
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `Mr. Sabueso - ${capitalize(params.petType)}`,
    description: `Productos para tu ${capitalize(params.petType)}`,
  };
}

export default function DogPage({ params }) {
  const { petType } = params;

  return (
    <div className="bg-white">
      <div className="h-[70px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Image src={`/category/hero-${params.petType}.jpg`} alt={`Cabecera de ${params.petType}`} width={1100} height={100} className="w-full h-25 mb-2 mt-6" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 py-6">
          <div className="flex flex-col items-center text-center">
            <Link href="#">
              <Image src={`/category/${params.petType}-alimento.jpg`} height="100" width="120" alt="Alimento" className="w-17 h-17 object-cover rounded-full" />
              <h3 className="text-lg font-semibold mt-4">Alimento</h3>
            </Link>
          </div>
          <div className="flex flex-col items-center text-center">
            <Link href="#">
              <Image src={`/category/${params.petType}-farmacia.jpg`} height="100" width="120" alt="Salud e Higiene" className="w-17 h-17 object-cover rounded-full" />
              <h3 className="text-lg font-semibold mt-4">Salud e Higiene</h3>
            </Link>
          </div>
          <div className="flex flex-col items-center text-center">
            <Link href={""}>
              <Image src={`/category/${params.petType}-accesorios.jpg`} height="100" width="120" alt="Accesorios y otros" className="w-17 h-17 object-cover rounded-full" />
              <h3 className="text-lg font-semibold mt-4">Accesorios y otros</h3>
            </Link>
          </div>
          <div className="flex flex-col items-center text-center">
            <Link href={""}>
              <Image src={`/category/${params.petType}-juguetes.jpg`} height="100" width="120" alt="Juguetes" className="w-17 h-17 object-cover rounded-full" />
              <h3 className="text-lg font-semibold mt-4">Juguetes</h3>
            </Link>
          </div>
          <div className="flex flex-col items-center text-center">
            <Link href={""}>
              <Image src={`/category/${params.petType}-correas.jpg`} height="100" width="120" alt="Collares" className="w-17 h-17 object-cover rounded-full" />
              <h3 className="text-lg font-semibold mt-4">Collares</h3>
            </Link>
          </div>
        </div>
        <PetProducts petType={petType} />
      </div>
    </div>
  );
}
