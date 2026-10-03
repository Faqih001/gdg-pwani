"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Code2,
  Compass,
  Lightbulb,
  Users2,
  FlaskConical,
  GraduationCap,
  Rocket,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { CheckinDialog } from "@/components/landing/checkin-dialog";

export function HappeningNow() {
  const activities = [
    {
      id: "act-1",
      title: "Building AI-Powered Products",
      tagline: "From concept to functioning codebases",
      description:
        "Teams are turning whiteboard architectures into working full-stack apps with Gemini 2.0 Flash, Next.js, and Cloud Firestore.",
      category: "Core Sprint",
      icon: Code2,
      status: "Active Now",
      statusColor: "text-emerald-400 bg-emerald-950/60 border-emerald-800/60",
      accent: "border-l-4 border-l-blue-500",
      time: "Session Phase 2",
    },
    {
      id: "act-2",
      title: "Exploring New AI Tools",
      tagline: "Hands-on with Google AI Studio & Genkit",
      description:
        "Builders are experimenting with structured JSON outputs, multimodal reasoning, vision prompts, and function calling workflows.",
      category: "Discovery",
      icon: Compass,
      status: "Active Now",
      statusColor: "text-blue-400 bg-blue-950/60 border-blue-800/60",
      accent: "border-l-4 border-l-teal-500",
      time: "Continuous Lab",
    },
    {
      id: "act-3",
      title: "Sharing Ideas & Cross-Pollinating",
      tagline: "Connecting coastal founders with engineers",
      description:
        "Spontaneous pitch breakouts discussing how local businesses, coastal schools, and tourism operators can benefit from conversational AI.",
      category: "Collaboration",
      icon: Lightbulb,
      status: "In Progress",
      statusColor: "text-amber-400 bg-amber-950/60 border-amber-800/60",
      accent: "border-l-4 border-l-amber-500",
      time: "Hacking Lounge",
    },
    {
      id: "act-4",
      title: "Pair Programming & Co-Debugging",
      tagline: "Two builders, one screen, accelerated velocity",
      description:
        "Developers are pairing up to debug API rate limits, refine TypeScript types, configure Firebase rules, and polish frontend interfaces.",
      category: "Pairing",
      icon: Users2,
      status: "Active Now",
      statusColor: "text-emerald-400 bg-emerald-950/60 border-emerald-800/60",
      accent: "border-l-4 border-l-indigo-500",
      time: "Main Arena",
    },
    {
      id: "act-5",
      title: "Testing Prototypes & Prompts",
      tagline: "Iterating on accuracy, latency & edge cases",
      description:
        "Testing prompt behavior against Swahili phrases, colloquial dialect nuances, and real coastal data queries.",
      category: "QA & Testing",
      icon: FlaskConical,
      status: "Underway",
      statusColor: "text-sky-400 bg-sky-950/60 border-sky-800/60",
      accent: "border-l-4 border-l-sky-500",
      time: "Testing Stations",
    },
    {
      id: "act-6",
      title: "Learning Together",
      tagline: "Zero gatekeeping, shared discoveries",
      description:
        "Participants are showing each other useful prompt patterns, system instructions, and how to deploy serverless AI endpoints in minutes.",
      category: "Learning",
      icon: GraduationCap,
      status: "Ongoing",
      statusColor: "text-purple-400 bg-purple-950/60 border-purple-800/60",
      accent: "border-l-4 border-l-purple-500",
      time: "Community Stage",
    },
    {
      id: "act-7",
      title: "Shipping Experiments",
      tagline: "Live URLs, public repos, and working demos",
      description:
        "Preparing clickable proofs-of-concept for the final showcase sprint. The goal: commit code, deploy, and share real links.",
      category: "Shipping",
      icon: Rocket,
      status: "Live Queue",
      statusColor: "text-emerald-400 bg-emerald-950/60 border-emerald-800/60",
      accent: "border-l-4 border-l-emerald-500",
      time: "Final Showcase Sprint",
    },
  ];

  return (
    <section id="happening-now" className="py-20 bg-[#0c1827] text-slate-100 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl text-left space-y-3">
            <div className="inline-flex items-center gap-2">
              <Badge variant="live" className="text-xs uppercase tracking-wide bg-emerald-500/15 text-emerald-400 border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping mr-1"></span>
                LIVE EVENT TIMELINE
              </Badge>
              <span className="text-xs text-slate-400 font-medium">
                WSH · Mombasa
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Happening Right Now at WSH
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              These are the core activities and collaboration tracks currently in progress
              across the build floors at WSH. Participants are actively engaging across
              multiple stages of the AI development cycle.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-2xl text-xs text-slate-300 flex items-center gap-2">
              <Clock className="w-4 h-4 text-sky-400 animate-spin" />
              <span>
                Event pulse: <strong className="text-white">Active Hacking Sprint</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Disclaimer / Label as required */}
        <div className="mb-8 p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl text-xs text-slate-300 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong className="text-white">Live Activity Stream:</strong> Highlights the representative types of active collaboration and experimentation underway right now.
            </span>
          </div>
          <span className="text-[11px] text-sky-400 font-semibold hidden sm:inline">
            Real-Time Focus
          </span>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((act) => {
            const Icon = act.icon;
            return (
              <Card
                key={act.id}
                className={`google-card-hover bg-slate-900/95 border border-slate-800 text-slate-100 shadow-lg rounded-2xl flex flex-col justify-between overflow-hidden ${act.accent}`}
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 flex items-center justify-center text-slate-200 border border-slate-700/60">
                      <Icon className="w-5 h-5 text-sky-400" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-slate-400 font-mono">
                        {act.time}
                      </span>
                      <Badge
                        variant="outline"
                        className={`text-[10px] font-semibold ${act.statusColor}`}
                      >
                        {act.status}
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {act.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-0.5">
                      {act.title}
                    </h3>
                    <p className="text-xs font-semibold text-sky-400 mt-0.5">
                      {act.tagline}
                    </p>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {act.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-3 bg-slate-950/70 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 font-medium text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Interactive track
                  </span>
                  <a
                    href="#build-wall"
                    className="text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1 group text-[11px]"
                  >
                    View build wall
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center bg-slate-900 border border-slate-800 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <Badge variant="outline" className="text-sky-300 border-sky-400/40 bg-sky-500/10 text-xs">
              LIVE ENERGY AT SWAHILIPOT HUB
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to jump into an active pairing circle?
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Whether you are an experienced software engineer or a curious beginner
              writing your first Gemini prompt, there is a desk waiting for you.
            </p>
            <div className="pt-2 flex justify-center">
              <CheckinDialog triggerText="Grab a Spot at WSH" variant="pwani" size="lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
