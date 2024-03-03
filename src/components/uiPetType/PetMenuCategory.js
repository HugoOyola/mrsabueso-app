import Link from "next/link";
import Image from "next/image";

const PetMenuCategory = async ({ type }) => {
  const menus = await fetch(`http://localhost:3000/api/menu/${type}`, { cache: "force-cache" }).then((res) => res.json());

  console.log(menus);

  return (
    <div className="flex flex-col bg-gray-200 rounded p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 py-6">
        <ul>
          {menus.map((menu) => (
            <li key={menu.id}>
              <Link href={`/menu/${menu.type}`}>
                <a>
                  <Image src={`/images/${menu.img}`} alt={menu.label} width={100} height={100} />
                  {menu.label}
                </a>
              </Link>
            </li>
          ))}

        </ul>
      </div>
    </div>
  );
};

export default PetMenuCategory;
