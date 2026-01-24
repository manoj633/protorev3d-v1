import { Link, useLocation } from "wouter";
import protorevLogo from "@/assets/protorev.png";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/services", label: "SERVICES" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link
            href="/"
            className="group flex flex-col items-start cursor-pointer"
          >
            <img
              src={protorevLogo}
              alt="PROTOREV"
              className="h-8 md:h-10 object-contain"
            />
            <span className="text-[10px] font-mono-tech text-muted-foreground tracking-[0.2em] uppercase">
              Precision Engineering
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-12">
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <div className="group flex flex-col items-center cursor-pointer">
                    <div className="flex items-center space-x-2">
                      <span
                        className={cn(
                          "text-sm font-medium tracking-wide transition-colors",
                          isActive
                            ? "text-white"
                            : "text-muted-foreground group-hover:text-white",
                        )}
                      >
                        {item.label}
                      </span>
                    </div>
                    {/* Active Indicator */}
                    <div
                      className={cn(
                        "h-[1px] w-full mt-1 bg-primary transform scale-x-0 transition-transform duration-300 origin-left",
                        isActive && "scale-x-100",
                        "group-hover:scale-x-100",
                      )}
                    />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary transition-colors p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <div
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-3 py-4 text-base font-bold border-l-2 cursor-pointer transition-all",
                      location === item.href
                        ? "border-primary text-white bg-white/5"
                        : "border-transparent text-muted-foreground hover:text-white hover:bg-white/5",
                    )}
                  >
                    <span className="text-xs font-mono-tech text-primary mr-3">
                      {item.code}
                    </span>
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
