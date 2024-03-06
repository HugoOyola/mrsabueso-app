import Image from "next/image";
import Link from "next/link";

import PetProducts from "@/components/uiPetType/PetProducts";
import PetCategory from "@/components/uiPetType/PetMenu";

// Esta función capitaliza la primera letra de una cadena
// function capitalize(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// export async function generateMetadata({ params, searchParams }, parent) {
//   return {
//     title: `Mr. Sabueso - ${capitalize(params.petType)}`,
//     description: `Productos para tu ${capitalize(params.petType)}`,
//   };
// }

export default function PetPageCategory({ params }) {
  const { petType } = params;

  return (
    <div className="bg-white">
      <div className="h-[70px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Image src={`/category/hero-${params.petType}.jpg`} alt={`Cabecera de ${params.petType}`} width={1100} height={100} className="w-full h-25 mb-2 mt-6" />
        <PetCategory petType={petType} />
        <PetProducts petType={petType} />
      </div>
    </div>
  );
}
