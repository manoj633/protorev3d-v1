import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
  alignment?: "left" | "center";
}

export function SectionHeader({
  number,
  title,
  subtitle,
  className,
  alignment = "left",
}: SectionHeaderProps) {
  const isCenter = alignment === "center";

  return (
    <div
      className={cn(
        "flex flex-col mb-8 sm:mb-12",
        isCenter && "items-center text-center",
        className,
      )}
    >
      {/* Section number */}
      <span
        className={cn(
          "text-primary font-mono-tech text-[10px] sm:text-xs tracking-widest mb-3 flex items-center gap-2",
          isCenter && "justify-center",
        )}
      >
        <span className="h-[1px] w-6 sm:w-8 bg-primary/50" />
        {number}
        {isCenter && <span className="h-[1px] w-6 sm:w-8 bg-primary/50" />}
      </span>

      {/* Title */}
      <h2
        className={cn(
          "font-bold uppercase tracking-tighter text-white",
          "text-xl sm:text-2xl md:text-4xl lg:text-5xl",
        )}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={cn(
            "mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed",
            isCenter
              ? "max-w-xl"
              : "max-w-lg border-l-2 border-primary/20 pl-4",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
