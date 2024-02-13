import ProductPet from "@/components/uiProducts/ProductPet";
import { Suspense } from "react";

// Esta función capitaliza la primera letra de una cadena
function capitalize (string) {
  return string.charAt (0).toUpperCase () + string.slice (1);
}

// Esta función usa el parámetro pettype y lo capitaliza
export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `Mr. Sabueso - ${capitalize (params.pettype)}`,
    description: `Productos para ${capitalize (params.pettype)}`,
  };
}


export default function AllProducts({ params }) {
  const { pettype } = params;

  return (
    <div className="bg-white">
      <div className="h-[70px]"></div>
      <div className="py-4 wrapper">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold capitalize p-4">Tipo de Mascota: {pettype}</h1>
        </div>
        {/* Pasar los productos filtrados al componente ProductGrid */}
        <div className="flex">
          <div className="w-3/4 p-4">
            <Suspense fallback={<div>Loading...</div>}>
              <ProductPet pettype={pettype} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
