import { LiveTicker } from "@/components/landing/live-ticker";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { EventSnapshot } from "@/components/landing/event-snapshot";
import { About } from "@/components/landing/about";
import { HappeningNow } from "@/components/landing/happening-now";
import { BuildFlow } from "@/components/landing/build-flow";
import { AiToolkit } from "@/components/landing/ai-toolkit";
import { Community } from "@/components/landing/community";
import { MombasaPwani } from "@/components/landing/mombasa-pwani";
import { ProjectIdeas } from "@/components/landing/project-ideas";
import { BuildWall } from "@/components/landing/build-wall";
import { WhyBuild } from "@/components/landing/why-build";
import { EventMoments } from "@/components/landing/event-moments";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Announcement / Live Status Bar */}
      <LiveTicker />

      {/* Sticky Navigation */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Event Snapshot */}
      <EventSnapshot />

      {/* 4. What is Google AI Pwani? */}
      <About />

      {/* 5. Happening Right Now */}
      <HappeningNow />

      {/* 6. The Build */}
      <BuildFlow />

      {/* 7. AI Toolkit */}
      <AiToolkit />

      {/* 8. Builders / Community */}
      <Community />

      {/* 9. Mombasa / Pwani Spotlight */}
      <MombasaPwani />

      {/* 10. Project Ideas */}
      <ProjectIdeas />

      {/* 11. Live Build Wall */}
      <BuildWall />

      {/* 12. Why Build Together? */}
      <WhyBuild />

      {/* 13. Event Moments */}
      <EventMoments />

      {/* 14. Final CTA & Live Footer */}
      <FinalCta />
      <Footer />
    </main>
  );
}
