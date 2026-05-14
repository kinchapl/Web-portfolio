const experiences = [
  {
    period: "2025 — Present",
    role: "AI & Data Science Graduate",
    company: "Independent AI & Data Projects",
    description:
      "Focused on building AI-driven applications, machine learning systems, and scalable data solutions. Actively working on real-world projects involving automation, intelligent analytics, and applied AI systems across different domains.",
    technologies: ["Python", "TensorFlow", "PyTorch", "Machine Learning"],
    current: true,
  },
  {
    period: "AUG 2025 — JUNE 2026",
    role: "President",
    company: "Rovers Club",
    description:
      "Progressed from Treasurer to President of the Rovers Club. Led club activities, coordinated events, managed teams, and guided student initiatives focused on leadership, teamwork, and community engagement.",
    technologies: [
      "Leadership",
      "Team Coordination",
      "Event Management",
      "Strategic Planning",
    ],
    current: false,
  },
  {
    period: "JUN 2025 — NOV 2025",
    role: "Backend & IoT Systems Developer",
    company: "CrawTech & Smart Systems Projects",
    description:
      "Worked as a backend and integration developer for IoT-based systems, including a crawfish farming management platform. Contributed to backend services, sensor connectivity, and AI workflow integration using tools like n8n.",
    technologies: ["React", "Node.js", "IoT", "n8n"],
    current: false,
  },
  {
    period: "AUG 2024 — JUNE 2025",
    role: "Treasurer",
    company: "Rovers Club",
    description:
      "Served as Treasurer of the Rovers Club, managing finances, coordinating events, and supporting student initiatives focused on leadership, teamwork, and community engagement.",
    technologies: ["Leadership", "Event Management", "Financial Management"],
    current: false,
  },
  {
    period: "2024 — 2025",
    role: "Backend & Frontend Developer",
    company: "EcoVision Smart Waste Management System",
    description:
      "Developed both frontend and backend systems for a smart waste management platform. Integrated IoT sensor data and connected hardware workflows developed by team members into the web platform for real-time monitoring and system interaction.",
    technologies: ["React", "Node.js", "Backend APIs", "IoT Integration"],
    current: false,
  },
  {
    period: "2023 — 2025",
    role: "Project Lead",
    company: "Willing Resort",
    description:
      "Led the development and deployment of a modern resort website using WordPress. Managed project planning, design coordination, content structure, and overall system implementation to deliver a responsive digital platform for the resort.",
    technologies: [
      "WordPress",
      "Project Management",
      "Responsive Design",
      "Web Development",
    ],
    current: false,
  },
  {
    period: "FEB 2024 — MAY 2024",
    role: "Machine Learning & OCR Developer",
    company: "Dzongkha OCR Project",
    description:
      "Led development of a Dzongkha character recognition system using deep learning techniques. Built a CNN-based OCR model for handwritten character recognition.",
    technologies: ["Python", "Keras", "CNN", "Computer Vision"],
    current: false,
  },
  {
    period: "AUG 2022 — NOV 2022",
    role: "Frontend Developer (Hackathon Project)",
    company: "LamLha",
    description:
      "Worked as the frontend developer for a college hackathon project, building responsive user interfaces and implementing core UI functionality using basic web technologies.",
    technologies: ["HTML", "JavaScript", "CSS", "UI Development"],
    current: false,
  },
];

import { motion, useScroll, useSpring } from "framer-motion";

export const Experience = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 40,
  });

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Soft background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-primary/5 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header (Apple-style: centered, quiet) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience shaped by{" "}
            <span className="font-serif italic font-normal text-white">
              AI, data & innovation.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            My journey across artificial intelligence, data science, software
            engineering, and scalable systems development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2">
            <motion.div
              style={{ scaleY }}
              className="origin-top w-full h-full bg-primary/40"
            />
          </div>

          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative grid md:grid-cols-2 gap-10"
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-2.5 h-2.5 rounded-full bg-primary -translate-x-1/2 ring-4 ring-background" />

                {/* Content alignment */}
                <div
                  className={`relative ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors duration-300">
                    <span className="text-xs tracking-wider text-primary">
                      {exp.period}
                    </span>

                    <h3 className="text-lg font-medium mt-2">{exp.role}</h3>

                    <p className="text-sm text-muted-foreground">
                      {exp.company}
                    </p>

                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 mt-5 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-white/5 text-muted-foreground border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
