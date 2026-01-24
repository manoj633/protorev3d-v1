import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import {
  ArrowRight,
  CheckCircle,
  Layers,
  Ruler,
  FileText,
  Cpu,
} from "lucide-react";

/* -------------------- PAGE -------------------- */
export default function TwoDToThreeDCNC() {
  return (
    <>
      <Helmet>
        <title>2D to 3D Conversion for CNC | PROTOREV</title>
        <meta
          name="description"
          content="Accurate 2D to 3D CAD conversion for CNC machining, eliminating ambiguity and reducing CAM and machining errors."
        />
      </Helmet>

      <div className="pt-24 pb-24 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <SectionHeader
            number="02.4"
            title="2D to 3D Conversion for CNC"
            subtitle="Removing ambiguity from machining"
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
              Many machining errors originate not on the shop floor, but on the
              drawing itself. Incomplete dimensions, unclear sections, and
              interpretation gaps slow down CAM programming and lead to costly
              rework.
            </p>

            <p className="text-slate-400 leading-relaxed">
              PROTOREV converts legacy or incomplete 2D drawings into{" "}
              <span className="text-slate-200 font-medium">
                unambiguous, CNC-ready 3D models
              </span>{" "}
              — enabling faster programming, confident machining, and smoother
              production.
            </p>
          </motion.div>

          {/* Problem / Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <InfoCard
              icon={<FileText className="w-6 h-6 text-red-400" />}
              title="Common 2D Drawing Issues"
              items={[
                "Missing or conflicting dimensions",
                "Unclear sections and feature depths",
                "Hidden geometry open to interpretation",
                "Time lost clarifying drawings during CAM",
              ]}
              variant="problem"
            />

            <InfoCard
              icon={<CheckCircle className="w-6 h-6 text-primary" />}
              title="Our Conversion Approach"
              items={[
                "Feature-based 3D reconstruction",
                "Dimensional intent clarification",
                "Machining-friendly geometry creation",
                "CAM-ready models aligned with operations",
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
                title="CNC-Ready 3D CAD Models"
                description="Clean, parametric models built to reflect actual machining intent."
              />

              <DeliverableCard
                icon={<Ruler className="w-6 h-6 text-primary" />}
                title="Geometry Clarification"
                description="Resolved depths, radii, blends, and intersections."
              />

              <DeliverableCard
                icon={<Cpu className="w-6 h-6 text-primary" />}
                title="CAM-Friendly Output"
                description="Models optimized for toolpath generation and setup planning."
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
                title="Drawing Review"
                description="Understanding features, tolerances, and identifying ambiguities."
              />
              <ProcessStep
                step="02"
                title="3D Reconstruction"
                description="Building solid geometry using proper feature logic."
              />
              <ProcessStep
                step="03"
                title="Intent Validation"
                description="Clarifying assumptions and validating with manufacturing logic."
              />
              <ProcessStep
                step="04"
                title="CNC Readiness Check"
                description="Final review for CAM compatibility and machining flow."
              />
            </div>
          </div>

          {/* Who This Is For */}
          <div className="mb-24 bg-slate-900 border border-white/5 p-12">
            <h2 className="text-2xl font-mono text-white mb-6 uppercase tracking-wide">
              Ideal For
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
              <li>• CNC machining and CAM programming teams</li>
              <li>• Shops working with legacy 2D drawings</li>
              <li>• Manufacturers facing repeat machining errors</li>
              <li>• Production planning and setup engineers</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center border-t border-white/10 pt-20">
            <h2 className="text-3xl font-mono text-white mb-6">
              Eliminate Guesswork from Machining
            </h2>

            <div className="flex justify-center gap-6 flex-wrap">
              <Link href="/contact">
                <Button size="lg" className="group px-12">
                  Share Your Drawing
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
