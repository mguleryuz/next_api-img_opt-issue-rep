import Image from "next/image";

export default async function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Image src="/api/image" width="800" height="184" alt="" />
    </div>
  );
}
