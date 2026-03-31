import Image from "next/image";
import Header from "@/componets/Header"
import Hero from "@/componets/Hero"
import ProcessFeed from "@/componets/ProcessFeed"
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ProcessFeed />
    </div>

  );
}
