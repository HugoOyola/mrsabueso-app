import { NextResponse } from "next/server";
import { collection, getDocs } from "firebase/firestore";
import {db} from "@/firebase/config";

export async function GET(_,) {
  const productsRef = collection(db, "promociones");
  const querySnapshot = await getDocs(productsRef);
  const promos = querySnapshot.docs.map((doc) => doc.data());

  return NextResponse.json(promos);
}