"use client";

import { motion } from "framer-motion";
import { TreePine, Droplets, Wind, ArrowRight } from "lucide-react";

const pillars = [
    {
        title: "Carbon Capture (CCS)",
        desc: "Deploying next-generation solvent technology to capture 50MTPA of CO2 by 2030 across our highest-emitting facilities.",
        icon: TreePine,
    },
    {
        title: "Water Conservation",
        desc: "Closed-loop cooling systems that reduce freshwater intake by 60%, protecting local ecosystems and vital resources.",
        icon: Droplets,
    },
    {
        title: "Renewable Integration",
        desc: "Powering our own operations with 100% renewable electricity by 2035 through dedicated wind and solar development.",
        icon: Wind,
    },
];

export default function Sustainability() {
    return (
        <section className="py-24 bg-neutral-50 border-y border-neutral-100">
            <div className="mx-auto max-w-5xl px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-14 text-center"
                >
                    <p className="text-[11px] uppercase tracking-widest text-[#1b7fb9] font-medium">Environmental Action</p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">Our Strategic Pillars</h2>
                </motion.div>

                <div className="flex flex-col gap-6 lg:flex-row">
                    <div className="flex w-full flex-col justify-center gap-4 lg:w-1/2">
                        {pillars.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.6 }}
                                className="group flex gap-5 rounded-xl bg-white p-6 shadow-sm ring-1 ring-neutral-100 transition-all hover:shadow-md hover:ring-[#1b7fb9]/20"
                            >
                                <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#1b7fb9]/10 text-[#1b7fb9]">
                                    <p.icon className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="text-[15px] font-semibold text-neutral-900 group-hover:text-[#1b7fb9] transition-colors">{p.title}</h3>
                                    <p className="mt-2 text-[13px] leading-relaxed text-neutral-500">{p.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="group relative h-full min-h-[400px] w-full overflow-hidden rounded-2xl shadow-xl shadow-black/5 ring-1 ring-neutral-100"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop"
                                alt="Sustainability"
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-xl font-semibold text-white">Investing in tomorrow</p>
                                <div className="mt-3 flex items-center gap-2 text-[13px] font-medium text-white/80 transition-colors group-hover:text-white cursor-pointer">
                                    Watch our sustainability documentary <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
