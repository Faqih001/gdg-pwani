import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { BookOpen, Hammer, Users2, SendHorizonal, ArrowUpRight } from "lucide-react";

export function WhyBuild() {
  const pillars = [
    {
      action: "Learn",
      title: "Absorb Modern AI Stacks",
      description:
        "Skip months of isolated documentation reading. Grasp Gemini APIs, prompt structuring, and token streaming in real-time alongside experienced mentors.",
      icon: BookOpen,
      gradient: "from-blue-500 to-indigo-600",
      accentBg: "bg-blue-50 text-blue-600",
      tag: "Knowledge Velocity",
    },
    {
      action: "Build",
      title: "Write Real Codebases",
      description:
        "No spectator seats. Open your editor, configure environment keys, scaffold React components, and build software that genuinely executes.",
      icon: Hammer,
      gradient: "from-teal-500 to-emerald-600",
      accentBg: "bg-teal-50 text-teal-600",
      tag: "Hands-on Depth",
    },
    {
      action: "Collaborate",
      title: "Cross-Pollinate Perspectives",
      description:
        "Pair engineers with designers, community organizers, and regional experts to design solutions that fit actual human workflows at the Coast.",
      icon: Users2,
      gradient: "from-amber-500 to-orange-600",
      accentBg: "bg-amber-50 text-amber-600",
      tag: "Synergy & Trust",
    },
    {
      action: "Ship",
      title: "Deliver Public Artifacts",
      description:
        "Finish the day with something live. A functioning prototype, a GitHub repository, or a live URL to showcase to teammates and investors.",
      icon: SendHorizonal,
      gradient: "from-rose-500 to-red-600",
      accentBg: "bg-rose-50 text-rose-600",
      tag: "Tangible Proof",
    },
  ];

  return (
    <section className="py-20 bg-[#ebeff3] border-b border-slate-300/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Badge variant="pwani" className="text-xs uppercase tracking-wider">
            Philosophy
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            Why Build Together?
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Four core values driving every hour of the Google AI Pwani build sprint.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.action}
                className="google-card-hover border-slate-200/90 shadow-xs hover:border-slate-300 p-6 flex flex-col justify-between rounded-2xl relative overflow-hidden group"
              >
                {/* Top colored accent line on hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
                ></div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.accentBg}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="text-[10px] font-semibold">
                      {item.tag}
                    </Badge>
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      {item.action}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span>WSH Session Principle</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
