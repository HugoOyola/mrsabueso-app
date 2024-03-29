import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function GET(_, { params }) {
  const { petType } = params;
  const productsRef = collection(db, "productos");
  const q = petType === "perro" || petType === "gato"
    ? query(productsRef, where("petType", "==", petType))
    : productsRef;

  const querySnapshot = await getDocs(q);

  const docs = querySnapshot.docs.map((doc) => doc.data());

  return NextResponse.json(docs);
}
