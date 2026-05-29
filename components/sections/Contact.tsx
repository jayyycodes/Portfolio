"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, ArrowUpRight, Loader2 } from "lucide-react";

const contactInfo = {
    email: "jaykshirsagar5121@gmail.com",
    phone: "+91 94236 05121",
    location: "Kolhapur, India",
    linkedin: "jaydatta-kshirsagar",
    github: "jayyycodes",
};

const contactLinks = [
    {
        label: "Email",
        value: contactInfo.email,
        href: `mailto:${contactInfo.email}`,
        icon: Mail,
    },
    {
        label: "Phone",
        value: contactInfo.phone,
        href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
        icon: Phone,
    },
    {
        label: "LinkedIn",
        value: `linkedin.com/in/${contactInfo.linkedin}`,
        href: `https://linkedin.com/in/${contactInfo.linkedin}`,
        icon: Linkedin,
        external: true,
    },
    {
        label: "GitHub",
        value: `github.com/${contactInfo.github}`,
        href: `https://github.com/${contactInfo.github}`,
        icon: Github,
        external: true,
    },
];

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            
            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 5000);
            }
        } catch (error) {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <section id="contact" className="max-w-screen-xl mx-auto px-5 md:px-8 lg:px-12 xl:px-16 mb-24">
            <div className="section-line" />
            <div className="font-mono text-label-mono text-outline-variant mb-16 uppercase tracking-widest">
                [SCN_04 // CONTACT]
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
                {/* Left — CTA & Form */}
                <motion.div
                    className="md:col-span-6 mb-12 md:mb-0"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="font-sora text-headline-lg-mobile md:text-headline-lg text-primary leading-tight mb-8">
                        Let&apos;s build something{" "}
                        <em className="not-italic text-lime">
                            great
                        </em>{" "}
                        together.
                    </h2>
                    <p className="font-inter text-body-md text-on-surface-variant mb-8">
                        Open to internships, freelance projects, and
                        collaborations. Drop me a line.
                    </p>
                    
                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-12 w-full">
                        <div>
                            <label className="block font-mono text-[12px] text-outline uppercase mb-2">Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe" 
                                className="contact-input cursor-interactive"
                            />
                        </div>
                        <div>
                            <label className="block font-mono text-[12px] text-outline uppercase mb-2">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com" 
                                className="contact-input cursor-interactive"
                            />
                        </div>
                        <div>
                            <label className="block font-mono text-[12px] text-outline uppercase mb-2">Subject</label>
                            <input 
                                type="text" 
                                name="subject" 
                                required
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Project Collaboration" 
                                className="contact-input cursor-interactive"
                            />
                        </div>
                        <div>
                            <label className="block font-mono text-[12px] text-outline uppercase mb-2">Message</label>
                            <textarea 
                                name="message" 
                                required
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..." 
                                className="contact-input resize-none cursor-interactive"
                            />
                        </div>
                        
                        <button 
                            type="submit" 
                            disabled={status === "loading"}
                            className="bg-[#C8FF00] text-[#000000] font-bold uppercase tracking-widest py-4 w-full transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-interactive flex justify-center items-center gap-2 disabled:opacity-70 disabled:hover:scale-100"
                        >
                            {status === "loading" && <Loader2 className="w-5 h-5 animate-spin" />}
                            {status === "loading" ? "Sending..." : "Send Message"}
                        </button>

                        {status === "success" && (
                            <p className="text-lime font-inter text-body-md text-center mt-2">
                                Message sent! I&apos;ll get back to you soon.
                            </p>
                        )}
                        {status === "error" && (
                            <p className="text-red-500 font-inter text-body-md text-center mt-2">
                                Something went wrong. Email me directly.
                            </p>
                        )}
                    </form>
                </motion.div>

                {/* Spacer */}
                <div className="md:col-span-1" />

                {/* Right — Links */}
                <motion.div
                    className="md:col-span-5 flex flex-col justify-end h-full"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.2,
                    }}
                >
                    <div className="flex items-center gap-2 text-on-surface-variant mb-12">
                        <MapPin className="w-4 h-4 text-lime" />
                        <span className="font-mono text-label-mono uppercase">
                            {contactInfo.location}
                        </span>
                    </div>

                    <div className="flex flex-col gap-0 border-t border-outline-variant/20 pt-6">
                        {contactLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.external ? "_blank" : undefined}
                                rel={
                                    link.external
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                className="group flex items-center justify-between py-6 border-b border-outline-variant/20 hover:border-lime/50 transition-colors cursor-interactive"
                            >
                                <div className="flex items-center gap-4">
                                    <link.icon className="w-5 h-5 text-outline group-hover:text-lime transition-colors" />
                                    <div>
                                        <div className="font-mono text-label-mono text-outline uppercase mb-1">
                                            {link.label}
                                        </div>
                                        <div className="font-inter text-body-md text-on-surface group-hover:text-lime transition-colors">
                                            {link.value}
                                        </div>
                                    </div>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-outline group-hover:text-lime transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
