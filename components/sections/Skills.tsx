"use client";

import { Section } from "@/components/ui/Section";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code, Server, Brain, Wrench, Zap } from "lucide-react";

// Exact skills from resume
const skillCategories = [
    {
        title: "Frontend",
        icon: Code,
        color: "cyan",
        skills: [
            { name: "HTML5", level: 95 },
            { name: "CSS3", level: 92 },
            { name: "JavaScript (ES6+)", level: 90 },
            { name: "Tailwind CSS", level: 90 },
            { name: "React.js", level: 88 },
            { name: "Next.js", level: 85 },
        ],
    },
    {
        title: "Backend",
        icon: Server,
        color: "purple",
        skills: [
            { name: "Node.js", level: 85 },
            { name: "Express.js", level: 82 },
            { name: "REST APIs", level: 88 },
            { name: "Authentication", level: 80 },
            { name: "Middleware", level: 78 },
        ],
    },
    {
        title: "Database",
        icon: Server,
        color: "blue",
        skills: [
            { name: "MongoDB (NoSQL)", level: 85 },
            { name: "MySQL (SQL)", level: 80 },
        ],
    },
    {
        title: "AI & Data Science",
        icon: Brain,
        color: "pink",
        skills: [
            { name: "Python", level: 90 },
            { name: "Pandas", level: 85 },
            { name: "NumPy", level: 85 },
            { name: "Scikit-learn", level: 80 },
            { name: "Matplotlib", level: 82 },
            { name: "Seaborn", level: 80 },
            { name: "LLMs", level: 78 },
            { name: "Vector Databases", level: 75 },
        ],
    },
    {
        title: "Tools & Other",
        icon: Wrench,
        color: "amber",
        skills: [
            { name: "Git", level: 90 },
            { name: "GitHub", level: 90 },
            { name: "Linux", level: 75 },
            { name: "C", level: 70 },
            { name: "Java", level: 70 },
        ],
    },
];

const colorVariants: Record<string, { bg: string; text: string; gradient: string }> = {
    cyan: {
        bg: "from-cyan-500/20 to-cyan-500/5",
        text: "text-cyan-400",
        gradient: "from-cyan-400 to-cyan-600",
    },
    purple: {
        bg: "from-purple-500/20 to-purple-500/5",
        text: "text-purple-400",
        gradient: "from-purple-400 to-purple-600",
    },
    pink: {
        bg: "from-pink-500/20 to-pink-500/5",
        text: "text-pink-400",
        gradient: "from-pink-400 to-pink-600",
    },
    blue: {
        bg: "from-blue-500/20 to-blue-500/5",
        text: "text-blue-400",
        gradient: "from-blue-400 to-blue-600",
    },
    amber: {
        bg: "from-amber-500/20 to-amber-500/5",
        text: "text-amber-400",
        gradient: "from-amber-400 to-amber-600",
    },
};

export default function Skills() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
    const x2 = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <Section id="skills">
            <div ref={containerRef}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="badge-animated inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                        <Zap className="w-3.5 h-3.5" />
                        Technical Skills
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                        What I{" "}
                        <span className="text-gradient">Bring</span> to the Table
                    </h2>
                </motion.div>

                {/* Skills Grid - First Row */}
                <motion.div style={{ x: x1 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {skillCategories.slice(0, 3).map((category, categoryIndex) => {
                        const colors = colorVariants[category.color];
                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="glass-card rounded-2xl p-6 relative overflow-hidden"
                            >
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <motion.div
                                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center`}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <category.icon className={`w-6 h-6 ${colors.text}`} />
                                    </motion.div>
                                    <h3 className="text-xl font-bold">{category.title}</h3>
                                </div>

                                {/* Skills with Progress Bars */}
                                <div className="space-y-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.4,
                                                delay: categoryIndex * 0.1 + skillIndex * 0.05,
                                            }}
                                        >
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm font-medium">{skill.name}</span>
                                                <span className="text-xs text-muted-foreground">{skill.level}%</span>
                                            </div>
                                            <div className="skill-bar">
                                                <motion.div
                                                    className="skill-bar-fill"
                                                    initial={{ scaleX: 0 }}
                                                    whileInView={{ scaleX: skill.level / 100 }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        duration: 1,
                                                        delay: categoryIndex * 0.1 + skillIndex * 0.1,
                                                        ease: "easeOut",
                                                    }}
                                                    style={{ transformOrigin: "left" }}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Skills Grid - Second Row with opposite parallax */}
                <motion.div style={{ x: x2 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.slice(3).map((category, categoryIndex) => {
                        const colors = colorVariants[category.color];
                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: categoryIndex * 0.1 + 0.3 }}
                                whileHover={{ y: -8 }}
                                className="glass-card rounded-2xl p-6 relative overflow-hidden"
                            >
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <motion.div
                                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center`}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <category.icon className={`w-6 h-6 ${colors.text}`} />
                                    </motion.div>
                                    <h3 className="text-xl font-bold">{category.title}</h3>
                                </div>

                                {/* Skills with Progress Bars */}
                                <div className="space-y-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.4,
                                                delay: (categoryIndex + 3) * 0.1 + skillIndex * 0.05,
                                            }}
                                        >
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm font-medium">{skill.name}</span>
                                                <span className="text-xs text-muted-foreground">{skill.level}%</span>
                                            </div>
                                            <div className="skill-bar">
                                                <motion.div
                                                    className="skill-bar-fill"
                                                    initial={{ scaleX: 0 }}
                                                    whileInView={{ scaleX: skill.level / 100 }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        duration: 1,
                                                        delay: (categoryIndex + 3) * 0.1 + skillIndex * 0.1,
                                                        ease: "easeOut",
                                                    }}
                                                    style={{ transformOrigin: "left" }}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </Section>
    );
}
