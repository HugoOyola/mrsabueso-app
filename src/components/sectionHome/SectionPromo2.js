import Image from 'next/image';

const PromocionesSection2 = async () => {
  const promo2 = await fetch(`http://localhost:3000/api/inicio/promociones2`, { cache: "force-cache" }).then( r => r.json());
  // console.log(promo1);

  return (
    <section className="bg-[#f4f4f4]">
      <div className="grid grid-cols-4 p-4 gap-4 wrapper">
        {promo2.map((promocion, index) => (
          <div key={index}>
            <Image
              src={`/${promocion.imagen}`}
              width={300}
              height={300}
              alt={`Promoción ${index + 1}`}
              className="w-full h-auto border rounded-sm hover:shadow-xl"
            />
            <p className="text-center pt-4">{promocion.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromocionesSection2;
