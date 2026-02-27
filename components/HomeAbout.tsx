"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const values = [
    { num: "01", title: "Safety First", desc: "Zero-tolerance safety culture across every platform and facility worldwide." },
    { num: "02", title: "Responsible Growth", desc: "Expanding capacity without compromising our environmental commitments." },
    { num: "03", title: "People & Communities", desc: "Investing in local talent and long-term community development programs." },
];

export default function HomeAbout() {
    return (
        <section className="py-24 bg-white section-divide">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center mb-16">
                    <p className="text-[11px] uppercase tracking-widest text-[#1b7fb9] font-medium">Who We Are</p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl leading-[1.15] text-neutral-900">
                        A global energy company built on trust and innovation.
                    </h2>
                    <p className="mt-5 mx-auto max-w-2xl text-[14px] leading-relaxed text-neutral-500">
                        Founded in 1987, Oceanus Energy has grown from a regional operator into one of the world's
                        most respected integrated energy companies. With a presence in over 50 countries, we deliver
                        reliable energy while pioneering the transition to cleaner sources.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {values.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="group flex flex-col items-center text-center gap-4 rounded-xl bg-white p-8 ring-1 ring-neutral-100 transition-all hover:shadow-lg hover:shadow-black/5 hover:ring-[#1b7fb9]/20"
                        >
                            <span className="text-[32px] font-bold leading-none text-[#1b7fb9] select-none">
                                {v.num}
                            </span>
                            <div>
                                <h3 className="text-[15px] font-semibold text-neutral-900 group-hover:text-[#1b7fb9] transition-colors">{v.title}</h3>
                                <p className="mt-2 text-[13px] leading-relaxed text-neutral-500">{v.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/operations"
                        className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-6 py-2.5 text-[13px] font-medium text-neutral-800 transition-all hover:border-[#1b7fb9] hover:bg-[#1b7fb9] hover:text-white group"
                    >
                        Explore our operations
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
