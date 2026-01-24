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
              <strong className="text-white">PROTOREV</strong> was founded on a simple observation: the gap between digital design and physical reality is where projects fail.
            </p>
            <p>
              We bridge that gap. Located in the industrial heart of Bangalore, our facility combines traditional machining wisdom with bleeding-edge additive manufacturing technologies.
            </p>
            <p>
              Our team consists of mechanical engineers, metallurgists, and CAD specialists who understand that a prototype isn't just a shape—it's a functional promise of the final product.
            </p>
          </div>
          
          <div className="relative h-96 border border-white/10 bg-card overflow-hidden">
             {/* Abstract grid representation of a factory floor */}
             <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
             <div className="absolute inset-0 flex items-center justify-center">
                <Factory className="w-32 h-32 text-white/10" strokeWidth={0.5} />
             </div>
             
             {/* Data overlay */}
             <div className="absolute bottom-4 left-4 font-mono-tech text-xs text-primary space-y-1">
               <div>FACILITY_ID: PR_BLR_01</div>
               <div>AREA: 12,000 SQ.FT</div>
               <div>STATUS: OPERATIONAL</div>
             </div>
          </div>
        </div>

        {/* The Team / Logic */}
        <h3 className="text-2xl font-bold text-white uppercase mb-12 border-b border-white/10 pb-4">
          Operational Units
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Design Unit",
              role: "CAD / CAM / CAE",
              icon: Ruler,
              desc: "Responsible for parametric modeling and simulation."
            },
            {
              title: "Production Unit",
              role: "CNC / Additive",
              icon: Cog,
              desc: "Responsible for physical realization and machining."
            },
            {
              title: "Quality Unit",
              role: "CMM / Inspection",
              icon: Users, // using Users as generic 'team' icon
              desc: "Responsible for verification and final approval."
            }
          ].map((unit, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-card border border-white/5 p-8 group hover:border-primary/50 transition-all duration-300"
            >
              <unit.icon className="w-8 h-8 text-primary mb-6" />
              <h4 className="text-xl font-bold text-white uppercase mb-1">{unit.title}</h4>
              <span className="text-xs font-mono-tech text-primary/80 uppercase tracking-widest block mb-4">{unit.role}</span>
              <p className="text-sm text-muted-foreground">{unit.desc}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Timeline / History */}
        <div className="mt-32">
          <h3 className="text-2xl font-bold text-white uppercase mb-12 border-b border-white/10 pb-4">
            System Logs
          </h3>
          <div className="space-y-8 border-l border-white/10 ml-4 pl-8 relative">
            {[
              { year: "2024", event: "Expansion into Metal 3D Printing (DMLS)." },
              { year: "2022", event: "ISO 9001:2015 Certification Acquired." },
              { year: "2020", event: "System Initialized. First CNC unit operational." }
            ].map((log, idx) => (
              <div key={idx} className="relative">
                <span className="absolute -left-[37px] top-1 w-4 h-4 bg-background border border-primary rounded-full" />
                <span className="font-mono-tech text-primary font-bold text-lg">{log.year}</span>
                <p className="text-muted-foreground mt-1">{log.event}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
