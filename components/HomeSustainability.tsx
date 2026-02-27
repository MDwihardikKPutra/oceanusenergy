"use client";

import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const points = [
    "Carbon Capture & Storage across 12 facilities",
    "50% methane reduction since 2018",
    "Biodiversity programs in 50+ countries",
    "Community-first development strategy",
];

const metrics = [
    { value: "2050", label: "Net Zero Target" },
    { value: "−50%", label: "Methane since 2018" },
    { value: "12", label: "CCS Facilities" },
    { value: "$5B", label: "Green Investment" },
];

export default function HomeSustainability() {
    return (
        <section className="py-24 bg-white section-divide">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center mb-16">
                    <p className="text-[11px] uppercase tracking-widest text-[#1b7fb9] font-medium">Sustainability</p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                        Committed to Net-Zero.
                    </h2>
                    <p className="mt-5 mx-auto max-w-2xl text-[14px] leading-relaxed text-neutral-500">
                        Carbon capture technology and renewable transition across every business unit —
                        sustainability is not just a goal, it is our core operating strategy.
                    </p>
                </div>

                <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
                    {/* Left - Image */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl shadow-black/5 ring-1 ring-neutral-100">
                            <motion.img
                                initial={{ scale: 1.05 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=800&auto=format&fit=crop"
                                alt="Wind turbines"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        {/* Floating blue badge */}
                        <div className="absolute -bottom-6 -right-6 rounded-xl bg-[#1b7fb9] p-6 text-white shadow-xl shadow-[#1b7fb9]/20 hidden md:block">
                            <p className="text-3xl font-bold">2050</p>
                            <p className="mt-1 text-[11px] uppercase tracking-widest font-medium text-white/80">Net Zero</p>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="w-full lg:w-1/2">
                        <ul className="flex flex-col gap-4">
                            {points.map((p, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 rounded-lg bg-neutral-50 p-4 ring-1 ring-neutral-100"
                                >
                                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#1b7fb9]/10">
                                        <Check className="h-3.5 w-3.5 text-[#1b7fb9]" />
                                    </div>
                                    <span className="text-[13px] font-medium text-neutral-700">{p}</span>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Metric strip */}
                        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                            {metrics.map((m, i) => (
                                <div key={i} className="text-center">
                                    <p className="text-[20px] font-bold text-[#1b7fb9]">{m.value}</p>
                                    <p className="mt-1 text-[10px] uppercase tracking-wider text-neutral-500 font-medium">{m.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <Link
                                href="/sustainability"
                                className="group inline-flex items-center gap-2 rounded-full bg-[#1b7fb9] px-7 py-3 text-[13px] font-medium text-white transition-all hover:bg-[#13608c] hover:shadow-lg hover:shadow-[#1b7fb9]/20"
                            >
                                Read ESG Report
                                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
