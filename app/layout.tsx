import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollReveal from "@/components/ScrollReveal";

const sora = Sora({
    subsets: ["latin"],
    weight: ["400", "600", "700", "800"],
    variable: "--font-sora",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-mono",
});

export const metadata: Metadata = {
    title: "Jaydatta.dev | AI & Data Science Engineer",
    description:
        "AI Engineer and Full-Stack Developer experienced in architecting production-grade machine learning pipelines, RAG systems, and generative AI web applications.",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://jaydatta.dev",
        title: "Jaydatta.dev | AI & Data Science Engineer",
        description:
            "Building production-grade AI systems and full-stack applications. B.Tech AI & Data Science at GCOE Kolhapur.",
        siteName: "Jaydatta.dev",
    },
    twitter: {
        card: "summary_large_image",
        title: "Jaydatta.dev | AI & Data Science Engineer",
        description:
            "AI Engineer building production-grade ML pipelines, RAG systems, and generative AI applications.",
    },
    keywords: [
        "Jaydatta Kshirsagar",
        "AI Engineer",
        "Full Stack Developer",
        "Machine Learning",
        "RAG",
        "LLMs",
        "Next.js",
        "Python",
        "Data Science",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark" suppressHydrationWarning>
            <body
                className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
            >
                <CustomCursor />
                <ScrollReveal />
                <Navbar />
                <main className="relative z-10">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
