import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HomeAbout from "@/components/HomeAbout";
import HomeFeaturedOps from "@/components/HomeFeaturedOps";
import HomeSustainability from "@/components/HomeSustainability";
import HomeNews from "@/components/HomeNews";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      {/* 1. Hero — full-screen image with CTA */}
      <Hero />
      {/* 2. Stats — key metrics bar */}
      <Stats />
      {/* 3. About — company story & values */}
      <HomeAbout />
      {/* 4. Featured Operations — what we do */}
      <HomeFeaturedOps />
      {/* 5. Sustainability — net-zero commitment */}
      <HomeSustainability />
      {/* 6. News — latest press / articles */}
      <HomeNews />
      {/* 7. CTA — partner / contact banner */}
      <HomeCTA />
      <Footer />
    </main>
  );
}
