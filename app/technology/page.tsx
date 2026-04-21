import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Technology from "@/components/Technology";
import HomeNews from "@/components/HomeNews";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";
import { Cpu, ShieldAlert, Network, BrainCircuit, Bot, Database, Zap, ArrowRight, MapPin } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

export const metadata: Metadata = {
    title: "Technology | Oceanus Energy",
    description:
        "Discover the advanced technologies Oceanus Energy uses to maximize efficiency and minimize environmental impact.",
};

function InnovationLabs() {
    const labs = [
        {
            name: "Houston Deep-Tech",
            focus: "Subsea Robotics & Automated Drilling",
            region: "Americas",
            icon: Bot,
            coords: "29.76° N, 95.37° W"
        },
        {
            name: "Singapore Digital Hub",
            focus: "AI/ML Logistics & Supply Chain",
            region: "Asia Pacific",
            icon: Database,
            coords: "1.35° N, 103.82° E"
        },
        {
            name: "London Clean-Tech",
            focus: "Carbon Capture Algorithms & Hydrogen",
            region: "Europe",
            icon: Zap,
            coords: "51.51° N, 0.13° W"
        }
    ];

    return (
        <section className="bg-neutral-50 py-24 border-y border-neutral-100">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    <ScrollReveal direction="left" className="w-full lg:w-5/12">
                        <div className="inline-flex items-center justify-center p-2.5 bg-[#1b7fb9]/10 text-[#1b7fb9] rounded-lg mb-6 ring-1 ring-[#1b7fb9]/20">
                            <BrainCircuit className="h-5 w-5" />
                        </div>
                        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Global Innovation Labs</h2>
                        <p className="mt-5 text-[15px] leading-relaxed text-neutral-500">
                            With an annual R&D budget exceeding $1.2B, Oceanus accelerates the energy transition through three strategic research centers. Our engineers prototype tomorrow's hardware and train the models that optimize today's assets.
                        </p>

                        <div className="mt-8 flex flex-col gap-4 border-l border-neutral-200 pl-6">
                            <div className="flex flex-col">
                                <span className="text-[20px] font-semibold text-neutral-900">120+</span>
                                <span className="text-[12px] text-neutral-500 uppercase tracking-wider">Patents Filed 2024</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[20px] font-semibold text-neutral-900">$1.2B</span>
                                <span className="text-[12px] text-neutral-500 uppercase tracking-wider">Annual R&D Spends</span>
                            </div>
                        </div>
                    </ScrollReveal>

                    <StaggerContainer className="w-full lg:w-7/12 flex flex-col gap-4">
                        {labs.map((l, i) => (
                            <StaggerItem key={i}>
                                <div className="group relative flex items-center gap-5 rounded-2xl bg-white p-6 ring-1 ring-neutral-200/60 transition-all duration-300 hover:ring-[#1b7fb9]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                                    {/* Accent Gradient Line */}
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-[3px] bg-gradient-to-b from-[#1b7fb9] to-[#1b7fb9]/30 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-50 text-[#1b7fb9] ring-1 ring-neutral-100 transition-all duration-300 group-hover:bg-[#1b7fb9] group-hover:text-white group-hover:scale-110">
                                        <l.icon className="h-5 w-5" />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-0.5">
                                            <span className="text-[14px] font-semibold text-neutral-900 truncate">{l.name}</span>
                                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-neutral-100 text-neutral-500 font-medium whitespace-nowrap uppercase tracking-tight">{l.region}</span>
                                        </div>
                                        <p className="text-[13px] text-neutral-500 line-clamp-1">{l.focus}</p>
                                        
                                        <div className="mt-2 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                                            <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 font-mono">
                                                <MapPin className="h-3 w-3" />
                                                {l.coords}
                                            </div>
                                            <div className="h-1 w-1 rounded-full bg-neutral-300" />
                                            <span className="text-[11px] font-medium text-[#1b7fb9] flex items-center gap-1 cursor-pointer hover:underline">
                                                Lab Profile <ArrowRight className="h-3 w-3" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </div>
        </section>
    );
}

function DataEthics() {
    return (
        <section className="bg-white py-24 section-divide">
            <div className="mx-auto max-w-5xl px-6 text-center">
                <ScrollReveal>
                    <p className="text-[11px] uppercase tracking-widest text-[#1b7fb9] font-medium">Digital Governance</p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl text-neutral-900">Data Security & Ethics</h2>
                    <p className="mt-4 mx-auto max-w-2xl text-[14px] leading-relaxed text-neutral-500">
                        As we digitize global assets, safeguarding operational data is paramount. We adhere to the strictest
                        international standards for cybersecurity, embedding zero-trust architecture across all platforms.
                    </p>
                </ScrollReveal>
                <StaggerContainer className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                    {[
                        { icon: ShieldAlert, title: "Zero-Trust Security", desc: "Military-grade encryption for all field-to-cloud communications." },
                        { icon: Network, title: "Edge Analytics", desc: "Processing critical operational data securely on-site." },
                        { icon: Cpu, title: "Ethical AI", desc: "Auditable models free from bias, ensuring fair resource distribution." }
                    ].map((item, i) => (
                        <StaggerItem key={i}>
                            <div className="rounded-xl bg-neutral-50 p-6 ring-1 ring-neutral-100 hover:ring-[#1b7fb9]/20 hover:bg-white transition-all cursor-default">
                                <div className="mb-4 inline-flex items-center justify-center p-2 rounded-lg bg-[#1b7fb9]/10 text-[#1b7fb9] ring-1 ring-[#1b7fb9]/20">
                                    <item.icon className="h-5 w-5" />
                                </div>
                                <h3 className="text-[14px] font-medium text-neutral-900">{item.title}</h3>
                                <p className="mt-2 text-[12px] leading-relaxed text-neutral-500">{item.desc}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
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
