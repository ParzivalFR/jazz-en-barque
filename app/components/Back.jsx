import { useRouter } from "next/navigation";

const Back = () => {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer px-1 bg-background rounded-md transition hover:scale-[0.96] duration-500 ease-in-out"
      onClick={() => router.back()}
    >
      <p className="text-xs lg:text-sm">RETOUR</p>
    </div>
  );
};

export default Back;
