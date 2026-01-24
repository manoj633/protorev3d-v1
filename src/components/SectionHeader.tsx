import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
  alignment?: "left" | "center";
}

export function SectionHeader({ number, title, subtitle, className, alignment = "left" }: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col mb-12", alignment === "center" && "items-center text-center", className)}>
      <span className="text-primary font-mono-tech text-xs tracking-widest mb-2 flex items-center gap-2">
        <span className="h-[1px] w-8 bg-primary/50"></span>
        {number}
        <span className={cn("h-[1px] w-8 bg-primary/50", alignment === "left" && "hidden")}></span>
      </span>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white uppercase">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground max-w-lg leading-relaxed border-l-2 border-primary/20 pl-4 ml-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}
