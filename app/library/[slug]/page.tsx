import { ArrowLeft, BookOpen, Share2 } from "lucide-react";
import Link from "next/link";

export default function GuidePage() {
  // In the real version, we fetch MDX content based on the [slug]
  return (
    <div className="flex min-h-screen bg-background">
      {/* 1. LEFT SIDEBAR (Desktop only) */}
      <aside className="hidden lg:block w-64 border-r border-border-subtle p-6 sticky top-0 h-screen">
        <div className="mb-8 font-bold text-brand uppercase tracking-widest text-[10px]">
          Navigation_Core
        </div>
        <nav className="space-y-4">
          <div className="text-xs font-bold text-foreground">WATER SYSTEM</div>
          <ul className="text-xs text-secondary space-y-2 border-l border-border-strong pl-4">
            <li className="hover:text-brand cursor-pointer">Filtration</li>
            <li className="hover:text-brand cursor-pointer">Desalination</li>
          </ul>
        </nav>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 px-4 py-8 md:px-12 md:py-16 max-w-4xl">
        <Link href="/library" className="flex items-center gap-2 text-muted hover:text-brand text-[10px] font-bold uppercase mb-8">
          <ArrowLeft size={14} /> Back to Library
        </Link>

        <article className="prose prose-invert prose-orange max-w-none">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 italic">
            Water <span className="text-brand not-italic">Filtration</span>
          </h1>
          
          <div className="flex gap-4 mb-8 py-2 border-y border-border-subtle">
            <span className="text-[10px] font-mono text-muted">ID: WTR-001</span>
            <span className="text-[10px] font-mono text-muted">REV: 2.4</span>
            <span className="text-[10px] font-mono text-brand uppercase ml-auto font-bold underline cursor-pointer">Edit Intel</span>
          </div>

          <p className="text-secondary leading-relaxed">
            When the centralized water supply fails, your priority is removing biological pathogens and heavy sediments. 
            The following method uses gravity and natural aggregates.
          </p>

          {/* This is where the MDX content renders */}
          <section className="mt-8 space-y-6">
            <h2 className="text-2xl font-bold uppercase text-foreground">Required Materials</h2>
            <ul className="list-disc pl-5 space-y-2 text-secondary">
              <li>Plastic Container (2L minimum)</li>
              <li>Activated Charcoal (Crushed)</li>
              <li>Fine Sand & Small Pebbles</li>
              <li>Cotton Cloth or Coffee Filter</li>
            </ul>
          </section>
        </article>
      </main>

      {/* 3. RIGHT TABLE OF CONTENTS */}
      <aside className="hidden xl:block w-64 p-6 sticky top-0 h-screen">
        <div className="text-[10px] font-bold text-muted uppercase tracking-widest mb-4">On This Page</div>
        <ul className="text-[11px] space-y-3 text-secondary border-l border-border-strong pl-4">
          <li className="hover:text-brand cursor-pointer transition-colors font-bold text-brand">Overview</li>
          <li className="hover:text-brand cursor-pointer transition-colors">Materials</li>
          <li className="hover:text-brand cursor-pointer transition-colors">Assembly</li>
          <li className="hover:text-brand cursor-pointer transition-colors">Safety Warnings</li>
        </ul>
      </aside>
    </div>
  );
}