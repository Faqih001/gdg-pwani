"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Code2,
  PlusCircle,
  ExternalLink,
  Sparkles,
  CheckCircle,
  Layers,
  Search,
  Filter,
} from "lucide-react";

interface ProjectItem {
  id: string;
  name: string;
  description: string;
  tags: string[];
  status: "Exploring" | "Building" | "Testing" | "Shipping";
  statusColor: string;
  roomLocation: string;
}

export function BuildWall() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [openModal, setOpenModal] = useState(false);
  const [projects, setProjects] = useState<ProjectItem[]>([
    {
      id: "p1",
      name: "BahariMarket AI (Example Demo)",
      description:
        "Conversational inventory reconciler helping coastal grocery stalls manage bulk grain stock using Swahili audio inputs.",
      tags: ["Gemini 2.0 Flash", "Firebase", "Web Speech API"],
      status: "Building",
      statusColor: "bg-blue-950/70 text-blue-300 border-blue-800/60",
      roomLocation: "Main Arena · Table 3",
    },
    {
      id: "p2",
      name: "Fort Jesus AR Narrator (Example Demo)",
      description:
        "Multimodal visual recognition guide explaining Portuguese stone masonry and Omani battlements from mobile camera snaps.",
      tags: ["Gemini Vision", "Next.js", "Tailwind"],
      status: "Testing",
      statusColor: "bg-purple-950/70 text-purple-300 border-purple-800/60",
      roomLocation: "Media Lab · Station 1",
    },
    {
      id: "p3",
      name: "Kilindini Harbor Queue Triage (Example Demo)",
      description:
        "Container document extraction bot parsing maritime transit paperwork to estimate truck gate dwell times.",
      tags: ["Vertex AI", "TypeScript", "PDF Extraction"],
      status: "Exploring",
      statusColor: "bg-amber-950/70 text-amber-300 border-amber-800/60",
      roomLocation: "Amphitheater · Row B",
    },
    {
      id: "p4",
      name: "Dhow Weather & Tide Forecaster (Example Demo)",
      description:
        "Predictive tidal advice engine for Likoni artisanal fishermen combining open marine feeds with simplified voice summaries.",
      tags: ["Google AI Studio", "Function Calling", "REST"],
      status: "Shipping",
      statusColor: "bg-emerald-950/70 text-emerald-300 border-emerald-800/60",
      roomLocation: "Dev Pod 4",
    },
    {
      id: "p5",
      name: "Swahili Code Assistant (Example Demo)",
      description:
        "Code debugging buddy tailored to explain TypeScript type mismatches in vernacular Swahili analogies.",
      tags: ["Gemini Code Assist", "Next.js 16", "React 19"],
      status: "Building",
      statusColor: "bg-blue-950/70 text-blue-300 border-blue-800/60",
      roomLocation: "Hack Deck",
    },
    {
      id: "p6",
      name: "Pwani Creative Pattern Studio (Example Demo)",
      description:
        "Generates responsive SVG coastal geometries and Kanga borders using natural language layout prompts.",
      tags: ["Structured JSON", "HTML5 Canvas", "Google AI"],
      status: "Testing",
      statusColor: "bg-purple-950/70 text-purple-300 border-purple-800/60",
      roomLocation: "Creative Circle",
    },
  ]);

  // Form State
  const [newName, setNewName] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newTags, setNewTags] = useState("");
  const [newStatus, setNewStatus] = useState<ProjectItem["status"]>("Building");

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newDesc) return;

    const newProject: ProjectItem = {
      id: `custom-${Date.now()}`,
      name: newName,
      description: newDesc,
      tags: newTags
        ? newTags.split(",").map((t) => t.trim())
        : ["Gemini", "Next.js"],
      status: newStatus,
      statusColor:
        newStatus === "Shipping"
          ? "bg-emerald-950/70 text-emerald-300 border-emerald-800/60"
          : newStatus === "Testing"
          ? "bg-purple-950/70 text-purple-300 border-purple-800/60"
          : newStatus === "Building"
          ? "bg-blue-950/70 text-blue-300 border-blue-800/60"
          : "bg-amber-950/70 text-amber-300 border-amber-800/60",
      roomLocation: "Live On-Site Submission",
    };

    setProjects([newProject, ...projects]);
    setNewName("");
    setNewDesc("");
    setNewTags("");
    setOpenModal(false);
  };

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.status === activeFilter);

  return (
    <section id="build-wall" className="py-20 bg-[#0e1724] text-slate-100 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl text-left space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant="live" className="text-xs uppercase tracking-wide bg-emerald-500/15 text-emerald-400 border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-1"></span>
                LIVE BUILD WALL
              </Badge>
              <Badge variant="outline" className="text-[10px] text-slate-400 border-slate-700">
                WSH Arena Feed
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Active Project Wall & Prototypes
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Real-time tracker showing what builders are crafting across the 4 sprint
              stages. Filter by development status or add your own build to the board.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Dialog open={openModal} onOpenChange={setOpenModal}>
              <DialogTrigger asChild>
                <Button variant="pwani" size="default" className="gap-2">
                  <PlusCircle className="w-4 h-4" />
                  Post Your Build to Wall
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-slate-900 border-slate-800 text-white">
                <DialogHeader>
                  <DialogTitle className="text-white">Post Your Project to the Wall</DialogTitle>
                  <DialogDescription className="text-slate-400">
                    Are you building right now at WSH? Add your team&apos;s prototype
                    to the live showcase.
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleAddProject} className="space-y-4 py-2">
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-semibold text-slate-300">
                      Project Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Swahili Audio Tutor"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3.5 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-semibold text-slate-300">
                      One-Line Pitch / Description
                    </label>
                    <textarea
                      required
                      rows={2}
                      placeholder="What does it do and what local problem does it solve?"
                      value={newDesc}
                      onChange={(e) => setNewDesc(e.target.value)}
                      className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3.5 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-left">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Sprint Status
                      </label>
                      <select
                        value={newStatus}
                        onChange={(e) =>
                          setNewStatus(
                            e.target.value as ProjectItem["status"]
                          )
                        }
                        className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white"
                      >
                        <option value="Exploring">Exploring</option>
                        <option value="Building">Building</option>
                        <option value="Testing">Testing</option>
                        <option value="Shipping">Shipping</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Tech Stack (comma-separated)
                      </label>
                      <input
                        type="text"
                        placeholder="Gemini, Next.js, Firebase"
                        value={newTags}
                        onChange={(e) => setNewTags(e.target.value)}
                        className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white"
                      />
                    </div>
                  </div>

                  <DialogFooter className="pt-2">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => setOpenModal(false)}
                      className="text-slate-400 hover:text-white"
                    >
                      Cancel
                    </Button>
                    <Button type="submit" variant="pwani">
                      Pin to Wall
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Clear Prototype Data Label as required */}
        <div className="mb-6 p-3.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-300 flex flex-wrap items-center justify-between gap-2 shadow-sm">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            <span>
              <strong className="text-white">Wall Status:</strong> Initialized with example demo cards representing current sprint tracks. Ready to accept live entries from participants on-site.
            </span>
          </span>
          <span className="text-[11px] font-mono text-slate-400">
            {filteredProjects.length} projects displayed
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-semibold text-slate-400 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Stage:
          </span>
          {["All", "Exploring", "Building", "Testing", "Shipping"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === tab
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <Card
              key={p.id}
              className="google-card-hover bg-slate-900/95 border border-slate-800 text-slate-100 rounded-2xl p-6 flex flex-col justify-between shadow-lg"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <Badge
                    variant="outline"
                    className={`text-[10px] font-bold uppercase tracking-wider ${p.statusColor}`}
                  >
                    ● {p.status}
                  </Badge>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {p.roomLocation}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-white text-base">
                    {p.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] bg-slate-950 text-slate-300 border border-slate-800 px-2 py-0.5 rounded-md font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
