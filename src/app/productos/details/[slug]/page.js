import ProductDetails from "@/components/ProductDetails";

const DetailPage = ({ params }) => {
  const { slug } = params;

  return (
    <main className="container m-auto mt-10">
      <ProductDetails slug={slug} />
    </main>
  );
};

export default DetailPage;
