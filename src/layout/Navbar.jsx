import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-xl bg-background/60 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-lg font-medium tracking-tight text-foreground hover:opacity-80 transition"
        >
          KL
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="relative group transition-colors hover:text-foreground"
              >
                {link.label}

                {/* Apple-style underline */}
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="text-sm px-4 py-2 rounded-full bg-primary text-background hover:opacity-80 transition"
          >
            Contact
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen((p) => !p)}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-6 py-6 flex flex-col gap-5 text-sm">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-muted-foreground hover:text-foreground transition"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 text-center text-sm px-4 py-2 rounded-full bg-primary text-background"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
