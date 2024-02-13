import Image from "next/image";

const OfertasSection = async ({promociones1}) => {
  const promo1 = await fetch(`http://localhost:3000/api/inicio/promociones1`, { cache: "force-cache" }).then( r => r.json());
  // console.log(promo1);

  return (
    <section className="bg-white p-4 wrapper">
      <h2 className="text-xl font-bold text-azul">¡Lleva más, paga menos con estas ofertas!</h2>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {promo1.map((promocion, index) => (
          <div key={index} className="w-full">
            <div>
              <Image
                alt={`Oferta ${index + 1}`}
                className="w-full h-auto hover:shadow-lg"
                src={`/${promocion.imagen}`}
                width={500}
                height={300}
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <p className="text-center pt-4 pb-6 text-azul font-semibold">{promocion.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OfertasSection;