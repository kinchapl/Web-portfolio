import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "CrawTech",
    description:
      "Contributed to the development of a crawfish farming management platform by working on backend integration, IoT sensor connectivity, and AI workflow integration. Helped centralize farm data to improve monitoring, efficiency, sustainability, and operational decision-making.",
    image: "/projects/project1.png",
    tags: ["React", "n8n", "IoT", "Backend Integration"],
    link: "https://crawtech.onrender.com",
  },
  {
    title: "Willing Resort Website",
    description:
      "Led the development and design of a modern resort website focused on improving digital presence and accessibility for potential guests. Worked on project coordination, UI structure, and front-end implementation.",
    image: "/projects/project2.png",
    tags: ["WordPress", "UI/UX", "Frontend Development", "Project Leadership"],
    link: "https://willingbhutan.com",
  },
  {
    title: "EcoVision",
    description:
      "Developed the backend infrastructure for a smart waste management platform connected to an AI-powered trash bin system capable of detecting plastic bottles. Integrated IoT connectivity, backend APIs, and machine learning workflows for centralized monitoring and data management.",
    image: "/projects/project3.png",
    tags: ["Backend Development", "IoT", "AI Integration", "Figma"],
    link: "",
  },
  {
    title: "Dzongkha OCR",
    description:
      "Led the development of a Dzongkha OCR system focused on recognizing individual Dzongkha characters using deep learning techniques. This early academic project provided hands-on experience in OCR systems, machine learning workflows, and computer vision development.",
    image: "/projects/project4.png",
    tags: ["Python", "Deep Learning", "OCR", "Computer Vision"],
    link: "https://dzongkha-ocr-g8p3.onrender.com",
  },
  {
    title: "LamLha",
    description:
      "Developed a frontend web interface for a college hackathon project, focusing on building a responsive and interactive user experience using core web technologies. Collaborated with a team to transform an idea into a functional prototype under time constraints.",
    image: "/projects/project5.png",
    tags: ["HTML", "JavaScript", "CSS", "Frontend Development"],
    link: "https://lam-lha.vercel.app",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects built around
            <span className="font-serif italic font-normal text-white">
              {" "}
              AI, innovation & real-world impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of projects spanning artificial intelligence, IoT
            systems, backend engineering, web development, and data-driven
            applications — focused on solving practical problems through
            technology and innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
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
