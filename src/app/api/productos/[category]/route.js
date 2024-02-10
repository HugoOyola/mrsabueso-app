import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from "@/firebase/config";

export async function GET(_, { params }) {
  const { category } = params;
  const productsRef = collection(db, "productos");
  const q = category === "todos" ? productsRef : query(productsRef, where("category", "==", category));

  const querySnapshot = await getDocs(q);

  const docs = querySnapshot.docs.map((doc) => doc.data());

  return NextResponse.json(docs);
}
