import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Operations from "@/components/Operations";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";
import { Globe2, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Operations | Oceanus Energy",
    description:
        "Explore Oceanus Energy's global operations spanning upstream exploration, downstream refining, and renewable energy.",
};

function GlobalReach() {
    return (
        <section className="bg-neutral-50 py-24 border-y border-neutral-100">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
                    <div className="w-full lg:w-5/12">
                        <p className="text-[11px] uppercase tracking-widest text-[#1b7fb9] font-medium">Global Reach</p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900">Active in 50+ Countries</h2>
                        <p className="mt-4 text-[14px] leading-relaxed text-neutral-500">
                            Our deeply integrated network of assets ensures supply chain resilience. From offshore platforms
                            in the North Sea to advanced refineries in Asia-Pacific, Oceanus operates where energy is needed most.
                        </p>
                        <ul className="mt-6 flex flex-col gap-3 text-[13px] text-neutral-700 font-medium">
                            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[#1b7fb9]" /> 12 Deepwater Hubs</li>
                            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[#1b7fb9]" /> 24 Global Refineries</li>
                            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[#1b7fb9]" /> 45 Renewable Projects</li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-7/12 mt-8 lg:mt-0 relative aspect-video rounded-xl bg-white shadow-sm ring-1 ring-neutral-100 overflow-hidden">
                        {/* Map placeholder simulation */}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center grayscale mix-blend-overlay" />
                        <div className="absolute top-1/4 left-1/4 h-3 w-3 rounded-full bg-[#1b7fb9] ring-4 ring-[#1b7fb9]/30 animate-pulse" />
                        <div className="absolute top-1/2 left-2/3 h-3 w-3 rounded-full bg-[#1b7fb9] ring-4 ring-[#1b7fb9]/30 animate-pulse" />
                        <div className="absolute bottom-1/3 left-1/2 h-4 w-4 rounded-full bg-[#1b7fb9]/80 ring-4 ring-[#1b7fb9]/20 animate-pulse" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function SafetyStandards() {
    const standards = [
        "Zero Incident Goal", "Automated Hazard Detection", "Continuous Training", "Rigorous Compliance Audit"
    ];
    return (
        <section className="bg-white py-24 section-divide">
            <div className="mx-auto max-w-5xl px-6 text-center">
                <div className="inline-flex items-center justify-center p-3 bg-[#1b7fb9]/10 text-[#1b7fb9] rounded-full mb-6 ring-1 ring-[#1b7fb9]/20">
                    <ShieldCheck className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Uncompromising Safety</h2>
                <p className="mt-4 mx-auto max-w-2xl text-[15px] leading-relaxed text-neutral-500">
                    Safety is our license to operate. We deploy cutting-edge AI for predictive maintenance and hazard prevention, ensuring every team member returns home safely.
                </p>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {standards.map((s, i) => (
                        <div key={i} className="flex flex-col items-center gap-3 p-6 rounded-xl bg-neutral-50 ring-1 ring-neutral-100 hover:shadow-sm hover:ring-[#1b7fb9]/20 transition-all cursor-default">
                            <CheckCircle2 className="h-5 w-5 text-[#1b7fb9]" />
                            <span className="text-[13px] font-medium text-neutral-800">{s}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function OperationsPage() {
    return (
        <main className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <PageHero
                eyebrow="What We Do"
                title="Our Operations"
                description="From deep-water exploration to renewable energy, we operate at every stage of the energy value chain."
                bgImage="/turbin.png"
                variant="image-center"
            />
            {/* 
        Symmetrical Order:
        1. PageHero (White)
        2. Operations (Grid - White)
        3. GlobalReach (Left/Right - Light Gray)
        4. SafetyStandards (Grid - White)
        5. HomeCTA (Blue Banner)
      */}
            <Operations />
            <GlobalReach />
            <SafetyStandards />
            <HomeCTA />
            <Footer />
        </main>
    );
}
