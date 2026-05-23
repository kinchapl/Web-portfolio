import { ArrowUpRight } from "lucide-react";

const portfolioItems = [
  {
    title: "EcoVision",
    description:
      "Designed a responsive smart waste management web platform focused on intuitive dashboards, monitoring workflows, and AI-assisted waste tracking.",
    image: "/portfolio/portfolio1.png",
    tags: ["Figma", "Dashboard Design", "UX Research", "Responsive Design"],
    link: "https://www.figma.com/design/6wUjn3UJRH97uL1MZNCK7m/Eco-Vision?node-id=0-1&t=67eqbrB0nbQ91Zqg-1",
  },
  {
    title: "Personal Finance Tracker",
    description:
      "Designed a modern personal finance web application focused on budgeting, expense tracking, and clean financial data visualization.",
    image: "/portfolio/portfolio2.png",
    tags: ["Figma", "Web App Design", "UI Design", "User Flow"],
    link: "https://www.figma.com/design/jKdeRxpboD75LB3kYW7rrh/group1_tracker?node-id=0-1&t=MWbVPEbfchUDPfNL-1",
  },
  {
    title: "CrawTech",
    description:
      "Designed a responsive aquaculture management platform with dashboard interfaces, IoT monitoring workflows, and operational tracking features.",
    image: "/portfolio/portfolio3.png",
    tags: ["Figma", "Dashboard UI", "System Design", "Responsive Layout"],
    link: "https://www.figma.com/design/KKbQyB1Lb7GbIpsbH0tz6d/CrawFish?node-id=0-1&t=Iy2w50qIW7wjOAt2-1",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary/5 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Portfolio
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Designing modern web experiences with{" "}
            <span className="font-serif italic font-normal text-white">
              clarity, usability & purpose.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Selected UI/UX and web design projects focused on usability,
            responsive experiences, and modern interface design using Figma.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 hover:border-white/10 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />

                {/* Hover Link */}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
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
                  <h3 className="text-lg font-semibold">{item.title}</h3>

                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag, i) => (
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
