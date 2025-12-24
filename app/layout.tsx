import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Jaydatta Laxmikant Kshirsagar | AI & Data Science Student",
  description: "B.Tech student in AI & Data Science with strong hands-on experience in full-stack development and AI-integrated applications. Skilled in Next.js, Node.js, and Python.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jaydatta.dev",
    title: "Jaydatta Laxmikant Kshirsagar | AI & Data Science Student",
    description: "Building impactful real-world solutions using modern web technologies and Machine Learning models.",
    siteName: "Jaydatta.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaydatta Laxmikant Kshirsagar | AI & Data Science",
    description: "B.Tech student specializing in AI, Machine Learning, and Full Stack Development",
  },
  keywords: ["Jaydatta Kshirsagar", "AI Developer", "Full Stack Developer", "Machine Learning", "Next.js", "Python", "Data Science"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body className={cn(outfit.className, "bg-background text-foreground antialiased")}>
        <ThemeProvider>
          <AnimatedBackground />
          <Navbar />
          <main className="min-h-screen relative z-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
