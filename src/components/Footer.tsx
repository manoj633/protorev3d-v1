import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tighter text-white">
                PROTOREV
              </span>
              <span className="text-[10px] font-mono-tech text-muted-foreground tracking-widest uppercase mt-1">
                Precision • Speed • Perfection
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Advanced engineering solutions for the modern industrial age. We
              specialize in turning complex specifications into tangible reality
              through cutting-edge reverse engineering and rapid prototyping.
            </p>
          </div>

          {/* Coordinates */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono-tech text-primary uppercase tracking-wider">
              Coordinates
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex flex-col">
                <span className="text-white">Headquarters</span>
                <span>231/2, Ground Floor, 2nd Cross</span>
                <span>Vidhana Soudha Layout, Papareddypalya</span>
                <span>D-Group Layout, 2nd Stage</span>
                <span>Naagarabhaavi, Bengaluru</span>
                <span>Karnataka 560072</span>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="hover:text-white transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@protorev.com"
                  className="hover:text-white transition-colors"
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
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-white transition-colors"
                >
                  Capabilities
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-white transition-colors"
                >
                  Company Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-white transition-colors"
                >
                  Inquiry Terminal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground font-mono-tech">
          <p>
            © {new Date().getFullYear()} PROTOREV SYSTEMS. ALL RIGHTS RESERVED.
          </p>
          <p className="mt-2 md:mt-0">SYSTEM VERSION 2.0.4</p>
        </div>
      </div>
    </footer>
  );
}
