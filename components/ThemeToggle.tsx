"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch by not rendering until mounted
    if (!mounted) {
        return (
            <div className="w-10 h-10 rounded-xl bg-accent/50 animate-pulse" />
        );
    }

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative w-10 h-10 rounded-xl bg-accent/50 border border-border flex items-center justify-center hover:bg-accent transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === "dark" ? 0 : 180,
                    scale: theme === "dark" ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute"
            >
                <Moon className="w-5 h-5 text-cyan-400" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === "light" ? 0 : -180,
                    scale: theme === "light" ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute"
            >
                <Sun className="w-5 h-5 text-amber-400" />
            </motion.div>
        </motion.button>
    );
}
