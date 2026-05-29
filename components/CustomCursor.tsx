"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        const handleMouseMove = (e: MouseEvent) => {
            dot.style.left = e.clientX + "px";
            dot.style.top = e.clientY + "px";

            setTimeout(() => {
                ring.style.left = e.clientX + "px";
                ring.style.top = e.clientY + "px";
            }, 50);
        };

        const handleMouseOut = () => {
            dot.style.opacity = "0";
            ring.style.opacity = "0";
        };

        const handleMouseOver = () => {
            dot.style.opacity = "1";
            ring.style.opacity = "1";
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseout", handleMouseOut);
        document.addEventListener("mouseover", handleMouseOver);

        // Interactive elements hover state
        const addInteractiveListeners = () => {
            const interactives = document.querySelectorAll(
                "a, button, .cursor-interactive"
            );
            interactives.forEach((el) => {
                el.addEventListener("mouseenter", () => {
                    dot.classList.add("cursor-hover");
                    ring.classList.add("cursor-ring-hover");
                });
                el.addEventListener("mouseleave", () => {
                    dot.classList.remove("cursor-hover");
                    ring.classList.remove("cursor-ring-hover");
                });
            });
        };

        // Run after a short delay to capture dynamically rendered elements
        addInteractiveListeners();
        const timer = setTimeout(addInteractiveListeners, 1000);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseout", handleMouseOut);
            document.removeEventListener("mouseover", handleMouseOver);
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot" style={{ opacity: 0 }} />
            <div ref={ringRef} className="cursor-ring" style={{ opacity: 0 }} />
        </>
    );
}
