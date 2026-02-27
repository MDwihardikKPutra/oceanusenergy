import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cols: { title: string; links: { label: string; href: string }[] }[] = [
    {
        title: "Company",
        links: [
            { label: "About", href: "/" },
            { label: "Operations", href: "/operations" },
            { label: "Sustainability", href: "/sustainability" },
            { label: "Careers", href: "/contact" },
        ],
    },
    {
        title: "Resources",
        links: [
            { label: "Annual Report", href: "/investors" },
            { label: "Newsroom", href: "/contact" },
            { label: "Technology", href: "/technology" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
            { label: "Cookies", href: "#" },
        ],
    },
];

export default function Footer() {
    return (
        <footer id="contact" className="bg-white py-16 border-t border-neutral-100">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-col gap-12 md:flex-row md:justify-between">
                    {/* Brand + newsletter */}
                    <div className="max-w-xs">
                        <Link href="/" className="text-lg font-bold tracking-tight text-neutral-900">
                            Oceanus <span className="text-[#1b7fb9]">Energy</span>
                        </Link>
                        <p className="mt-3 text-[14px] leading-relaxed text-neutral-500">
                            Powering progress from the deep to the grid, accelerating the transition to reliable clean energy.
                        </p>
                        <form className="mt-6 flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 rounded-lg bg-neutral-50 px-4 py-2.5 text-[13px] text-neutral-800 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1b7fb9]/20 transition-all border border-neutral-200"
                            />
                            <button
                                type="submit"
                                className="flex items-center gap-1 rounded-lg bg-[#1b7fb9] px-4 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-[#13608c]"
                            >
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </form>
                    </div>

                    {/* Link columns */}
                    <div className="flex gap-12 md:gap-20">
                        {cols.map(({ title, links }) => (
                            <div key={title}>
                                <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-neutral-900">
                                    {title}
                                </h4>
                                <ul className="flex flex-col gap-3">
                                    {links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-[14px] text-neutral-500 transition-colors hover:text-[#1b7fb9]"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-neutral-100 pt-8 text-[12px] text-neutral-400 md:flex-row">
                    <p>&copy; {new Date().getFullYear()} Oceanus Energy. All rights reserved.</p>
                    <p className="font-medium">Houston · London · Singapore · Abu Dhabi</p>
                </div>
            </div>
        </footer>
    );
}
