"use client";

import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Sparkles, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const roles = [
    "AI & Data Science Student",
    "Full Stack Developer",
    "ML Enthusiast",
    "Problem Solver",
];

const socialLinks = [
    { name: "GitHub", href: "https://github.com/jayyycodes", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/jaydatta-kshirsagar", icon: Linkedin },
    { name: "Email", href: "mailto:jaykshirsagar5121@gmail.com", icon: Mail },
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Mouse tracking effect
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = (containerRef.current as HTMLElement).getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                setMousePosition({ x, y });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentRole.length) {
                    setDisplayText(currentRole.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <Section id="hero" className="min-h-screen flex items-center justify-center pt-24">
            <motion.div
                ref={containerRef}
                style={{ y, opacity }}
                className="flex flex-col items-center text-center space-y-8 relative"
            >
                {/* Enhanced Cursor-following gradient effect */}
                <motion.div
                    className="absolute inset-0 pointer-events-none overflow-hidden"
                    style={{
                        background: `radial-gradient(circle 800px at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--accent-blue-bright) / 0.12), hsl(var(--accent-blue-teal) / 0.08) 40%, transparent 70%)`,
                    }}
                    animate={{
                        opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Decorative Elements with Parallax - Blue Theme */}
                <motion.div
                    className="absolute -top-20 -left-20 w-40 h-40 rounded-full opacity-20"
                    style={{
                        background: "radial-gradient(circle, hsl(var(--accent-blue-teal)) 0%, transparent 70%)",
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute -bottom-10 -right-20 w-32 h-32 rounded-full opacity-20"
                    style={{
                        background: "radial-gradient(circle, hsl(var(--accent-blue-bright)) 0%, transparent 70%)",
                    }}
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />

                {/* Availability Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="badge-animated inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium backdrop-blur-sm"
                >
                    <motion.span
                        className="w-2 h-2 rounded-full bg-emerald-400"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.7, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <span>Open to Opportunities</span>
                    <Sparkles className="w-3.5 h-3.5" />
                </motion.div>

                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                        Hi, I&apos;m{" "}
                        <span className="text-gradient">Jaydatta</span>
                    </h1>
                    <div className="mt-4 text-2xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground/80">
                        <span>{displayText}</span>
                        <motion.span
                            className="inline-block w-0.5 h-8 md:h-10 lg:h-12 bg-current ml-1 align-middle"
                            animate={{ opacity: [1, 0] }}
                            transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        />
                    </div>
                </motion.div>

                {/* Subtitle - From Resume Summary */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
                >
                    B.Tech student in{" "}
                    <span className="text-gradient-static font-medium">Artificial Intelligence & Data Science</span>{" "}
                    with strong hands-on experience in full-stack development and AI-integrated applications.
                </motion.p>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="flex items-center gap-3"
                >
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={social.name}
                            href={social.href}
                            target={social.name !== "Email" ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                        >
                            <social.icon className="w-5 h-5" />
                        </motion.a>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link href="#contact">
                        <motion.button
                            className="btn-glow h-12 px-8 rounded-xl text-sm font-semibold inline-flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="flex items-center gap-2">
                                Let&apos;s Connect
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </motion.button>
                    </Link>
                    <Button variant="outline" size="lg" asChild className="h-12 px-8 rounded-xl border-border hover:border-foreground/30 hover:bg-accent/50">
                        <Link href="https://drive.google.com/file/d/1rSVmIYr7jrcOqhosxNv7IZ-wqMQuanpV/view?usp=drive_link" target="_blank" className="flex items-center gap-2">
                            <Download className="w-4 h-4" />
                            Download Resume
                        </Link>
                    </Button>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="absolute -bottom-16 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center p-2"
                        animate={{ y: [0, 5, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <motion.div
                            className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"
                            animate={{ y: [0, 12, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </Section>
    );
}
