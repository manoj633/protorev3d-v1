import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
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

/* -------------------- IMAGE IMPORTS -------------------- */
import productDesignImg from "@/assets/product-design-and-development.jpeg";
import reverseEngineeringImg from "@/assets/reverse-engineering.jpeg";
import fixtureToolingImg from "@/assets/fixture-tooling.jpeg";
import cncConversionImg from "@/assets/2d-to-3d-cnc.jpeg";
import inspectionImg from "@/assets/gom-inspection.jpeg";
import printingImg from "@/assets/3d-printing-prototyping.jpeg";

/* -------------------- SERVICES DATA -------------------- */
const SERVICES = [
  {
    slug: "product-design-development",
    icon: <Settings className="w-8 h-8 text-primary" />,
    title: "Product Design & Development",
    image: productDesignImg,
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
    slug: "reverse-engineering",
    icon: <Search className="w-8 h-8 text-primary" />,
    title: "Reverse Engineering",
    image: reverseEngineeringImg,
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
    slug: "fixture-tooling-design",
    icon: <Wrench className="w-8 h-8 text-primary" />,
    title: "Fixture & Tooling Design",
    image: fixtureToolingImg,
    intro:
      "Machining accuracy is inconsistent, or setups consume too much time.",
    problems: "Poor repeatability, quality variations, rework.",
    solution:
      "Custom fixture and tooling design for stability and repeatability.",
    deliverables: ["Fixture CAD", "Tooling drawings", "Setup clarity"],
    benefit: "Improved accuracy, faster cycles, reduced scrap.",
  },
  {
    slug: "2d-to-3d-cnc",
    icon: <Layers className="w-8 h-8 text-primary" />,
    title: "2D to 3D Conversion for CNC",
    image: cncConversionImg,
    intro: "Only 2D drawings are available for CNC programming.",
    problems: "Ambiguous geometry and machining errors.",
    solution: "Conversion of 2D drawings into clear, CNC-ready 3D models.",
    deliverables: ["3D CAD models", "Geometry clarification"],
    benefit: "Faster CAM programming and smoother machining.",
  },
  {
    slug: "gom-inspection-quality",
    icon: <Ruler className="w-8 h-8 text-primary" />,
    title: "GOM Inspection & Quality Support",
    image: inspectionImg,
    intro: "Parts need dimensional verification and quality documentation.",
    problems: "Unclear inspection results and repeated rejections.",
    solution: "Inspection-focused CAD comparison and GD&T evaluation.",
    deliverables: ["Deviation analysis", "Quality documentation"],
    benefit: "Faster quality decisions and improved consistency.",
  },
  {
    slug: "3d-printing-prototyping",
    icon: <Hexagon className="w-8 h-8 text-primary" />,
    title: "3D Printing & Prototyping",
    image: printingImg,
    intro: "Designs need physical validation before production.",
    problems: "Unverified designs and costly tooling risks.",
    solution:
      "Engineering-focused 3D printing for functional and fit-check prototypes.",
    deliverables: ["Printed prototypes", "Iteration support"],
    benefit: "Early validation and faster decision-making.",
  },
];

/* -------------------- PAGE -------------------- */
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

      <div className="pt-16 pb-16 sm:pt-24 sm:pb-24 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <SectionHeader
            number="02"
            title="Engineering Solutions for Real-World Challenges"
            subtitle="Deploying advanced manufacturing protocols to solve complex hardware challenges."
          />

          {/* Intro */}
          <div className="pb-12 px-6 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-1 w-20 bg-primary mb-8"></div>
              <p
                className="
  text-base
  sm:text-lg
  md:text-xl
  text-slate-300
  max-w-3xl
  leading-relaxed
  mb-6
"
              >
                Every service we offer begins with a real manufacturing or
                design problem. Our focus is on clarity, accuracy, and
                manufacturability — so customers clearly understand what they
                receive and why it matters.
              </p>
              <p className="text-primary font-mono font-bold tracking-[0.2em] uppercase pb-12">
                Jikan • Seimitsu • Paripoornathe{" "}
                <span className="text-slate-500 font-normal text-sm lowercase ml-2">
                  (Time • Precision • Perfection)
                </span>
              </p>
            </motion.div>

            {/* Services List */}
            <div className="grid grid-cols-1 gap-12">
              {SERVICES.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="
  bg-slate-900
  border border-white/5
  p-6
  sm:p-8
  md:p-12
  hover:border-primary/30
  transition-colors
  group
  relative
  overflow-hidden
"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rotate-45 pointer-events-none" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
                    {/* Left */}
                    <div className="lg:col-span-4">
                      <div className="mb-6 bg-slate-950 w-16 h-16 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                        {service.icon}
                      </div>

                      <h3
                        className="
  text-xl
  sm:text-2xl
  md:text-3xl
  font-mono
  text-white
  mb-4 sm:mb-6
  font-bold
  uppercase
  tracking-tight
"
                      >
                        {service.title}
                      </h3>

                      <div className="aspect-video border border-white/5 overflow-hidden bg-slate-950">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover grayscale contrast-110 brightness-90 transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Right */}
                    <div
                      className="
  lg:col-span-8
  grid
  grid-cols-1
  md:grid-cols-2
  gap-6 sm:gap-8
"
                    >
                      <div className="space-y-6">
                        <SectionBlock
                          title="When Customers Approach Us"
                          color="text-primary"
                        >
                          {service.intro}
                        </SectionBlock>

                        <SectionBlock
                          title="Problems Faced"
                          color="text-red-500/80"
                          italic
                        >
                          {service.problems}
                        </SectionBlock>

                        <SectionBlock title="Our Solution" color="text-white">
                          {service.solution}
                        </SectionBlock>
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

                        {/* View Detailed Service */}
                        <div className="pt-4">
                          <Link href={`/services/${service.slug}`}>
                            <Button
                              variant="outline"
                              className="
    group
    font-mono
    uppercase
    tracking-wider sm:tracking-widest
    text-xs
    border-primary/40
    hover:border-primary
    hover:bg-primary/10
    flex
    items-center
    justify-center
    gap-2
    text-center
    whitespace-normal
    px-4 sm:px-6
    py-3
    min-h-[48px]
  "
                            >
                              <span className="block leading-tight">
                                View Detailed Service
                              </span>
                              <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 sm:mt-20 border-t border-white/10 pt-12 sm:pt-20 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-mono text-white mb-6">
                Let’s Solve Your Engineering Challenge
              </h2>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="
    group
    inline-flex
    items-center
    justify-center
    gap-2
    px-6 sm:px-12
    py-3
    min-h-[48px]
    text-center
    whitespace-normal sm:whitespace-nowrap
    w-full sm:w-auto
  "
                >
                  <span className="block leading-tight sm:leading-none text-center">
                    Discuss Your Requirement
                  </span>
                  <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* -------------------- SMALL HELPER -------------------- */
function SectionBlock({
  title,
  color,
  children,
  italic,
}: {
  title: string;
  color: string;
  children: React.ReactNode;
  italic?: boolean;
}) {
  return (
    <div>
      <h4
        className={`${color} font-mono text-xs uppercase tracking-widest mb-2 font-bold`}
      >
        {title}
      </h4>
      <p
        className={`
    text-sm sm:text-base
    leading-relaxed
    ${italic ? "italic text-slate-400" : "text-slate-300"}
  `}
      >
        {children}
      </p>
    </div>
  );
}
