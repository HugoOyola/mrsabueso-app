import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center">
      <Image src="/logo.png" width={250} height={250} alt="Mr. Sabueso Logo" className="animate-pulse" />
    </div>
  );
};

export default Loading;
