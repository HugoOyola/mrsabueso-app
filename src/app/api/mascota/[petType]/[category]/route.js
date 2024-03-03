import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function GET(_, { params }) {
  const { category, petType } = params;
  const productsRef = collection(db, "productos");

  // Filtrar por petType (perro o gato) y categoría específica
  let q;
  if (category === "todos") {
    q = query(productsRef, where("petType", "==", petType));
  } else {
    q = query(productsRef, where("petType", "==", petType), where("category", "==", category));
  }

  const querySnapshot = await getDocs(q);
  const docs = querySnapshot.docs.map((doc) => doc.data());

  return NextResponse.json(docs);
}
