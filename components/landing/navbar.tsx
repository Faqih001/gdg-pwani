"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CheckinDialog } from "@/components/landing/checkin-dialog";
import { Menu, MapPin, Code2, ArrowUpRight, Sparkles } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Live Sprint", href: "#happening-now" },
    { label: "The Build", href: "#build" },
    { label: "AI Toolkit", href: "#toolkit" },
    { label: "Community", href: "#community" },
    { label: "Pwani", href: "#pwani" },
    { label: "Build Wall", href: "#build-wall" },
    { label: "Moments", href: "#moments" },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4 flex-nowrap">
        {/* Logo / Brand - Single Row */}
        <a
          href="#"
          className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1 shrink-0 whitespace-nowrap"
        >
          {/* Google 4-color dot glyph */}
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900 flex items-center justify-center shadow-xs border border-slate-800 text-white relative overflow-hidden group-hover:scale-105 transition-transform shrink-0">
            <div className="flex items-center gap-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]"></span>
            </div>
          </div>

          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight">
              Google AI Pwani
            </span>
            <span className="text-slate-300 hidden sm:inline">·</span>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline-flex items-center gap-1">
              <MapPin className="w-3 h-3 text-red-500 shrink-0" />
              WSH, Mombasa
            </span>
            <Badge
              variant="live"
              className="hidden lg:inline-flex text-[10px] px-2 py-0.5 uppercase tracking-wider font-semibold shrink-0"
            >
              ● Live Now
            </Badge>
          </div>
        </a>

        {/* Desktop Navigation Links - Single Row with whitespace-nowrap */}
        <nav
          aria-label="Main Navigation"
          className="hidden xl:flex items-center gap-1 text-sm font-medium text-slate-600 whitespace-nowrap shrink-0"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="px-2.5 py-1.5 rounded-lg transition-colors hover:text-slate-900 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 text-xs 2xl:text-sm whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Medium Screen Navigation (Compact) */}
        <nav
          aria-label="Compact Navigation"
          className="hidden md:flex xl:hidden items-center gap-1 text-xs font-medium text-slate-600 whitespace-nowrap shrink-0"
        >
          {navLinks.slice(0, 5).map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="px-2 py-1.5 rounded-lg transition-colors hover:text-slate-900 hover:bg-slate-100 whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA - Single Row */}
        <div className="flex items-center gap-2 shrink-0 whitespace-nowrap">
          <a
            href="#build-wall"
            onClick={(e) => handleScroll(e, "#build-wall")}
            className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-blue-600 px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Wall</span>
          </a>

          <CheckinDialog triggerText="Join the Build" variant="pwani" size="sm" className="whitespace-nowrap shrink-0" />

          {/* Mobile Navigation Sheet Trigger */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-xl border-slate-200 shrink-0"
                aria-label="Open Navigation Menu"
              >
                <Menu className="h-4 w-4 text-slate-700" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[360px] p-6 flex flex-col justify-between">
              <div>
                <SheetHeader className="text-left border-b border-slate-100 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                    <Badge variant="live" className="text-[10px]">
                      LIVE AT WSH, MOMBASA
                    </Badge>
                  </div>
                  <SheetTitle className="text-xl font-bold text-slate-900 mt-2">
                    Google AI Pwani
                  </SheetTitle>
                  <p className="text-xs text-slate-500">
                    Coastal AI build event happening today
                  </p>
                </SheetHeader>

                <nav className="flex flex-col gap-1 py-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-colors whitespace-nowrap"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60 text-xs text-slate-600">
                  <div className="font-semibold text-slate-900 flex items-center gap-1.5 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-red-500" /> WSH, Mombasa
                  </div>
                  Join the builders inside or follow real-time project updates.
                </div>
                <CheckinDialog triggerText="Join the Build Now" variant="pwani" size="default" className="w-full" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
