import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cols: Record<string, string[]> = {
    Company: ["About", "Operations", "Sustainability", "Careers"],
    Resources: ["Annual Report", "Newsroom", "Technology"],
    Legal: ["Privacy", "Terms", "Cookies"],
};

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#0c1a2e] py-14 text-white">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-col gap-10 md:flex-row md:justify-between">
                    {/* Brand + newsletter */}
                    <div className="max-w-xs">
                        <Link href="/" className="text-base font-semibold tracking-tight">
                            Oceanus Energy
                        </Link>
                        <p className="mt-2 text-[13px] leading-relaxed text-white/40">
                            Powering progress from the deep.
                        </p>
                        <form className="mt-4 flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-[13px] text-white placeholder:text-white/25 focus:border-white/25 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="flex items-center gap-1 rounded-lg bg-white px-3 py-2 text-[13px] font-medium text-[#0c1a2e] transition-opacity hover:opacity-90"
                            >
                                <ArrowRight className="h-3.5 w-3.5" />
                            </button>
                        </form>
                    </div>

                    {/* Link columns */}
                    <div className="flex gap-16">
                        {Object.entries(cols).map(([title, links]) => (
                            <div key={title}>
                                <h4 className="mb-3 text-[10px] font-medium uppercase tracking-widest text-white/30">
                                    {title}
                                </h4>
                                <ul className="flex flex-col gap-2">
                                    {links.map((link) => (
                                        <li key={link}>
                                            <Link
                                                href="#"
                                                className="text-[13px] text-white/40 transition-colors hover:text-white"
                                            >
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-[11px] text-white/20 md:flex-row">
                    <p>&copy; {new Date().getFullYear()} Oceanus Energy. All rights reserved.</p>
                    <p>Houston · London · Singapore · Abu Dhabi</p>
                </div>
            </div>
        </footer>
    );
}
