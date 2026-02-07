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

      <div className="pt-16 pb-16 sm:pt-24 sm:pb-24 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <SectionHeader
            number="02.6"
            title="3D Printing & Prototyping"
            subtitle="Validate designs before committing to production"
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

          {/* Problems / Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-24">
            <InfoCard
              icon={<Hexagon className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />}
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
              icon={
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              }
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

          {/* Deliverables */}
          <div className="mb-16 sm:mb-24">
            <h2 className="text-xl sm:text-2xl font-mono text-white mb-8 sm:mb-10 uppercase tracking-wide">
              What We Deliver
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <DeliverableCard
                icon={<Layers className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />}
                title="Functional Prototypes"
                description="Parts designed and printed for fit, assembly, and basic functional checks."
              />

              <DeliverableCard
                icon={<Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />}
                title="Fit & Assembly Validation"
                description="Physical verification of interfaces, clearances, and alignment."
              />

              <DeliverableCard
                icon={
                  <RefreshCcw className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                }
                title="Iteration Support"
                description="Quick design updates based on prototype feedback."
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

          {/* Ideal For */}
          <div className="mb-16 sm:mb-24 bg-slate-900 border border-white/5 p-6 sm:p-10 md:p-12">
            <h2 className="text-xl sm:text-2xl font-mono text-white mb-4 sm:mb-6 uppercase tracking-wide">
              Ideal For
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300 text-sm sm:text-base">
              <li>• Product development and R&D teams</li>
              <li>• Startups validating early-stage concepts</li>
              <li>• Manufacturers reducing tooling risk</li>
              <li>• Design verification before machining</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center border-t border-white/10 pt-12 sm:pt-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-mono text-white mb-6">
              Validate Before You Manufacture
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
                    Discuss Your Prototype
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

      <ul className="space-y-2 sm:space-y-3 text-slate-300 text-sm leading-relaxed">
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
    <div className="flex gap-4 sm:gap-6 py-1">
      <div className="text-primary font-mono text-sm sm:text-lg">{step}</div>
      <div>
        <h4 className="text-white font-medium mb-1">{title}</h4>
        <p className="text-slate-400 leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  );
}
