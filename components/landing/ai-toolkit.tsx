"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Sparkles,
  Bot,
  Flame,
  Cloud,
  FileCode2,
  Atom,
  Binary,
  Layers,
  Wrench,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

export function AiToolkit() {
  const [activeTab, setActiveTab] = useState("all");

  const tools = [
    {
      name: "Gemini 2.0 & 1.5",
      type: "official",
      category: "Google AI Model",
      description:
        "Multimodal foundation models for high-speed text, code, audio, and visual reasoning.",
      icon: Sparkles,
      iconColor: "text-blue-500 bg-blue-50",
      officialBadge: "Google AI",
      useCase: "Multimodal Generation & Tool Use",
    },
    {
      name: "Google AI Studio",
      type: "official",
      category: "Prototyping Environment",
      description:
        "Web-based playground to rapid-test system instructions, structured output schemas, and API keys.",
      icon: Bot,
      iconColor: "text-red-500 bg-red-50",
      officialBadge: "Google AI",
      useCase: "Prompt Design & Schema Tuning",
    },
    {
      name: "Vertex AI",
      type: "official",
      category: "Cloud Platform",
      description:
        "Enterprise-grade foundation model hosting, grounding with Google Search, and model tuning.",
      icon: Cloud,
      iconColor: "text-blue-600 bg-blue-50",
      officialBadge: "Google Cloud",
      useCase: "Production Workloads & Search Grounding",
    },
    {
      name: "Firebase & Genkit",
      type: "official",
      category: "Backend & GenAI Framework",
      description:
        "Open-source TypeScript framework for orchestrating AI flows, structured data, and Firebase Auth.",
      icon: Flame,
      iconColor: "text-amber-500 bg-amber-50",
      officialBadge: "Google Firebase",
      useCase: "Flow Orchestration & Cloud Storage",
    },
    {
      name: "Next.js App Router",
      type: "general",
      category: "Full-Stack Web Framework",
      description:
        "React framework providing server actions, streaming AI responses, and blazing fast SSR.",
      icon: FileCode2,
      iconColor: "text-slate-800 bg-slate-100",
      officialBadge: "General Dev Stack",
      useCase: "Production Web Frontends",
    },
    {
      name: "React 19 & Tailwind",
      type: "general",
      category: "Frontend UI",
      description:
        "Modern component-driven UI architecture with responsive styling and accessibility primitives.",
      icon: Atom,
      iconColor: "text-sky-500 bg-sky-50",
      officialBadge: "General Dev Stack",
      useCase: "Interactive User Interfaces",
    },
    {
      name: "TypeScript",
      type: "general",
      category: "Type Safety",
      description:
        "Strong typing for Gemini structured JSON schemas, function call contracts, and API payloads.",
      icon: Binary,
      iconColor: "text-blue-700 bg-blue-50",
      officialBadge: "General Dev Stack",
      useCase: "Reliable Contracts & Schemas",
    },
    {
      name: "REST & Streaming APIs",
      type: "general",
      category: "Interoperability",
      description:
        "Server-Sent Events (SSE) and webhook integrations connecting AI intelligence into existing databases.",
      icon: Layers,
      iconColor: "text-teal-600 bg-teal-50",
      officialBadge: "General Dev Stack",
      useCase: "Token Streaming & Systems Integration",
    },
    {
      name: "Modern AI Tooling & RAG",
      type: "general",
      category: "Vector & Tool Ecosystem",
      description:
        "Vector embeddings, local embeddings, LangChain/LlamaIndex, and lightweight Python/TS agents.",
      icon: Wrench,
      iconColor: "text-purple-600 bg-purple-50",
      officialBadge: "General Dev Stack",
      useCase: "Retrieval & Memory Management",
    },
  ];

  const filteredTools =
    activeTab === "all"
      ? tools
      : tools.filter((tool) => tool.type === activeTab);

  return (
    <section id="toolkit" className="py-20 bg-[#f4f6f8] border-b border-slate-300/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl text-left space-y-3">
            <Badge variant="pwani" className="text-xs uppercase tracking-wider">
              Developer Ecosystem
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              The AI Builders Toolkit
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore the core technologies powering today&apos;s build session.
              Participants utilize a mix of official Google AI technologies alongside
              modern open-source web frameworks.
            </p>
          </div>

          <Tabs
            defaultValue="all"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full md:w-auto"
          >
            <TabsList className="grid grid-cols-3 w-full md:w-auto">
              <TabsTrigger value="all">All Tools</TabsTrigger>
              <TabsTrigger value="official">Google AI Tools</TabsTrigger>
              <TabsTrigger value="general">General Stack</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Clear Distinction Notice */}
        <div className="mb-8 p-3 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-600 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              <strong>Tooling Transparency:</strong> Official Google AI technologies are marked with the blue badge; complementary stack tools are open ecosystem standards.
            </span>
          </span>
          <span className="text-[11px] text-slate-500 font-mono hidden sm:inline">
            TypeScript · Python · REST
          </span>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => {
            const Icon = tool.icon;
            const isOfficial = tool.type === "official";

            return (
              <Card
                key={tool.name}
                className="google-card-hover border-slate-200/90 shadow-xs hover:border-slate-300 p-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center ${tool.iconColor}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <Badge
                      variant={isOfficial ? "google" : "secondary"}
                      className="text-[10px] font-semibold"
                    >
                      {tool.officialBadge}
                    </Badge>
                  </div>

                  <div>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                      {tool.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                      {tool.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">
                    Use: <span className="font-semibold text-slate-800">{tool.useCase}</span>
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
