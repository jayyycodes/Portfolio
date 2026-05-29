"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = [
    { name: "GitHub", href: "https://github.com/jayyycodes" },
    { name: "LinkedIn", href: "https://linkedin.com/in/jaydatta-kshirsagar" },
    { name: "Email", href: "mailto:jaykshirsagar5121@gmail.com" },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="w-full border-t border-[#1E1E20] bg-background">
            <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 xl:px-28 py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    {/* Brand */}
                    <Link
                        href="/"
                        className="font-sora text-headline-lg text-primary cursor-interactive"
                    >
                        Jaydatta.<span className="text-lime">dev</span>
                    </Link>

                    {/* Copyright */}
                    <div className="font-mono text-label-mono text-outline-variant uppercase tracking-widest text-center">
                        © 2026 JAYDATTA KSHIRSAGAR //
                        SYSTEM_REVISION_01
                    </div>

                    {/* Links */}
                    <div className="flex gap-8 items-center">
                        {footerLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target={
                                    link.name !== "Email"
                                        ? "_blank"
                                        : undefined
                                }
                                rel="noopener noreferrer"
                                className="footer-link font-mono text-label-mono text-on-surface-variant hover:text-primary transition-all opacity-80 hover:opacity-100 uppercase cursor-interactive"
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* Scroll to Top */}
                        <motion.button
                            onClick={scrollToTop}
                            className="w-10 h-10 border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary-fixed-dim hover:border-primary-fixed-dim transition-colors cursor-interactive"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ArrowUp className="w-4 h-4" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
