"use client";
import { useState } from "react";
import { CheckCircle2, Circle, LucideIcon, ChevronDown, ChevronUp } from "lucide-react";

interface TodoProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  isCompleted: boolean;
  onToggle: () => void;
  priority: 'high' | 'medium' | 'low';
}

export default function SurvivalTodo({ title, subtitle, description, icon: Icon, isCompleted, onToggle, priority }: TodoProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`w-full border-2 transition-all flex flex-col h-fit ${
      isCompleted 
        ? 'border-brand bg-brand-alpha' 
        : 'border-border-strong bg-surface hover:border-brand/40'
    }`}>
      <div className="flex items-center justify-between p-4 md:p-5">
        <button onClick={onToggle} className="flex items-center gap-4 flex-1 text-left group">
          <div className="shrink-0">
            {isCompleted ? (
              <CheckCircle2 className="text-brand w-5 h-5" />
            ) : (
              <Circle className={`w-5 h-5 ${priority === 'high' ? 'text-brand animate-pulse' : 'text-muted group-hover:text-brand'}`} />
            )}
          </div>
          
          <div className="min-w-0">
            <div className={`text-[10px] font-black uppercase tracking-widest leading-none mb-1 ${isCompleted ? 'text-brand' : 'text-foreground'}`}>
              {title}
            </div>
            <div className="text-[9px] text-muted font-mono uppercase truncate">
              {subtitle}
            </div>
          </div>
        </button>

        <div className="flex items-center gap-2 shrink-0 ml-2">
          <Icon size={16} className={isCompleted ? "text-brand" : "text-muted"} />
          <button 
            onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}
            className="p-1 hover:bg-brand-alpha rounded-sm transition-colors"
          >
            {isOpen ? <ChevronUp size={14} className="text-brand"/> : <ChevronDown size={14} className="text-muted"/>}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="px-5 pb-5 pt-0 animate-in slide-in-from-top-1 duration-200">
          <div className="h-px bg-border-subtle mb-3" />
          <p className="text-[11px] text-secondary leading-normal font-medium italic">
            &quot;{description}&quot;
          </p>
          <div className={`mt-3 inline-block px-1.5 py-0.5 border text-[7px] font-bold uppercase tracking-tighter ${
            priority === 'high' ? 'border-brand text-brand' : 'border-border-strong text-muted'
          }`}>
            Priority_Level: {priority}
          </div>
        </div>
      )}
    </div>
  );
}