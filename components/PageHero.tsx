"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

interface PageHeroProps {
    eyebrow: string;
    title: string;
    description?: string;
    bgImage?: string;
    overlayColor?: string;
    variant?: "default" | "image-center" | "image-left" | "split" | "solid" | "editorial" | "corporate-minimal";
}

export default function PageHero({ eyebrow, title, description, bgImage, overlayColor, variant = "default" }: PageHeroProps) {

    // Helper for entry animations
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    // 1. SPLIT VARIANT
    if (variant === "split") {
        return (
            <section className="relative overflow-hidden bg-white pb-20 pt-36 border-b border-neutral-100">
                <div className="absolute inset-0 bg-[#1b7fb9]/[0.02]" />
                <div className="relative mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full md:w-1/2 text-left">
                        <motion.p
                            variants={fadeInUp} initial="hidden" animate="show"
                            className="text-[11px] font-bold uppercase tracking-widest text-[#1b7fb9]"
                        >
                            {eyebrow}
                        </motion.p>
                        <motion.h1
                            variants={fadeInUp} initial="hidden" animate="show" transition={{ delay: 0.1 }}
                            className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl leading-[1.1]"
                        >
                            {title}
                        </motion.h1>
                        {description && (
                            <motion.p
                                variants={fadeInUp} initial="hidden" animate="show" transition={{ delay: 0.2 }}
                                className="mt-6 text-[15px] leading-relaxed text-neutral-500"
                            >
                                {description}
                            </motion.p>
                        )}
                        <motion.div variants={fadeInUp} initial="hidden" animate="show" transition={{ delay: 0.3 }} className="mt-8 flex items-center gap-3 text-[13px] font-medium text-[#1b7fb9]">
                            <span className="w-8 h-px bg-[#1b7fb9]/30"></span> Explore Innovation
                        </motion.div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/5 ring-1 ring-neutral-200"
                        >
                            {bgImage && <img src={bgImage} alt={title} className="w-full h-full object-cover" />}
                        </motion.div>
                    </div>
                </div>
            </section>
        );
    }

    // 2. SOLID VARIANT
    if (variant === "solid") {
        return (
            <section className="relative overflow-hidden bg-[#1b7fb9] pb-24 pt-40">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

                <div className="relative mx-auto max-w-5xl px-6 text-center text-white">
                    <motion.div initial="hidden" animate="show" variants={{
                        hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } }
                    }}>
                        <motion.p variants={fadeInUp} className="text-[11px] font-bold uppercase tracking-widest text-white/80">
                            {eyebrow}
                        </motion.p>
                        <motion.h1 variants={fadeInUp} className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-white">
                            {title}
                        </motion.h1>
                        {description && (
                            <motion.p variants={fadeInUp} className="mt-6 mx-auto max-w-2xl text-[16px] leading-relaxed text-white/80">
                                {description}
                            </motion.p>
                        )}
                    </motion.div>
                </div>
            </section>
        );
    }

    // 3. IMAGE LEFT VARIANT
    if (variant === "image-left") {
        return (
            <section className="relative overflow-hidden bg-[#0c1a2e] pb-24 pt-40">
                {bgImage && (
                    <div className="absolute inset-0">
                        <img src={bgImage} alt={title} className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
                    </div>
                )}
                <div className="relative mx-auto max-w-6xl px-6 text-left">
                    <motion.div initial="hidden" animate="show" variants={{
                        hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, staggerChildren: 0.1 } }
                    }}>
                        <motion.p variants={fadeInUp} className="text-[12px] font-bold uppercase tracking-widest text-[#1b7fb9] bg-white/10 w-fit px-3 py-1 rounded backdrop-blur-sm">
                            {eyebrow}
                        </motion.p>
                        <motion.h1 variants={fadeInUp} className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl max-w-2xl">
                            {title}
                        </motion.h1>
                        {description && (
                            <motion.p variants={fadeInUp} className="mt-6 text-[16px] leading-relaxed text-white/70 max-w-xl">
                                {description}
                            </motion.p>
                        )}
                    </motion.div>
                </div>
            </section>
        );
    }

    // 4. IMAGE CENTER VARIANT (Unified inner-page hero)
    if (variant === "image-center" && bgImage) {
        return (
            <section className="relative overflow-hidden min-h-[70vh] flex items-center border-b border-neutral-900 pt-20">
                <div className="absolute inset-0">
                    <img src={bgImage} alt={title} className="h-full w-full object-cover" />
                    <div className={`absolute inset-0 ${overlayColor ? '' : 'bg-gradient-to-r from-black/90 via-black/60 to-black/40'}`} style={overlayColor ? { background: `linear-gradient(to right, ${overlayColor}cc, ${overlayColor}80, ${overlayColor}4d)` } : undefined} />
                </div>

                <div className="relative mx-auto max-w-6xl px-6 text-left w-full py-16">
                    <motion.div initial="hidden" animate="show" variants={{
                        hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } }
                    }}>
                        <motion.p variants={fadeInUp} className="text-[11px] font-bold uppercase tracking-widest text-[#4fc3f7] bg-white/10 w-fit px-3 py-1 rounded backdrop-blur-sm">
                            {eyebrow}
                        </motion.p>
                        <motion.h1 variants={fadeInUp} className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl max-w-2xl leading-[1.1]">
                            {title}
                        </motion.h1>
                        {description && (
                            <motion.p variants={fadeInUp} className="mt-6 text-[16px] leading-relaxed text-white/70 max-w-xl">
                                {description}
                            </motion.p>
                        )}
                    </motion.div>
                </div>
            </section>
        );
    }

    // 5. EDITORIAL VARIANT (Operations)
    if (variant === "editorial") {
        return (
            <section className="relative bg-white pb-24 pt-36 border-b border-neutral-100">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div className="max-w-2xl">
                            <motion.p variants={fadeInUp} initial="hidden" animate="show" className="text-[11px] font-bold uppercase tracking-widest text-[#1b7fb9] mb-4">
                                {eyebrow}
                            </motion.p>
                            <motion.h1 variants={fadeInUp} initial="hidden" animate="show" transition={{ delay: 0.1 }} className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-7xl leading-[1.05]">
                                {title}
                            </motion.h1>
                        </div>
                        {description && (
                            <motion.p variants={fadeInUp} initial="hidden" animate="show" transition={{ delay: 0.2 }} className="max-w-md text-[15px] leading-relaxed text-neutral-500 md:pb-3">
                                {description}
                            </motion.p>
                        )}
                    </div>
                </div>
                {bgImage && (
                    <div className="mx-auto max-w-[95%] lg:max-w-7xl px-4 sm:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative aspect-video md:aspect-[21/9] w-full overflow-hidden rounded-2xl bg-neutral-100"
                        >
                            <img src={bgImage} alt={title} className="w-full h-full object-cover" />
                        </motion.div>
                    </div>
                )}
            </section>
        );
    }

    // 6. CORPORATE MINIMAL VARIANT (Investors)
    if (variant === "corporate-minimal") {
        const hasBg = !!bgImage;
        return (
            <section className={`relative overflow-hidden pb-28 pt-44 border-b ${hasBg ? 'border-white/10' : 'bg-neutral-50 border-neutral-200'}`}>
                {bgImage && (
                    <div className="absolute inset-0">
                        <img src={bgImage} alt="" className="h-full w-full object-cover" />
                    </div>
                )}
                {!hasBg && (
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
                )}

                <div className="relative mx-auto max-w-4xl px-6">
                    <motion.div initial="hidden" animate="show" variants={{
                        hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } }
                    }}>
                        <div className="flex items-center gap-4 mb-8">
                            <motion.div variants={fadeInUp} className={`w-12 h-px ${hasBg ? 'bg-white/60' : 'bg-[#1b7fb9]'}`}></motion.div>
                            <motion.p variants={fadeInUp} className={`text-[11px] font-bold uppercase tracking-widest ${hasBg ? 'text-white/90 drop-shadow' : 'text-[#1b7fb9]'}`}>
                                {eyebrow}
                            </motion.p>
                        </div>
                        <motion.h1 variants={fadeInUp} className={`text-5xl font-light tracking-tight sm:text-6xl lg:text-7xl ${hasBg ? 'text-white drop-shadow-lg' : 'text-neutral-900'}`}>
                            {title}
                        </motion.h1>
                        {description && (
                            <motion.p variants={fadeInUp} className={`mt-8 text-[16px] leading-relaxed max-w-2xl border-l-2 pl-6 ${hasBg ? 'text-white/85 border-white/30 drop-shadow' : 'text-neutral-600 border-neutral-200'}`}>
                                {description}
                            </motion.p>
                        )}
                    </motion.div>
                </div>
            </section>
        );
    }

    // 7. DEFAULT VARIANT (Grid pattern, white bg)
    const hasBg = !!bgImage;
    return (
        <section className={`relative overflow-hidden pb-20 pt-36 border-b ${hasBg ? 'border-white/10' : 'bg-white border-neutral-100'}`}>
            {bgImage && (
                <div className="absolute inset-0">
                    <img src={bgImage} alt="" className="h-full w-full object-cover" />
                </div>
            )}
            {!hasBg && (
                <>
                    <div
                        className="pointer-events-none absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: "linear-gradient(#1b7fb9 1px, transparent 1px), linear-gradient(90deg, #1b7fb9 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                        }}
                    />
                    <div className="pointer-events-none absolute -top-20 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#1b7fb9]/5 blur-[100px]" />
                </>
            )}

            <div className="relative mx-auto max-w-5xl px-6 text-center">
                <motion.p initial="hidden" animate="show" variants={fadeInUp} className={`text-[11px] font-bold uppercase tracking-widest ${hasBg ? 'text-white/90 drop-shadow' : 'text-[#1b7fb9]'}`}>
                    {eyebrow}
                </motion.p>
                <motion.h1 initial="hidden" animate="show" variants={fadeInUp} transition={{ delay: 0.1 }} className={`mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl ${hasBg ? 'text-white drop-shadow-lg' : 'text-neutral-900'}`}>
                    {title}
                </motion.h1>
                {description && (
                    <motion.p initial="hidden" animate="show" variants={fadeInUp} transition={{ delay: 0.2 }} className={`mt-6 mx-auto max-w-2xl text-[16px] leading-relaxed ${hasBg ? 'text-white/85 drop-shadow' : 'text-neutral-500'}`}>
                        {description}
                    </motion.p>
                )}
            </div>
        </section>
    );
}
