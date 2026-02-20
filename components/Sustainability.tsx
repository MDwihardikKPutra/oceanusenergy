"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const points = [
    "Carbon Capture & Storage across 12 facilities",
    "50% methane reduction since 2018",
    "Biodiversity programs in 50+ countries",
    "Community-first development strategy",
];

export default function Sustainability() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const imgY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

    return (
        <section id="sustainability" ref={ref} className="section-divide bg-[#fafafa] py-20">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full lg:w-5/12"
                    >
                        <div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-black/5">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <motion.img
                                    src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=600&auto=format&fit=crop"
                                    alt="Wind turbines"
                                    className="h-[106%] w-full object-cover"
                                    style={{ y: imgY }}
                                />
                            </div>
                        </div>
                        {/* Floating badge */}
                        <div className="absolute -bottom-4 -right-2 rounded-lg bg-white px-4 py-2.5 shadow-lg ring-1 ring-neutral-100 md:-right-6">
                            <p className="text-[20px] font-bold text-[#0c1a2e]">2050</p>
                            <p className="text-[10px] uppercase tracking-widest text-neutral-400">Net Zero Target</p>
                        </div>
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-7/12"
                    >
                        <p className="text-[10px] uppercase tracking-widest text-neutral-400">Sustainability</p>
                        <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                            Committed to Net-Zero.
                        </h2>
                        <p className="mt-4 text-[14px] leading-relaxed text-neutral-500">
                            Carbon capture technology and renewable transition across every
                            business unit — sustainability is our core strategy.
                        </p>

                        <ul className="mt-6 flex flex-col gap-2.5">
                            {points.map((p, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.06 }}
                                    className="flex items-center gap-3 text-[13px] text-neutral-600"
                                >
                                    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
                                        <Check className="h-3 w-3 text-emerald-500" />
                                    </div>
                                    {p}
                                </motion.li>
                            ))}
                        </ul>

                        <motion.a
                            href="#"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0c1a2e] px-5 py-2 text-[13px] font-medium text-white transition-all hover:scale-105 hover:shadow-lg active:scale-100"
                        >
                            ESG Report →
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
