"use client";

import { useState } from "react";
import Boton from "../ui/Boton";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/firebase/config";

import GoBack from "@/components/ui/GoBack";

const updateProduct = async (slug, values, file) => {
  let fileURL = values.image;

  if (file) {
    const storageRef = ref(storage, slug);
    const fileSnapshot = await uploadBytes(storageRef, file);
    fileURL = await getDownloadURL(fileSnapshot.ref);
  }

  const docRef = doc(db, "productos", slug);
  return updateDoc(docRef, {
    ...values,
    image: fileURL
  }).then(() => console.log("Producto actualizado correctamente"));
};

const EditForm = ({ item }) => {
  const { brand, category, description, name, newProduct, onSale, stock, price, petType, slug, image } = item;
  const [values, setValues] = useState({ brand, category, description, name, newProduct, onSale, stock, price, petType, slug, image });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateProduct(item.slug, values, file);
  };

  return (
    <div className="container m-auto mt-6 max-w-lg">
      <GoBack className="text-sm text-blue-500 underline mb-6"/>
      <h1 className="text-xl text-center uppercase font-semibold">Editar Producto</h1>
      <form onSubmit={handleSubmit} className="my-8">
        <label>Slug: </label>
        <input type="text" value={values.slug} required className="p-2 rounded w-full border border-blue-100 block my-4" name="slug" onChange={handleChange} />

        <label>Marca: </label>
        <input type="text" value={values.brand} required className="p-2 rounded w-full border border-blue-100 block my-4" name="brand" onChange={handleChange} />

        <label>Categoria: </label>
        <input type="text" value={values.category} required className="p-2 rounded w-full border border-blue-100 block my-4" name="category" onChange={handleChange} />

        <label>Imagen: </label>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} className="p-2 rounded w-full border border-blue-100 block my-4" />

        <label>Nombre: </label>
        <input type="text" value={values.name} required className="p-2 rounded w-full border border-blue-100 block my-4" name="name" onChange={handleChange} />

        <label>Precio: </label>
        <input type="number" value={values.price} required className="p-2 rounded w-full border border-blue-100 block my-4" name="price" onChange={handleChange} />

        <label>Stock: </label>
        <input type="number" value={values.stock} required className="p-2 rounded w-full border border-blue-100 block my-4" name="stock" onChange={handleChange} />

        <label>Descripción: </label>
        <textarea value={values.description} className="resize-none w-full h-24 p-2 rounded border block border-blue-100 my-4" name="description" onChange={handleChange} />

        <label>Tipo de Mascota: </label>
        <input type="text" value={values.petType} required className="p-2 rounded w-full border border-blue-100 block my-4" name="petType" onChange={handleChange} />

        <div className="flex my-4 justify-between">
          <label>
            Nuevo Producto:
            <input type="checkbox" className="mx-2" checked={values.newProduct} onChange={(e) => setValues({ ...values, newProduct: e.target.checked })} />
          </label>
          <label>
            En Oferta:
            <input type="checkbox" className="mx-2" checked={values.onSale} onChange={(e) => setValues({ ...values, onSale: e.target.checked })} />
          </label>
        </div>
        <Boton type="submit">Enviar</Boton>
      </form>
    </div>
  );
};

export default EditForm;
