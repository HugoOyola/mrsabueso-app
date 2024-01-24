import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between p-4 border-b border-yellow-400 fixed w-full top-0 bg-yellow-300 z-50 h-16">
      <div className="flex space-x-8">
        <Link href='/' className="flex space-x-2 text-red-600">
          <PawPrintIcon className="h-6 w-6" />
          <h1 className="font-bold text-xl"> Mr. Sabueso</h1>
        </Link>
        <nav className="flex space-x-4 items-center">
          <Link className="text-m hover:underline hover:text-red-700" href="#">
            Nuevos productos
          </Link>
          <Link className="text-m hover:underline hover:text-red-700" href="#">
            Regalos
          </Link>
          <Link className="text-m hover:underline hover:text-red-700" href="#">
            Perros
          </Link>
          <Link className="text-m hover:underline hover:text-red-700" href="#">
            Gatos
          </Link>
          <Link className="text-m hover:underline hover:text-red-700" href="#">
            Marcas
          </Link>
          <Link className="text-m hover:underline hover:text-red-700" href="#">
            Ofertas
          </Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <input className="border px-2 py-1 text-sm" placeholder="Buscar producto" />
        <Link href="#">
          <UserIcon className="text-gray-700 hover:text-red-600" />
        </Link>
        <Link href="#">
          <ShoppingBagIcon className="text-gray-700 hover:text-red-600" />
        </Link>
      </div>
    </header>
  );
}

function ShoppingBagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function PawPrintIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="4" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="20" cy="16" r="2" />
      <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
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
