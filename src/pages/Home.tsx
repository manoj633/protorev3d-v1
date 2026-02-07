// import { Scene3D } from "@/components/Scene3D";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Box, Cpu, Gauge, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { HeroVideoBackground } from "../components/HeroVideoBackground";
import meetingImg from "@/assets/board-meeting-top-view-with-cad-sketch-on-table.jpeg";
import ImageParallax from "@/components/ImageParallax";

const features = [
  {
    title: "Jikan (Time)",
    description: "Rapid prototyping cycles reduced from weeks to hours.",
    icon: Zap,
  },
  {
    title: "Seimitsu (Precision)",
    description: "Micron-level accuracy for aerospace-grade components.",
    icon: Gauge,
  },
  {
    title: "Paripoornathe (Perfection)",
    description: "Rigorous QA processes ensuring zero-defect delivery.",
    icon: Box,
  },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home | PROTOREV</title>
        <meta
          name="description"
          content="Engineering solutions for real-world challenges. Focus on clarity, accuracy, and manufacturability."
        />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        {/* HERO SECTION */}
        <section className="relative min-h-screen sm:h-screen w-full flex items-center justify-center overflow-hidden bg-background">
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

          {/* 3D Canvas Layer */}
          {/* <Scene3D /> */}
          <HeroVideoBackground />

          {/* Content Layer */}
          <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
            <div className="max-w-3xl pointer-events-auto bg-black/40 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-md">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="inline-flex items-center space-x-2 border border-primary/30 bg-primary/5 px-3 py-1 mb-6 backdrop-blur-sm">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-xs font-mono-tech text-primary tracking-widest uppercase">
                    Systems Operational
                  </span>
                </div>

                <h1
                  className="text-4xl
  sm:text-5xl
  md:text-7xl
  lg:text-8xl
  font-bold
  tracking-tighter
  text-white
  leading-tight
  drop-shadow-[0_6px_30px_rgba(0,0,0,0.9)]letter-spacing: -0.02em;"
                >
                  Engineered <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                    Perfection
                  </span>
                </h1>
                <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-white/90 max-w-lg border-l-2 border-primary pl-6 font-mono-tech drop-shadow-lg">
                  Advanced reverse engineering & rapid prototyping for the next
                  generation of industrial manufacturing.
                </p>

                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                  {" "}
                  <Link href="/services">
                    <Button
                      size="lg"
                      className="rounded-none h-14 px-8 text-base bg-white text-black hover:bg-gray-200 uppercase tracking-widest font-bold"
                    >
                      Our Services
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="
    rounded-none
    h-auto
    px-6 sm:px-8
    py-3
    text-sm sm:text-base
    border-white/20
    hover:bg-white/5 hover:text-white
    uppercase
    tracking-wider sm:tracking-widest
    font-bold font-mono-tech
    flex
    items-center
    gap-2
    text-center
    whitespace-normal
  "
                    >
                      <span className="block leading-tight">
                        Discuss your project
                      </span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* WHO WE ARE SECTION */}
        <section className="py-16 sm:py-24 bg-card relative border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              number="01"
              title="Engineering Driven by Time, Precision, and Perfection"
              subtitle="PROTOREV 3D Engineering Services is an early-stage engineering startup built with a strong focus on accuracy, manufacturability, and responsibility."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-12">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="border-l-2 border-primary pl-6">
                    <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wider">
                      Our focus
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-mono-tech">
                      Our work is guided by three core principles:
                    </p>
                  </div>

                  <div className="grid gap-6">
                    <div className="group p-6 border border-white/5 bg-background/50 hover:border-primary/30 transition-colors">
                      <h4 className="text-primary font-bold mb-2 uppercase tracking-widest text-sm">
                        Time
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Respecting schedules and manufacturing timelines to
                        ensure your project stays on track.
                      </p>
                    </div>

                    <div className="group p-6 border border-white/5 bg-background/50 hover:border-primary/30 transition-colors">
                      <h4 className="text-primary font-bold mb-2 uppercase tracking-widest text-sm">
                        Precision
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Dimensionally accurate and tolerance-aware design that
                        translates perfectly to the shop floor.
                      </p>
                    </div>

                    <div className="group p-6 border border-white/5 bg-background/50 hover:border-primary/30 transition-colors">
                      <h4 className="text-primary font-bold mb-2 uppercase tracking-widest text-sm">
                        Perfection
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Clean, structured, and purpose-driven engineering that
                        solves real manufacturing problems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background border border-white/10 p-8 md:p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                <div className="relative z-10">
                  <p className="text-lg md:text-xl text-white font-medium leading-relaxed italic">
                    "We are not driven by background or legacy. We are driven by
                    how well our designs perform in real manufacturing
                    environments."
                  </p>
                  <div className="mt-8 flex items-center space-x-4">
                    <div className="h-[1px] w-12 bg-primary"></div>
                    <span className="text-xs font-mono-tech text-muted-foreground uppercase tracking-[0.2em]">
                      Engineering Mandate
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES OVERVIEW SECTION */}
        <section className="py-16 sm:py-24 bg-background relative border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              number="02"
              title="What Engineering Problems We Solve"
              subtitle="Specialized technical solutions for startups and manufacturers, from concept to production-ready documentation."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                { title: "Product Design & Development", icon: Box },
                { title: "Reverse Engineering", icon: Cpu },
                { title: "Fixture & Tooling Design", icon: Zap },
                { title: "2D to 3D Conversion for CNC", icon: Gauge },
                { title: "GOM Inspection & Quality Support", icon: Zap },
                { title: "3D Printing & Prototyping", icon: Box },
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group p-6 sm:p-8 border border-white/10 bg-card hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <service.icon className="w-16 h-16" />
                  </div>
                  <service.icon className="w-8 h-8 text-primary mb-6" />
                  <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-tight group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <div className="w-6 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-primary transition-all duration-500" />
                </motion.div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Link href="/services">
                <Button
                  variant="outline"
                  className="rounded-none px-8 py-6 border-white/10 hover:border-primary hover:bg-primary/5 uppercase tracking-widest font-mono-tech text-xs"
                >
                  View Detailed Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* HOW WE WORK SECTION */}
        <section className="py-16 sm:py-24 bg-card relative border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              number="03"
              title="Our Engineering Approach"
              subtitle="Every step reflects Time, Precision, and Perfection."
            />

            <div className="mt-12 relative">
              <div className="relative flex items-center gap-4 sm:gap-8 top-0 bottom-0 w-[1px] bg-primary/20 hidden md:block" />

              <div className="space-y-12">
                {[
                  "Requirement understanding",
                  "Engineering analysis",
                  "Structured design execution",
                  "Review and refinement",
                  "Final delivery with technical support",
                ].map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center gap-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className="flex-1 hidden md:block" />
                    <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-background border border-primary text-primary font-mono-tech text-xs">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="p-6 border border-white/5 bg-background/50 hover:border-primary/30 transition-colors">
                        <p className="text-white font-bold uppercase tracking-widest text-sm">
                          {step}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE SUPPORT SECTION */}
        <section className="py-16 sm:py-24 bg-background relative border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              number="04"
              title="Who We Work With"
              subtitle="Providing serious engineering support across the manufacturing ecosystem."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 items-stretch">
              <div className="md:col-span-1 relative overflow-hidden rounded-md border border-white/6 bg-card">
                <ImageParallax
                  src={meetingImg}
                  alt="Board meeting with CAD sketches"
                  className="w-full h-64 md:h-full transform-none md:transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
                <div className="absolute left-4 bottom-4 z-10 text-white">
                  <h4 className="text-sm font-bold uppercase tracking-wider">
                    Collaborative Engineering
                  </h4>
                  <p className="text-xs text-white/80">
                    Boardroom design reviews meet CAD insights
                  </p>
                </div>
              </div>

              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Product startups",
                  "MSMEs and manufacturers",
                  "CNC machine shops",
                  "Automation and tooling teams",
                  "Maintenance and legacy systems",
                ].map((target, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-8 border border-white/5 bg-card flex items-center gap-4 group hover:border-primary/20 transition-colors"
                  >
                    <div className="w-2 h-2 bg-primary/40 group-hover:bg-primary transition-colors" />
                    <span className="text-white font-medium uppercase tracking-tight text-sm">
                      {target}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EARLY-STAGE TRANSPARENCY SECTION */}
        <section className="py-16 sm:py-24 bg-card relative border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeader
                  number="05"
                  title="A Startup with Serious Intent"
                  subtitle="PROTOREV 3D is in its early stage. This allows us to work closely with clients, respond quickly, and take full ownership of engineering outcomes."
                />
                <p className="text-muted-foreground mt-6 font-mono-tech text-sm border-l-2 border-primary pl-6">
                  We grow through real engineering challenges, not marketing
                  claims.
                </p>
              </div>
              <div className="p-8 border border-white/10 bg-background/50 relative overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl font-bold text-white uppercase tracking-tighter">
                    Let's Build Something Right
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    If your project values time, precision, and perfection,
                    we're ready to support you.
                  </p>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="
    rounded-none
    h-14
    px-6 sm:px-8
    text-sm sm:text-base
    border-white/20
    hover:bg-white/5 hover:text-white
    uppercase tracking-wider sm:tracking-widest
    font-bold font-mono-tech
    w-full sm:w-auto
    justify-center
  "
                    >
                      <span className="whitespace-normal text-center">
                        Discuss your project
                      </span>
                      <ArrowRight className="ml-2 w-4 h-4 shrink-0" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
