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
    period: "JUN 2025 — NOV 2025",
    role: "Backend & IoT Systems Developer",
    company: "CrawTech & Smart Systems Projects",
    description:
      "Worked as a backend and integration developer for IoT-based systems, including a crawfish farming management platform. Contributed to backend services, sensor connectivity, and AI workflow integration using tools like n8n.",
    technologies: ["React", "Node.js", "IoT", "n8n"],
    current: false,
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
    period: "2023 — 2025",
    role: "Project Lead & Full-Stack Developer",
    company: "Willing Resort & EcoVision",
    description:
      "Led and contributed to multiple projects including a resort website and a smart waste management system. Worked on frontend structure, backend integration, IoT data handling, and AI model connectivity for real-time systems.",
    technologies: ["WordPress", "React", "Backend APIs", "IoT Integration"],
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

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience shaped by{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              AI, data & innovation.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            My journey across artificial intelligence, data science, software
            engineering, and scalable systems development — focused on building
            impactful technology solutions and continuously expanding technical
            expertise.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
