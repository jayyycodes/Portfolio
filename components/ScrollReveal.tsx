"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        // Observe all elements with the reveal class
        const revealElements = document.querySelectorAll(".reveal-element");
        revealElements.forEach((el) => observer.observe(el));

        // Also observe section headings and dividers
        const sectionLabels = document.querySelectorAll(
            "section .section-line, section .font-mono.text-label-mono"
        );
        sectionLabels.forEach((el) => {
            el.classList.add("reveal-element");
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return null;
}
