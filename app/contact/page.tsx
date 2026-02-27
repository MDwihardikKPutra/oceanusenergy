"use client";

import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, HelpCircle, Briefcase, Plus } from "lucide-react";

const offices = [
    { city: "Houston", address: "1 Energy Plaza, TX 77002", role: "Global HQ" },
    { city: "London", address: "30 St Mary Axe, EC3A 8BF", role: "European Operations" },
    { city: "Singapore", address: "1 Raffles Quay, 048583", role: "Asia-Pacific Hub" },
    { city: "Abu Dhabi", address: "Al Reem Island, AD 31818", role: "Middle East Office" },
];

function FAQ() {
    const faqs = [
        { q: "How can I become an approved supplier?", a: "Please visit our procurement portal linked in the main navigation to register." },
        { q: "Who do I contact for media inquiries?", a: "Email our designated press office at press@oceanusenergy.com." },
        { q: "Where can I find share registry information?", a: "Our dedicated investor registrar is Computershare. Visit their portal or our Investor page." }
    ];
    return (
        <section className="bg-neutral-50 py-24 border-y border-neutral-100">
            <div className="mx-auto max-w-5xl px-6 text-center">
                <div className="inline-flex items-center justify-center p-3 text-[#1b7fb9] bg-[#1b7fb9]/10 rounded-full mb-6 ring-1 ring-[#1b7fb9]/20">
                    <HelpCircle className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl text-neutral-900">Frequently Asked Questions</h2>
                <div className="mt-12 flex flex-col gap-4 text-left">
                    {faqs.map((f, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl ring-1 ring-neutral-200 hover:ring-[#1b7fb9]/30 hover:shadow-md cursor-pointer transition-all flex justify-between items-center group">
                            <div>
                                <h3 className="text-[15px] font-semibold text-neutral-900 group-hover:text-[#1b7fb9] transition-colors">{f.q}</h3>
                                <p className="mt-2 text-[13px] text-neutral-500 max-w-2xl hidden group-hover:block transition-all">{f.a}</p>
                            </div>
                            <Plus className="h-5 w-5 text-[#1b7fb9]/50 flex-shrink-0 group-hover:text-[#1b7fb9] group-hover:rotate-90 transition-all duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CareersTeaser() {
    return (
        <section className="bg-white py-24 section-divide">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2">
                        <p className="text-[11px] uppercase tracking-widest text-[#1b7fb9] font-medium">Careers</p>
                        <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl text-neutral-900">Build the Future of Energy</h2>
                        <p className="mt-4 text-[14px] leading-relaxed text-neutral-500">
                            We are constantly looking for bright minds to tackle the energy trilemma.
                            Whether you are an experienced marine engineer or an AI data scientist, there's a place for you.
                        </p>
                        <button className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#1b7fb9] px-6 py-2.5 text-[13px] font-medium text-[#1b7fb9] transition-all hover:bg-[#1b7fb9] hover:text-white group">
                            <Briefcase className="h-4 w-4" /> View Open Roles
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 aspect-[4/3] bg-neutral-100 rounded-2xl flex items-center justify-center ring-1 ring-neutral-200 p-8 overflow-hidden relative group shadow-sm">
                        <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop" alt="Team collaborating" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-[#1b7fb9]/0 group-hover:bg-[#1b7fb9]/10 transition-colors" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function ContactPage() {
    return (
        <main className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <PageHero
                eyebrow="Contact"
                title="Get in Touch"
                description="Reach out to our teams worldwide. We're ready to discuss partnerships, investments, and opportunities."
                bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
                variant="image-center"
            />

            <section className="py-24 bg-white section-divide">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
                        {/* Contact form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full lg:w-7/12"
                        >
                            <h2 className="text-[11px] uppercase tracking-widest text-[#1b7fb9] font-medium">Send a Message</h2>
                            <form className="mt-6 flex flex-col gap-5">
                                <div className="flex gap-5">
                                    <div className="flex-1">
                                        <label className="mb-2 block text-[12px] font-semibold text-neutral-700">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="John"
                                            className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-[14px] text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:border-[#1b7fb9] focus:outline-none focus:ring-4 focus:ring-[#1b7fb9]/10 transition-all"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label className="mb-2 block text-[12px] font-semibold text-neutral-700">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Doe"
                                            className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-[14px] text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:border-[#1b7fb9] focus:outline-none focus:ring-4 focus:ring-[#1b7fb9]/10 transition-all"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="mb-2 block text-[12px] font-semibold text-neutral-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-[14px] text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:border-[#1b7fb9] focus:outline-none focus:ring-4 focus:ring-[#1b7fb9]/10 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-[12px] font-semibold text-neutral-700">
                                        Subject
                                    </label>
                                    <select className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-[14px] text-neutral-900 focus:bg-white focus:border-[#1b7fb9] focus:outline-none focus:ring-4 focus:ring-[#1b7fb9]/10 transition-all appearance-none cursor-pointer">
                                        <option>Business Partnership</option>
                                        <option>Investor Relations</option>
                                        <option>Media Inquiry</option>
                                        <option>Careers</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="mb-2 block text-[12px] font-semibold text-neutral-700">
                                        Message
                                    </label>
                                    <textarea
                                        rows={5}
                                        placeholder="Tell us how we can help..."
                                        className="w-full resize-none rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-[14px] text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:border-[#1b7fb9] focus:outline-none focus:ring-4 focus:ring-[#1b7fb9]/10 transition-all"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="group mt-2 inline-flex items-center justify-center gap-2 self-start rounded-full bg-[#1b7fb9] px-8 py-3.5 text-[14px] font-semibold text-white transition-all hover:bg-[#13608c] hover:shadow-lg hover:shadow-[#1b7fb9]/20 active:scale-95"
                                >
                                    Send Message
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </button>
                            </form>
                        </motion.div>

                        {/* Contact details + offices */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full lg:w-5/12"
                        >
                            <h2 className="text-[11px] uppercase tracking-widest text-[#1b7fb9] font-medium">Direct Contact</h2>
                            <div className="mt-6 flex flex-col gap-5">
                                {[
                                    { icon: Mail, label: "General Enquiries", value: "info@oceansenergy.com" },
                                    { icon: Phone, label: "Investor Relations", value: "+1 (713) 555-0100" },
                                    { icon: Mail, label: "Media / Press", value: "press@oceansenergy.com" },
                                ].map((item, i) => (
                                    <div key={i} className="group flex items-start gap-4 p-4 rounded-xl bg-neutral-50 ring-1 ring-neutral-100 hover:ring-[#1b7fb9]/20 hover:bg-white transition-all cursor-pointer">
                                        <div className="rounded-lg bg-white p-2.5 text-[#1b7fb9] ring-1 ring-neutral-200 group-hover:ring-[#1b7fb9]/30 transition-shadow shadow-sm">
                                            <item.icon className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <p className="text-[11px] uppercase tracking-widest text-neutral-500 font-medium">
                                                {item.label}
                                            </p>
                                            <p className="mt-1 text-[14px] font-semibold text-neutral-900 group-hover:text-[#1b7fb9] transition-colors">
                                                {item.value}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2 className="mt-12 text-[11px] uppercase tracking-widest text-[#1b7fb9] font-medium">
                                Global Offices
                            </h2>
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                {offices.map((o, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + i * 0.07 }}
                                        className="group rounded-xl bg-neutral-50 p-5 ring-1 ring-neutral-100 hover:ring-[#1b7fb9]/20 hover:bg-white transition-all cursor-default"
                                    >
                                        <div className="flex items-center gap-2 text-[#1b7fb9]">
                                            <MapPin className="h-4 w-4" />
                                            <p className="text-[13px] font-semibold text-neutral-900 group-hover:text-[#1b7fb9] transition-colors">{o.city}</p>
                                        </div>
                                        <p className="mt-2 text-[12px] leading-relaxed text-neutral-500">
                                            {o.address}
                                        </p>
                                        <span className="mt-3 inline-block rounded-md bg-white px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-600 ring-1 ring-neutral-200">
                                            {o.role}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 
              Symmetrical Order:
              1. PageHero (White)
              2. Contact Form & Offices (White)
              3. FAQ (Light Gray)
              4. CareersTeaser (White) 
            */}
            <FAQ />
            <CareersTeaser />
            <Footer />
        </main>
    );
}
