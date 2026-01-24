import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Layers,
  Ruler,
  Search,
  Settings,
  Wrench,
  Hexagon,
} from "lucide-react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    icon: <Settings className="w-8 h-8 text-primary" />,
    title: "Product Design & Development",
    intro:
      "You have an idea, concept, or sketch but it is not ready for manufacturing.",
    problems: "Design rework, assembly issues, manufacturing delays.",
    solution:
      "We convert ideas into structured, manufacturable 3D CAD models considering materials, processes, tolerances, and assembly.",
    deliverables: [
      "3D CAD models",
      "Assemblies",
      "Manufacturing drawings",
      "Design improvements",
    ],
    benefit:
      "Reduced errors, faster production readiness, lower development cost.",
  },
  {
    icon: <Search className="w-8 h-8 text-primary" />,
    title: "Reverse Engineering",
    intro: "A physical part exists but no CAD or drawings are available.",
    problems:
      "OEM dependency, reproduction difficulty, inaccurate measurements.",
    solution:
      "Accurate digital reconstruction using manual and scan-based methods.",
    deliverables: [
      "3D CAD models",
      "Redesign support",
      "Manufacturing-ready data",
    ],
    benefit: "Freedom from OEM dependency and secure long-term documentation.",
  },
  {
    icon: <Wrench className="w-8 h-8 text-primary" />,
    title: "Fixture & Tooling Design",
    intro:
      "Machining accuracy is inconsistent, or setups consume too much time.",
    problems: "Poor repeatability, quality variations, rework.",
    solution:
      "Custom fixture and tooling design for stability and repeatability.",
    deliverables: ["Fixture CAD", "Tooling drawings", "Setup clarity"],
    benefit: "Improved accuracy, faster cycles, reduced scrap.",
  },
  {
    icon: <Layers className="w-8 h-8 text-primary" />,
    title: "2D to 3D Conversion for CNC",
    intro: "Only 2D drawings are available for CNC programming.",
    problems: "Ambiguous geometry and machining errors.",
    solution: "Conversion of 2D drawings into clear, CNC-ready 3D models.",
    deliverables: ["3D CAD models", "Geometry clarification"],
    benefit: "Faster CAM programming and smoother machining.",
  },
  {
    icon: <Ruler className="w-8 h-8 text-primary" />,
    title: "GOM Inspection & Quality Support",
    intro: "Parts need dimensional verification and quality documentation.",
    problems: "Unclear inspection results and repeated rejections.",
    solution: "Inspection-focused CAD comparison and GD&T evaluation.",
    deliverables: ["Deviation analysis", "Quality documentation"],
    benefit: "Faster quality decisions and improved consistency.",
  },
  {
    icon: <Hexagon className="w-8 h-8 text-primary" />,
    title: "3D Printing & Prototyping",
    intro: "Designs need physical validation before production.",
    problems: "Unverified designs and costly tooling risks.",
    solution:
      "Engineering-focused 3D printing for functional and fit-check prototypes.",
    deliverables: ["Printed prototypes", "Iteration support"],
    benefit: "Early validation and faster decision-making.",
  },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | PROTOREV</title>
        <meta
          name="description"
          content="Engineering solutions for real-world challenges. Focus on clarity, accuracy, and manufacturability."
        />
      </Helmet>

      <div className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-mono font-bold text-white mb-6 uppercase">
            Engineering Solutions for Real-World Challenges
          </h1>
          <div className="h-1 w-20 bg-primary mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-6">
            Every service we offer begins with a real manufacturing or design
            problem. Our focus is on clarity, accuracy, and manufacturability —
            so customers clearly understand what they receive and why it
            matters.
          </p>
          <p className="text-primary font-mono font-bold tracking-[0.2em] uppercase">
            Jikan • Seimitsu • Paripoornathe <br className="md:hidden" />
            <span className="text-slate-500 font-normal text-sm lowercase ml-2">
              (Time • Precision • Perfection)
            </span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-slate-900 border border-white/5 p-8 md:p-12 hover:border-primary/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rotate-45 pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-4">
                  <div className="mb-6 bg-slate-950 w-16 h-16 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-mono text-white mb-6 font-bold uppercase tracking-tight">
                    {service.title}
                  </h3>
                  <div className="aspect-video bg-slate-950 border border-white/5 relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                    <span className="text-slate-700 font-mono text-xs uppercase">
                      {service.title} Placeholder
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-primary font-mono text-xs uppercase tracking-widest mb-2 font-bold">
                        When Customers Approach Us
                      </h4>
                      <p className="text-slate-300 leading-relaxed">
                        {service.intro}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-red-500/80 font-mono text-xs uppercase tracking-widest mb-2 font-bold">
                        Problems Faced
                      </h4>
                      <p className="text-slate-400 leading-relaxed italic">
                        {service.problems}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-mono text-xs uppercase tracking-widest mb-2 font-bold">
                        Our Solution
                      </h4>
                      <p className="text-slate-200 leading-relaxed">
                        {service.solution}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-white font-mono text-xs uppercase tracking-widest mb-2 font-bold">
                        Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-center text-slate-300 font-mono text-sm"
                          >
                            <span className="w-1.5 h-1.5 bg-primary/50 mr-3" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-primary/5 border border-primary/10 p-4">
                      <h4 className="text-primary font-mono text-xs uppercase tracking-widest mb-2 font-bold">
                        Customer Benefit
                      </h4>
                      <p className="text-slate-200 leading-relaxed font-medium">
                        {service.benefit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 border-t border-white/10 pt-20 text-center">
          <h2 className="text-3xl font-mono text-white mb-6">
            Let’s Solve Your Engineering Challenge
          </h2>
          <Link href="/contact">
            <Button size="lg" className="group px-12">
              Discuss Your Requirement
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
