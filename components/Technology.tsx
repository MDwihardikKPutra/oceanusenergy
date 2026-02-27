"use client";

import { motion } from "framer-motion";
import { Cpu, Network, BarChart4, ArrowUpRight } from "lucide-react";

const tech = [
    {
        title: "AI-Powered Analytics",
        desc: "Predictive maintenance models that reduce downtime by 35% across offshore operations.",
        icon: BarChart4,
    },
    {
        title: "Digital Twin Models",
        desc: "Real-time virtual replicas of our refineries enabling continuous process optimization and safety monitoring.",
        icon: Network,
    },
    {
        title: "Automated Robotics",
        desc: "Autonomous subsea drones conducting pipeline inspections at depths previously inaccessible.",
        icon: Cpu,
    },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const fade = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Technology() {
    return (
        <section className="py-24 bg-white section-divide">
            <div className="mx-auto max-w-5xl px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-14 text-center"
                >
                    <p className="text-[11px] uppercase tracking-widest text-[#1b7fb9] font-medium">Innovation Focus</p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">Core Technologies</h2>
                </motion.div>

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-6 md:grid-cols-3"
                >
                    {tech.map((t, i) => (
                        <motion.div
                            key={i}
                            variants={fade}
                            className="group flex flex-col items-center text-center gap-4 rounded-xl bg-white p-8 ring-1 ring-neutral-100 transition-all hover:shadow-lg hover:shadow-black/5 hover:ring-[#1b7fb9]/20"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-50 text-[#1b7fb9] ring-1 ring-neutral-100 transition-colors group-hover:bg-[#1b7fb9]/10 group-hover:ring-[#1b7fb9]/20">
                                <t.icon className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-[15px] font-semibold text-neutral-900 group-hover:text-[#1b7fb9] transition-colors">{t.title}</h3>
                                <p className="mt-2 text-[13px] leading-relaxed text-neutral-500">{t.desc}</p>
                            </div>
                            <div className="mt-4 opacity-0 transition-opacity group-hover:opacity-100">
                                <span className="inline-flex items-center gap-1 text-[12px] font-medium text-[#1b7fb9]">
                                    Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
