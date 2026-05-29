"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Projects from resume
const projects = [
    {
        number: "01",
        title: "SmartFlow",
        subtitle: "AI-Driven Workflow Automation",
        description:
            "Multi-LLM cascade platform with 99% uptime, AWS Lambda sandboxed execution, 118+ live tasks",
        tech: "Next.js, FastAPI, Python, AWS Lambda, Firebase, PostgreSQL",
        link: "https://github.com/jayyycodes/workflow-automation", // TODO: add real link
    },
    {
        number: "02",
        title: "AI Feedback Analyzer",
        subtitle: "NLP-Powered Sentiment & Topic Classification",
        description:
            "Transformer-based analysis across 500+ feedback entries, 80% reduction in manual processing",
        tech: "Python, NLP, Transformers, React.js, Express.js",
        link: "https://github.com/jayyycodes/Ai_Feedback-analyser", // TODO: add real link
    },
    {
        number: "03",
        title: "Textbook Q&A Chatbot",
        subtitle: "RAG-Powered Academic Assistant",
        description:
            "ChromaDB vector store with semantic embeddings for high-quality contextual retrieval",
        tech: "Python, RAG, Node.js, ChromaDB, Semantic Search",
        link: "https://github.com/jayyycodes/Textbook_chatbot", // TODO: add real link
    },
];

export default function Projects() {
    return (
        <section id="projects" className="max-w-screen-xl mx-auto px-5 md:px-8 lg:px-12 xl:px-16 mb-24">
            <div className="section-line" />
            <div className="font-mono text-label-mono text-outline-variant mb-16 uppercase tracking-widest">
                [SCN_03 // SELECTED WORK]
            </div>

            <motion.h2
                className="font-sora text-headline-md text-primary mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                Selected{" "}
                <em className="not-italic text-lime">work.</em>
            </motion.h2>

            <div className="flex flex-col gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.number}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.1,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        <div className="project-card p-8 flex flex-col md:flex-row justify-between items-start md:items-center cursor-interactive group w-full">
                            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
                                <div className="font-mono text-[64px] font-bold text-lime leading-none">
                                    {project.number}
                                </div>
                                <div>
                                    <h3 className="font-sora text-headline-md text-primary mb-2 project-title transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="font-inter text-on-surface-variant">
                                        {project.description}
                                    </p>
                                    <p className="font-mono text-label-mono text-outline mt-2 uppercase">
                                        {project.tech}
                                    </p>
                                </div>
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="view-project-link mt-6 md:mt-0 flex items-center gap-2 font-mono text-label-mono text-on-surface-variant uppercase tracking-wider transition-colors shrink-0"
                            >
                                VIEW PROJECT{" "}
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* GitHub Link */}
            <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <a
                    href="https://github.com/jayyycodes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-label-mono text-on-surface-variant hover:text-primary-fixed-dim transition-colors uppercase tracking-wider cursor-interactive"
                >
                    View all projects on GitHub
                    <ArrowRight className="w-4 h-4" />
                </a>
            </motion.div>
        </section>
    );
}
