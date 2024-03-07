"use client";

import { useState } from "react";
import Boton from "../ui/Boton";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/firebase/config";

const createProduct = async (values) => {
  const docRef = doc(db, "productos", values.slug);
  return setDoc(docRef, {
    ...values,
  }).then(() => console.log("Producto creado exitosamente"));
};

const CreateForm = () => {
  const [values, setValues] = useState({
    brand: "",
    category: "",
    description: "",
    name: "",
    newProduct: false,
    onSale: false,
    stock: 0,
    price: 0,
    petType: "",
    slug: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProduct(values);
    console.log(values);
  };

  return (
    <div className="container m-auto mt-6 max-w-lg">
      <h1 className="text-xl text-center uppercase font-semibold">Registrar Producto</h1>
      <form onSubmit={handleSubmit} className="my-8">
        <label>Slug: </label>
        <input type="text" value={values.slug} required className="p-2 rounded w-full border border-blue-100 block my-4" name="slug" onChange={handleChange} />

        <label>Marca: </label>
        <input type="text" value={values.brand} required className="p-2 rounded w-full border border-blue-100 block my-4" name="brand" onChange={handleChange} />

        <label>Categoria: </label>
        <input type="text" value={values.category} required className="p-2 rounded w-full border border-blue-100 block my-4" name="category" onChange={handleChange} />

        {/* <label>Imagen: </label>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} className="p-2 rounded w-full border border-blue-100 block my-4" /> */}

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

export default CreateForm;
