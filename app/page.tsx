import Navbar from "@/components/website/Navbar";
import Hero from "@/components/website/Hero";
import About from "@/components/website/About";
import Rooms from "@/components/website/Rooms";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
    </main>
  );
}