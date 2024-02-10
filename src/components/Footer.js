import Link from "next/link";
import Image from "next/image";

import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from './IconComponents';

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
      &copy; 2024 Mr Sabueso - Todos los derechos reservados.
    </div>
  </footer>
  );
}
