import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-2">
      <h1>student attendance tracking</h1>
      <Card/>
      <Button className="bg-blue-500">Subscribe</Button>

    </main>
  );
}
