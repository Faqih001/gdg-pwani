import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0f4c81",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Google AI Pwani — Happening Now in Mombasa",
  description:
    "Google AI Pwani is happening right now at WSH, Mombasa — bringing builders together to learn, experiment and build with AI.",
  keywords: [
    "Google AI Pwani",
    "Mombasa Tech",
    "WSH Mombasa",
    "Swahilipot Hub",
    "Kenya AI",
    "Hackathon Mombasa",
    "African AI Builders",
    "Gemini",
    "Google AI Studio",
  ],
  authors: [{ name: "Google AI Pwani Community" }],
  openGraph: {
    title: "Google AI Pwani — Happening Right Now at WSH, Mombasa",
    description:
      "Join the live build event at WSH, Mombasa. Builders, developers, founders, and AI enthusiasts shipping real prototypes.",
    url: "https://google-ai-pwani.vercel.app",
    siteName: "Google AI Pwani",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google AI Pwani — Live at WSH, Mombasa",
    description:
      "Happening Right Now: Developers, founders, and creators building with AI on the Kenyan coast.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
