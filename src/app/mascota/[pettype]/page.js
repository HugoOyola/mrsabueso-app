import Image from "next/image";
import PetCategory from "@/components/uiPetType/PetCategory";
import PetProducts from "@/components/uiPetType/PetProducts";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `Mr. Sabueso - Todo para tu ${params.petType}`,
    description: `Productos de la categoría ${params.petType}`,
  };
}

export default function DogPage({params}) {
  const { petType } = params;
  // const dogProductsToShow = productList.filter((product) => product.petType === "perro");

  return (
    <div className="bg-white">
      <div className="h-[70px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Image src="/category/hero-dog.jpg" alt="Hero Dog" width={1100} height={100} className="w-full h-25 mb-2 mt-6" />
        <PetCategory />
        <PetProducts petType={petType} />
      </div>
    </div>
  );
}
