"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Store,
  Compass,
  GraduationCap,
  Sprout,
  Truck,
  HeartPulse,
  Palette,
  Users2,
  Sparkles,
  ArrowRight,
  Info,
} from "lucide-react";

export function ProjectIdeas() {
  const [selectedSector, setSelectedSector] = useState<string | null>(null);

  const ideaDirections = [
    {
      id: "business",
      title: "AI for Local Businesses & Dukas",
      category: "Commerce",
      icon: Store,
      color: "text-blue-600 bg-blue-50",
      concept: "Voice-driven inventory tracking and Swahili invoice reconciler for micro-retailers in Old Town & Bamburi.",
      suggestedTech: ["Gemini 2.0 Flash Audio", "Firebase Firestore"],
      impact: "Reduces bookkeeping friction for unbanked and cash-based merchant stalls.",
    },
    {
      id: "tourism",
      title: "Coastal Tourism & Heritage Guides",
      category: "Tourism & Culture",
      icon: Compass,
      color: "text-teal-600 bg-teal-50",
      concept: "Contextual multimodal audio guide translating Swahili architecture, Fort Jesus historical artifacts, and spice market history.",
      suggestedTech: ["Gemini Vision", "Next.js Web Audio"],
      impact: "Elevates local tour operators and delivers culturally sensitive traveler experiences.",
    },
    {
      id: "education",
      title: "Multilingual Coastal Learning Companion",
      category: "Education",
      icon: GraduationCap,
      color: "text-purple-600 bg-purple-50",
      concept: "Interactive STEM tutor translating technical concepts between English and Swahili with step-by-step Socratic reasoning.",
      suggestedTech: ["Google AI Studio System Prompts", "Structured JSON"],
      impact: "Closes learning gaps for students in coastal secondary schools and community libraries.",
    },
    {
      id: "agriculture",
      title: "Coastal Agriculture & Fisheries AI",
      category: "Blue Economy",
      icon: Sprout,
      color: "text-emerald-600 bg-emerald-50",
      concept: "Predictive tidal, sea temperature, and catch-preservation advice bot for artisanal fishermen in Malindi and Likoni.",
      suggestedTech: ["Gemini Function Calling", "Weather API Webhooks"],
      impact: "Mitigates spoilage and enhances maritime safety for small-boat fishing cooperatives.",
    },
    {
      id: "logistics",
      title: "Mombasa Port & Haulage Logistics Triage",
      category: "Logistics",
      icon: Truck,
      color: "text-amber-600 bg-amber-50",
      concept: "Document parsing AI extracting clearance notices, bill-of-lading terms, and estimated gate turnaround times.",
      suggestedTech: ["Document Extraction with Gemini", "TypeScript"],
      impact: "Minimizes demurrage penalties and optimizes container movement across the Northern Corridor.",
    },
    {
      id: "health",
      title: "Coastal Healthcare Information Assistant",
      category: "Health & Wellbeing",
      icon: HeartPulse,
      color: "text-rose-600 bg-rose-50",
      concept: "Culturally fluent triage bot providing verified preventative health advice on waterborne illnesses and maternal care guidance.",
      suggestedTech: ["Vertex AI Grounding", "Verified Medical Protocols"],
      impact: "Empowers community health volunteers (CHVs) with accessible reference data.",
    },
    {
      id: "creative",
      title: "Creative Tools for Coastal Artisans",
      category: "Creative Tools",
      icon: Palette,
      color: "text-indigo-600 bg-indigo-50",
      concept: "AI-assisted pattern generator infusing Swahili woodcarving and Kanga geometries into modern digital textile design.",
      suggestedTech: ["Multimodal Image Prompting", "SVG Canvas"],
      impact: "Helps local craftspeople monetize regional heritage in global digital marketplaces.",
    },
    {
      id: "civic",
      title: "Civic Feedback & Community Platforms",
      category: "Community Platforms",
      icon: Users2,
      color: "text-cyan-600 bg-cyan-50",
      concept: "Automated community forum synthesizers grouping resident feedback on public waste, clean water access, and urban lighting.",
      suggestedTech: ["Topic Clustering", "Vector Embeddings"],
      impact: "Provides actionable civic dashboards for local ward representatives and community youth boards.",
    },
  ];

  return (
    <section id="ideas" className="py-20 bg-[#f8f5ee] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <Badge variant="pwani" className="text-xs uppercase tracking-wider">
            Inspiration & Tracks
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Exploration Vectors & Idea Directions
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Need an spark for today&apos;s build session? These idea directions
            represent fertile application domains rooted in the economic and
            cultural reality of the Kenyan coast.
          </p>

          {/* Explicit disclaimer as required */}
          <div className="inline-flex items-center gap-2 p-3 bg-amber-50/80 border border-amber-200/80 rounded-xl text-xs text-amber-900 text-left">
            <Info className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Note on Idea Directions:</strong> These are curated starter prompts and challenge themes for participants, not claims of finished products currently deployed at the event.
            </span>
          </div>
        </div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ideaDirections.map((idea) => {
            const Icon = idea.icon;
            const isSelected = selectedSector === idea.id;

            return (
              <Card
                key={idea.id}
                onClick={() => setSelectedSector(isSelected ? null : idea.id)}
                className={`google-card-hover cursor-pointer p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? "border-blue-600 ring-2 ring-blue-100 bg-blue-50/20"
                    : "border-slate-200/90 hover:border-slate-300 bg-white"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center ${idea.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <Badge variant="secondary" className="text-[10px] font-semibold">
                      {idea.category}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 text-base leading-snug">
                      {idea.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {idea.concept}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 space-y-2">
                  <div className="flex flex-wrap gap-1">
                    {idea.suggestedTech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-[11px] text-slate-400 italic">
                    Impact: {idea.impact}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
