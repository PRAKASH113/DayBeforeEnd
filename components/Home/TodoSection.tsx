"use client";
import { useEffect, useState } from "react";
import SurvivalTodo from "@/components/ui/SurvivalTodo";
import { SURVIVAL_TODOS, Category } from "@/data/Todo";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function TodoSection() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [completedProtocols, setCompletedProtocols] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<Category>('Digital');

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const tabs: Category[] = ['Digital', 'Physical', 'Essential'];

  const filteredTodos = SURVIVAL_TODOS
    .filter(todo => todo.category === activeTab)
    .sort((a, b) => {
      const order = { high: 0, medium: 1, low: 2 };
      return order[a.priority] - order[b.priority];
    });

  const handleToggle = async (id: string) => {
    if (id === 'install') {
      if (deferredPrompt) {
        await deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === "accepted") {
          setDeferredPrompt(null);
          setCompletedProtocols(prev => [...prev, 'install']);
        }
      } else {
        alert("Installation protocol: Use browser menu > 'Add to Home Screen'");
      }
    } else {
      setCompletedProtocols(prev => 
        prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
      );
    }
  };

  return (
    <section className="mb-16">
      {/* Header & Progress */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-border-subtle pb-4">
        <div className="text-[10px] font-bold text-brand uppercase tracking-[0.3em]">
          Survival_Protocols
        </div>
        
        {/* TABS NAVIGATION */}
        <div className="flex bg-surface border border-border-subtle p-1 gap-1">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all ${
                activeTab === tab 
                ? 'bg-brand text-background' 
                : 'hover:bg-brand-alpha text-muted'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="text-[10px] font-mono text-muted uppercase">
          Total Ready: {completedProtocols.length} / {SURVIVAL_TODOS.length}
        </div>
      </div>
      
      {/* Render Filtered Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 min-h-50">
        {filteredTodos.map((todo) => (
          <SurvivalTodo 
            key={todo.id}
            title={todo.title}
            subtitle={todo.subtitle}
            description={todo.description}
            icon={todo.icon}
            priority={todo.priority}
            isCompleted={completedProtocols.includes(todo.id)}
            onToggle={() => handleToggle(todo.id)}
          />
        ))}
      </div>
    </section>
  );
}