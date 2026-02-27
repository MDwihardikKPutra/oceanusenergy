import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Sustainability from "@/components/Sustainability";
import Footer from "@/components/Footer";
import HomeCTA from "@/components/HomeCTA";
import { TreePine, Droplets, Wind, Zap } from "lucide-react";

export const metadata: Metadata = {
    title: "Sustainability | Oceanus Energy",
    description:
        "Oceanus Energy's commitment to net-zero 2050: carbon capture, renewables, and community-first development.",
};

function ESGMetrics() {
    const metrics = [
        { icon: Wind, title: "20.5 GW", desc: "Renewable energy capacity installed or in development." },
        { icon: Droplets, title: "-60%", desc: "Reduction in freshwater intensity across all operations." },
        { icon: TreePine, title: "1.2M", desc: "Hectares of forest protected under our biodiversity pledge." },
        { icon: Zap, title: "50MTPA", desc: "CO2 capture capacity target by 2030." }
    ];

    return (
        <section className="bg-white py-24 section-divide">
            <div className="mx-auto max-w-5xl px-6">
                <p className="text-[11px] uppercase tracking-widest text-[#1b7fb9] font-medium text-center">Transparent Reporting</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl text-center">Measuring Our Impact</h2>
                <p className="mt-4 mx-auto max-w-2xl text-[14px] leading-relaxed text-neutral-500 text-center">
                    Audited and continuous measurement of our Environmental, Social, and Governance (ESG) performance.
                </p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {metrics.map((m, i) => (
                        <div key={i} className="group flex flex-col items-center text-center p-6 bg-neutral-50 rounded-xl shadow-sm ring-1 ring-neutral-100 transition-all hover:bg-white hover:shadow-md hover:ring-[#1b7fb9]/20">
                            <div className="p-3 bg-white text-[#1b7fb9] rounded-full mb-4 ring-1 ring-neutral-200 group-hover:ring-[#1b7fb9]/30 transition-shadow">
                                <m.icon className="h-6 w-6" />
                            </div>
                            <p className="text-2xl font-bold text-neutral-900">{m.title}</p>
                            <p className="mt-2 text-[12px] text-neutral-500 leading-relaxed">{m.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CommunityInitiatives() {
    return (
        <section className="bg-white py-24 section-divide">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                    <div className="w-full md:w-1/2">
                        <p className="text-[11px] uppercase tracking-widest text-[#1b7fb9] font-medium">Global Impact</p>
                        <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl text-neutral-900">Lifting Communities</h2>
                        <p className="mt-4 text-[14px] leading-relaxed text-neutral-500">
                            We understand that a just transition must support the people who live and work near our operations.
                            Our $500M Global Community Fund focuses on STEM education, clean water access, and local
                            entrepreneurship across 30 developing nations.
                        </p>
                        <ul className="mt-6 space-y-3">
                            <li className="flex items-center gap-3 text-[13px] font-medium text-neutral-700">
                                <span className="w-2 h-2 rounded-full bg-[#1b7fb9]"></span> 50,000+ local scholarships awarded
                            </li>
                            <li className="flex items-center gap-3 text-[13px] font-medium text-neutral-700">
                                <span className="w-2 h-2 rounded-full bg-[#1b7fb9]"></span> 10M people with new clean water access
                            </li>
                            <li className="flex items-center gap-3 text-[13px] font-medium text-neutral-700">
                                <span className="w-2 h-2 rounded-full bg-[#1b7fb9]"></span> 45% local suppliers integration rate
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 aspect-[4/3] max-h-[400px] overflow-hidden rounded-xl bg-neutral-100 ring-1 ring-neutral-200 shadow-sm relative group">
                        <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop" alt="Community education" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function RoadmapTimeline() {
    const steps = [
        { year: "2025", title: "Peak Emissions", desc: "Absolute peak of scope 1 and 2 emissions achieved." },
        { year: "2030", title: "-30% Carbon Intensity", desc: "Significant ramp-up of CCS and renewable capacity." },
        { year: "2040", title: "Scope 3 Tracking", desc: "Full abatement of operational footprint and supply chain integration." },
        { year: "2050", title: "Net Zero", desc: "Complete carbon neutrality across all scopes and operations." },
    ];
    return (
        <section className="bg-neutral-50 py-24 border-y border-neutral-100">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center mb-16">
                    <p className="text-[11px] uppercase tracking-widest text-[#1b7fb9] font-medium">Timeline</p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">The Road to 2050</h2>
                </div>

                <div className="relative border-l border-neutral-200 ml-4 md:ml-0 md:border-none">
                    {/* Desktop line */}
                    <div className="hidden md:block absolute top-[14px] left-0 w-full h-px bg-neutral-200"></div>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-4 md:justify-between relative">
                        {steps.map((s, i) => (
                            <div key={i} className="pl-6 md:pl-0 flex flex-col items-start md:items-center relative w-full md:w-1/4 group cursor-default">
                                {/* Dot */}
                                <div className="absolute left-[-5px] top-2 md:top-0 md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-neutral-300 rounded-full ring-4 ring-neutral-50 group-hover:bg-[#1b7fb9] group-hover:ring-[#1b7fb9]/20 transition-all"></div>

                                <div className="md:mt-8 md:text-center mt-0">
                                    <span className="text-[14px] font-bold text-[#1b7fb9]">{s.year}</span>
                                    <h3 className="mt-1 text-[16px] font-semibold text-neutral-900 group-hover:text-[#1b7fb9] transition-colors">{s.title}</h3>
                                    <p className="mt-2 text-[12px] text-neutral-500 leading-relaxed md:px-2">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}


export default function SustainabilityPage() {
    return (
        <main className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <PageHero
                eyebrow="Sustainability"
                title="Committed to Net-Zero."
                description="Our path to 2050 net zero — through carbon capture, methane reduction, and renewable investment across every business unit."
                bgImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1600&auto=format&fit=crop"
                variant="image-center"
            />
            {/* 
        Symmetrical Order:
        1. PageHero (White)
        2. Sustainability (Light Gray)
        3. ESGMetrics (Grid - White)
        4. RoadmapTimeline (Horizontal - Light Gray)
        5. CommunityInitiatives (Left/Right - White)
        6. HomeCTA (Blue Banner)
      */}
            <Sustainability />
            <ESGMetrics />
            <RoadmapTimeline />
            <CommunityInitiatives />
            <HomeCTA />
            <Footer />
        </main>
    );
}
