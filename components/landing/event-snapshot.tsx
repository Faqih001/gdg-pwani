import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Activity, Cpu, Users2 } from "lucide-react";

export function EventSnapshot() {
  const snapshotItems = [
    {
      label: "Location",
      value: "WSH, Mombasa",
      subtext: "Swahilipot Hub / Coastal Innovation Space",
      icon: MapPin,
      badge: "In Person",
      iconBg: "bg-red-500/10 text-red-400 border border-red-500/20",
      accent: "border-slate-800",
    },
    {
      label: "Status",
      value: "Happening Now",
      subtext: "Live prototyping, coding & testing underway",
      icon: Activity,
      badge: "● Active Sprint",
      iconBg: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
      accent: "border-slate-800",
      isLive: true,
    },
    {
      label: "Focus",
      value: "AI + Building",
      subtext: "Gemini, LLM APIs, agents & real-world prototypes",
      icon: Cpu,
      badge: "Practical AI",
      iconBg: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
      accent: "border-slate-800",
    },
    {
      label: "Community",
      value: "Google AI Pwani",
      subtext: "Builders, founders, devs & creators from the Coast",
      icon: Users2,
      badge: "Grassroots",
      iconBg: "bg-teal-500/10 text-teal-400 border border-teal-500/20",
      accent: "border-slate-800",
    },
  ];

  return (
    <section aria-label="Event Snapshot" className="py-14 bg-[#0f1d2e] text-slate-100 border-b border-slate-800/80 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge variant="outline" className="text-xs uppercase tracking-wider mb-2 font-semibold text-slate-300 border-slate-700 bg-slate-800/50">
            Event Snapshot
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Event Brief at a Glance
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Real event parameters happening right now at the Kenyan Coast.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {snapshotItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.label}
                className="google-card-hover bg-slate-900/95 border-slate-800 text-slate-100 shadow-md hover:border-slate-700 relative overflow-hidden"
              >
                <div className="p-6 flex flex-col justify-between h-full space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.iconBg}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <Badge
                      variant={item.isLive ? "live" : "secondary"}
                      className={`text-[11px] font-medium ${
                        item.isLive
                          ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
                          : "bg-slate-800 text-slate-300 border-slate-700"
                      }`}
                    >
                      {item.badge}
                    </Badge>
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {item.label}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">
                      {item.value}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      {item.subtext}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
