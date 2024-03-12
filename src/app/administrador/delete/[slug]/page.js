"use client"

import React from "react";
import { db } from "@/firebase/config";
import { doc, deleteDoc } from "firebase/firestore";
import Boton from "@/components/ui/Boton";

const DeleteProduct = ({ slug, onSuccess }) => {
  const handleDelete = async () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este producto?")) {
      try {
        const docRef = doc(db, "productos", slug);
        await deleteDoc(docRef);
        console.log("Producto eliminado correctamente");
        onSuccess(); // Llama a la función onSuccess proporcionada después de eliminar el producto
      } catch (error) {
        console.error("Error al eliminar el producto:", error);
      }
    }
  };

  return <div className='wrapper p-4'>
    <div className="h-[70px]"></div>
    <Boton onClick={handleDelete}>Eliminar</Boton>
  </div>;
};

export default DeleteProduct;
