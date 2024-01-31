import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer(){
  return (
  <footer className="bg-gray-900 text-white p-8">
    <div className="container mx-auto flex flex-wrap">
      {/* Logo y descripción */}
      <div className="w-full md:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
        <Link href={'/'}>
          <Image src="/logo-blanco.png" alt="Logo" className="mb-4 w-[200px]" width={200} height={200}/>
        </Link>
        <p className="text-sm">En nuestra tienda online tenemos todo lo que tu mascota necesita: comida, accesorios, juguetes y ropa de calidad. Disfruta de envío rápido, precios bajos y atención al cliente. Visítanos y sorpréndete con nuestra variedad de productos.
</p>
      </div>

      {/* Acerca de Mr. Sabueso */}
      <div className="w-full md:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
        <h4 className="font-bold mb-4">Acerca de Mr. Sabueso</h4>
        <ul className="text-sm">
          <li>Trabaja con nosotros</li>
          <li>Política de Privacidad</li>
          <li>Eventos y actividades</li>
          <li>Jornadas de adopción</li>
        </ul>
      </div>

      {/* Guía de Compra */}
      <div className="w-full md:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
        <h4 className="font-bold mb-4">Guía de Compra</h4>
        <ul className="text-sm">
          <li>Información de Envío</li>
          <li>Preguntas Frecuentes</li>
          <li>Términos y Condiciones de uso</li>
          <li>Libro de reclamaciones</li>
          <li>Mr. Puntos</li>
          <li>Legales Campañas 2024</li>
        </ul>
      </div>

      {/* Redes sociales */}
      <div className="w-full md:w-1/2 lg:w-1/4">
        <h4 className="font-bold mb-4">Redes sociales</h4>
        <ul className="text-sm">
          <li>Twitter</li>
          <li>Facebook</li>
          <li>YouTube</li>
        </ul>
      </div>
    </div>

    {/* Separador */}
    <div className="container mx-auto my-6 border-t border-gray-700"></div>

    {/* Texto de derechos reservados con color diferente */}
    <div className="container mx-auto mt-6 text-center">
      <p className="text-sm text-gray-400">© Mr. Sabueso 2024 - Todos los derechos reservados</p>
    </div>
  </footer>
  );
};

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
  )
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
  )
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
  )
}