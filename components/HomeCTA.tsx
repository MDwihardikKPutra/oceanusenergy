"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeCTA() {
    return (
        <section className="relative overflow-hidden bg-[#1b7fb9] py-24 text-white">
            {/* Grid texture for a slight technical feel */}
            <div
                className="pointer-events-none absolute inset-0 opacity-10"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />
            {/* Soft glows to break up the solid color */}
            <div className="pointer-events-none absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-white/20 blur-[100px]" />
            <div className="pointer-events-none absolute -right-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-white/10 blur-[100px]" />

            <div className="relative mx-auto max-w-5xl px-6 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[11px] font-medium uppercase tracking-widest text-white/80"
                >
                    Partner with us
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                    Ready to power the future together?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-5 mx-auto max-w-lg text-[15px] leading-relaxed text-white/80"
                >
                    Whether you are an investor, potential partner, or community stakeholder —
                    our team is ready to connect with you to explore opportunities.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-10 flex flex-wrap items-center justify-center gap-4"
                >
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-[14px] font-semibold text-[#1b7fb9] shadow-[0_4px_14px_0_rgba(255,255,255,0.39)] transition-all hover:scale-105 active:scale-100"
                    >
                        Get in Touch
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="/investors"
                        className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-3 text-[14px] font-semibold text-white transition-all hover:scale-105 hover:bg-white/20 active:scale-100"
                    >
                        Investor Relations
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
