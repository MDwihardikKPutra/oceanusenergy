"use client";

import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight, FileText, BarChart3, Calendar } from "lucide-react";

const kpis = [
    { label: "Revenue", value: "$48.2B", change: "+12.4%" },
    { label: "EBITDA", value: "$18.6B", change: "+8.7%" },
    { label: "Dividend", value: "4.2%", change: "+0.3%" },
    { label: "Market Cap", value: "$142B", change: "+15.1%" },
];

const links = [
    { icon: FileText, title: "Annual Report 2024", desc: "Financial performance overview." },
    { icon: BarChart3, title: "Quarterly Earnings", desc: "Q4 segment results." },
    { icon: Calendar, title: "Events & Calendar", desc: "Investor day schedule." },
];

export default function Investors() {
    return (
        <section id="investors" className="py-20">
            <div className="mx-auto max-w-5xl px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <p className="text-[10px] uppercase tracking-widest text-neutral-400">Investors</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                        Financial Highlights
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
                    {/* KPIs */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="grid w-full grid-cols-2 gap-3 lg:w-5/12"
                    >
                        {kpis.map((k, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                                className="rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-neutral-100 transition-all hover:shadow-md hover:ring-neutral-200"
                            >
                                <p className="text-xl font-semibold md:text-2xl">{k.value}</p>
                                <p className="mt-0.5 text-[10px] uppercase tracking-widest text-neutral-400">
                                    {k.label}
                                </p>
                                <div className="mt-1.5 inline-flex items-center gap-0.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 ring-1 ring-emerald-100">
                                    <TrendingUp className="h-2.5 w-2.5" />
                                    {k.change}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Links */}
                    <div className="w-full lg:w-7/12">
                        <div className="overflow-hidden rounded-xl shadow-sm ring-1 ring-neutral-100">
                            {links.map((l, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="group flex items-center gap-4 border-b border-neutral-50 bg-white px-5 py-4 transition-colors last:border-b-0 hover:bg-neutral-50"
                                >
                                    <div className="rounded-lg bg-neutral-50 p-2 ring-1 ring-neutral-100 transition-colors group-hover:bg-neutral-100">
                                        <l.icon className="h-4 w-4 text-neutral-500" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-[14px] font-semibold">{l.title}</h3>
                                        <p className="text-[12px] text-neutral-400">{l.desc}</p>
                                    </div>
                                    <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-neutral-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
