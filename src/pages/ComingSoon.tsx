import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { HeroVideoBackground } from "../components/HeroVideoBackground";

export default function ComingSoon() {
  return (
    <>
      <Helmet>
        <title>PROTOREV | Launching Soon</title>
        <meta
          name="description"
          content="PROTOREV Engineering — Official launch scheduled."
        />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">

          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

          <HeroVideoBackground />

          <div className="relative z-10 max-w-3xl w-full mx-auto px-6">
            <div className="bg-black/40 backdrop-blur-sm p-8 md:p-12 rounded-md">

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center space-x-2 border border-primary/30 bg-primary/5 px-3 py-1 mb-6">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-xs font-mono-tech text-primary tracking-widest uppercase">
                    Launch Sequence Initiated
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
                  PROTOREV Engineering
                </h1>

                <h2 className="mt-4 text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                  Official Launch Coming Soon
                </h2>

                <p className="mt-8 text-white/80 border-l-2 border-primary pl-6 font-mono-tech">
                  We are currently preparing our platform for deployment.
                  Our engineering services will be publicly available shortly.
                </p>

                <div className="mt-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Time · Precision · Perfection
                </div>
              </motion.div>

            </div>
          </div>

        </section>
      </div>
    </>
  );
}
