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

      <div className="pt-24 pb-24 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <SectionHeader
            number="02.5"
            title="GOM Inspection & Quality Support"
            subtitle="Turning measurement data into quality confidence"
          />

          {/* Hero Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mb-20"
          >
            <div className="h-1 w-20 bg-primary mb-8"></div>

            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              When parts fail inspection, the real challenge is not measurement
              — it is understanding <em>why</em> they fail and how to fix the
              issue quickly. Optical inspection bridges the gap between CAD
              intent and manufactured reality.
            </p>

            <p className="text-slate-400 leading-relaxed">
              PROTOREV provides GOM-based inspection and quality support focused
              on{" "}
              <span className="text-slate-200 font-medium">
                actionable deviation analysis, GD&T interpretation, and clear
                quality documentation
              </span>{" "}
              — not just raw scan data.
            </p>
          </motion.div>

          {/* Problem / Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <InfoCard
              icon={<AlertTriangle className="w-6 h-6 text-red-400" />}
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
              icon={<CheckCircle className="w-6 h-6 text-primary" />}
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

          {/* What We Deliver */}
          <div className="mb-24">
            <h2 className="text-2xl font-mono text-white mb-10 uppercase tracking-wide">
              What We Deliver
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <DeliverableCard
                icon={<Layers className="w-6 h-6 text-primary" />}
                title="Deviation Analysis"
                description="Color-mapped CAD vs scan comparison highlighting out-of-tolerance areas."
              />

              <DeliverableCard
                icon={<Ruler className="w-6 h-6 text-primary" />}
                title="GD&T Evaluation"
                description="Feature-based analysis aligned with drawing datums and tolerances."
              />

              <DeliverableCard
                icon={<FileCheck className="w-6 h-6 text-primary" />}
                title="Quality Documentation"
                description="Clear reports that support acceptance, correction, or design decisions."
              />
            </div>
          </div>

          {/* Process */}
          <div className="mb-24">
            <h2 className="text-2xl font-mono text-white mb-10 uppercase tracking-wide">
              Our Process
            </h2>

            <div className="space-y-6 max-w-4xl">
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

          {/* Who This Is For */}
          <div className="mb-24 bg-slate-900 border border-white/5 p-12">
            <h2 className="text-2xl font-mono text-white mb-6 uppercase tracking-wide">
              Ideal For
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
              <li>• Manufacturers facing repeated part rejections</li>
              <li>• Quality and inspection teams</li>
              <li>• New product validation and PPAP stages</li>
              <li>• Root cause and corrective action analysis</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center border-t border-white/10 pt-20">
            <h2 className="text-3xl font-mono text-white mb-6">
              Get Clear Answers from Your Inspection Data
            </h2>

            <div className="flex justify-center gap-6 flex-wrap">
              <Link href="/contact">
                <Button size="lg" className="group px-12">
                  Discuss Your Quality Issue
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-12 font-mono uppercase tracking-widest text-xs"
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
      className={`border p-8 ${
        variant === "problem"
          ? "border-red-500/20 bg-red-500/5"
          : "border-primary/20 bg-primary/5"
      }`}
    >
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h3 className="text-white font-mono uppercase tracking-wide">
          {title}
        </h3>
      </div>

      <ul className="space-y-3 text-slate-300">
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
    <div className="border border-white/10 bg-slate-900 p-6">
      <div className="mb-4">{icon}</div>
      <h4 className="text-white font-mono mb-2 uppercase tracking-wide">
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
    <div className="flex gap-6">
      <div className="text-primary font-mono text-lg">{step}</div>
      <div>
        <h4 className="text-white font-medium mb-1">{title}</h4>
        <p className="text-slate-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
