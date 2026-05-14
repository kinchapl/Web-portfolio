import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "CrawTech",
    description:
      "Contributed to a crawfish farming management platform with IoT and backend integration.",
    image: "/projects/project1.png",
    tags: ["React", "n8n", "IoT", "Backend"],
    link: "https://crawtech.onrender.com",
  },
  {
    title: "Willing Resort Website",
    description:
      "Led development of a modern resort website focused on UX and accessibility.",
    image: "/projects/project2.png",
    tags: ["WordPress", "UI/UX", "Frontend"],
    link: "https://willingbhutan.com",
  },
  {
    title: "EcoVision",
    description:
      "Backend system for AI-powered waste management with IoT integration.",
    image: "/projects/project3.png",
    tags: ["Backend", "IoT", "AI"],
    link: "",
  },
  {
    title: "Dzongkha OCR",
    description: "Deep learning OCR system for Dzongkha character recognition.",
    image: "/projects/project4.png",
    tags: ["Python", "Deep Learning", "OCR"],
    link: "https://dzongkha-ocr-g8p3.onrender.com",
  },
  {
    title: "LamLha",
    description:
      "Frontend hackathon project built under tight time constraints.",
    image: "/projects/project5.png",
    tags: ["HTML", "JS", "CSS"],
    link: "https://lam-lha.vercel.app",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary/5 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header (Apple style centered) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects built around{" "}
            <span className="font-serif italic font-normal text-white">
              AI, innovation & impact.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Selected work spanning AI, IoT systems, backend engineering, and web
            development.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 hover:border-white/10"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Soft overlay (Apple-like subtle darkening) */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />

                {/* Link button */}
                {project.link && (
                  <a
                    href={project.link}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="p-3 rounded-full glass border border-white/10">
                      <ArrowUpRight className="w-5 h-5 text-primary" />
                    </div>
                  </a>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">{project.title}</h3>

                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 text-muted-foreground border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
