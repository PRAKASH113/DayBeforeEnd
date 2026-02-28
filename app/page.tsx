"use client";
import { useEffect, useState } from "react";
import { Download, Smartphone, Map, FileText, CheckCircle2, Circle } from "lucide-react";
import BentoCard from "@/components/ui/BentoCard";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function Home() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [downloaded, setDownloaded] = useState(false);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setDeferredPrompt(null);
        setInstalled(true);
      }
    } else {
      alert("Installation protocol: Use browser menu > 'Add to Home Screen'");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-24 min-h-screen flex flex-col justify-center">
      
      {/* 1. HERO SECTION */}
      <section className="mb-16 space-y-6 text-left">
        <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter uppercase italic leading-[0.8]">
          DAY<br />BEFORE<br /><span className="text-brand not-italic">END</span>
        </h1>
        <p className="max-w-lg text-secondary font-medium border-l-2 border-brand-border pl-4 text-sm md:text-base">
          The grid is fragile. Complete the following protocols to ensure survival intel remains accessible after signal loss.
        </p>
      </section>

      {/* 2. INITIAL PROTOCOL (TODO) */}
      <section className="mb-16">
        <div className="text-[10px] font-bold text-brand uppercase tracking-[0.3em] mb-6">Required_Protocols</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Action 1: Download */}
          <button 
            onClick={() => setDownloaded(true)}
            className={`flex items-center justify-between p-6 border-2 transition-all group ${downloaded ? 'border-brand bg-brand-alpha' : 'border-border-strong bg-surface hover:border-brand/50'}`}
          >
            <div className="flex items-center gap-4">
              {downloaded ? <CheckCircle2 className="text-brand" /> : <Circle className="text-muted group-hover:text-brand" />}
              <div className="text-left">
                <div className="text-xs font-bold uppercase tracking-widest">Download Archive</div>
                <div className="text-[10px] text-muted font-mono uppercase">Full_Data_Package.zip</div>
              </div>
            </div>
            <Download size={20} className={downloaded ? "text-brand" : "text-muted"} />
          </button>

          {/* Action 2: Install */}
          <button 
            onClick={handleInstall}
            className={`flex items-center justify-between p-6 border-2 transition-all group ${installed ? 'border-brand bg-brand-alpha' : 'border-border-strong bg-surface hover:border-brand/50'}`}
          >
            <div className="flex items-center gap-4">
              {installed ? <CheckCircle2 className="text-brand" /> : <Circle className="text-muted group-hover:text-brand" />}
              <div className="text-left">
                <div className="text-xs font-bold uppercase tracking-widest">Enable Offline Mode</div>
                <div className="text-[10px] text-muted font-mono uppercase">Install_To_Device</div>
              </div>
            </div>
            <Smartphone size={20} className={installed ? "text-brand" : "text-muted"} />
          </button>

        </div>
      </section>

      {/* 3. BENTO TOOLS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <BentoCard 
          href="/library"
          title="Survival Library"
          description="428 critical manuals for medical, engineering, and botanical survival."
          icon={FileText}
          version="Vault_v1.0"
          isLarge={true}
        />
        <BentoCard 
          href="/map"
          title="Grid Map"
          description="Offline GPS sync and safe-zone tracking."
          icon={Map}
          version="Map_v1.0"
        />
      </div>

    </div>
  );
}