"use client";

import { motion } from "framer-motion";
import { Satellite, Cpu, ShieldCheck, Waves } from "lucide-react";

const techs = [
    {
        icon: Satellite,
        num: "01",
        title: "Seismic Imaging",
        desc: "AI-powered 4D subsurface mapping reducing exploration risk by 40%.",
        stat: "40% risk reduction",
    },
    {
        icon: Cpu,
        num: "02",
        title: "Digital Twins",
        desc: "Real-time asset replicas for predictive maintenance across 50+ facilities.",
        stat: "50+ facilities",
    },
    {
        icon: ShieldCheck,
        num: "03",
        title: "Safety Automation",
        desc: "ML-driven hazard detection ensuring zero-incident operations.",
        stat: "Zero incidents",
    },
    {
        icon: Waves,
        num: "04",
        title: "Carbon Capture",
        desc: "95% capture rate algorithms at all CCS-equipped refineries.",
        stat: "95% capture rate",
    },
];

export default function Technology() {
    return (
        <section id="technology" className="py-20">
            <div className="mx-auto max-w-5xl px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <p className="text-[10px] uppercase tracking-widest text-neutral-400">Innovation</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">Technology</h2>
                </motion.div>

                <div className="grid gap-4 sm:grid-cols-2">
                    {techs.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative overflow-hidden rounded-xl bg-white p-5 shadow-sm ring-1 ring-neutral-100 transition-all duration-300 hover:shadow-md hover:ring-neutral-200"
                        >
                            {/* Background number */}
                            <span className="pointer-events-none absolute -right-2 -top-4 text-[72px] font-bold leading-none text-neutral-50 transition-colors group-hover:text-neutral-100/70">
                                {t.num}
                            </span>

                            <div className="relative flex items-start gap-4">
                                <div className="rounded-lg bg-neutral-50 p-2.5 ring-1 ring-neutral-100 transition-colors group-hover:bg-neutral-100">
                                    <t.icon className="h-4 w-4 text-neutral-500" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-[15px] font-semibold">{t.title}</h3>
                                    <p className="mt-1 text-[13px] leading-relaxed text-neutral-400">{t.desc}</p>
                                    <p className="mt-2 inline-block rounded-full bg-neutral-50 px-2.5 py-0.5 text-[11px] font-medium text-neutral-500 ring-1 ring-neutral-100">
                                        {t.stat}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
