import { NextResponse } from "next/server";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function GET(_) {
  const productsRef = collection(db, "productos");
  const querySnapshot = await getDocs(productsRef);
  const products = querySnapshot.docs.map((doc) => doc.data());

  return NextResponse.json(products);
}