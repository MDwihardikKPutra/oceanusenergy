"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Droplet, Zap } from "lucide-react";
import Link from "next/link";

const items = [
    {
        icon: Globe,
        tag: "Exploration",
        title: "Upstream Exploration",
        desc: "Seismic imaging and deep-water technology for responsible reserve discovery across 6 continents.",
        img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=600&auto=format&fit=crop",
        stat: "2M+ bbl/day",
    },
    {
        icon: Droplet,
        tag: "Refining",
        title: "Downstream Refining",
        desc: "High-efficiency processing into fuels and petrochemicals at global scale with best-in-class safety.",
        img: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=600&auto=format&fit=crop",
        stat: "24 refineries",
    },
    {
        icon: Zap,
        tag: "Renewables",
        title: "Renewable Energy",
        desc: "Wind, solar, and hydrogen investments powering the transition to a low-carbon energy future.",
        img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop",
        stat: "$5B invested",
    },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const fade = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function HomeFeaturedOps() {
    return (
        <section className="py-24 bg-neutral-50 border-y border-neutral-100">
            <div className="mx-auto max-w-5xl px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-14 text-center"
                >
                    <p className="text-[11px] uppercase tracking-widest text-[#1b7fb9] font-medium">Operations</p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">What We Do</h2>
                </motion.div>

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-6 md:grid-cols-3"
                >
                    {items.map((card, i) => (
                        <motion.div
                            key={i}
                            variants={fade}
                            className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-neutral-100 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 hover:ring-[#1b7fb9]/20 cursor-pointer"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-[#1b7fb9] shadow-sm">
                                    {card.tag}
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col p-6">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-md bg-neutral-50 p-2 text-[#1b7fb9] ring-1 ring-neutral-100 group-hover:bg-[#1b7fb9]/5 group-hover:ring-[#1b7fb9]/20 transition-colors">
                                        <card.icon className="h-4 w-4" />
                                    </div>
                                    <h3 className="text-[15px] font-semibold text-neutral-900 group-hover:text-[#1b7fb9] transition-colors">{card.title}</h3>
                                </div>
                                <p className="mt-4 flex-1 text-[13px] leading-relaxed text-neutral-500">{card.desc}</p>
                                <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4">
                                    <span className="text-[12px] font-medium text-neutral-600">
                                        {card.stat}
                                    </span>
                                    <ArrowUpRight className="h-4 w-4 text-[#1b7fb9] opacity-0 -translate-x-2 translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-12 text-center">
                    <Link
                        href="/operations"
                        className="inline-flex items-center gap-2 text-[13px] font-medium text-[#1b7fb9] hover:text-[#13608c] transition-colors group"
                    >
                        View all operations
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
