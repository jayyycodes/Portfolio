"use client";

import { Section } from "@/components/ui/Section";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code2, Brain, Target, Rocket, MapPin, GraduationCap } from "lucide-react";

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const increment = value / (duration * 60);
            const timer = setInterval(() => {
                start += increment;
                if (start >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 1000 / 60);
            return () => clearInterval(timer);
        }
    }, [isInView, value, duration]);

    return <span ref={ref}>{count}+</span>;
}

export default function About() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <Section id="about">
            <div ref={containerRef} className="space-y-16">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-4"
                >
                    <span className="badge-animated inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium">
                        <Rocket className="w-3.5 h-3.5" />
                        About Me
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                        Passionate about{" "}
                        <span className="text-gradient">AI & Innovation</span>
                    </h2>
                </motion.div>

                {/* About Content - From Resume Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="glass-card rounded-2xl p-8 md:p-10">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            {/* Info */}
                            <div className="flex-1 space-y-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    B.Tech student in <span className="text-foreground font-medium">Artificial Intelligence & Data Science</span> with
                                    strong hands-on experience in full-stack development and AI-integrated applications.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Skilled in <span className="text-gradient-static font-medium">Next.js</span>, <span className="text-gradient-static font-medium">Node.js</span>, and <span className="text-gradient-static font-medium">Python</span>,
                                    with a passion for building impactful real-world solutions using modern web technologies and Machine Learning models.
                                </p>

                                {/* Quick Info */}
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <MapPin className="w-4 h-4 text-cyan-400" />
                                        <span>Kolhapur, India</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <GraduationCap className="w-4 h-4 text-purple-400" />
                                        <span>B.Tech 2023-2027</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Stats Grid with Scroll Animation */}
                <motion.div style={{ y }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { label: "Projects Built", value: 10, icon: Code2, description: "AI & Full Stack" },
                        { label: "Technologies", value: 20, icon: Brain, description: "Frontend to ML" },
                        { label: "Graduation Year", value: 2027, icon: Target, description: "GCOE Kolhapur", noPlus: true },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="glass-card rounded-2xl p-8 text-center group cursor-default"
                        >
                            <motion.div
                                className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mb-4"
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <stat.icon className="w-7 h-7 text-cyan-400" />
                            </motion.div>
                            <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                                {stat.noPlus ? stat.value : <AnimatedCounter value={stat.value} />}
                            </div>
                            <p className="text-foreground font-medium">{stat.label}</p>
                            <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
}
