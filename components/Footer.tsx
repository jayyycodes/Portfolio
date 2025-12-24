"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Heart, ArrowUp, Phone } from "lucide-react";
import { motion } from "framer-motion";

// Exact social links from resume
const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/jayyycodes",
        icon: Github,
        color: "hover:text-foreground hover:bg-accent/50",
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/jaydatta-kshirsagar",
        icon: Linkedin,
        color: "hover:text-blue-400 hover:bg-blue-400/10",
    },
    {
        name: "Email",
        href: "mailto:jaykshirsagar5121@gmail.com",
        icon: Mail,
        color: "hover:text-cyan-400 hover:bg-cyan-400/10",
    },
    {
        name: "Phone",
        href: "tel:+919423605121",
        icon: Phone,
        color: "hover:text-green-400 hover:bg-green-400/10",
    },
];

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative border-t border-border/50 bg-background/50 backdrop-blur-sm">
            {/* Gradient Divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-bold tracking-tight inline-block">
                            Jaydatta<span className="text-gradient">.dev</span>
                        </Link>
                        <p className="text-muted-foreground text-sm max-w-xs">
                            B.Tech student in AI & Data Science. Building impactful solutions
                            with modern web technologies and Machine Learning.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            📍 Kolhapur, India
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                            Quick Links
                        </h4>
                        <nav className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <motion.div key={link.name} whileHover={{ x: 3 }}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </div>

                    {/* Social Section */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                            Connect
                        </h4>
                        <div className="flex items-center gap-2">
                            {socialLinks.map((social) => (
                                <motion.div key={social.name} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        href={social.href}
                                        target={social.name !== "Email" && social.name !== "Phone" ? "_blank" : undefined}
                                        rel="noopener noreferrer"
                                        className={`w-10 h-10 rounded-lg flex items-center justify-center text-muted-foreground transition-all ${social.color}`}
                                    >
                                        <social.icon size={18} />
                                        <span className="sr-only">{social.name}</span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            jaykshirsagar5121@gmail.com
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border/50">
                    <p className="text-sm text-muted-foreground text-center md:text-left">
                        © {new Date().getFullYear()} Jaydatta Laxmikant Kshirsagar. Built with{" "}
                        <Heart className="inline-block w-4 h-4 text-pink-500 fill-current mx-1" />
                        using Next.js
                    </p>

                    {/* Scroll to Top */}
                    <motion.button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Back to top
                        <span className="w-8 h-8 rounded-lg bg-accent/50 flex items-center justify-center group-hover:bg-accent transition-colors">
                            <ArrowUp className="w-4 h-4" />
                        </span>
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
