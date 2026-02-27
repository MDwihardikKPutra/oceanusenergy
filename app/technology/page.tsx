import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Technology from "@/components/Technology";
import HomeNews from "@/components/HomeNews";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";
import { Cpu, ShieldAlert, Network, BrainCircuit } from "lucide-react";

export const metadata: Metadata = {
    title: "Technology | Oceanus Energy",
    description:
        "Discover the advanced technologies Oceanus Energy uses to maximize efficiency and minimize environmental impact.",
};

function InnovationLabs() {
    const labs = [
        { name: "Houston Deep-Tech", focus: "Subsea Robotics & Automated Drilling" },
        { name: "Singapore Digital Hub", focus: "AI/ML Logistics & Supply Chain" },
        { name: "London Clean-Tech", focus: "Carbon Capture Algorithms & Hydrogen" }
    ];

    return (
        <section className="bg-neutral-50 py-24 border-y border-neutral-100">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="w-full md:w-5/12">
                        <div className="inline-flex items-center justify-center p-2.5 bg-[#1b7fb9]/10 text-[#1b7fb9] rounded-lg mb-4 ring-1 ring-[#1b7fb9]/20">
                            <BrainCircuit className="h-5 w-5" />
                        </div>
                        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl text-neutral-900">Global Innovation Labs</h2>
                        <p className="mt-4 text-[14px] leading-relaxed text-neutral-500">
                            With an annual R&D budget exceeding $1.2B, Oceanus accelerates the energy transition through three strategic research centers. Our engineers prototype tomorrow's hardware and train the models that optimize today's assets.
                        </p>
                    </div>
                    <div className="w-full md:w-7/12 flex flex-col gap-3">
                        {labs.map((l, i) => (
                            <div key={i} className="flex flex-col justify-center rounded-xl bg-white p-5 ring-1 ring-neutral-100 border-l-4 border-l-[#1b7fb9] hover:shadow-sm transition-all">
                                <span className="text-[14px] font-semibold text-neutral-900">{l.name}</span>
                                <span className="text-[12px] text-neutral-500 mt-1">{l.focus}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function DataEthics() {
    return (
        <section className="bg-white py-24 section-divide">
            <div className="mx-auto max-w-5xl px-6 text-center">
                <p className="text-[11px] uppercase tracking-widest text-[#1b7fb9] font-medium">Digital Governance</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl text-neutral-900">Data Security & Ethics</h2>
                <p className="mt-4 mx-auto max-w-2xl text-[14px] leading-relaxed text-neutral-500">
                    As we digitize global assets, safeguarding operational data is paramount. We adhere to the strictest
                    international standards for cybersecurity, embedding zero-trust architecture across all platforms.
                </p>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                    {[
                        { icon: ShieldAlert, title: "Zero-Trust Security", desc: "Military-grade encryption for all field-to-cloud communications." },
                        { icon: Network, title: "Edge Analytics", desc: "Processing critical operational data securely on-site." },
                        { icon: Cpu, title: "Ethical AI", desc: "Auditable models free from bias, ensuring fair resource distribution." }
                    ].map((item, i) => (
                        <div key={i} className="rounded-xl bg-neutral-50 p-6 ring-1 ring-neutral-100 hover:ring-[#1b7fb9]/20 hover:bg-white transition-all cursor-default">
                            <div className="mb-4 inline-flex items-center justify-center p-2 rounded-lg bg-[#1b7fb9]/10 text-[#1b7fb9] ring-1 ring-[#1b7fb9]/20">
                                <item.icon className="h-5 w-5" />
                            </div>
                            <h3 className="text-[14px] font-medium text-neutral-900">{item.title}</h3>
                            <p className="mt-2 text-[12px] leading-relaxed text-neutral-500">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function TechnologyPage() {
    return (
        <main className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <PageHero
                eyebrow="Innovation"
                title="Our Technology"
                description="AI-powered seismic imaging, digital twins, and cutting-edge safety automation driving the future of energy."
                bgImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop"
                variant="image-center"
            />
            {/* 
        Symmetrical Order:
        1. PageHero (White)
        2. Technology (Grid - White)
        3. InnovationLabs (Left/Right - Light Gray)
        4. DataEthics (Grid - White)
        5. HomeNews (Grid - Light Gray)
      */}
            <Technology />
            <InnovationLabs />
            <DataEthics />
            <HomeNews />
            <HomeCTA />
            <Footer />
        </main>
    );
}
