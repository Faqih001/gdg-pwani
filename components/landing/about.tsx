import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Sparkles, Compass, Lightbulb, Users, Code, Hammer, Anchor } from "lucide-react";

export function About() {
  const pillars = [
    {
      icon: Code,
      title: "Practical AI Building",
      desc: "Moving beyond slide decks into codebases, prompt engineering, multimodal APIs, and deployable software.",
    },
    {
      icon: Users,
      title: "Coastal Community",
      desc: "Connecting technologists, students, founders, and creators living and working across the Pwani region.",
    },
    {
      icon: Compass,
      title: "Local Problem Solving",
      desc: "Tackling challenges in coastal trade, tourism, language access, fisheries, logistics, and education.",
    },
    {
      icon: Lightbulb,
      title: "Hands-on Experimentation",
      desc: "Safe sandbox to test wild concepts, pair program, and learn by shipping directly on modern stacks.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#f3f0e8] border-b border-stone-300/70 relative overflow-hidden text-stone-900">
      {/* Subtle coastal wavy background svg */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#e0f2fe"
            fillOpacity="0.4"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,170.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="pwani" className="text-xs uppercase tracking-wider">
            Initiative
          </Badge>
          <span className="text-xs text-slate-500 font-medium">
            Google AI Pwani · Mombasa Chapter
          </span>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Required Large Statement */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              &ldquo;AI is not just something we talk about.{" "}
              <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-teal-600 bg-clip-text text-transparent">
                We build with it.
              </span>&rdquo;
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Google AI Pwani is an action-driven gathering founded on the belief
              that the coast of Kenya is fertile ground for breakthrough artificial
              intelligence applications.
            </p>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                <Anchor className="w-4 h-4 text-teal-600" />
                Rooted at WSH (Swahilipot Hub, Mombasa)
              </div>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Set at the vibrant cultural crossroads of Mombasa, this build session unites
                ambitious developers, university innovators, seasoned founders, and graphic
                storytellers to build technology that resonates from Fort Jesus to the world.
              </p>
            </div>
          </div>

          {/* Right Column: Explanatory Content & Pillars */}
          <div className="lg:col-span-6 space-y-4">
            <div className="space-y-4">
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Too often, artificial intelligence feels distant—developed overseas or
                confined to theoretical discussions. Google AI Pwani flips this script:
                we provide real sandboxes, API access, collaborative pairings, and active
                mentorship right here at WSH so builders can create functioning prototypes
                in a single energetic day.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <Card
                    key={pillar.title}
                    className="p-4 bg-white/90 border-slate-200/80 hover:border-slate-300 transition-colors shadow-none"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-2.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-sm text-slate-900">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
