import Link from "next/link";
import Image from "next/image";

const ProductsTable = async () => {
  const products = await fetch(`http://${process.env.VERCEL_URL}/api/productos/todos`, {
    cache: "no-store",
  }).then((r) => r.json());

  return (
    <div>
      <Link href={"/administrador/create"} className="rounded bg-blue-600 p-2 text-white">
        Crear nuevo
      </Link>
      <div className="">
        <table className="w-full text-xs text-left text-gray-600">
          <thead className="text-xs text-gray-700 uppercase">
            <tr>
              <th scope="col" className="px-3 py-2">
                Nombre
              </th>
              <th scope="col" className="px-3 py-2">
                Precio
              </th>
              <th scope="col" className="px-3 py-2">
                En stock
              </th>
              <th scope="col" className="px-3 py-2">
                Tipo
              </th>
              <th scope="col" className="px-3 py-2">
                Imagen
              </th>
              <th scope="col" className="px-3 py-2">
                Slug
              </th>
              <th scope="col" className="px-3 py-2">
                Descripción
              </th>
              <th scope="col" className="px-3 py-2">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.slug}>
                <td className="p-2">{product.name}</td>
                <td className="p-2">S/. {product.price}</td>
                <td className="p-2">{product.stock}</td>
                <td className="p-2">{product.petType}</td>
                <td className="p-2">
                  <Image src={`/productos/${product.image}`} alt={product.name} width={80} height={80} />
                </td>
                <td className="p-2">{product.slug}</td>
                <td className="p-2 truncate max-w-prose">{product.description}</td>
                <td className="p-2">
                  <Link href={`/administrador/edit/${product.slug}`} className="rounded bg-verde p-2 text-white">
                    Editar
                  </Link>
                  <Link href={`/administrador/delete/${product.slug}`} className="rounded bg-salmon ml-2 p-2 text-white">
                    Eliminar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsTable;
