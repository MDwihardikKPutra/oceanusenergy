"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Newspaper } from "lucide-react";
import Link from "next/link";

const news = [
    {
        date: "Feb 18, 2026",
        category: "Operations",
        title: "Oceanus Energy Expands Deep-Water Drilling Program in the Gulf of Mexico",
        desc: "The company announced a $1.2B investment in next-generation subsea equipment, adding an estimated 80,000 barrels per day to production capacity.",
        img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=600&auto=format&fit=crop",
    },
    {
        date: "Feb 10, 2026",
        category: "Sustainability",
        title: "Oceanus Achieves 50% Methane Reduction Goal Ahead of Schedule",
        desc: "Thanks to AI-powered leak detection and process optimization, the company hit its 2028 methane target four years early.",
        img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&auto=format&fit=crop",
    },
    {
        date: "Jan 29, 2026",
        category: "Technology",
        title: "New Digital Twin Platform Deployed Across 50 Facilities Globally",
        desc: "The rollout marks a significant leap in predictive maintenance, expected to reduce unplanned downtime by 35% annually.",
        img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop",
    },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const fade = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function HomeNews() {
    return (
        <section className="py-24 bg-neutral-50 border-y border-neutral-100">
            <div className="mx-auto max-w-5xl px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-14 text-center"
                >
                    <p className="text-[11px] uppercase tracking-widest text-[#1b7fb9] font-medium">Newsroom</p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">Latest from Oceanus</h2>
                </motion.div>

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-6 md:grid-cols-3"
                >
                    {news.map((item, i) => (
                        <motion.article
                            key={i}
                            variants={fade}
                            className="group flex flex-col cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-neutral-100 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 hover:ring-[#1b7fb9]/20"
                        >
                            <div className="relative aspect-[16/9] overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-[#1b7fb9]/0 transition-colors group-hover:bg-[#1b7fb9]/10" />
                                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-[#1b7fb9] shadow-sm">
                                    {item.category}
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col p-6">
                                <div className="flex items-center justify-between">
                                    <p className="text-[11px] font-medium text-neutral-400">{item.date}</p>
                                    <Newspaper className="h-4 w-4 text-neutral-300 transition-colors group-hover:text-[#1b7fb9]" />
                                </div>
                                <h3 className="mt-4 text-[15px] font-semibold leading-snug line-clamp-2 text-neutral-900 group-hover:text-[#1b7fb9] transition-colors">{item.title}</h3>
                                <p className="mt-3 flex-1 text-[13px] leading-relaxed text-neutral-500 line-clamp-3">{item.desc}</p>
                                <div className="mt-6 flex items-center gap-1 text-[13px] font-medium text-[#1b7fb9] transition-colors group-hover:text-[#13608c]">
                                    Read full story
                                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                <div className="mt-12 text-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-6 py-2.5 text-[13px] font-medium text-neutral-800 transition-all hover:border-[#1b7fb9] hover:bg-[#1b7fb9] hover:text-white group"
                    >
                        View all press releases
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
