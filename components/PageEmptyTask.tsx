import Image from "next/image";

export default function PageEmptyTask({
  image,
  text,
}: {
  image: string;
  text: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <Image
        src={image}
        alt={text}
        width={512}
        height={512}
        className="max-w-lg"
      />
      
      <p className="text-xl text-gray-600">{text}</p>
    </div>
  );
}
