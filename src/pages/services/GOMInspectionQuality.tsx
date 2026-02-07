import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import {
  ArrowRight,
  CheckCircle,
  Ruler,
  Layers,
  AlertTriangle,
  FileCheck,
} from "lucide-react";

/* -------------------- PAGE -------------------- */
export default function GOMInspectionQuality() {
  return (
    <>
      <Helmet>
        <title>GOM Inspection & Quality Support | PROTOREV</title>
        <meta
          name="description"
          content="GOM-based inspection and quality support for accurate deviation analysis, GD&T validation, and faster quality decisions."
        />
      </Helmet>

      <div className="pt-16 pb-16 sm:pt-24 sm:pb-24 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <SectionHeader
            number="02.5"
            title="GOM Inspection & Quality Support"
            subtitle="Turning measurement data into quality confidence"
          />

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mb-12 sm:mb-20"
          >
            <div className="h-1 w-16 sm:w-20 bg-primary mb-6 sm:mb-8" />

            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-4 sm:mb-6">
              When parts fail inspection, the real challenge is not measurement
              — it is understanding <em>why</em> they fail and how to fix the
              issue quickly. Optical inspection bridges the gap between CAD
              intent and manufactured reality.
            </p>

            <p className="text-slate-400 leading-relaxed">
              PROTOREV provides GOM-based inspection and quality support focused
              on{" "}
              <span className="text-slate-200 font-medium">
                actionable deviation analysis, GD&amp;T interpretation, and
                clear quality documentation
              </span>{" "}
              — not just raw scan data.
            </p>
          </motion.div>

          {/* Problems / Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-24">
            <InfoCard
              icon={
                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
              }
              title="Common Quality Challenges"
              items={[
                "Parts failing inspection without clear root cause",
                "Confusing deviation reports with no actionable insight",
                "Repeated rejections and quality loops",
                "Misinterpretation of GD&T requirements",
              ]}
              variant="problem"
            />

            <InfoCard
              icon={
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              }
              title="Our Quality Support Approach"
              items={[
                "CAD-to-scan deviation comparison",
                "Feature-level and GD&T-based evaluation",
                "Clear visual deviation maps and summaries",
                "Engineering-focused interpretation, not just reports",
              ]}
              variant="solution"
            />
          </div>

          {/* Deliverables */}
          <div className="mb-16 sm:mb-24">
            <h2 className="text-xl sm:text-2xl font-mono text-white mb-8 sm:mb-10 uppercase tracking-wide">
              What We Deliver
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <DeliverableCard
                icon={<Layers className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />}
                title="Deviation Analysis"
                description="Color-mapped CAD vs scan comparison highlighting out-of-tolerance areas."
              />

              <DeliverableCard
                icon={<Ruler className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />}
                title="GD&T Evaluation"
                description="Feature-based analysis aligned with drawing datums and tolerances."
              />

              <DeliverableCard
                icon={
                  <FileCheck className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                }
                title="Quality Documentation"
                description="Clear reports that support acceptance, correction, or design decisions."
              />
            </div>
          </div>

          {/* Process */}
          <div className="mb-16 sm:mb-24">
            <h2 className="text-xl sm:text-2xl font-mono text-white mb-8 sm:mb-10 uppercase tracking-wide">
              Our Process
            </h2>

            <div className="space-y-4 sm:space-y-6 max-w-4xl">
              <ProcessStep
                step="01"
                title="CAD & Drawing Review"
                description="Understanding design intent, datums, and critical features."
              />
              <ProcessStep
                step="02"
                title="Optical Scan & Alignment"
                description="High-resolution scanning and correct CAD alignment strategy."
              />
              <ProcessStep
                step="03"
                title="Deviation & GD&T Analysis"
                description="Feature-level evaluation using deviation maps and tolerance checks."
              />
              <ProcessStep
                step="04"
                title="Reporting & Decision Support"
                description="Clear insights for acceptance, correction, or process improvement."
              />
            </div>
          </div>

          {/* Ideal For */}
          <div className="mb-16 sm:mb-24 bg-slate-900 border border-white/5 p-6 sm:p-10 md:p-12">
            <h2 className="text-xl sm:text-2xl font-mono text-white mb-4 sm:mb-6 uppercase tracking-wide">
              Ideal For
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300 text-sm sm:text-base">
              <li>• Manufacturers facing repeated part rejections</li>
              <li>• Quality and inspection teams</li>
              <li>• New product validation and PPAP stages</li>
              <li>• Root cause and corrective action analysis</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center border-t border-white/10 pt-12 sm:pt-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-mono text-white mb-6">
              Get Clear Answers from Your Inspection Data
            </h2>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="
                    group
                    w-full sm:w-auto
                    px-6 sm:px-12
                    py-3
                    min-h-[48px]
                    flex
                    items-center
                    justify-center
                    gap-2
                    whitespace-normal sm:whitespace-nowrap
                    text-center
                  "
                >
                  <span className="leading-tight sm:leading-none">
                    Discuss Your Quality Issue
                  </span>
                  <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="
                    w-full sm:w-auto
                    px-6 sm:px-12
                    py-3
                    min-h-[48px]
                    font-mono
                    uppercase
                    tracking-widest
                    text-xs
                  "
                >
                  Back to Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* -------------------- COMPONENTS -------------------- */

function InfoCard({
  icon,
  title,
  items,
  variant,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
  variant: "problem" | "solution";
}) {
  return (
    <div
      className={`
        border
        p-6 sm:p-8
        ${
          variant === "problem"
            ? "border-red-500/20 bg-red-500/5"
            : "border-primary/20 bg-primary/5"
        }
      `}
    >
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        {icon}
        <h3 className="text-white font-mono uppercase tracking-wide text-sm sm:text-base">
          {title}
        </h3>
      </div>

      <ul className="space-y-2 sm:space-y-3 text-slate-300 text-sm">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

function DeliverableCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="border border-white/10 bg-slate-900 p-5 sm:p-6">
      <div className="mb-3 sm:mb-4">{icon}</div>
      <h4 className="text-white font-mono mb-2 uppercase tracking-wide text-sm sm:text-base">
        {title}
      </h4>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function ProcessStep({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 sm:gap-6">
      <div className="text-primary font-mono text-sm sm:text-lg">{step}</div>
      <div>
        <h4 className="text-white font-medium mb-1">{title}</h4>
        <p className="text-slate-400 leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  );
}
