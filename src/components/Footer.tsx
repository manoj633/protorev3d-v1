import { Link } from "wouter";
import protorevLogo from "@/assets/protorev.png";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="py-12 sm:py-16 grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tighter text-white">
              <Link href="/" className="cursor-pointer">
            <img
              src={protorevLogo}
              alt="PROTOREV"
              className="h-14 md:h-16 object-contain"
            />
          </Link>
              </span>
              <span className="text-[10px] font-mono-tech text-muted-foreground tracking-widest uppercase mt-1">
                Time • Precision • Perfection
              </span>
            </div>

            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Advanced engineering solutions for the modern industrial age. We
              specialize in turning complex specifications into tangible reality
              through reverse engineering and rapid prototyping.
            </p>
          </div>

          {/* Coordinates */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono-tech text-primary uppercase tracking-wider">
              Coordinates
            </h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="leading-relaxed">
                <span className="block text-white mb-1">Headquarters</span>
                <span className="block">231/2, Ground Floor</span>
                <span className="block">2nd Cross, Vidhana Soudha Layout</span>
                <span className="block">Papareddypalya, Naagarabhaavi</span>
                <span className="block">Bengaluru, Karnataka 560072</span>
              </li>

              <li>
                <a
                  href="tel:+919876543210"
                  className="inline-block hover:text-white transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@protorev.com"
                  className="inline-block hover:text-white transition-colors"
                >
                  info@protorev.com
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono-tech text-primary uppercase tracking-wider">
              System Links
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-white transition-colors inline-block"
                >
                  Capabilities
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-white transition-colors inline-block"
                >
                  Company Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-white transition-colors inline-block"
                >
                  Inquiry Terminal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="
          border-t border-white/5
          py-6
          flex flex-col sm:flex-row
          items-center
          justify-between
          gap-3
          text-xs
          text-muted-foreground
          font-mono-tech
          text-center sm:text-left
        "
        >
          <p>
            © {new Date().getFullYear()} PROTOREV SYSTEMS.
            <span className="block sm:inline sm:ml-1">
              All rights reserved.
            </span>
          </p>

          <p className="opacity-70">SYSTEM VERSION 2.0.4</p>
        </div>
      </div>
    </footer>
  );
}
