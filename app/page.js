import Image from "next/image";
import {Navbar, HeroBanner} from "@/components";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroBanner/>
    </main>
  );
}
