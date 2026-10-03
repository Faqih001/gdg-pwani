"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckinDialog } from "@/components/landing/checkin-dialog";
import {
  Sparkles,
  MapPin,
  Clock,
  Radio,
  Share2,
  Check,
  ArrowRight,
  Flame,
} from "lucide-react";

export function FinalCta() {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white relative overflow-hidden">
      {/* Background coastal glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-600/15 via-teal-500/15 to-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        {/* Live Pill */}
        <div className="inline-flex items-center gap-2">
          <Badge
            variant="live"
            className="bg-emerald-500/15 text-emerald-400 border-emerald-500/30 px-3.5 py-1 text-xs uppercase tracking-wider"
          >
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Happening Now · WSH Mombasa
          </Badge>
        </div>

        {/* Required Headline & Subheadline */}
        <div className="space-y-3">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
            Don&apos;t just watch the future being built.
          </h2>
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-r from-blue-400 via-sky-300 to-teal-300 bg-clip-text text-transparent">
            Build it.
          </div>
        </div>

        <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
          Google AI Pwani is taking place today at WSH in Mombasa. Bring your curiosity,
          collaborate with coastal builders, and ship a real AI prototype before the sun sets.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <CheckinDialog
            triggerText="Join Google AI Pwani"
            variant="pwani"
            size="lg"
            className="h-14 px-8 text-base font-bold shadow-xl hover:shadow-2xl"
          />

          <Button
            variant="outline"
            size="lg"
            onClick={handleShare}
            className="h-14 px-7 text-base font-semibold border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5 text-emerald-400" />
                Link Copied!
              </>
            ) : (
              <>
                <Share2 className="w-5 h-5" />
                Follow the Build
              </>
            )}
          </Button>
        </div>

        {/* Required Event Triple Badge */}
        <div className="pt-8">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 bg-slate-900/90 border border-slate-800/80 rounded-2xl px-6 py-3.5 text-xs text-slate-300 backdrop-blur-md">
            <div className="flex items-center gap-2 font-bold text-white">
              <span className="flex items-center gap-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]"></span>
              </span>
              Google AI Pwani
            </div>

            <span className="text-slate-600 hidden sm:inline">|</span>

            <div className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-red-400" />
              WSH · Mombasa
            </div>

            <span className="text-slate-600 hidden sm:inline">|</span>

            <div className="flex items-center gap-1.5 font-semibold text-emerald-400">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              Happening Now
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
