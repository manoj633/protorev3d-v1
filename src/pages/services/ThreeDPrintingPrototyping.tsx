import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import {
  ArrowRight,
  CheckCircle,
  Hexagon,
  Layers,
  Wrench,
  RefreshCcw,
} from "lucide-react";

import printingImg from "@/assets/3d-printing-prototyping.jpeg";

/* -------------------- PAGE -------------------- */
export default function ThreeDPrintingPrototyping() {
  return (
    <>
      <Helmet>
        <title>3D Printing & Prototyping | PROTOREV</title>
        <meta
          name="description"
          content="Engineering-focused 3D printing and prototyping for fit checks, functional validation, and faster design decisions."
        />
      </Helmet>

      <div className="pt-24 pb-24 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <SectionHeader
            number="02.6"
            title="3D Printing & Prototyping"
            subtitle="Validate designs before committing to production"
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
              Decisions made before production define cost, quality, and lead
              time. 3D printing allows teams to validate form, fit, and function
              early — when changes are fast and inexpensive.
            </p>

            <p className="text-slate-400 leading-relaxed">
              At PROTOREV, 3D printing is used as an{" "}
              <span className="text-slate-200 font-medium">
                engineering validation tool
              </span>
              , not just a visual model — enabling confident design decisions
              before tooling or machining begins.
            </p>
          </motion.div>

          {/* Problem / Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <InfoCard
              icon={<Hexagon className="w-6 h-6 text-red-400" />}
              title="Common Prototyping Challenges"
              items={[
                "Designs moving to production without physical validation",
                "Fit or assembly issues discovered too late",
                "High tooling risk without prior testing",
                "Slow iteration cycles during development",
              ]}
              variant="problem"
            />

            <InfoCard
              icon={<CheckCircle className="w-6 h-6 text-primary" />}
              title="Our Prototyping Approach"
              items={[
                "Functional and fit-check focused prototypes",
                "Process-aware print orientation and material choice",
                "Rapid iteration with engineering feedback",
                "Design insights before committing to tooling",
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
                title="Functional Prototypes"
                description="Parts designed and printed for fit, assembly, and basic functional checks."
              />

              <DeliverableCard
                icon={<Wrench className="w-6 h-6 text-primary" />}
                title="Fit & Assembly Validation"
                description="Physical verification of interfaces, clearances, and alignment."
              />

              <DeliverableCard
                icon={<RefreshCcw className="w-6 h-6 text-primary" />}
                title="Iteration Support"
                description="Quick design updates based on prototype feedback."
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
                title="Design Review"
                description="Understanding intent, usage, and validation goals."
              />
              <ProcessStep
                step="02"
                title="Print Strategy"
                description="Selecting material, orientation, and resolution."
              />
              <ProcessStep
                step="03"
                title="Prototype Fabrication"
                description="Controlled printing with post-processing as required."
              />
              <ProcessStep
                step="04"
                title="Feedback & Iteration"
                description="Design refinements based on physical validation."
              />
            </div>
          </div>

          {/* Who This Is For */}
          <div className="mb-24 bg-slate-900 border border-white/5 p-12">
            <h2 className="text-2xl font-mono text-white mb-6 uppercase tracking-wide">
              Ideal For
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
              <li>• Product development and R&D teams</li>
              <li>• Startups validating early-stage concepts</li>
              <li>• Manufacturers reducing tooling risk</li>
              <li>• Design verification before machining</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center border-t border-white/10 pt-20">
            <h2 className="text-3xl font-mono text-white mb-6">
              Validate Before You Manufacture
            </h2>

            <div className="flex justify-center gap-6 flex-wrap">
              <Link href="/contact">
                <Button size="lg" className="group px-12">
                  Discuss Your Prototype
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
