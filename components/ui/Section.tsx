"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => {
    return (
        <section
            id={id}
            className={cn(
                "max-w-screen-xl mx-auto px-5 md:px-8 lg:px-12 xl:px-16 mb-24",
                className
            )}
        >
            {children}
        </section>
    );
};
