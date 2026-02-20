"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
    { label: "Operations", href: "#operations" },
    { label: "Technology", href: "#technology" },
    { label: "Sustainability", href: "#sustainability" },
    { label: "Investors", href: "#investors" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);

    return (
        <nav
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-white/90 backdrop-blur-xl py-4 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
                : "py-5"
                }`}
        >
            {/* Dark gradient behind navbar when over hero for readability */}
            {!scrolled && (
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
            )}

            <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6">
                <Link
                    href="/"
                    className={`text-lg font-semibold tracking-tight transition-colors ${scrolled ? "text-black" : "text-white"
                        }`}
                    style={!scrolled ? { textShadow: "0 1px 3px rgba(0,0,0,0.3)" } : {}}
                >
                    Oceanus Energy
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    {links.map((l) => (
                        <a
                            key={l.label}
                            href={l.href}
                            className={`text-[13px] font-medium tracking-wide transition-colors ${scrolled
                                ? "text-neutral-500 hover:text-black"
                                : "text-white/80 hover:text-white"
                                }`}
                            style={!scrolled ? { textShadow: "0 1px 2px rgba(0,0,0,0.3)" } : {}}
                        >
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className={`rounded-full border px-5 py-2 text-[13px] font-medium transition-all ${scrolled
                            ? "border-neutral-200 text-black hover:bg-neutral-50"
                            : "border-white/30 text-white hover:bg-white/10"
                            }`}
                        style={!scrolled ? { textShadow: "0 1px 2px rgba(0,0,0,0.2)" } : {}}
                    >
                        Contact
                    </a>
                </div>

                <button className="md:hidden" onClick={() => setOpen(!open)}>
                    {open ? (
                        <X className={`h-5 w-5 ${scrolled ? "text-black" : "text-white"}`} />
                    ) : (
                        <Menu className={`h-5 w-5 ${scrolled ? "text-black" : "text-white"}`} />
                    )}
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="absolute inset-x-0 top-full bg-white p-6 shadow-sm md:hidden"
                    >
                        <div className="flex flex-col gap-5">
                            {links.map((l) => (
                                <a
                                    key={l.label}
                                    href={l.href}
                                    onClick={() => setOpen(false)}
                                    className="text-[15px] text-neutral-600"
                                >
                                    {l.label}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setOpen(false)}
                                className="rounded-full border border-neutral-200 py-3 text-center text-sm font-medium"
                            >
                                Contact
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
