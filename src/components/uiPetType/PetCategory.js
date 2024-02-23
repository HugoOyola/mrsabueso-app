import Image from "next/image"

const PetCetgory = () => {
  return (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 py-6">
    <div className="flex flex-col items-center text-center">
      <Image src="/category/perro-alimento.jpg" height="100" width="120" alt="Alimento" className="w-17 h-17 object-cover rounded-full" />
      <h3 className="text-lg font-semibold mt-4">Alimento</h3>
    </div>
    <div className="flex flex-col items-center text-center">
      <Image src="/category/perro-farmacia.jpg" height="100" width="120" alt="Salud e Higiene" className="w-17 h-17 object-cover rounded-full" />
      <h3 className="text-lg font-semibold mt-4">Salud e Higiene</h3>
    </div>
    <div className="flex flex-col items-center text-center">
      <Image src="/category/perro-accesorios.jpg" height="100" width="120" alt="Accesorios y otros" className="w-17 h-17 object-cover rounded-full" />
      <h3 className="text-lg font-semibold mt-4">Accesorios y otros</h3>
    </div>
    <div className="flex flex-col items-center text-center">
      <Image src="/category/perro-juguetes.jpg" height="100" width="120" alt="Juguetes" className="w-17 h-17 object-cover rounded-full" />
      <h3 className="text-lg font-semibold mt-4">Juguetes</h3>
    </div>
    <div className="flex flex-col items-center text-center">
      <Image src="/category/perro-correas.jpg" height="100" width="120" alt="Collares" className="w-17 h-17 object-cover rounded-full" />
      <h3 className="text-lg font-semibold mt-4">Collares</h3>
    </div>
  </div>
  )
}

export default PetCetgory