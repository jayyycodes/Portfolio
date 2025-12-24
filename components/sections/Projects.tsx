"use client";

import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Folder, Sparkles } from "lucide-react";

// Exact projects from resume
const projects = [
    {
        title: "AI Resume Analyzer",
        technologies: "React.js, Node.js, Python, LLMs",
        description: [
            "Developed an end-to-end resume evaluation system that uses LLMs to perform 10-point analysis and suggest critical improvements.",
            "Engineered a feature to generate optimized resume PDFs on the fly, resulting in an average 15% improvement in user resume strength scores.",
        ],
        tags: ["React.js", "Node.js", "Python", "LLMs"],
        github: "https://github.com/jayyycodes",
        demo: "#",
        highlight: "15% improvement",
    },
    {
        title: "Textbook Q&A Chatbot",
        technologies: "Next.js, Node.js, Python, Vector DB",
        description: [
            "Created an academic chatbot that leverages a ChromaDB Vector Database and semantic embeddings for high-quality, contextual retrieval augmented generation (RAG).",
            "Focused on optimizing the RAG pipeline for high performance and efficiency when answering queries using supplied textbook content.",
        ],
        tags: ["Next.js", "Node.js", "Python", "ChromaDB", "RAG"],
        github: "https://github.com/jayyycodes",
        demo: "#",
        highlight: "RAG Pipeline",
    },
    {
        title: "AI Feedback Analysis System",
        technologies: "Next.js, Python, Express.js, Transformer Models",
        description: [
            "Engineered an AI-powered analyzer using Transformer Models for sentiment and topic classification across over 500 pieces of feedback.",
            "Automated the generation of instructor-wise reports and interactive dashboards, reducing manual data processing time by an estimated 80%.",
        ],
        tags: ["Next.js", "Python", "Express.js", "Transformers"],
        github: "https://github.com/jayyycodes",
        demo: "#",
        highlight: "80% time reduction",
    },
];

export default function Projects() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

    return (
        <Section id="projects">
            <div ref={containerRef} className="flex flex-col space-y-16">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <span className="badge-animated inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                        <Folder className="w-3.5 h-3.5" />
                        Featured Projects
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                        Projects That{" "}
                        <span className="text-gradient">Showcase</span> My Skills
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Real-world AI and full-stack applications that demonstrate my passion
                        for building impactful solutions.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            style={{ rotateX: index === 1 ? rotate : 0 }}
                            className="group"
                        >
                            <motion.div
                                className="glass-card rounded-2xl p-8 relative overflow-hidden gradient-border"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Project Number */}
                                <div className="absolute top-4 right-4 text-8xl font-bold text-foreground/[0.03] select-none">
                                    0{index + 1}
                                </div>

                                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    {/* Left: Title & Tech */}
                                    <div className="lg:col-span-1">
                                        <div className="flex items-start gap-4 mb-4">
                                            <motion.div
                                                className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center shrink-0"
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <Folder className="w-6 h-6 text-cyan-400" />
                                            </motion.div>
                                            <div>
                                                <h3 className="text-xl font-bold group-hover:text-gradient-static transition-all">
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground mt-1">
                                                    {project.technologies}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Highlight Badge */}
                                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 border border-cyan-500/20">
                                            <Sparkles className="w-3 h-3" />
                                            {project.highlight}
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 rounded-full text-xs font-medium bg-accent/50 text-muted-foreground border border-border"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right: Description */}
                                    <div className="lg:col-span-2">
                                        <ul className="space-y-3">
                                            {project.description.map((point, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.1 + i * 0.1 }}
                                                    className="flex items-start gap-3 text-muted-foreground"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                                                    <span>{point}</span>
                                                </motion.li>
                                            ))}
                                        </ul>

                                        {/* Links */}
                                        <div className="flex gap-4 mt-6 pt-6 border-t border-border/50">
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group/link"
                                                whileHover={{ x: 5 }}
                                            >
                                                <Github className="w-4 h-4" />
                                                <span className="group-hover/link:underline">View Code</span>
                                            </motion.a>
                                        
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent" />
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* View More CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center"
                >
                    <motion.a
                        href="https://github.com/jayyycodes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                        whileHover={{ y: -2 }}
                    >
                        <span className="group-hover:underline">View all projects on GitHub</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </motion.div>
            </div>
        </Section>
    );
}
