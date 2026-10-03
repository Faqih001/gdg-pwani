"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Camera,
  Code2,
  GraduationCap,
  Users2,
  FlaskConical,
  Rocket,
  Image as ImageIcon,
  Sparkles,
} from "lucide-react";

export function EventMoments() {
  const [activeMoment, setActiveMoment] = useState<string | null>(null);

  const moments = [
    {
      id: "building",
      label: "Building",
      title: "Hacking Sprint on Floor 1",
      caption: "Laptops open, terminal windows running, pair programming circles active across WSH.",
      icon: Code2,
      time: "Live Session",
      gradient: "from-blue-900 via-indigo-950 to-slate-900",
      accent: "border-blue-500/40 text-blue-400",
    },
    {
      id: "learning",
      label: "Learning",
      title: "Gemini API Deep Dive",
      caption: "Interactive walkthrough on structured output schemas and multimodal prompt design.",
      icon: GraduationCap,
      time: "Workshop Pod",
      gradient: "from-teal-950 via-slate-900 to-cyan-950",
      accent: "border-teal-500/40 text-teal-400",
    },
    {
      id: "connecting",
      label: "Connecting",
      title: "Coastal Builder Exchange",
      caption: "Spontaneous exchanges between local founders, university students, and senior devs.",
      icon: Users2,
      time: "Networking Deck",
      gradient: "from-amber-950 via-slate-900 to-orange-950",
      accent: "border-amber-500/40 text-amber-400",
    },
    {
      id: "experimenting",
      label: "Experimenting",
      title: "Multimodal Voice & Vision Trials",
      caption: "Testing real-time camera and audio feeds against Swahili speech patterns.",
      icon: FlaskConical,
      time: "Hardware Lab",
      gradient: "from-purple-950 via-slate-900 to-fuchsia-950",
      accent: "border-purple-500/40 text-purple-400",
    },
    {
      id: "shipping",
      label: "Shipping",
      title: "Ready for Showcase Demos",
      caption: "Preparing public URLs and live prototypes for community peer review.",
      icon: Rocket,
      time: "Final Pitch Prep",
      gradient: "from-emerald-950 via-slate-900 to-teal-950",
      accent: "border-emerald-500/40 text-emerald-400",
    },
  ];

  return (
    <section id="moments" className="py-20 bg-[#0d1520] text-slate-100 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl text-left space-y-3">
            <Badge
              variant="outline"
              className="text-xs uppercase tracking-wider text-teal-300 border-teal-500/30 bg-teal-500/10"
            >
              Visual Chronicle
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Event Moments from WSH
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Real-time snapshot placeholders ready to showcase live photography
              from the ongoing build session at Swahilipot Hub, Mombasa.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl px-4 py-2.5 text-xs text-slate-300 flex items-center gap-2 self-start md:self-auto">
            <Camera className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Photography & Live Stream Sync Ready</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {moments.map((item) => {
            const Icon = item.icon;
            const isSelected = activeMoment === item.id;

            return (
              <Card
                key={item.id}
                onClick={() => setActiveMoment(isSelected ? null : item.id)}
                className={`cursor-pointer rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden relative min-h-[260px] p-5 bg-gradient-to-br ${item.gradient} ${
                  isSelected
                    ? "border-blue-400 shadow-lg shadow-blue-500/20 scale-[1.02]"
                    : "border-slate-800 hover:border-slate-700 hover:-translate-y-1"
                }`}
              >
                {/* Visual abstract overlay representing photo canvas */}
                <div className="absolute inset-0 bg-radial from-white/5 to-transparent pointer-events-none"></div>

                <div className="relative z-10 flex items-center justify-between">
                  <Badge
                    variant="outline"
                    className={`text-[10px] font-bold uppercase tracking-wider bg-slate-900/80 ${item.accent}`}
                  >
                    {item.label}
                  </Badge>
                  <span className="text-[10px] font-mono text-slate-400">
                    {item.time}
                  </span>
                </div>

                {/* Center visual placeholder element */}
                <div className="relative z-10 my-4 flex flex-col items-center justify-center py-4 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white mb-2 shadow-inner">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="text-[10px] text-slate-400 flex items-center gap-1 font-mono">
                    <ImageIcon className="w-3 h-3" /> Live Event Capture
                  </div>
                </div>

                <div className="relative z-10 space-y-1">
                  <h3 className="text-sm font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Photography Insertion Notice as required */}
        <div className="mt-8 text-center text-xs text-slate-400 p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 max-w-xl mx-auto flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            Real photography from today&apos;s build session at WSH will be synced here directly during closing showcases.
          </span>
        </div>
      </div>
    </section>
  );
}
