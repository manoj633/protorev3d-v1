import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowRight, CheckCircle, Layers, Settings, Ruler } from "lucide-react";

/* -------------------- PAGE -------------------- */
export default function ProductDesignDevelopment() {
  return (
    <>
      <Helmet>
        <title>Product Design & Development | PROTOREV</title>
        <meta
          name="description"
          content="End-to-end product design and development focused on manufacturability, precision, and real-world engineering constraints."
        />
      </Helmet>

      <div className="pt-24 pb-24 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <SectionHeader
            number="02.1"
            title="Product Design & Development"
            subtitle="From concept to manufacturable reality"
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
              Many great ideas fail not because of innovation — but because they
              are not engineered for manufacturing. At PROTOREV, we bridge the
              gap between concept and production by translating ideas into
              precise, manufacturable designs.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Whether you start with a rough sketch, reference product, or
              functional requirement, our focus is always the same:{" "}
              <span className="text-slate-200 font-medium">
                accuracy, clarity, and production readiness.
              </span>
            </p>
          </motion.div>

          {/* Problem / Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <InfoCard
              icon={<Settings className="w-6 h-6 text-red-400" />}
              title="Typical Challenges"
              items={[
                "Concepts not aligned with manufacturing processes",
                "Frequent design changes during production",
                "Assembly conflicts discovered too late",
                "Unclear tolerances and material selection",
              ]}
              variant="problem"
            />

            <InfoCard
              icon={<CheckCircle className="w-6 h-6 text-primary" />}
              title="Our Engineering Approach"
              items={[
                "Design-for-manufacturing (DFM) driven CAD modeling",
                "Early consideration of materials and processes",
                "Assembly-first thinking to avoid downstream issues",
                "Clear tolerance strategy and documentation",
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
                title="3D CAD Models"
                description="Fully parametric, clean, and manufacturing-ready part and assembly models."
              />

              <DeliverableCard
                icon={<Ruler className="w-6 h-6 text-primary" />}
                title="Manufacturing Drawings"
                description="Clear drawings with GD&T, materials, finishes, and revision control."
              />

              <DeliverableCard
                icon={<Settings className="w-6 h-6 text-primary" />}
                title="Design Optimization"
                description="Geometry and feature refinement to reduce cost, weight, and complexity."
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
                title="Requirement Understanding"
                description="Functional needs, constraints, usage environment, and manufacturing intent."
              />
              <ProcessStep
                step="02"
                title="Concept & Layout Design"
                description="Initial layouts, mechanisms, and feasibility checks."
              />
              <ProcessStep
                step="03"
                title="Detailed CAD Development"
                description="Part modeling, assemblies, tolerances, and material definition."
              />
              <ProcessStep
                step="04"
                title="Manufacturing Readiness"
                description="Final drawings, checks, and handover-ready documentation."
              />
            </div>
          </div>

          {/* Who This Is For */}
          <div className="mb-24 bg-slate-900 border border-white/5 p-12">
            <h2 className="text-2xl font-mono text-white mb-6 uppercase tracking-wide">
              Ideal For
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
              <li>• Startups moving from idea to first prototype</li>
              <li>• MSMEs improving existing product designs</li>
              <li>• Manufacturers facing recurring design issues</li>
              <li>• Teams needing external design bandwidth</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center border-t border-white/10 pt-20">
            <h2 className="text-3xl font-mono text-white mb-6">
              Ready to Engineer Your Product?
            </h2>

            <div className="flex justify-center gap-6 flex-wrap">
              <Link href="/contact">
                <Button size="lg" className="group px-12">
                  Discuss Your Requirement
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
