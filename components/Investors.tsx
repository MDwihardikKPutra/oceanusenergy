"use client";

import { motion } from "framer-motion";
import { TrendingUp, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";

const kpis = [
    { label: "Q4 2025 Revenue", value: "$42.8B", trend: "+8.4%" },
    { label: "Operating Cash Flow", value: "$12.1B", trend: "+15.2%" },
    { label: "Dividends Paid", value: "$3.5B", trend: "+4.1%" },
    { label: "ROCE", value: "18.5%", trend: "+250 bps" },
];

export default function Investors() {
    return (
        <section className="py-24 bg-white section-divide">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex justify-between items-end mb-14">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-left"
                    >
                        <p className="text-[11px] uppercase tracking-widest text-[#1b7fb9] font-medium">Financial Overview</p>
                        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">Key Performance Indicators</h2>
                    </motion.div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {kpis.map((kpi, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            className="group flex flex-col justify-between rounded-xl bg-neutral-50 p-6 shadow-sm ring-1 ring-neutral-100 transition-all hover:bg-white hover:shadow-md hover:ring-[#1b7fb9]/20"
                        >
                            <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500 group-hover:text-[#1b7fb9] transition-colors">
                                {kpi.label}
                            </p>
                            <div className="mt-6 flex items-end justify-between">
                                <p className="text-3xl font-bold text-neutral-900 leading-none">
                                    {kpi.value}
                                </p>
                                <span className="flex items-center gap-1 text-[12px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                                    <TrendingUp className="h-3 w-3" />
                                    {kpi.trend}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 flex flex-col items-center justify-between gap-6 rounded-xl bg-white p-6 shadow-sm ring-1 ring-neutral-100 md:flex-row md:pl-8 md:pr-4"
                >
                    <div className="flex items-center gap-4">
                        <div className="rounded-full bg-neutral-50 p-3 ring-1 ring-neutral-100">
                            <FileText className="h-5 w-5 text-[#1b7fb9]" />
                        </div>
                        <div>
                            <p className="text-[14px] font-semibold text-neutral-900">Annual Report 2025</p>
                            <p className="mt-0.5 text-[12px] text-neutral-500">Comprehensive financial and strategic review.</p>
                        </div>
                    </div>
                    <Link
                        href="#"
                        className="group flex items-center justify-center gap-2 rounded-lg bg-[#1b7fb9] px-6 py-2.5 text-[13px] font-medium text-white transition-all hover:bg-[#13608c] w-full md:w-auto"
                    >
                        Download PDF
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
