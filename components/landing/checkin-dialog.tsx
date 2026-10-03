"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, CheckCircle2, MapPin, Users, ArrowRight } from "lucide-react";

interface CheckinDialogProps {
  children?: React.ReactNode;
  triggerText?: string;
  variant?: "default" | "pwani" | "google" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
}

export function CheckinDialog({
  children,
  triggerText = "Join the Build",
  variant = "pwani",
  size = "default",
  className,
}: CheckinDialogProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("Developer");
  const [focusArea, setFocusArea] = useState("Gemini & Generative AI");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.65 },
        colors: ["#4285F4", "#EA4335", "#FBBC05", "#34A853", "#028090"],
      });
    } catch {
      // Fallback gracefully if canvas context is unavailable
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children ? (
          children
        ) : (
          <Button variant={variant} size={size} className={className}>
            <Sparkles className="w-4 h-4" />
            {triggerText}
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="live" className="text-[11px]">
              ● WSH, MOMBASA
            </Badge>
            <Badge variant="outline" className="text-[11px]">
              ON-SITE & LIVE
            </Badge>
          </div>
          <DialogTitle className="text-xl">
            {submitted ? "Welcome to the Build!" : "Join Google AI Pwani"}
          </DialogTitle>
          <DialogDescription>
            {submitted
              ? "You're connected with builders at WSH, Mombasa. Head over to the hacking area and connect with your team."
              : "Check in to collaborate, find teammates, test your AI ideas, or follow the live stream from WSH."}
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-6 flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <p className="font-semibold text-slate-900 text-lg">
                Karibu, {name || "Builder"}!
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Your builder badge is ready. Room location: <strong className="text-slate-800">Swahilipot Hub Main Hall</strong>.
              </p>
            </div>

            <div className="w-full bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 text-left text-xs space-y-2">
              <div className="flex items-center justify-between text-slate-600">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-500" /> WSH, Mombasa
                </span>
                <span className="font-medium text-emerald-600">Active Now</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-blue-500" /> Role Track
                </span>
                <span className="font-medium text-slate-800">{role}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Focus Track:</span>
                <span className="font-medium text-slate-800">{focusArea}</span>
              </div>
            </div>

            <Button onClick={handleReset} className="w-full" variant="pwani">
              Done & Return to Event
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 py-2">
            <div className="space-y-1.5 text-left">
              <label htmlFor="builder-name" className="text-xs font-semibold text-slate-700">
                Your Name / Handle
              </label>
              <input
                id="builder-name"
                type="text"
                required
                placeholder="e.g. Amina Hassan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 text-left">
              <div className="space-y-1.5">
                <label htmlFor="builder-role" className="text-xs font-semibold text-slate-700">
                  Primary Role
                </label>
                <select
                  id="builder-role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                >
                  <option value="Developer">Developer</option>
                  <option value="Designer">Designer</option>
                  <option value="Founder">Founder</option>
                  <option value="Student">Student</option>
                  <option value="AI Enthusiast">AI Enthusiast</option>
                  <option value="Creative">Creative / Creator</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="builder-focus" className="text-xs font-semibold text-slate-700">
                  Focus Area
                </label>
                <select
                  id="builder-focus"
                  value={focusArea}
                  onChange={(e) => setFocusArea(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                >
                  <option value="Gemini & GenAI">Gemini & GenAI</option>
                  <option value="AI for Local Commerce">AI for Commerce</option>
                  <option value="Tourism & Culture">Tourism & Culture</option>
                  <option value="Port Logistics">Port Logistics</option>
                  <option value="Education Tech">Education Tech</option>
                  <option value="Creative AI Tools">Creative AI Tools</option>
                </select>
              </div>
            </div>

            <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-xl text-xs text-blue-900 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>
                On-site at WSH right now? Check in with your project idea or connect with pair-programming circles in the main amphitheater.
              </span>
            </div>

            <DialogFooter className="pt-2 sm:justify-between">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setOpen(false)}
                className="text-slate-500"
              >
                Cancel
              </Button>
              <Button type="submit" variant="pwani" className="gap-2">
                Check In & Connect
                <ArrowRight className="w-4 h-4" />
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
