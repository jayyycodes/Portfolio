"use client";

import { Section } from "@/components/ui/Section";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Trophy, Award, Calendar, MapPin, Medal, Code } from "lucide-react";

// Exact education from resume
const education = {
    degree: "B.Tech. in Artificial Intelligence and Data Science",
    institution: "Government College of Engineering",
    location: "Kolhapur, Kolhapur",
    period: "2023 - 2027",
    status: "Expected Graduation: 2027",
};

// Exact certifications from resume
const certifications = [
    {
        title: "Hackathon 2025",
        description: "Received a Token of Appreciation for innovative implementation of the AI Feedback Analysis System.",
        icon: Trophy,
        year: "2025",
    },
    {
        title: "MERN Stack & Next.js Certification",
        description: "Completed course covering full-stack development with React, Node.js, MongoDB, and Next.js.",
        icon: Award,
        year: "2024",
    },
    {
        title: "Web-Wizards Development Competition",
        description: "Participated in Web-Wizards Development Competition and Linux Diary 23' Workshop.",
        icon: Code,
        year: "2023",
    },
];

export default function Education() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

    return (
        <Section id="education">
            <div ref={containerRef} className="max-w-5xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="badge-animated inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                        <GraduationCap className="w-3.5 h-3.5" />
                        Background
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                        Education &{" "}
                        <span className="text-gradient">Certifications</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <h3 className="text-xl font-bold flex items-center gap-3 mb-8">
                            <motion.div
                                className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                <GraduationCap className="w-5 h-5 text-cyan-400" />
                            </motion.div>
                            Education
                        </h3>

                        {/* Timeline */}
                        <div className="relative pl-8">
                            {/* Animated Timeline Line */}
                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border/30 overflow-hidden">
                                <motion.div
                                    className="w-full bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400"
                                    style={{ height: lineHeight }}
                                />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="relative"
                            >
                                {/* Timeline Dot */}
                                <motion.div
                                    className="timeline-dot top-2"
                                    animate={{
                                        boxShadow: [
                                            "0 0 10px hsl(var(--accent-cyan) / 0.5)",
                                            "0 0 25px hsl(var(--accent-cyan) / 0.8)",
                                            "0 0 10px hsl(var(--accent-cyan) / 0.5)"
                                        ]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />

                                {/* Card */}
                                <motion.div
                                    className="glass-card rounded-2xl p-6 ml-4"
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="flex items-center gap-2 text-sm text-cyan-400 mb-3">
                                        <Calendar className="w-4 h-4" />
                                        {education.period}
                                    </div>
                                    <h4 className="text-lg font-bold mb-2">{education.degree}</h4>

                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                        <MapPin className="w-4 h-4" />
                                        {education.institution}, {education.location}
                                    </div>

                                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-400 border border-purple-500/20">
                                        <Medal className="w-3 h-3" />
                                        {education.status}
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Certifications & Competitions */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <h3 className="text-xl font-bold flex items-center gap-3 mb-8">
                            <motion.div
                                className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Trophy className="w-5 h-5 text-purple-400" />
                            </motion.div>
                            Certifications & Competitions
                        </h3>

                        <div className="space-y-4">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={cert.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    className="glass-card rounded-2xl p-5 flex items-start gap-4 group cursor-default"
                                >
                                    <motion.div
                                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center shrink-0"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <cert.icon className="w-6 h-6 text-amber-400" />
                                    </motion.div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <h4 className="font-bold">{cert.title}</h4>
                                            <span className="text-xs text-cyan-400 font-medium">{cert.year}</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
