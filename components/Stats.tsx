"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Globe, Fuel, Leaf, Target } from "lucide-react";

const stats = [
    { icon: Globe, value: 50, suffix: "+", label: "Countries Active" },
    { icon: Fuel, value: 2, suffix: "M", label: "Barrels / Day" },
    { icon: Leaf, prefix: "$", value: 5, suffix: "B", label: "Green Investment" },
    { icon: Target, value: 2050, label: "Net Zero Target" },
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
        <section className="relative bg-white py-24 border-b border-neutral-100 shadow-sm z-10">
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
                {stats.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="group flex flex-col items-center gap-4 text-center"
                    >
                        <div className="rounded-xl bg-neutral-50 p-3 ring-1 ring-neutral-100 transition-all group-hover:bg-[#1b7fb9]/5 group-hover:ring-[#1b7fb9]/20 group-hover:scale-110">
                            <s.icon className="h-6 w-6 text-[#1b7fb9]" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-neutral-900 md:text-3xl">
                                <Num value={s.value} prefix={s.prefix} suffix={s.suffix} />
                            </p>
                            <p className="mt-1 text-[11px] uppercase tracking-widest text-[#1b7fb9] font-medium">
                                {s.label}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
