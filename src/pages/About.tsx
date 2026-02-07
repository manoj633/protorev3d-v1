import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import {
  Factory,
  Ruler,
  Users,
  Cog,
  Telescope,
  Target,
  CheckCircle,
} from "lucide-react";

export default function About() {
  return (
    <div className="pt-16 pb-16 sm:pt-24 sm:pb-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="03"
          title="About The Protocol"
          subtitle="We are engineers, not artists. We believe in function over form, data over opinion, and precision over approximation."
        />

        {/* Mission Statement */}
        <section
          className="
  grid grid-cols-1 lg:grid-cols-2
  gap-8 sm:gap-12 lg:gap-16
  mb-20 sm:mb-40
  items-center
"
        >
          <div
            className="
  space-y-4 sm:space-y-6
  text-sm sm:text-base md:text-lg
  text-muted-foreground
  leading-relaxed
"
          >
            <p>
              <strong className="text-white">PROTOREV</strong> was founded on a
              simple observation: the gap between digital design and physical
              reality is where projects fail.
            </p>
            <p>
              We bridge that gap. Located in the industrial heart of Bangalore,
              our facility combines traditional machining wisdom with
              bleeding-edge additive manufacturing technologies.
            </p>
            <p>
              Our team consists of mechanical engineers, metallurgists, and CAD
              specialists who understand that a prototype isn't just a
              shape—it’s a functional promise of the final product.
            </p>
          </div>

          <div className="relative h-96 border border-white/10 bg-card overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Factory
                className="w-20 h-20 sm:w-28 sm:h-28 text-white/10"
                strokeWidth={0.5}
                aria-hidden
              />
            </div>

            <div className="absolute bottom-4 left-4 font-mono-tech text-xs text-primary space-y-1">
              <div>FACILITY_ID: PR_BLR_01</div>
              <div>AREA: 12,000 SQ.FT</div>
              <div>STATUS: OPERATIONAL</div>
            </div>
          </div>
        </section>

        {/* Vision · Mission · Core Values */}
        <section
          className="
  mb-20 sm:mb-40
  bg-card/30
  py-12 sm:py-24
  px-4 sm:px-6 md:px-10
"
        >
          <h3 className="text-2xl font-bold text-white uppercase mb-16 border-b border-white/10 pb-4">
            Vision · Mission · Core Values
          </h3>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
  p-6 sm:p-8 md:p-10
  bg-card
  border border-white/10
  hover:border-primary/50
  transition-all
  shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]
"
            >
              <Telescope className="w-7 h-7 text-primary/80 mb-6" aria-hidden />
              <h4 className="text-xl font-bold uppercase text-white mb-4">
                Vision
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                To build a globally respected engineering company known for
                discipline, precision, and long-term reliability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="p-10 bg-card border border-white/10 hover:border-primary/50 transition-all shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]"
            >
              <Target className="w-7 h-7 text-primary/80 mb-6" aria-hidden />
              <h4 className="text-xl font-bold uppercase text-white mb-4">
                Mission
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                To design and deliver engineering solutions through standardized
                processes, continuous improvement, and uncompromising quality—
                while nurturing a culture of responsibility, respect, and
                technical excellence.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Discipline Over Speed",
                desc: "Correct processes matter more than rushed outcomes.",
              },
              {
                title: "Precision in Every Detail",
                desc: "Every micron counts. Quality is built, not inspected.",
              },
              {
                title: "Process Before Personality",
                desc: "Systems outperform individual brilliance.",
              },
              {
                title: "Continuous Improvement",
                desc: "Small, consistent gains drive long-term excellence.",
              },
              {
                title: "Respect for People & Work",
                desc: "Humility, accountability, and professionalism always.",
              },
              {
                title: "Long-Term Responsibility",
                desc: "Built for tomorrow’s reliability, not today’s delivery.",
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="
  p-6 sm:p-8
  bg-card
  border border-white/5
  hover:border-primary/40
  transition-all
"
              >
                <CheckCircle
                  className="w-4 h-4 text-primary/70 mb-4"
                  aria-hidden
                />
                <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-white mb-2">
                  CV-{String(idx + 1).padStart(2, "0")} · {value.title}
                </h5>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Operational Units */}
        <section className="mb-20 sm:mb-40">
          <h3 className="text-2xl font-bold text-white uppercase mb-12 border-b border-white/10 pb-4">
            Operational Units
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Design Unit",
                role: "CAD / CAM / CAE",
                icon: Ruler,
                desc: "Parametric modeling and simulation.",
                status: "operational",
              },
              {
                title: "Production Unit",
                role: "CNC / Additive",
                icon: Cog,
                desc: "Physical realization and machining.",
                status: "upcoming",
              },
              {
                title: "Quality Unit",
                role: "CMM / Inspection",
                icon: Users,
                desc: "Verification and final approval.",
                status: "upcoming",
              },
            ].map((unit, idx) => (
              <motion.div
                key={idx}
                whileHover={
                  unit.status === "operational" ? { y: -5 } : undefined
                }
                transition={{ duration: 0.25 }}
                className={`relative p-8
                  ${
                    unit.status === "operational"
                      ? "bg-card border border-white/5 hover:border-primary/50"
                      : "bg-card/40 border border-dashed border-white/20 opacity-70"
                  }`}
              >
                <span
                  className={`absolute top-4 right-4 text-[10px] uppercase tracking-widest font-mono-tech px-2 py-0.5 border
                    ${
                      unit.status === "operational"
                        ? "border-primary/40 text-primary"
                        : "border-white/20 text-white/40"
                    }`}
                >
                  {unit.status === "operational" ? "Operational" : "Coming Up"}
                </span>

                <unit.icon
                  className={`w-7 h-7 mb-6
                    ${
                      unit.status === "operational"
                        ? "text-primary/80"
                        : "text-white/40"
                    }`}
                  aria-hidden
                />

                <h4 className="text-xl font-bold uppercase text-white mb-1">
                  {unit.title}
                </h4>

                <span className="text-xs font-mono-tech uppercase tracking-widest text-primary/70 block mb-4">
                  {unit.role}
                </span>

                <p className="text-sm text-muted-foreground">{unit.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* System Logs */}
        <section>
          <h3 className="text-2xl font-bold text-white uppercase mb-12 border-b border-white/10 pb-4">
            Timeline
          </h3>

          <div
            className="
  space-y-8 sm:space-y-12
  border-l border-white/10
  ml-2 sm:ml-4
  pl-4 sm:pl-8
  relative
"
          >
            {[
              {
                year: "2038",
                event: "Machine Unit fully operationalized.",
                status: "upcoming",
              },
              {
                year: "2035",
                event: "Dedicated Quality Unit commissioned.",
                status: "upcoming",
              },
              {
                year: "2030",
                event: "R&D unit became operational.",
                status: "upcoming",
              },
              {
                year: "2025",
                event: "Company established and operations initiated.",
                status: "completed",
              },
            ].map((log, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="relative"
              >
                <span
                  className={`absolute -left-[37px] top-1 w-4 h-4 rounded-full border
                    ${
                      log.status === "completed"
                        ? "bg-primary border-primary shadow-[0_0_12px_rgba(255,255,255,0.15)]"
                        : "bg-background border-white/30"
                    }`}
                />

                <div className="flex items-center gap-4">
                  <span
                    className={`font-mono-tech font-bold text-sm sm:text-lg tracking-widest
                      ${
                        log.status === "completed"
                          ? "text-primary"
                          : "text-white/50"
                      }`}
                  >
                    {log.year}
                  </span>

                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 border font-mono-tech border-white/20 text-white/40">
                    {log.status === "completed" ? "Completed" : "Planned"}
                  </span>
                </div>

                <p className="mt-3 max-w-xl text-muted-foreground">
                  {log.event}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
