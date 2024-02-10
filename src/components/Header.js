"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "./Header.css"

const links = [
  {
    href: "/",
    label: "Inicio",
  },
  {
    href: "/perros",
    label: "Perros",
  },
  {
    href: "/gatos",
    label: "Gatos",
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

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http:www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http:www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http:www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
