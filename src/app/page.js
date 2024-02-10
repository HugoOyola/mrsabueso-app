import { productList } from "@/data/products"
import { promociones } from "@/data/promociones"
import { promociones2 } from "@/data/promociones2"

import Carousel from "@/components/Carousel";
import SectionServices from "@/components/sectionHome/SectionServices";
import SectionBrands from "@/components/sectionHome/SectionBrands";
import SectionNewProducts from "@/components/sectionHome/SectionNewProducts";
import SectionSale from "@/components/sectionHome/SectionSale";
import SectionPromo from "@/components/sectionHome/SectionPromo";
import SectionPromo2 from "@/components/sectionHome/SectionPromo2";

export default function Home() {
  return (
    <main>
      <div className="h-[70px]"></div>
      <section className="bg-slate-200">
        <h1 className="text-2xl text-azul font-bold wrapper p-4">La tienda para mascotas felices</h1>
      </section>
      <Carousel />
      <SectionServices />
      <SectionBrands />
      <SectionNewProducts products={productList}  />
      <SectionSale products={productList} />
      <SectionPromo promociones={promociones} />
      <SectionPromo2 promociones2={promociones2} />
    </main>
  );
}
