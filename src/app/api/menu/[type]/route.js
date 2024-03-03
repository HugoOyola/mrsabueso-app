import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function GET(_, { params }) {
  const { type } = params;
  const productsRef = collection(db, "pet-menu");

  // Filtramos por el tipo de mascota (perro o gato)
  const q = query(productsRef, where("type", "==", type));

  const querySnapshot = await getDocs(q);

  const docs = querySnapshot.docs.map((doc) => doc.data());

  return NextResponse.json(docs);
}
