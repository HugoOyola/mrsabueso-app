"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"

const links = [
  { label: "Todos", href: "/productos/todos" },
  { label: "Accesorios", href: "/productos/accesorios" },
  { label: "Alimentos", href: "/productos/alimentos" },
  { label: "Salud", href: "/productos/salud" },
  { label: "Collares", href: "/productos/collares" },
  { label: "Juguetes", href: "/productos/juguetes" },
];

const CategoryMenu = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col bg-gray-200 rounded p-4">
      <p className="font-semibold text-center uppercase text-azul">Categorias</p>
      {links.map((link) => (
        <Link key={link.label} href={link.href} className={`${pathname === link.href ? "text-verde font-semibold border-b border-verde" : ""} py-2`}>
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default CategoryMenu;
