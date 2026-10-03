import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Lightbulb,
  Search,
  Hammer,
  CheckCircle,
  Send,
  ArrowRight,
  ArrowDown,
  Sparkles,
} from "lucide-react";

export function BuildFlow() {
  const steps = [
    {
      step: "01",
      phase: "IDEA",
      title: "Identify the Problem",
      description:
        "Isolate a sharp, real-world coastal challenge—from artisan trade to logistics or education.",
      icon: Lightbulb,
      color: "from-amber-500 to-amber-600",
      border: "hover:border-amber-400",
      badgeColor: "bg-amber-100 text-amber-800",
      tools: ["Problem Framing", "User Needs"],
    },
    {
      step: "02",
      phase: "EXPLORE",
      title: "Model & Prompt Discovery",
      description:
        "Experiment with Gemini in Google AI Studio. Test zero-shot, few-shot, and structured system prompts.",
      icon: Search,
      color: "from-blue-500 to-blue-600",
      border: "hover:border-blue-400",
      badgeColor: "bg-blue-100 text-blue-800",
      tools: ["Google AI Studio", "Prompt Iteration"],
    },
    {
      step: "03",
      phase: "BUILD",
      title: "Full-Stack Implementation",
      description:
        "Wire up frontend UIs in Next.js/React, connect Gemini SDKs or Firebase Genkit, and hook into backends.",
      icon: Hammer,
      color: "from-teal-500 to-teal-600",
      border: "hover:border-teal-400",
      badgeColor: "bg-teal-100 text-teal-800",
      tools: ["Next.js & React", "Gemini SDK"],
    },
    {
      step: "04",
      phase: "TEST",
      title: "Edge Cases & Dialect Tuning",
      description:
        "Stress-test against Swahili queries, latency ceilings, streaming responses, and schema validations.",
      icon: CheckCircle,
      color: "from-indigo-500 to-indigo-600",
      border: "hover:border-indigo-400",
      badgeColor: "bg-indigo-100 text-indigo-800",
      tools: ["Validation", "Live QA"],
    },
    {
      step: "05",
      phase: "SHIP",
      title: "Deploy & Demo",
      description:
        "Push live deployments, generate sharable links, and showcase working interactive builds on the wall.",
      icon: Send,
      color: "from-emerald-500 to-emerald-600",
      border: "hover:border-emerald-400",
      badgeColor: "bg-emerald-100 text-emerald-800",
      tools: ["Vercel / Cloud Run", "Working Demo"],
    },
  ];

  return (
    <section id="build" className="py-20 bg-[#141d2b] text-slate-100 border-b border-slate-800/80 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge
            variant="outline"
            className="text-xs uppercase tracking-wider text-teal-300 border-teal-500/30 bg-teal-500/10"
          >
            The Sprint Cadence
          </Badge>

          {/* Headline as explicitly specified */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            From idea → prototype →{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-teal-300 bg-clip-text text-transparent">
              something real.
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            The Google AI Pwani build challenge is designed to collapse the distance
            between an interesting idea and a tangible working product in hours.
          </p>
        </div>

        {/* Process Flow - Desktop Horizontal & Mobile Vertical */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-5 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={step.phase} className="flex flex-col relative group">
                <Card
                  className={`bg-slate-950/80 border-slate-800 text-slate-100 rounded-2xl flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-950/50 ${step.border}`}
                >
                  <CardHeader className="p-5 pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-slate-500">
                        {step.step}
                      </span>
                      <Badge className={`text-[10px] font-bold px-2 py-0.5 ${step.badgeColor}`}>
                        {step.phase}
                      </Badge>
                    </div>

                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-2 shadow-sm`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <CardTitle className="text-base font-bold text-white leading-snug">
                      {step.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-5 pt-0 space-y-4">
                    <CardDescription className="text-xs text-slate-400 leading-relaxed">
                      {step.description}
                    </CardDescription>

                    <Separator className="bg-slate-800/80" />

                    <div className="flex flex-wrap gap-1.5">
                      {step.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-[10px] font-medium px-2 py-0.5 bg-slate-900 text-slate-300 border border-slate-800 rounded-md"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow connector for desktop */}
                {!isLast && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-slate-800 border border-slate-700 items-center justify-center text-slate-400 shadow-sm pointer-events-none">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}

                {/* Arrow connector for mobile */}
                {!isLast && (
                  <div className="md:hidden flex justify-center py-2 text-slate-600">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Sprint Summary Pill */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Outcome Focus:
          </span>
          <span>No unvalidated slide decks.</span>
          <span className="text-slate-600">•</span>
          <span>Live functioning endpoints.</span>
          <span className="text-slate-600">•</span>
          <span>Public repository or hosted URL at showcase time.</span>
        </div>
      </div>
    </section>
  );
}
