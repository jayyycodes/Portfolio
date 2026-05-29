"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function StatCounter({
    target,
    suffix = "",
    prefix = "",
}: {
    target: number;
    suffix?: string;
    prefix?: string;
}) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let current = 0;
            const duration = 2000;
            const step = target / (duration / 16);

            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    setCount(target);
                    clearInterval(timer);
                } else {
                    setCount(Math.ceil(current));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, target]);

    return (
        <span ref={ref}>
            {prefix}
            {count}
            {suffix}
        </span>
    );
}

export default function About() {
    return (
        <section id="about" className="max-w-screen-xl mx-auto px-5 md:px-8 lg:px-12 xl:px-16 mb-24">
            <div className="section-line" />
            <div className="font-mono text-label-mono text-outline-variant mb-16 uppercase tracking-widest">
                [SCN_01 // ABOUT]
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
                {/* Left — Headline */}
                <motion.div
                    className="md:col-span-5 mb-12 md:mb-0"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="font-sora text-headline-lg-mobile md:text-headline-lg text-primary leading-tight">
                        Turning{" "}
                        <em className="italic text-lime">
                            ideas
                        </em>{" "}
                        into production-grade systems.
                    </h2>
                </motion.div>

                {/* Spacer */}
                <div className="md:col-span-1" />

                {/* Right — Body + Stats */}
                <motion.div
                    className="md:col-span-6 flex flex-col justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.2,
                    }}
                >
                    <p className="font-inter text-[22px] leading-[1.8] text-on-surface-variant mb-8">
                        AI Engineer and Full-Stack Developer experienced in
                        architecting production-grade machine learning pipelines,
                        Retrieval-Augmented Generation (RAG) systems, and
                        generative AI web applications. Adept at leveraging
                        Large Language Models (LLMs), deep learning frameworks,
                        and robust backend architectures to solve complex
                        workflow challenges.
                    </p>
                    <p className="font-inter text-[22px] leading-[1.8] text-on-surface-variant mb-8">
                        Currently in my 3rd year of B.Tech at GCOE Kolhapur,
                        consistently recognized with multiple national hackathon
                        victories for delivering scalable, high-impact technical
                        prototypes. VP of the Artificial Intelligence Students&apos;
                        Association (AISA).
                    </p>

                    {/* Stats */}
                    <div className="flex flex-row justify-between items-center w-full border-t border-outline-variant/30 pt-8 gap-2">
                        <div className="stat-item">
                            <div className="font-sora text-lime text-headline-lg text-primary-fixed-dim">
                                <StatCounter target={10} suffix="+" />
                            </div>
                            <div className="font-mono text-label-mono text-outline mt-2 uppercase">
                                Projects
                            </div>
                        </div>
                        <div className="stat-item">
                            <div className="font-sora text-lime text-headline-lg text-primary">
                                <StatCounter target={6} suffix="+" />
                            </div>
                            <div className="font-mono text-label-mono text-outline mt-2 uppercase">
                                LLMs Integrated
                            </div>
                        </div>
                        <div className="stat-item">
                            <div className="font-sora text-lime text-headline-lg text-primary">
                                <StatCounter target={3} suffix="rd" />
                            </div>
                            <div className="font-mono text-label-mono text-outline mt-2 uppercase">
                                Year B.Tech
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
