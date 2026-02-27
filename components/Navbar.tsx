"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
    { label: "Operations", href: "/operations" },
    { label: "Technology", href: "/technology" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Investors", href: "/investors" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const isHome = pathname === "/";

    useEffect(() => {
        if (!isHome) {
            setScrolled(true);
        }

        const fn = () => setScrolled(window.scrollY > 60);
        fn();
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, [isHome]);

    // Ensure inner pages always use the 'light' theme logic for the navbar 
    // because their PageHero is now white.
    const light = !isHome || scrolled;

    return (
        <nav
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${light
                ? "bg-white/95 backdrop-blur-xl py-4 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
                : "py-5"
                }`}
        >
            {/* Dark gradient behind navbar when over dark hero for readability */}
            {!light && (
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
            )}

            <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6">
                <Link
                    href="/"
                    className={`text-lg font-bold tracking-tight transition-colors ${light ? "text-neutral-900" : "text-white"
                        }`}
                    style={!light ? { textShadow: "0 1px 3px rgba(0,0,0,0.3)" } : {}}
                >
                    Oceanus <span className={light ? "text-[#1b7fb9]" : "text-white/80"}>Energy</span>
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    {links.map((l) => {
                        const active = pathname === l.href;
                        return (
                            <Link
                                key={l.label}
                                href={l.href}
                                className={`text-[13px] font-semibold tracking-wide transition-colors ${light
                                    ? active
                                        ? "text-[#1b7fb9]"
                                        : "text-neutral-500 hover:text-neutral-900"
                                    : active
                                        ? "text-white"
                                        : "text-white/70 hover:text-white"
                                    }`}
                                style={!light ? { textShadow: "0 1px 2px rgba(0,0,0,0.3)" } : {}}
                            >
                                {l.label}
                            </Link>
                        );
                    })}
                    <Link
                        href="/contact"
                        className={`rounded-full border px-6 py-2.5 text-[13px] font-medium transition-all ${light
                            ? pathname === "/contact"
                                ? "border-[#1b7fb9] bg-[#1b7fb9] text-white"
                                : "border-neutral-200 text-neutral-800 hover:border-[#1b7fb9] hover:bg-neutral-50 hover:text-[#1b7fb9]"
                            : "border-white/30 text-white hover:bg-white/10"
                            }`}
                        style={!light ? { textShadow: "0 1px 2px rgba(0,0,0,0.2)" } : {}}
                    >
                        Contact
                    </Link>
                </div>

                <button className="md:hidden" onClick={() => setOpen(!open)}>
                    {open ? (
                        <X className={`h-5 w-5 ${light ? "text-neutral-900" : "text-white"}`} />
                    ) : (
                        <Menu className={`h-5 w-5 ${light ? "text-neutral-900" : "text-white"}`} />
                    )}
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="absolute inset-x-0 top-full bg-white p-6 shadow-md border-b border-neutral-100 md:hidden"
                    >
                        <div className="flex flex-col gap-5">
                            {links.map((l) => (
                                <Link
                                    key={l.label}
                                    href={l.href}
                                    onClick={() => setOpen(false)}
                                    className={`text-[15px] font-medium transition-colors ${pathname === l.href
                                        ? "text-[#1b7fb9]"
                                        : "text-neutral-600"
                                        }`}
                                >
                                    {l.label}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setOpen(false)}
                                className={`rounded-full border py-3 text-center text-[14px] font-semibold transition-all ${pathname === "/contact"
                                    ? "border-[#1b7fb9] bg-[#1b7fb9] text-white"
                                    : "border-neutral-200 text-neutral-800 hover:bg-neutral-50"
                                    }`}
                            >
                                Contact
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
