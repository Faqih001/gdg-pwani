"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckinDialog } from "@/components/landing/checkin-dialog";
import {
  Sparkles,
  ArrowRight,
  Terminal,
  MapPin,
  Play,
  Cpu,
  Waves,
  Zap,
  CheckCircle,
} from "lucide-react";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"terminal" | "stream">("terminal");

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-22 bg-[#f9f8f4] border-b border-stone-200/80 text-slate-900">
      {/* Background coastal soft atmospheric accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-sky-200/25 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines, CTAs, Live Status */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-6">
            {/* Top Live Pill */}
            <div className="inline-flex items-center gap-2">
              <Badge
                variant="outline"
                className="bg-white/90 border-slate-200/90 shadow-xs py-1.5 px-3.5 text-xs text-slate-800 flex items-center gap-2"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="font-semibold text-emerald-700 uppercase tracking-wide">
                  Happening Right Now
                </span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-600 flex items-center gap-1 font-medium">
                  <MapPin className="w-3 h-3 text-red-500" />
                  WSH · Mombasa
                </span>
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-950 leading-[1.08]">
              Building the{" "}
              <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-teal-600 bg-clip-text text-transparent">
                Future of AI
              </span>{" "}
              from the Coast.
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
              Google AI Pwani is happening right now at{" "}
              <strong className="text-slate-900 font-semibold">WSH, Mombasa</strong> —
              bringing builders, developers, founders, creatives and AI enthusiasts
              together to build, learn and ship.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <CheckinDialog
                triggerText="Join the Build"
                variant="pwani"
                size="lg"
                className="h-13 px-8 text-base shadow-md hover:shadow-lg font-semibold"
              />

              <a
                href="#happening-now"
                onClick={(e) => scrollToSection(e, "#happening-now")}
                className="inline-flex items-center justify-center gap-2 h-13 px-6 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold transition-all shadow-xs hover:border-slate-300"
              >
                <Play className="w-4 h-4 fill-slate-800 text-slate-800" />
                See What&apos;s Happening
              </a>
            </div>

            {/* Live Status Micro-Card as required */}
            <div className="pt-4">
              <div className="inline-flex flex-wrap items-center gap-4 bg-white/95 border border-slate-200/90 rounded-2xl p-4 shadow-sm backdrop-blur-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 live-pulse-indicator"></div>
                  <div>
                    <div className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                      ● LIVE NOW
                    </div>
                    <div className="text-xs font-semibold text-slate-900">
                      WSH · Mombasa
                    </div>
                  </div>
                </div>

                <div className="h-7 w-px bg-slate-200 hidden sm:block"></div>

                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Event Status</div>
                    <div className="text-xs font-bold text-slate-800">
                      Building in progress
                    </div>
                  </div>
                </div>

                <div className="h-7 w-px bg-slate-200 hidden md:block"></div>

                <div className="hidden md:flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center">
                    <Waves className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Location</div>
                    <div className="text-xs font-bold text-slate-800">
                      Indian Ocean Coast
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sophisticated AI + Coastal + Live Build Interactive Mockup */}
          <div className="lg:col-span-5 relative">
            {/* Coastal & Google Decorative Halo */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-teal-500 to-amber-500 rounded-3xl blur-md opacity-25"></div>

              <Card className="relative bg-slate-950 text-slate-100 border-slate-800 rounded-3xl shadow-2xl overflow-hidden">
                {/* Window Chrome Header */}
                <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    <span className="text-[11px] text-slate-400 font-mono ml-2">
                      pwani-builder@wsh-mombasa:~/live-ai
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setActiveTab("terminal")}
                      className={`text-[11px] px-2.5 py-1 rounded-md transition-colors ${
                        activeTab === "terminal"
                          ? "bg-slate-800 text-blue-400 font-semibold"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      Terminal
                    </button>
                    <button
                      onClick={() => setActiveTab("stream")}
                      className={`text-[11px] px-2.5 py-1 rounded-md transition-colors ${
                        activeTab === "stream"
                          ? "bg-slate-800 text-teal-400 font-semibold"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      AI Stream
                    </button>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-5 font-mono text-xs space-y-4">
                  {activeTab === "terminal" ? (
                    <>
                      <div className="space-y-1.5 text-slate-300">
                        <p className="text-slate-400">
                          <span className="text-emerald-400">✓</span> Initialized WSH Mombasa Node
                        </p>
                        <p className="text-slate-400">
                          <span className="text-blue-400">ℹ</span> Model: Gemini 2.0 Flash Experimental
                        </p>
                        <p className="text-slate-400">
                          <span className="text-teal-400">ℹ</span> Context: Coastal Kenya & Blue Economy
                        </p>
                      </div>

                      <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800/80 space-y-2">
                        <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800/60 pb-1.5">
                          <span className="flex items-center gap-1 text-sky-400">
                            <Terminal className="w-3 h-3" /> build-session.ts
                          </span>
                          <span className="text-emerald-400 text-[10px]">RUNNING</span>
                        </div>
                        <pre className="text-[11px] text-slate-200 overflow-x-auto leading-relaxed">
                          <span className="text-blue-400">import</span> &#123; GoogleGenAI &#125; <span className="text-blue-400">from</span> <span className="text-amber-300">&quot;@google/genai&quot;</span>;{"\n"}
                          <span className="text-blue-400">const</span> ai = <span className="text-blue-400">new</span> <span className="text-purple-300">GoogleGenAI</span>();{"\n\n"}
                          <span className="text-slate-500">// Real-time prompt from Mombasa build teams</span>{"\n"}
                          <span className="text-blue-400">const</span> response = <span className="text-blue-400">await</span> ai.models.generate(&#123;{"\n"}
                          {"  "}model: <span className="text-amber-300">&quot;gemini-2.0-flash&quot;</span>,{"\n"}
                          {"  "}prompt: <span className="text-teal-300">&quot;Build coastal artisan marketplace triage&quot;</span>{"\n"}
                          &#125;);
                        </pre>
                      </div>

                      <div className="flex items-center justify-between text-[11px] pt-1">
                        <span className="text-slate-400 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                          Prompt latency: <strong>142ms</strong>
                        </span>
                        <Badge variant="outline" className="border-slate-700 text-slate-300 text-[10px] bg-slate-900">
                          Tokens: 1,840 / s
                        </Badge>
                      </div>
                    </>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-teal-400 text-xs font-semibold">
                        <Cpu className="w-4 h-4" />
                        <span>Live Generation Output</span>
                      </div>
                      <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-slate-300 space-y-2 leading-relaxed">
                        <p className="text-xs text-amber-200 font-semibold">
                          Project: &quot;BahariAI Port Optimizer&quot;
                        </p>
                        <p className="text-[11px] text-slate-300">
                          Synthesized Swahili voice model connected to Kilindini harbor dispatch query.
                          Prototype generating schedule alerts for regional cargo dhows and logistics fleets.
                        </p>
                        <div className="flex items-center gap-2 pt-2 text-[10px]">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/60 flex items-center gap-1">
                            <CheckCircle className="w-2.5 h-2.5" /> Vertex AI
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-blue-950 text-blue-400 border border-blue-800/60">
                            Firebase Genkit
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mombasa Coastal Tech Badge Strip */}
                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <Waves className="w-3.5 h-3.5 text-sky-400" />
                      Swahilipot Hub · Mombasa
                    </span>
                    <span className="text-amber-400 font-semibold">#AIPwani</span>
                  </div>
                </div>
              </Card>

              {/* Floating micro-badge */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-white text-slate-900 border border-slate-200 px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                  AI
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold">Collaborative Sprint</div>
                  <div className="text-[10px] text-slate-500">Live pairing in session</div>
                </div>
              </div>

              {/* Floating Google colors badge */}
              <div className="absolute -top-3 -right-2 sm:-right-4 bg-white/95 border border-slate-200 px-3 py-1.5 rounded-xl shadow-md flex items-center gap-2 text-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span className="font-semibold text-slate-800">Coast Builders</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
