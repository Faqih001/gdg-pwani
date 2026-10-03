import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Waves,
  Ship,
  Compass,
  Globe2,
  Anchor,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export function MombasaPwani() {
  const coastalElements = [
    {
      title: "Centuries of Trade & Gateway Logic",
      tagline: "From Kilindini Port to digital networks",
      description:
        "Mombasa has served as East Africa's vital logistics artery for hundreds of years. Applying modern AI to port movements, cargo scheduling, and marine ecosystems continues this deep heritage.",
      icon: Ship,
    },
    {
      title: "Linguistic & Cultural Grounding",
      tagline: "Kiswahili nuances & indigenous idioms",
      description:
        "Coastal builders are testing how Gemini understands coastal dialects, Swahili colloquialisms, maritime proverbs, and everyday coastal community communication.",
      icon: Waves,
    },
    {
      title: "Local Problems, Global Scale",
      tagline: "Solutions forged by lived coastal experience",
      description:
        "Tools built for Mombasa dhow skippers, beachside vendors, regional cold-chain transport, or tourist hospitality can scale to maritime and coastal communities worldwide.",
      icon: Globe2,
    },
    {
      title: "Swahilipot Hub & Grassroots Innovation",
      tagline: "A proven lighthouse for coastal tech",
      description:
        "Hosting Google AI Pwani at WSH grounds the event in a living community where creative youth, coders, and makers already gather every week to invent.",
      icon: Anchor,
    },
  ];

  return (
    <section id="pwani" className="py-20 bg-[#061824] text-slate-100 border-b border-cyan-950/70 relative overflow-hidden">
      {/* Decorative Swahili geometric pattern / subtle wave lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="coastal-pattern"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="1.5" fill="#38bdf8" />
              <path
                d="M 10 30 Q 30 10 50 30 T 90 30"
                fill="none"
                stroke="#0284c7"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#coastal-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-4 mb-16 text-left">
          <Badge
            variant="outline"
            className="text-xs uppercase tracking-wider text-teal-300 border-teal-500/30 bg-teal-500/10"
          >
            Coastal Context
          </Badge>

          {/* Headline as explicitly specified */}
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            AI from{" "}
            <span className="bg-gradient-to-r from-teal-400 via-sky-300 to-amber-300 bg-clip-text text-transparent">
              Pwani.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Mombasa has always been a crossroads—a coastal city where cultures,
            commerce, maritime navigation, and bold ideas meet. Google AI Pwani is
            the modern continuation of that narrative: builders at WSH writing code
            that solves coastal challenges with world-class artificial intelligence.
          </p>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {coastalElements.map((elem) => {
            const Icon = elem.icon;
            return (
              <Card
                key={elem.title}
                className="bg-slate-900/90 border-slate-800 text-slate-100 p-7 rounded-2xl transition-all duration-200 hover:border-slate-700 hover:bg-slate-900 shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-950 text-teal-400 border border-teal-800/60 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
                      {elem.tagline}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {elem.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {elem.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Coastal quote banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-teal-950/60 via-slate-900 to-blue-950/60 border border-teal-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Compass className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="text-sm text-slate-200">
              <strong className="text-white">Pwani ni Yetu:</strong> Empowering coastal builders to lead technological transformation from within Mombasa.
            </span>
          </div>
          <span className="text-xs font-mono text-teal-400/90 shrink-0">
            Mombasa · Kilifi · Kwale · Lamu
          </span>
        </div>
      </div>
    </section>
  );
}
