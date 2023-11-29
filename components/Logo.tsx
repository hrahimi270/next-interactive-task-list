import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex justify-center mb-4">
      <Image src="/logo.svg" width={64} height={64} alt="Interactive Task List" className="max-w-full h-16" />
    </div>
  );
}
