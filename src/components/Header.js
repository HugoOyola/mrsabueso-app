"use client"
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { SearchIcon, UserIcon, ShoppingCartIcon } from './IconComponents';

import "./Header.css"

const links = [
  {
    href: "/",
    label: "Inicio",
  },
  {
    href: "/mascota/perro",
    label: "Perro",
  },
  {
    href: "/mascota/gato",
    label: "Gato",
  },
  {
    href: "/productos/todos",
    label: "Productos",
  },
  {
    href: "/ofertas",
    label: "Ofertas",
  },
  {
    href: "/marcas",
    label: "Marcas",
  }
]

export default function Header() {

  const pathname = usePathname();

  return (
    <header className="flex w-full p-4 justify-between items-center bg-mostaza shadow-md px-4 fixed h-[70px] top-0 z-50">
      <div className="flex w-full p-4 justify-between items-center wrapper">
        {/* Logo de la Empresa */}
        <Link href={"/"}>
          <Image src="/logo.png" width={100} height={100} alt="Logo Mr. Sabueso" />
        </Link>
        {/* Menú */}
        <nav className="flex mx-6 text-azul">
          {
            links.map(link =>{
              return (
                <Link href={link.href} key={link.href} className={`${pathname === link.href ? 'text-salmon font-bold' : ''} ml-2 mr-4 uppercase hover:text-salmon relative group`}>
                  {link.label}
                </Link>
              )
            })
          }
        </nav>

        {/* Barra de búsqueda */}
        <form className="flex-grow mx-4 flex">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="w-full p-2 border focus:outline-none focus:border-salmon"
          />
          <button className="p-2  border-red-900 bg-salmon text-white hover:bg-red-600">
            <SearchIcon className="w-6 h-6" />
          </button>
        </form>
        <div className="flex items-center space-x-4">
          <Link href="#">
            <UserIcon className="text-gray-700 hover:text-red-600" />
          </Link>
          <Link href="/carrito">
            <div className="icon-container">
              <ShoppingCartIcon className="text-gray-700 hover:text-red-600" />
              <span className="sr-only">Shopping cart</span>
              <span className="text-sm font-bold bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center badge">
                2
              </span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}


