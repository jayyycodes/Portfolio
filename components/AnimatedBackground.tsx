"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AnimatedBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

    // Global mouse tracking
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="animated-bg" aria-hidden="true">
            {/* Multi-layered Global Cursor-following gradient */}
            <motion.div
                className="absolute inset-0 pointer-events-none overflow-hidden"
                style={{
                    background: `
                        radial-gradient(circle 1000px at ${mousePosition.x}% ${mousePosition.y}%, 
                            hsl(var(--accent-blue-bright) / 0.15), 
                            hsl(var(--accent-blue-teal) / 0.1) 30%, 
                            hsl(var(--accent-blue-medium) / 0.05) 50%,
                            transparent 70%)
                    `,
                }}
                animate={{
                    opacity: [0.7, 1, 0.7],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Floating Interactive Particles */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full pointer-events-none"
                    style={{
                        background: `hsl(var(--accent-blue-${['bright', 'teal', 'light'][i % 3]}) / 0.3)`,
                        left: `${10 + (i * 6)}%`,
                        top: `${10 + (i * 5) % 80}%`,
                    }}
                    animate={{
                        x: [
                            0,
                            Math.sin(i) * 40 - (mousePosition.x - 50) * 0.2,
                            0
                        ],
                        y: [
                            0,
                            Math.cos(i) * 40 - (mousePosition.y - 50) * 0.2,
                            0
                        ],
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 4 + (i * 0.3),
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.15,
                    }}
                />
            ))}

            {/* Cursor spotlight effect */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(circle 500px at ${mousePosition.x}% ${mousePosition.y}%, 
                        hsl(var(--accent-blue-bright) / 0.15), 
                        transparent 60%)`,
                    mixBlendMode: 'screen',
                }}
            />

            {/* Gradient Orbs */}
            <motion.div
                className="orb orb-1"
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -80, 50, 0],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="orb orb-2"
                animate={{
                    x: [0, -80, 60, 0],
                    y: [0, 60, -40, 0],
                    scale: [1, 0.9, 1.15, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="orb orb-3"
                animate={{
                    x: [0, 60, -80, 0],
                    y: [0, -60, 80, 0],
                    scale: [1, 1.1, 0.95, 1],
                }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Grid Pattern Overlay - adapts to theme */}
            <div
                className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Radial Gradient Overlay for depth */}
            <div
                className="absolute inset-0 dark:block"
                style={{
                    background: 'radial-gradient(ellipse at 50% 50%, transparent 0%, hsl(var(--background) / 0.8) 70%)',
                }}
            />
        </div>
    );
}
