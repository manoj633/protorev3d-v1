import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Factory, Ruler, Users, Cog } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="03"
          title="About The Protocol"
          subtitle="We are engineers, not artists. We believe in function over form, data over opinion, and precision over approximation."
        />

        {/* Mission Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
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
              shape—it's a functional promise of the final product.
            </p>
          </div>

          <div className="relative h-96 border border-white/10 bg-card overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Factory className="w-32 h-32 text-white/10" strokeWidth={0.5} />
            </div>

            <div className="absolute bottom-4 left-4 font-mono-tech text-xs text-primary space-y-1">
              <div>FACILITY_ID: PR_BLR_01</div>
              <div>AREA: 12,000 SQ.FT</div>
              <div>STATUS: OPERATIONAL</div>
            </div>
          </div>
        </div>

        {/* Operational Units */}
        <h3 className="text-2xl font-bold text-white uppercase mb-12 border-b border-white/10 pb-4">
          Operational Units
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Design Unit",
              role: "CAD / CAM / CAE",
              icon: Ruler,
              desc: "Responsible for parametric modeling and simulation.",
              status: "operational",
            },
            {
              title: "Production Unit",
              role: "CNC / Additive",
              icon: Cog,
              desc: "Responsible for physical realization and machining.",
              status: "upcoming",
            },
            {
              title: "Quality Unit",
              role: "CMM / Inspection",
              icon: Users,
              desc: "Responsible for verification and final approval.",
              status: "upcoming",
            },
          ].map((unit, idx) => (
            <motion.div
              key={idx}
              whileHover={unit.status === "operational" ? { y: -5 } : undefined}
              className={`relative p-8 transition-all duration-300
                ${
                  unit.status === "operational"
                    ? "bg-card border border-white/5 hover:border-primary/50"
                    : "bg-card/40 border border-dashed border-white/20 opacity-70"
                }`}
            >
              {/* Status badge */}
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
                className={`w-8 h-8 mb-6
                  ${
                    unit.status === "operational"
                      ? "text-primary"
                      : "text-white/40"
                  }`}
              />

              <h4
                className={`text-xl font-bold uppercase mb-1
                  ${
                    unit.status === "operational"
                      ? "text-white"
                      : "text-white/60"
                  }`}
              >
                {unit.title}
              </h4>

              <span
                className={`text-xs font-mono-tech uppercase tracking-widest block mb-4
                  ${
                    unit.status === "operational"
                      ? "text-primary/80"
                      : "text-white/40"
                  }`}
              >
                {unit.role}
              </span>

              <p className="text-sm text-muted-foreground">{unit.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline / History (unchanged) */}
        <div className="mt-32">
          <h3 className="text-2xl font-bold text-white uppercase mb-12 border-b border-white/10 pb-4">
            System Logs
          </h3>

          <div className="space-y-10 border-l border-white/10 ml-4 pl-8 relative">
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
                event: "Research & Development unit became operational.",
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
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <span
                  className={`absolute -left-[37px] top-1 w-4 h-4 rounded-full border
                    ${
                      log.status === "completed"
                        ? "bg-primary border-primary"
                        : "bg-background border-white/30"
                    }`}
                />

                <div className="flex items-center gap-4">
                  <span
                    className={`font-mono-tech font-bold text-lg tracking-widest
                      ${
                        log.status === "completed"
                          ? "text-primary"
                          : "text-white/50"
                      }`}
                  >
                    {log.year}
                  </span>

                  <span
                    className={`text-[10px] uppercase tracking-wider px-2 py-0.5 border font-mono-tech
                      ${
                        log.status === "completed"
                          ? "border-primary/40 text-primary"
                          : "border-white/20 text-white/40"
                      }`}
                  >
                    {log.status === "completed" ? "Completed" : "Planned"}
                  </span>
                </div>

                <p
                  className={`mt-2 max-w-xl
                    ${
                      log.status === "completed"
                        ? "text-muted-foreground"
                        : "text-white/40"
                    }`}
                >
                  {log.event}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
