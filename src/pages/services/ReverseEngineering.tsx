import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import {
  ArrowRight,
  CheckCircle,
  Search,
  Layers,
  Ruler,
  RefreshCcw,
} from "lucide-react";

/* -------------------- PAGE -------------------- */
export default function ReverseEngineering() {
  return (
    <>
      <Helmet>
        <title>Reverse Engineering | PROTOREV</title>
        <meta
          name="description"
          content="Accurate reverse engineering services to recreate legacy or physical parts into precise, manufacturing-ready CAD data."
        />
      </Helmet>

      <div className="pt-24 pb-24 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <SectionHeader
            number="02.2"
            title="Reverse Engineering"
            subtitle="From physical part to precise digital definition"
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
              When drawings are missing, documentation is outdated, or OEM data
              is unavailable, production should not come to a halt. Reverse
              engineering enables you to regain control by converting existing
              physical parts into accurate digital models.
            </p>

            <p className="text-slate-400 leading-relaxed">
              At PROTOREV, reverse engineering is not just measurement — it is
              the process of understanding{" "}
              <span className="text-slate-200 font-medium">
                design intent, functional features, and manufacturability
              </span>{" "}
              before rebuilding the part digitally.
            </p>
          </motion.div>

          {/* Problem / Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <InfoCard
              icon={<Search className="w-6 h-6 text-red-400" />}
              title="Common Situations"
              items={[
                "Legacy or imported parts without drawings",
                "OEM dependency for spares or replacements",
                "Worn or modified components with no records",
                "Inaccurate manual measurements causing mismatch",
              ]}
              variant="problem"
            />

            <InfoCard
              icon={<CheckCircle className="w-6 h-6 text-primary" />}
              title="Our Reverse Engineering Method"
              items={[
                "Feature-based measurement and reconstruction",
                "Scan-assisted modeling where required",
                "Rebuilding CAD based on design intent, not noise",
                "Manufacturing-focused geometry cleanup",
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
                title="Accurate 3D CAD Models"
                description="Clean, parametric CAD models rebuilt with proper features and constraints."
              />

              <DeliverableCard
                icon={<Ruler className="w-6 h-6 text-primary" />}
                title="Manufacturing Drawings"
                description="Optional drawings with critical dimensions, tolerances, and notes."
              />

              <DeliverableCard
                icon={<RefreshCcw className="w-6 h-6 text-primary" />}
                title="Redesign & Optimization"
                description="Improvements for strength, cost, or manufacturability when required."
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
                title="Part Study & Measurement Strategy"
                description="Understanding function, interfaces, and selecting the right measurement approach."
              />
              <ProcessStep
                step="02"
                title="Data Capture"
                description="Manual measurement, probing, or scan data acquisition as required."
              />
              <ProcessStep
                step="03"
                title="CAD Reconstruction"
                description="Rebuilding geometry using proper features, datums, and symmetry."
              />
              <ProcessStep
                step="04"
                title="Validation & Handover"
                description="Cross-checking critical dimensions and delivering production-ready data."
              />
            </div>
          </div>

          {/* Who This Is For */}
          <div className="mb-24 bg-slate-900 border border-white/5 p-12">
            <h2 className="text-2xl font-mono text-white mb-6 uppercase tracking-wide">
              Ideal For
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
              <li>• Manufacturers needing replacement or spare parts</li>
              <li>• MSMEs reducing dependency on OEM suppliers</li>
              <li>• Maintenance teams handling legacy equipment</li>
              <li>• Product redesign or benchmarking projects</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center border-t border-white/10 pt-20">
            <h2 className="text-3xl font-mono text-white mb-6">
              Need to Rebuild a Part Accurately?
            </h2>

            <div className="flex justify-center gap-6 flex-wrap">
              <Link href="/contact">
                <Button size="lg" className="group px-12">
                  Discuss Your Part
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
