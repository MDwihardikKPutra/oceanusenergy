import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Investors from "@/components/Investors";
import Footer from "@/components/Footer";
import HomeCTA from "@/components/HomeCTA";
import { TrendingUp, UserRound, Download, LineChart } from "lucide-react";

export const metadata: Metadata = {
    title: "Investors | Oceanus Energy",
    description:
        "Investor relations for Oceanus Energy: financial highlights, annual reports, quarterly earnings, and events.",
};

function StockInfo() {
    return (
        <section className="bg-neutral-50 py-24 border-y border-neutral-100">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2">
                        <p className="text-[11px] uppercase tracking-widest text-[#1b7fb9] font-medium">Market Data</p>
                        <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl text-neutral-900">Stock Performance</h2>
                        <p className="mt-4 text-[14px] leading-relaxed text-neutral-500">
                            Oceanus Energy is listed on the New York Stock Exchange (NYSE: OCE) and the London Stock Exchange (LSE: OCE).
                        </p>
                        <div className="mt-8 flex gap-6">
                            <div className="p-5 bg-white rounded-xl ring-1 ring-neutral-200 shadow-sm flex-1 cursor-default hover:ring-[#1b7fb9]/30 hover:shadow-md transition-all">
                                <p className="text-[12px] uppercase tracking-wider text-[#1b7fb9] font-medium">NYSE: OCE</p>
                                <p className="mt-2 text-3xl font-bold text-neutral-900">$104.50</p>
                                <p className="mt-1 flex items-center gap-1 text-[13px] font-medium text-emerald-600">
                                    <TrendingUp className="h-4 w-4" /> +1.20 (1.16%)
                                </p>
                            </div>
                            <div className="p-5 bg-white rounded-xl ring-1 ring-neutral-200 shadow-sm flex-1 cursor-default hover:ring-[#1b7fb9]/30 hover:shadow-md transition-all">
                                <p className="text-[12px] uppercase tracking-wider text-[#1b7fb9] font-medium">LSE: OCE</p>
                                <p className="mt-2 text-3xl font-bold text-neutral-900">£82.30</p>
                                <p className="mt-1 flex items-center gap-1 text-[13px] font-medium text-emerald-600">
                                    <TrendingUp className="h-4 w-4" /> +0.85 (1.04%)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 min-h-[300px] flex items-center justify-center bg-white rounded-xl ring-1 ring-neutral-200 shadow-sm p-8">
                        <div className="text-center text-neutral-400">
                            <LineChart className="h-12 w-12 mx-auto mb-3 opacity-30 text-[#1b7fb9]" />
                            <p className="text-[13px] uppercase tracking-widest font-medium text-neutral-500">Interactive Chart Preview</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function BoardOfDirectors() {
    const board = [
        { name: "Sarah Jenkins", role: "Chairman & CEO" },
        { name: "David Chen", role: "Chief Financial Officer" },
        { name: "Elena Rostova", role: "EVP, Renewables" },
        { name: "Marcus Thorne", role: "Head of Global Ops" }
    ];
    return (
        <section className="bg-white py-24 section-divide">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center mb-16">
                    <p className="text-[11px] uppercase tracking-widest text-[#1b7fb9] font-medium">Governance</p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl text-neutral-900">Executive Leadership</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {board.map((b, i) => (
                        <div key={i} className="group flex flex-col items-center text-center p-6 bg-neutral-50 rounded-xl ring-1 ring-neutral-100 hover:shadow-md hover:bg-white hover:ring-[#1b7fb9]/20 transition-all cursor-pointer">
                            <div className="h-16 w-16 bg-[#1b7fb9]/10 text-[#1b7fb9] rounded-full flex items-center justify-center mb-4 ring-1 ring-[#1b7fb9]/20 group-hover:bg-[#1b7fb9] group-hover:text-white transition-colors">
                                <UserRound className="h-7 w-7" />
                            </div>
                            <p className="text-[15px] font-semibold text-neutral-900 group-hover:text-[#1b7fb9] transition-colors">{b.name}</p>
                            <p className="text-[12px] text-neutral-500 mt-1">{b.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ReportsArchive() {
    const reports = [
        "Annual Report 2024", "Annual Report 2023", "Q4 2024 Earnings PDF", "ESG Report 2024"
    ];
    return (
        <section className="bg-neutral-50 py-24 text-center border-y border-neutral-100">
            <div className="mx-auto max-w-5xl px-6">
                <p className="text-[11px] uppercase tracking-widest text-[#1b7fb9] font-medium">Downloads</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl text-neutral-900">Document Archive</h2>
                <p className="mt-4 text-[14px] leading-relaxed text-neutral-500 mb-10">
                    Access historical financial reports, ESG findings, and quarterly presentations.
                </p>
                <div className="flex flex-col gap-3 max-w-lg mx-auto">
                    {reports.map((r, i) => (
                        <div key={i} className="group flex items-center justify-between p-4 bg-white rounded-lg ring-1 ring-neutral-200 hover:ring-[#1b7fb9] hover:shadow-md transition-all cursor-pointer">
                            <span className="text-[14px] font-medium text-neutral-800 group-hover:text-[#1b7fb9] transition-colors">{r}</span>
                            <Download className="h-4 w-4 text-neutral-400 group-hover:text-[#1b7fb9] transition-colors" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function InvestorsPage() {
    return (
        <main className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <PageHero
                eyebrow="Investor Relations"
                title="Financial Highlights"
                description="Transparent reporting, consistent returns, and a clear pathway toward long-term value creation."
                bgImage="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1600&auto=format&fit=crop"
                variant="image-center"
            />
            {/* 
        Symmetrical Order:
        1. PageHero (White)
        2. Investors (Grid - White)
        3. StockInfo (Left/Right - Light Gray)
        4. BoardOfDirectors (Grid - White)
        5. ReportsArchive (List - Light Gray)
        6. HomeCTA (Blue Banner)
      */}
            <Investors />
            <StockInfo />
            <BoardOfDirectors />
            <ReportsArchive />
            <HomeCTA />
            <Footer />
        </main>
    );
}
