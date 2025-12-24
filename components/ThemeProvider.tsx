"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>("dark");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Only access localStorage on client side
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("theme") as Theme | null;
            if (savedTheme && (savedTheme === "dark" || savedTheme === "light")) {
                setTheme(savedTheme);
            } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
                setTheme("light");
            }
        }
    }, []);

    useEffect(() => {
        if (mounted && typeof window !== "undefined") {
            document.documentElement.classList.remove("light", "dark");
            document.documentElement.classList.add(theme);
            localStorage.setItem("theme", theme);
        }
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    // Render children immediately but without theme context until mounted
    // This prevents hydration mismatch
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
