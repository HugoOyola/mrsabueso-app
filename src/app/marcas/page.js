
import Image from "next/image";

export default function MarcasPage() {
  return (
  <div className="bg-white">
    <div className="h-[70px]"></div>
    <div className="bg-salmon">
      <div className="flex items-center justify-between wrapper">
        <Image src="/slider-marcas.png" alt="Logo" height="100" width="400" />
        <h1 className=" text-5xl font-semibold text-white text-left">La tienda para mascotas felices</h1>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold text-gray-700 mb-4">Todas las Marcas</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pb-14">
        <div className="flex flex-col items-center justify-center p-8">
          <Image
            alt="Brand 1"
            className="mb-2"
            src="/brands/logo-bravery.jpg"
            width="150"
            height="100"
          />
          <h2 className="text-lg font-semibold text-gray-700">Brand 1</h2>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <Image
            alt="Brand 2"
            className="mb-4"
            height="100"
            width="150"
            src="/brands/logo-canbo.jpg"
          />
          <h2 className="text-lg font-semibold text-gray-700">Brand 2</h2>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <Image
            alt="Brand 3"
            className="mb-4"
            width="150"
            height="100"
            src="/brands/logo-dogxtreme.jpg"
          />
          <h2 className="text-lg font-semibold text-gray-700">Brand 3</h2>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <Image
            alt="Brand 4"
            className="mb-4"
            height="100"
            src="/brands/logo-hills.jpg"
            width="150"
          />
          <h2 className="text-lg font-semibold text-gray-700">Brand 4</h2>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <Image
            alt="Brand 5"
            className="mb-4"
            height="100"
            src="/brands/logo-nath.jpg"
            width="150"
          />
          <h2 className="text-lg font-semibold text-gray-700">Brand 5</h2>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <Image
            alt="Brand 6"
            className="mb-4"
            width="150"
            height="100"
            src="/brands/logo-pro-plan.jpg"
          />
          <h2 className="text-lg font-semibold text-gray-700">Brand 6</h2>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <Image
            alt="Brand 7"
            className="mb-4"
            height="100"
            src="/brands/logo-true-origins.jpg"
            width="150"
          />
          <h2 className="text-lg font-semibold text-gray-700">Brand 7</h2>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <Image
            alt="Brand 8"
            className="mb-4"
            height="100"
            src="/brands/logo-wellness.jpg"
            width="150"
          />
          <h2 className="text-lg font-semibold text-gray-700">Brand 8</h2>
        </div>
      </div>
    </div>
  </div>
  )
}