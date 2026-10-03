import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Code,
  Palette,
  Briefcase,
  GraduationCap,
  Sparkles,
  HeartHandshake,
  Bot,
  Users2,
  Layers,
} from "lucide-react";

export function Community() {
  const categories = [
    {
      role: "Developers",
      subtext: "Frontend, Backend & Systems Engineers",
      desc: "Integrating Gemini APIs, writing type-safe backends, building reactive interfaces, and debugging prompt pipelines.",
      icon: Code,
      accent: "from-blue-600 to-indigo-600",
      avatarInitials: "DV",
      countLabel: "Full-Stack & Mobile",
    },
    {
      role: "Designers",
      subtext: "UI/UX & Product Experience Thinkers",
      desc: "Architecting intuitive conversational flows, accessible micro-interactions, responsive views, and human-centered AI interfaces.",
      icon: Palette,
      accent: "from-purple-600 to-pink-600",
      avatarInitials: "UX",
      countLabel: "Product & Interface",
    },
    {
      role: "Founders",
      subtext: "Early-stage entrepreneurs & operators",
      desc: "Validating market feasibility for coastal ventures, scoping business models, and identifying high-value AI automations.",
      icon: Briefcase,
      accent: "from-amber-600 to-orange-600",
      avatarInitials: "FD",
      countLabel: "Venture & Strategy",
    },
    {
      role: "Students",
      subtext: "University & polytechnic innovators",
      desc: "Acquiring practical production experience, learning modern development patterns, and shipping their first production AI projects.",
      icon: GraduationCap,
      accent: "from-emerald-600 to-teal-600",
      avatarInitials: "ST",
      countLabel: "Next-Gen Talent",
    },
    {
      role: "Creators",
      subtext: "Digital storytellers & media builders",
      desc: "Exploring multimodal generation, audio-visual prompts, cultural preservation, and creative coastal content production.",
      icon: Sparkles,
      accent: "from-sky-500 to-blue-600",
      avatarInitials: "CR",
      countLabel: "Creative Tech",
    },
    {
      role: "AI Enthusiasts",
      subtext: "Curious explorers & prompt tinkerers",
      desc: "Experimenting with cutting-edge LLMs, agents, RAG patterns, and understanding what the new wave of machine learning can accomplish.",
      icon: Bot,
      accent: "from-teal-600 to-cyan-600",
      avatarInitials: "AI",
      countLabel: "Prompt & Experiment",
    },
    {
      role: "Community Builders",
      subtext: "Mentors, event leads & ecosystem connectors",
      desc: "Fostering inclusive collaboration, facilitating table pairings, sharing resources, and amplifying coastal technology talent.",
      icon: HeartHandshake,
      accent: "from-rose-600 to-red-600",
      avatarInitials: "CM",
      countLabel: "Mentorship & Guilds",
    },
  ];

  return (
    <section id="community" className="py-20 bg-[#edf2f7] border-b border-slate-300/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="pwani" className="text-xs uppercase tracking-wider">
            Who Is In The Room
          </Badge>

          {/* Headline as explicitly specified */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            Built by people.{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-teal-600 bg-clip-text text-transparent">
              Powered by ideas.
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Google AI Pwani is not a lecture hall—it is a collaborative arena
            uniting diverse disciplines to co-create practical AI software.
          </p>
        </div>

        {/* Categories Grid with Elegant Abstract Avatars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Card
                key={cat.role}
                className="google-card-hover bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 p-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Elegant Abstract Avatar & Role Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${cat.accent} flex items-center justify-center text-white font-bold text-xs shadow-sm ring-4 ring-white`}
                      >
                        {cat.avatarInitials}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-base">
                          {cat.role}
                        </h3>
                        <p className="text-[11px] text-slate-500 font-medium">
                          {cat.countLabel}
                        </p>
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-medium text-slate-500">Track at WSH</span>
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Active Pairing
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Ethical Transparency Label */}
        <div className="mt-8 text-center text-xs text-slate-400">
          Showing builder archetypes collaborating today at WSH · No fabricated personal profiles or synthetic testimonials
        </div>
      </div>
    </section>
  );
}
