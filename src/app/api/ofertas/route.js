import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function GET(_) {
  const productsRef = collection(db, "productos");

  // Filtramos por productos en oferta
  const q = query(productsRef, where("onSale", "==", true));

  const querySnapshot = await getDocs(q);

  const docs = querySnapshot.docs.map((doc) => doc.data());

  return NextResponse.json(docs);
}
