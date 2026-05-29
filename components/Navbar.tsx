"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Desktop Nav */}
            <nav
                className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300 hidden md:flex justify-between items-center px-5 md:px-8 lg:px-12 xl:px-16 py-6 ${
                    scrolled
                        ? "nav-scrolled border-outline-variant/50"
                        : "bg-background/0 border-transparent"
                }`}
            >
                <div className="max-w-screen-xl mx-auto w-full flex justify-between items-center">
                    <Link
                        href="/"
                        className="font-sora text-headline-md font-black tracking-tighter text-primary cursor-interactive"
                    >
                        Jaydatta.<span className="text-lime">dev</span>
                    </Link>

                    <div className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-on-surface-variant font-medium hover:text-primary-fixed-dim transition-colors duration-300 font-mono text-label-mono uppercase cursor-interactive"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="#contact">
                            <button className="btn-primary cursor-interactive">
                                Hire Me
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Mobile Nav */}
            <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-xl border-b border-outline-variant/30 md:hidden flex justify-between items-center px-6 py-4">
                <Link
                    href="/"
                    className="font-sora text-headline-md font-black tracking-tighter text-primary cursor-interactive"
                >
                    Jaydatta.dev
                </Link>

                <motion.button
                    className="p-2 text-on-surface-variant hover:text-primary transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    whileTap={{ scale: 0.9 }}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl md:hidden pt-24"
                    >
                        <div className="px-6 flex flex-col gap-2">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="block py-4 text-2xl font-sora font-bold text-on-surface-variant hover:text-primary-fixed-dim transition-colors border-b border-outline-variant/20"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navLinks.length * 0.05 }}
                                className="mt-8"
                            >
                                <Link
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <button className="btn-primary w-full cursor-interactive">
                                        Hire Me
                                    </button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
