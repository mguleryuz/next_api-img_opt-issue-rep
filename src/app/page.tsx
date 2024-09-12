import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="slug">With Slug IMG Route</TabsTrigger>
          <TabsTrigger value="non-slug">Without Slug IMG Route</TabsTrigger>
        </TabsList>
        <TabsContent value="slug">
          <Image
            src={`/api/image/${"vercel.png"}`}
            width="800"
            height="184"
            alt=""
          />
        </TabsContent>
        <TabsContent value="non-slug">
          <Image src={`/api/image`} width="800" height="184" alt="" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
