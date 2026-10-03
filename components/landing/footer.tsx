import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { MapPin, ExternalLink, ShieldCheck, Heart, Radio } from "lucide-react";

export function Footer() {
  const faqs = [
    {
      q: "Where exactly is the event taking place?",
      a: "The event is hosted at WSH (Swahilipot Hub), situated near Fort Jesus in Mombasa, Kenya. The facility features open collaborative working decks, amphitheater stages, and high-speed fiber connectivity.",
    },
    {
      q: "Who is attending and participating in the build today?",
      a: "Software engineers, student technologists, UI/UX designers, coastal startup founders, and artificial intelligence practitioners from across Mombasa and the greater Pwani region.",
    },
    {
      q: "What tools and models are participants using?",
      a: "Builders are experimenting with Gemini 2.0 and 1.5 foundation models, Google AI Studio, Vertex AI, Firebase Genkit, Next.js, and TypeScript to build web apps, audio tools, and automated pipelines.",
    },
    {
      q: "Can I follow along remotely if I am not at WSH?",
      a: "Yes! Use the Live Build Wall above to view project submissions as teams test and deploy working prototypes throughout today's session.",
    },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <Badge variant="outline" className="text-slate-400 border-slate-800 text-xs">
              Frequently Asked
            </Badge>
            <h3 className="text-2xl font-bold text-white">
              Event Questions & Logistics
            </h3>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="bg-slate-900/60 border border-slate-800/80 rounded-xl px-4"
              >
                <AccordionTrigger className="text-slate-200 text-sm font-semibold hover:text-white hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 text-xs leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Minimal Footer Info & Attribution */}
        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="font-bold text-white flex items-center gap-1.5">
              <span className="flex items-center gap-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]"></span>
              </span>
              Google AI Pwani
            </span>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <span className="text-slate-400 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-red-400" />
              WSH · Swahilipot Hub, Mombasa
            </span>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <span className="text-emerald-400 font-medium">Happening Now</span>
          </div>

          <div className="flex items-center gap-6 text-slate-500">
            <a
              href="#about"
              className="hover:text-slate-300 transition-colors"
            >
              About
            </a>
            <a
              href="#build"
              className="hover:text-slate-300 transition-colors"
            >
              The Build
            </a>
            <a
              href="#toolkit"
              className="hover:text-slate-300 transition-colors"
            >
              AI Toolkit
            </a>
            <a
              href="#build-wall"
              className="hover:text-slate-300 transition-colors"
            >
              Live Wall
            </a>
          </div>
        </div>

        {/* Community & Legal notice */}
        <div className="text-center text-[11px] text-slate-600 space-y-1">
          <p>
            Organized by the Google AI Pwani community at WSH, Mombasa. Built for coastal technologists, creators, and founders.
          </p>
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> in Mombasa, Kenya.
          </p>
        </div>
      </div>
    </footer>
  );
}
