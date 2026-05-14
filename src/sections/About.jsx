import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "AI & Machine Learning",
    description:
      "Designing and developing intelligent systems using machine learning, deep learning, and computer vision for real-world applications.",
  },
  {
    icon: Rocket,
    title: "IoT & Scalable Systems",
    description:
      "Building integrated IoT solutions and scalable backend systems for real-time data collection, processing, and automation.",
  },
  {
    icon: Users,
    title: "Project Leadership",
    description:
      "Leading and contributing to cross-functional projects, from system design and UI planning to backend integration and deployment.",
  },
  {
    icon: Lightbulb,
    title: "Applied Innovation",
    description:
      "Exploring and applying emerging technologies in AI, data science, and automation to solve practical, real-world problems.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Engineering intelligent systems,
              <span className="font-serif italic font-normal text-white">
                {" "}
                driven by data & innovation.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm an AI and Data Science graduate passionate about building
                intelligent applications, scalable systems, and data-driven
                digital experiences. My journey began with software development
                and evolved into a strong focus on artificial intelligence,
                machine learning, and big data engineering.
              </p>
              <p>
                I specialize in AI development, data analytics, modern web
                technologies, and backend systems — combining technical problem
                solving with clean design principles and efficient
                architectures. From machine learning projects to full-stack
                applications, I enjoy creating solutions that are both practical
                and impactful.
              </p>
              <p>
                Beyond development, I continuously explore emerging technologies
                in AI, DevOps, cloud infrastructure, and intelligent automation.
                I'm driven by curiosity, continuous learning, and building
                systems that solve real-world problems.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to develop intelligent, scalable, and meaningful
                technology solutions that combine innovation, performance, and
                real-world impact."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
