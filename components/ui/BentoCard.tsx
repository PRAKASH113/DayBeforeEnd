import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface BentoCardProps {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
  version: string;
  isLarge?: boolean;
}

export default function BentoCard({ href, title, description, icon: Icon, version, isLarge }: BentoCardProps) {
  return (
    <Link href={href} className={`${isLarge ? "md:col-span-2" : "col-span-1"} group`}>
      <div className="h-full bg-surface border border-border-subtle p-8 md:p-12 group-hover:border-brand/50 transition-colors cursor-pointer relative overflow-hidden flex flex-col justify-between">
        <div className="flex justify-between items-start mb-12">
          <div className="p-3 bg-brand-alpha rounded-sm border border-brand-border group-hover:bg-brand/20 transition-colors text-brand">
            <Icon size={32} />
          </div>
          <span className="text-[10px] font-mono text-muted uppercase tracking-[0.3em]">{version}</span>
        </div>
        
        <div className="mt-auto">
          <h2 className={`${isLarge ? "text-4xl" : "text-2xl"} font-bold uppercase tracking-tighter mb-2 group-hover:text-brand transition-colors`}>
            {title}
          </h2>
          <p className="text-secondary text-sm leading-relaxed group-hover:text-foreground transition-colors max-w-sm">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}