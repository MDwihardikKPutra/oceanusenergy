"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative">
            {/* Dark curtain that fades out */}
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                    duration: 2.6,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="pointer-events-none fixed inset-0 z-[9999] bg-neutral-900"
            />
            {children}
        </div>
    );
}
