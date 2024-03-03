import Image from "next/image"
import Link from "next/link"

const PetMenu = async ({petType}) => {
  const menus = await fetch(`http://localhost:3000/api/menu/${petType}`, { cache: "force-cache" }).then((res) => res.json());

  menus.sort((a, b) => a.label.localeCompare(b.label))

  console.log(menus);

  return (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 py-6">
    {menus.map((menu) => (
      <Link key={menu.id} href={`/macosta/${menu.type}/${menu.slug}`} className="flex flex-col items-center justify-center">
          <Image
            src={`/category/${menu.img}`}
            alt={menu.label}
            width={100}
            height={100}
            className="w-17 h-17 object-cover rounded-full hover:border-verde hover:border-4"
          />
          <p className="text-sm font-semibold mt-2">{menu.label}</p>
      </Link>
    ))}
  </div>
  )
}

export default PetMenu