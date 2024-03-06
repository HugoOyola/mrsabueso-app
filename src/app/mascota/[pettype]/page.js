import Image from "next/image";

import PetProducts from "@/components/uiPetType/PetProducts";
// import PetMenu from "@/components/uiPetType/PetMenu";

// Esta función capitaliza la primera letra de una cadena
function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `Mr. Sabueso - Productos para ${capitalize (params.petType)}s`,
    description: `Todos los productos para tu ${capitalize (params.petType)}`,
  };
}

export default function PetPage({ params }) {
  const { petType } = params;

  return (
    <div className="bg-white">
      <div className="h-[70px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Image src={`/category/hero-${params.petType}.jpg`} alt={`Todos los productos para tu ${params.petType}`} width={1100} height={100} className="w-full h-25 mb-2 mt-6" />
        {/* <PetMenu petType={petType} />*/}
        <PetProducts petType={petType} />
      </div>
    </div>
  );
}
