"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="hero"
            className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-[100svh] flex flex-col md:flex-row items-center"
        >
            {/* Background Image */}
            <div className="absolute inset-0 md:left-auto md:right-0 w-full md:w-[45%] h-full z-0 overflow-hidden">
                {/* Left fade overlay — fades image into background */}
                <div
                    className="absolute inset-y-0 left-0 w-full md:w-[40%] z-10 pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(to right, #0A0A0B 0%, #0A0A0B 30%, transparent 100%)",
                    }}
                />
                {/* Bottom fade on mobile */}
                <div
                    className="absolute inset-x-0 bottom-0 h-1/3 md:hidden z-10 pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(to top, #0A0A0B 0%, transparent 100%)",
                    }}
                />
                <Image
                    src="/heroimg.jpeg"
                    alt="Jaydatta Kshirsagar"
                    fill
                    className="object-cover object-top md:object-center"
                    style={{ filter: "saturate(0.6)" }}
                    priority
                />
            </div>

            {/* Content — vertically centered in viewport */}
            <div className="max-w-screen-xl w-full mx-auto px-5 md:px-8 lg:px-12 xl:px-16 flex relative z-10 pt-28 pb-16 md:pt-40 md:pb-24 min-h-[100svh]">
                <motion.div
                    className="w-full md:w-[55%] flex flex-col items-start justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                >
                    {/* Status Badge — lime pill */}
                    <div className="hero-status-pill mb-8 flex items-center gap-2 text-xs uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-lime animate-pulse flex-shrink-0" />
                        Open to Opportunities
                    </div>

                    {/* Headline */}
                    <h1 className="font-sora text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary mb-8 font-black tracking-[-0.04em] leading-[1.1]">
                        I build AI systems that actually{" "}
                        <span className="italic text-lime font-black">
                            work.
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="font-inter text-body-lg text-on-surface-variant mb-12 max-w-2xl border-l-2 border-primary-fixed-dim pl-6">
                        B.Tech AI &amp; Data Science · GCOE Kolhapur
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link href="#contact">
                            <motion.button
                                className="btn-primary cursor-interactive"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Let&apos;s Connect
                            </motion.button>
                        </Link>
                        <Link
                            href="https://drive.google.com/file/d/1Vg1chCoKwgZjd59jLPs__YGlmd8Szb-n/view?usp=drive_link"
                            target="_blank"
                        >
                            <motion.button
                                className="btn-outline flex items-center gap-2 cursor-interactive"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Download Resume
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
