import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-2">
      <h1>student attendance tracking</h1>
      <div className="flex gap-2">
      <Card className="w-[400px] h-[400px] bg-slate-300"/>
      <Card className="w-[400px] h-[400px] bg-red-600"/>
      <Card className="w-[400px] h-[400px] bg-red-600"/>
      <Card className="w-[400px] h-[400px] bg-red-600"/>
      </div>
      <Button className="bg-blue-500">Subscribe</Button>

    </main>
  );
}
