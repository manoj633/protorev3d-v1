import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Box, Cpu, FileCog, Layers, Microscope, Scan } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Reverse Engineering",
    description: "Complete digitization of physical parts into parametric CAD models. We use blue-light scanning accurate to 10 microns.",
    icon: Scan,
    specs: ["Point Cloud Processing", "Parametric Modeling", "Legacy Part Recreation", "Wear Analysis"]
  },
  {
    id: "02",
    title: "DFM Analysis",
    description: "Design for Manufacturing optimization to reduce cost and machining time without compromising structural integrity.",
    icon: FileCog,
    specs: ["Wall Thickness Analysis", "Draft Angle Verification", "Material Selection", "Tolerance Stack-up"]
  },
  {
    id: "03",
    title: "Rapid Tooling",
    description: "Bridge tooling solutions for low-volume production runs using aluminum and soft steel molds.",
    icon: Layers,
    specs: ["Injection Molds", "Die Casting Dies", "Jigs & Fixtures", "EDM Electrodes"]
  },
  {
    id: "04",
    title: "Metrology Inspection",
    description: "Comprehensive quality assurance using CMM and optical scanning to verify part conformance to GD&T.",
    icon: Microscope,
    specs: ["First Article Inspection", "Color Map Deviation", "GD&T Reporting", "Surface Finish Analysis"]
  }
];

export default function Services() {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-20">
          <SectionHeader 
            number="02" 
            title="System Capabilities" 
            subtitle="Deploying advanced manufacturing protocols to solve complex hardware challenges."
          />
        </div>

        {/* Services Grid */}
        <div className="space-y-32">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-start`}
            >
              {/* Visual / Icon Side */}
              <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                <div className="relative p-12 border border-white/10 bg-card/50 backdrop-blur-sm w-full aspect-square flex items-center justify-center group hover:border-primary/50 transition-colors">
                  <div className="absolute top-4 left-4 font-mono-tech text-xs text-muted-foreground">REF_{service.id}</div>
                  <service.icon className="w-32 h-32 text-white/80 group-hover:text-primary transition-colors duration-500" strokeWidth={1} />
                  
                  {/* Decorative corners */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/50" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/50" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/50" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/50" />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-2/3 pt-4">
                <h3 className="text-3xl font-bold uppercase mb-6 text-white tracking-tight flex items-center gap-4">
                  {service.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {service.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-mono-tech text-gray-400">
                      <div className="w-1.5 h-1.5 bg-primary" />
                      {spec}
                    </div>
                  ))}
                </div>

                <Link href="/contact">
                  <Button variant="outline" className="rounded-none border-white/20 hover:bg-primary hover:border-primary hover:text-white uppercase tracking-wider font-mono-tech text-xs h-12 px-6">
                    Request Spec Sheet <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
