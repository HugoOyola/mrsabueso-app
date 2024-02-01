import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
  <footer className="bg-black text-white py-6">
    <div className="wrapper mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 p-4">
      <div className="flex flex-col items-start">
        <Image src="/logo-blanco.png" width={150} height={50} alt="Mr. Sabueso" className="pb-4" />
        <p className="pb-4">Mr. Sabueso, tu tienda online de mascotas con todo lo que buscas: calidad, variedad, rapidez y buen precio. Entra y descubre nuestros productos.</p>
        <div className="flex space-x-4">
          <Link href="#" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon className="w-6 h-6" /></Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors"><TwitterIcon className="w-6 h-6" /></Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon className="w-6 h-6" /></Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors"><YoutubeIcon className="w-6 h-6" /></Link>
        </div>
      </div>
      <div className="flex flex-col items-start">
        <h4 className="text-lg font-semibold mb-4">Productos</h4>
        <ul className="space-y-2">
          <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Alimento para mascotas</Link></li>
          <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Salud e higiene</Link></li>
          <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Accesorios</Link></li>
          <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Jueguete</Link></li>
          <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Collares</Link></li>
        </ul>
      </div>
      <div className="flex flex-col items-start">
        <h4 className="text-lg font-semibold mb-4">Servicio al cliente</h4>
        <ul className="space-y-2">
          <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Preguntas frecuentes</Link></li>
          <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Política de devolución</Link></li>
          <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Términos y condiciones</Link></li>
          <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contacto</Link></li>
        </ul>
      </div>
      <div className="flex flex-col items-start">
        <h4 className="text-lg font-semibold mb-4">Suscríbete</h4>
        <p className="mb-4">Recibe las últimas ofertas y novedades en tu correo electrónico.</p>
        <form className="flex w-full">
          <input type="email" className="flex-1 bg-gray-700 px-4 py-2 rounded-l-md focus:outline-none" placeholder="Tu email" />
          <button type="submit" className="bg-salmon px-4 py-2 rounded-r-md focus:outline-none text-white font-semibold hover:bg-red-600">Enviar</button>
        </form>
      </div>
    </div>
    <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
      &copy; 2024 Mi Ecommerce. Todos los derechos reservados.
    </div>
  </footer>
  );
}

function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function YoutubeIcon(props) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}
function WhatsappIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M16.5 9.5c-1.2-1.2-2.8-1.8-4.5-1.8-3.6 0-6.5 2.9-6.5 6.5 0 1.7.6 3.3 1.8 4.5l-1.3 3.8 3.8-1.3c1.2 1.2 2.8 1.8 4.5 1.8 3.6 0 6.5-2.9 6.5-6.5 0-1.7-.6-3.3-1.8-4.5z" />
      <path d="M16.1 14.9l-1.8-.9c-.2-.1-.4-.3-.5-.5l-.6-1.4c-.1-.3-.4-.4-.7-.3l-1.6.4c-.3.1-.6 0-.8-.2-.2-.2-.3-.5-.2-.8l.4-1.6c.1-.3 0-.6-.3-.7l-1.4-.6c-.2-.1-.4-.3-.5-.5l-.9-1.8c-.2-.4-.8-.4-1 .1l-1.7 3.4c-.3.6-.4 1.3-.4 2 0 4.4 3.6 8 8 8 .7 0 1.4-.1 2- .4l3.4-1.7c.5-.2.5-.8.1-1z" />
    </svg>
  );
}
