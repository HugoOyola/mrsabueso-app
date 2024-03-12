import EditForm from "@/components/administrador/EditForm";

const EditPage = async ({ params }) => {
  const { slug } = params;
  const item = await fetch(`http://localhost:3000/api/product/${slug}`, {
    cache: "no-store",
  }).then((res) => res.json());

  return (
    <div>
      <div className="h-[70px]"></div>
      <EditForm item={item} />
    </div>
  );
};

export default EditPage;
