"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Globe, Fuel, Leaf, Target } from "lucide-react";

const stats = [
    { icon: Globe, value: 50, suffix: "+", label: "Countries" },
    { icon: Fuel, value: 2, suffix: "M", label: "Barrels / Day" },
    { icon: Leaf, prefix: "$", value: 5, suffix: "B", label: "Green Investment" },
    { icon: Target, value: 2050, label: "Net Zero" },
];

function Num({ value, prefix, suffix }: { value: number; prefix?: string; suffix?: string }) {
    const [n, setN] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        const steps = Math.min(value, 40);
        const inc = value / steps;
        let cur = 0;
        const t = setInterval(() => {
            cur += inc;
            if (cur >= value) { setN(value); clearInterval(t); }
            else setN(Math.round(cur));
        }, 1200 / steps);
        return () => clearInterval(t);
    }, [inView, value]);

    return <span ref={ref}>{prefix}{n}{suffix}</span>;
}

export default function Stats() {
    return (
        <section className="relative bg-[#0c1a2e] py-12">
            {/* Subtle top highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />

            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
                {stats.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="group flex flex-col items-center gap-3 text-center"
                    >
                        <div className="rounded-lg bg-white/5 p-2.5 ring-1 ring-white/10 transition-all group-hover:bg-white/10 group-hover:ring-white/20">
                            <s.icon className="h-4 w-4 text-blue-300/70" />
                        </div>
                        <div>
                            <p className="text-xl font-semibold text-white md:text-2xl">
                                <Num value={s.value} prefix={s.prefix} suffix={s.suffix} />
                            </p>
                            <p className="mt-0.5 text-[10px] uppercase tracking-widest text-white/30">
                                {s.label}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
