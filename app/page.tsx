import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Operations from "@/components/Operations";
import Technology from "@/components/Technology";
import Sustainability from "@/components/Sustainability";
import Investors from "@/components/Investors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <Operations />
      <Technology />
      <Sustainability />
      <Investors />
      <Footer />
    </main>
  );
}
