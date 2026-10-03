"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { MapPin, Sparkles, Radio } from "lucide-react";

export function LiveTicker() {
  const tickerItems = [
    "Google AI Pwani is LIVE at WSH, Mombasa",
    "Builders prototyping with Gemini & Google AI Studio",
    "Coast-wide innovation in action",
    "Pair programming & interactive testing underway",
    "Join the build today at WSH",
  ];

  return (
    <aside
      aria-label="Live event status announcement"
      className="bg-slate-950 text-slate-100 border-b border-slate-800/80 text-xs py-2 px-3 sm:px-6 relative z-50 overflow-hidden whitespace-nowrap"
    >
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-4 whitespace-nowrap">
        {/* Left: Strictly single-row live badge + event info */}
        <div className="flex items-center gap-2 shrink-0 whitespace-nowrap">
          <Badge
            variant="live"
            className="bg-emerald-500/15 text-emerald-400 border-emerald-500/30 flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide uppercase shrink-0 whitespace-nowrap"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>HAPPENING RIGHT NOW</span>
          </Badge>

          <span className="text-slate-300 font-medium hidden sm:inline-flex items-center gap-1.5 shrink-0 whitespace-nowrap">
            <Radio className="w-3.5 h-3.5 text-blue-400 animate-pulse shrink-0" />
            <span>Google AI Pwani</span>
          </span>
          <span className="text-slate-500 hidden sm:inline">·</span>
          <span className="text-slate-300 flex items-center gap-1 font-normal shrink-0 whitespace-nowrap">
            <MapPin className="w-3 h-3 text-red-400 shrink-0" />
            <span>WSH, Mombasa</span>
          </span>
        </div>

        {/* Right: Scrolling announcements in the same single row */}
        <div className="overflow-hidden max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl relative py-0.5 shrink whitespace-nowrap">
          <div className="animate-ticker flex items-center gap-8 text-slate-400 text-xs font-normal whitespace-nowrap">
            {tickerItems.concat(tickerItems).map((text, idx) => (
              <span key={idx} className="flex items-center gap-2 shrink-0 whitespace-nowrap">
                <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                <span>{text}</span>
                <span className="text-slate-600">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
