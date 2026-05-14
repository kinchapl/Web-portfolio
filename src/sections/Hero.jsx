import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [hideScrollText, setHideScrollText] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHideScrollText(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Soft background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Subtle ambient gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-3xl rounded-full" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="opacity-0 animate-[fade-in_1s_ease-out_forwards]">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
                AI Engineer • Data Scientist • Full-Stack Developer
              </span>
            </div>

            {/* Title */}
            <div className="space-y-5 opacity-0 animate-[fade-in_1.2s_ease-out_forwards]">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight">
                Building <span className="text-primary">intelligent</span>
                <br />
                systems for the
                <br />
                <span className="font-serif italic font-normal text-foreground">
                  modern world.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                AI and Data Science engineer focused on machine learning
                systems, scalable backend architectures, and intelligent
                automation.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 opacity-0 animate-[fade-in_1.4s_ease-out_forwards]">
              <a href="#projects">
                <Button size="lg" variant="secondary">
                  View Projects <ArrowRight className="w-5 h-5" />
                </Button>
              </a>

              <a href="/CV_12220038.pdf" download>
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 text-muted-foreground opacity-0 animate-[fade-in_1.6s_ease-out_forwards]">
              <span className="text-sm">Follow:</span>

              {[
                { icon: Github, href: "https://github.com/kinchapl" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/kinchaplegden/",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full hover:text-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="opacity-0 animate-[fade-in_1.2s_ease-out_forwards]">
            <div className="relative max-w-md mx-auto">
              {/* Soft glow (very subtle) */}
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-3xl" />

              <div className="relative glass rounded-3xl p-2 border border-white/5">
                <img
                  src="/profile-photo.jpg"
                  alt=""
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint (minimal Apple style) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-muted-foreground transition-opacity duration-300"
        >
          <span
            className={`text-xs tracking-wider uppercase transition-all ${
              hideScrollText ? "opacity-0" : "opacity-60"
            }`}
          >
            Scroll
          </span>

          <ChevronDown className="w-5 h-5 opacity-40" />
        </a>
      </div>
    </section>
  );
};
