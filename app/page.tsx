"use client";
import { FileText, Map } from "lucide-react";
import HeroSection from "@/components/Home/HeroSection";
import TodoSection from "@/components/Home/TodoSection";
import BentoCard from "@/components/ui/BentoCard";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-24 min-h-screen flex flex-col justify-center">
      
      <HeroSection />

      {/* Logic is now fully encapsulated inside this component */}
      <TodoSection />

      {/* BENTO TOOLS SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <BentoCard 
          href="/library"
          title="Survival Library"
          description="428 critical manuals for medical, engineering, and botanical survival."
          icon={FileText}
          isLarge={true}
        />
        <BentoCard 
          href="/map"
          title="Grid Map"
          description="Offline GPS sync and safe-zone tracking."
          icon={Map}
        />
      </div>
      
    </div>
  );
}