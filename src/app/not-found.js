import Link from "next/link";

export default function NotFound() {
  return (
  <section className="flex items-center h-screen p-16">
    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
      <div className="max-w-md text-center">
        <h2 className="mb-8 font-extrabold text-9xl text-salmon">
          <span className="sr-only">Error</span>404
        </h2>
        <p className="text-2xl font-semibold md:text-3xl">Lo sentimos, la página que estás buscando no se pudo encontrar.</p>
        <p className="mt-4 mb-8 dark:text-gray-400">Pero no te preocupes, puedes encontrar muchas otras cosas en nuestra página de inicio.</p>
        <Link rel="noopener noreferrer" href="/" className="bg-salmon px-8 py-3 font-semibold rounded text-white bg-primary hover:bg-red-600 uppercase">
          Regresar al home
        </Link>
      </div>
    </div>
  </section>
  );
}