"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Droplet, Zap } from "lucide-react";

const items = [
    {
        icon: Globe,
        title: "Upstream Exploration",
        desc: "Seismic imaging and deep-water technology for responsible reserve discovery.",
        img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=600&auto=format&fit=crop",
        tag: "Exploration",
    },
    {
        icon: Droplet,
        title: "Downstream Refining",
        desc: "High-efficiency processing into fuels and petrochemicals at global scale.",
        img: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=600&auto=format&fit=crop",
        tag: "Refining",
    },
    {
        icon: Zap,
        title: "Renewable Energy",
        desc: "Wind, solar, and hydrogen powering the transition to low-carbon energy.",
        img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop",
        tag: "Renewables",
    },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const fade = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Operations() {
    return (
        <section id="operations" className="section-divide pt-20 pb-20 bg-[#fafafa]">
            <div className="mx-auto max-w-5xl px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-10 flex items-end justify-between"
                >
                    <div>
                        <p className="text-[10px] uppercase tracking-widest text-neutral-400">Operations</p>
                        <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">What We Do</h2>
                    </div>
                    <a
                        href="#"
                        className="hidden text-[13px] text-neutral-400 transition-colors hover:text-black md:block"
                    >
                        View all →
                    </a>
                </motion.div>

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-5 md:grid-cols-3"
                >
                    {items.map((card, i) => (
                        <motion.div
                            key={i}
                            variants={fade}
                            className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-neutral-100 transition-all duration-300 hover:shadow-md hover:ring-neutral-200"
                        >
                            <div className="relative aspect-[3/2] overflow-hidden">
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                                {/* Tag pill */}
                                <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-neutral-600 shadow-sm backdrop-blur">
                                    {card.tag}
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="flex items-start justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                        <card.icon className="h-4 w-4 text-neutral-400" />
                                        <h3 className="text-[15px] font-semibold">{card.title}</h3>
                                    </div>
                                    <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-neutral-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black" />
                                </div>
                                <p className="mt-2 text-[13px] leading-relaxed text-neutral-500">{card.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
