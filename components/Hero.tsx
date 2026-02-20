"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 60]);

    return (
        <section
            ref={ref}
            className="relative flex h-screen items-center overflow-hidden bg-black"
        >
            {/* Parallax background — oil rig in the ocean */}
            <motion.img
                src="/arvind-vallabh-kjk90_OSGZU-unsplash.jpg"
                alt="Oil rig in the middle of the ocean"
                className="absolute inset-0 h-[120%] w-full object-cover"
                style={{ y: imgY }}
            />

            {/* Content — center-left with scroll fade */}
            <motion.div
                className="relative z-10 mx-auto w-full max-w-6xl px-6"
                style={{ opacity: contentOpacity, y: contentY }}
            >
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8 h-px w-12 origin-left bg-white/30"
                />

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-7xl"
                >
                    Powering Progress
                    <br />
                    From the Deep.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-6 max-w-md text-[15px] leading-relaxed text-white/60"
                >
                    Oceanus Energy operates world-class offshore platforms, delivering
                    reliable energy from the heart of the ocean to communities worldwide.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 flex gap-3"
                >
                    <a
                        href="#operations"
                        className="rounded-full bg-white px-7 py-3 text-[13px] font-medium text-black hover:scale-105 hover:shadow-lg hover:shadow-white/10 active:scale-100"
                    >
                        Explore
                    </a>
                    <a
                        href="#sustainability"
                        className="rounded-full border border-white/20 px-7 py-3 text-[13px] font-medium text-white/80 hover:scale-105 hover:bg-white/5 hover:text-white active:scale-100"
                    >
                        Sustainability
                    </a>
                </motion.div>
            </motion.div>


        </section>
    );
}
