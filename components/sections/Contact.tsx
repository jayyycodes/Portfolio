"use client";

import { Section } from "@/components/ui/Section";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, MessageSquare, Phone, Linkedin, Github } from "lucide-react";

// Exact contact info from resume
const contactInfo = {
    email: "jaykshirsagar5121@gmail.com",
    phone: "(+91) 94236 05121",
    location: "Kolhapur, India",
    linkedin: "jaydatta-kshirsagar",
    github: "jayyycodes",
};

export default function Contact() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);

    return (
        <Section id="contact">
            <motion.div
                ref={containerRef}
                style={{ scale, opacity }}
                className="max-w-4xl mx-auto"
            >
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="badge-animated inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                        <MessageSquare className="w-3.5 h-3.5" />
                        Get in Touch
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                        Let&apos;s{" "}
                        <span className="text-gradient">Connect</span>
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Feel free to reach out through any of the channels below.
                    </p>
                </motion.div>

                <div className="max-w-2xl mx-auto w-full">
                    {/* Contact Info - Centered */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <motion.div
                            className="glass-card rounded-2xl p-6"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-lg font-bold mb-6">Contact Information</h3>

                            <div className="space-y-4">
                                {/* Email */}
                                <motion.a
                                    href={`mailto:${contactInfo.email}`}
                                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-accent/50 transition-colors group"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Mail className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Email</p>
                                        <p className="font-medium group-hover:text-blue-400 transition-colors text-sm">{contactInfo.email}</p>
                                    </div>
                                </motion.a>

                                {/* Phone */}
                                <motion.a
                                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-accent/50 transition-colors group"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Phone className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Phone</p>
                                        <p className="font-medium group-hover:text-blue-400 transition-colors">{contactInfo.phone}</p>
                                    </div>
                                </motion.a>

                                {/* Location */}
                                <div className="flex items-center gap-4 p-3 rounded-xl">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Location</p>
                                        <p className="font-medium">{contactInfo.location}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            className="glass-card rounded-2xl p-6"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-lg font-bold mb-4">Connect With Me</h3>
                            <div className="flex gap-3 justify-center">
                                <motion.a
                                    href={`https://linkedin.com/in/${contactInfo.linkedin}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-blue-400 hover:bg-blue-400/10 transition-all"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Linkedin className="w-5 h-5" />
                                </motion.a>
                                <motion.a
                                    href={`https://github.com/${contactInfo.github}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Github className="w-5 h-5" />
                                </motion.a>
                                <motion.a
                                    href={`mailto:${contactInfo.email}`}
                                    className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-blue-400 hover:bg-blue-400/10 transition-all"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Mail className="w-5 h-5" />
                                </motion.a>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </Section>
    );
}
