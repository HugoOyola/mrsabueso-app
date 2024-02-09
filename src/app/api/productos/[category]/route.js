import { NextResponse } from "next/server";
import { productList } from "@/data/products";
import { revalidatePath, revalidateTag } from "next/cache";

const sleep = (timer) => {
  return new Promise((resolve) => setTimeout(resolve, timer));
};

export async function GET(request, { params }) {
  const { category } = params;
  const data = category === 'todos' ? productList : productList.filter((product) => product.category === category);

  await sleep(1000);

  // revalidateTag('productos');
  revalidatePath('/productos/[category]');

  return NextResponse.json(data);
}
