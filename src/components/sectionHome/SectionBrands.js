export default function SectionBrands() {
  const imageBrands = [
    {
      brand: "/brands/logo-bravery.jpg",
    },
    {
      brand: "/brands/logo-canbo.jpg",
    },
    {
      brand: "/brands/logo-dogxtreme.jpg",
    },
    {
      brand: "/brands/logo-hills.jpg",
    },
    {
      brand: "/brands/logo-nath.jpg",
    },
    {
      brand: "/brands/logo-pro-plan.jpg",
    },
    {
      brand: "/brands/logo-true-origins.jpg",
    },
    {
      brand: "/brands/logo-wellness.jpg",
    },
  ];

  return (
    <section className="bg-white p-4 wrapper">
      <h2 className="text-xl font-bold">Las marcas favoritas de tu mascota </h2>
      <div className="flex justify-between mt-2 grid-cols-6 gap-4">
        {imageBrands.map((image, index) => (
          <div
            key={index}
            className={`brand-img brand${index + 1}`}
            style={{ backgroundImage: `url('${image.brand}')` }}
          ></div>
        ))}
      </div>
    </section>
  );
}
