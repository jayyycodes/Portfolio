"use client";

import { motion } from "framer-motion";

// Skills from resume — split into two marquee rows
const row1Skills = [
    "Python",
    "TensorFlow",
    "Keras",
    "Scikit-learn",
    "Transformers",
    "LLMs / GPT",
    "Next.js",
    "React.js",
    "Node.js",
    "FastAPI",
];

const row2Skills = [
    "MongoDB",
    "PostgreSQL",
    "ChromaDB",
    "Vector DBs",
    "AWS Lambda",
    "Express.js",
    "JavaScript",
    "Tailwind CSS",
    "Git / GitHub",
    "RAG Systems",
];

function MarqueeRow({
    skills,
    direction,
}: {
    skills: string[];
    direction: "left" | "right";
}) {
    // Duplicate for seamless loop
    const doubled = [...skills, ...skills];

    return (
        <div className="marquee-container">
            <div
                className={`flex gap-6 pr-6 ${
                    direction === "left"
                        ? "marquee-track-left"
                        : "marquee-track-right"
                }`}
            >
                {doubled.map((skill, i) => (
                    <div
                        key={`${skill}-${i}`}
                        className="marquee-chip cursor-interactive"
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="max-w-screen-xl mx-auto px-5 md:px-8 lg:px-12 xl:px-16 mb-24">
            <div className="section-line" />
            <div className="font-mono text-label-mono text-outline-variant mb-16 uppercase tracking-widest">
                [SCN_02 // STACK]
            </div>

            <motion.h2
                className="font-sora text-headline-md text-primary mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                What I work with.
            </motion.h2>

            {/* Marquee Container */}
            <div className="w-full overflow-hidden flex flex-col gap-6 relative">
                {/* Fading edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* Row 1 — scrolls left */}
                <MarqueeRow skills={row1Skills} direction="left" />

                {/* Row 2 — scrolls right */}
                <div className="mt-4">
                    <MarqueeRow skills={row2Skills} direction="right" />
                </div>
            </div>
        </section>
    );
}
