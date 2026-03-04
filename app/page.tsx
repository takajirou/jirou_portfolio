"use client";

import { motion } from "motion/react";

export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white">
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-neutral-800"
            >
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl tracking-wider"
                    >
                        Soujirou&#39;s PORTFOLIO
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex gap-6"
                    >
                        <a
                            href="#about"
                            className="hover:text-neutral-400 transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            className="hover:text-neutral-400 transition-colors"
                        >
                            Works
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-neutral-400 transition-colors"
                        >
                            Contact
                        </a>
                    </motion.div>
                </nav>
            </motion.header>
        </div>
    );
}
