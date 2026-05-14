import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Palette,
} from "lucide-react";

import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiLinux,
  SiFigma,
  SiWordpress,
  SiOpenjdk,
} from "react-icons/si";

import { FaAws } from "react-icons/fa";

/* ---------------- DATA ---------------- */

const skillCategories = [
  {
    title: "Intelligent Systems",
    icon: Brain,
    skills: [
      { name: "Machine Learning", icon: Brain },
      { name: "Deep Learning", icon: Brain },
      { name: "Computer Vision", icon: Brain },
      { name: "NLP", icon: Brain },
    ],
  },
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Java", icon: SiOpenjdk },
    ],
  },
  {
    title: "Frontend Systems",
    icon: Layout,
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "HTML5", icon: SiHtml5 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "REST APIs", icon: Server },
      { name: "IoT Integration", icon: Server },
    ],
  },
  {
    title: "Data Systems",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Infrastructure & DevOps",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "Linux", icon: SiLinux },
      { name: "AWS", icon: FaAws },
    ],
  },
  {
    title: "Design Systems",
    icon: Palette,
    skills: [
      { name: "Figma", icon: SiFigma },
      { name: "WordPress", icon: SiWordpress },
    ],
  },
];

/* ---------------- ANIMATION ---------------- */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const card = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

/* ---------------- COMPONENT ---------------- */

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/10 blur-3xl rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-blue-500/10 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Technical Expertise
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Engineering systems powered by{" "}
            <span className="font-serif italic font-normal text-white">
              AI, scalable architecture & modern tools.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A structured overview of technologies used to design intelligent,
            scalable, production-ready systems.
          </p>
        </div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => {
            const CategoryIcon = category.icon;

            return (
              <motion.div
                key={idx}
                variants={card}
                className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300"
              >
                {/* Category Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <CategoryIcon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-3 text-secondary-foreground">
                  {category.title}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => {
                    const SkillIcon = skill.icon;

                    return (
                      <span
                        key={i}
                        className="group relative px-3 py-1 text-xs rounded-full bg-white/5 text-muted-foreground border border-white/10 flex items-center justify-center overflow-hidden"
                      >
                        {/* TEXT (visible by default, fades out on hover) */}
                        <span className="transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
                          {skill.name}
                        </span>

                        {/* ICON (hidden by default, replaces text on hover) */}
                        <span className="absolute inset-0 flex items-center justify-center opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                          <SkillIcon className="w-4 h-4 text-primary" />
                        </span>
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
