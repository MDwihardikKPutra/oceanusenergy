"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function OperationsHero() {
    return (
        <section className="bg-white pt-32 pb-16">
            {/* Top: Title left + Description right */}
            <div className="mx-auto max-w-6xl px-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-lg text-4xl font-semibold leading-[1.1] tracking-tight text-[#1b7fb9] sm:text-5xl lg:text-6xl"
                    >
                        Our Operations
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.8 }}
                        className="max-w-sm md:pt-3"
                    >
                        <p className="text-[15px] leading-relaxed text-neutral-500">
                            From deep-water exploration to renewable energy, we operate at every stage of the energy value chain.
                        </p>
                        <div className="mt-6 flex gap-3">
                            <Link
                                href="#operations-content"
                                className="group inline-flex items-center gap-2 rounded-full bg-[#1b7fb9] px-6 py-2.5 text-[13px] font-medium text-white transition-all hover:bg-[#13608c] hover:shadow-lg hover:shadow-[#1b7fb9]/20"
                            >
                                Explore
                                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-6 py-2.5 text-[13px] font-medium text-neutral-700 transition-all hover:border-[#1b7fb9] hover:text-[#1b7fb9]"
                            >
                                Learn More
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Wide image below */}
            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl"
                >
                    <img
                        src="/turbin.png"
                        alt="Energy operations"
                        className="h-full w-full object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}
