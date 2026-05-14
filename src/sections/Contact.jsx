import { Button } from "@/components/Button";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    label: "Email",
    value: "kinchap176@gmail.com",
    href: "mailto:kinchap176@gmail.com",
  },
  {
    label: "Phone",
    value: "+975 77216679",
    href: "tel:+97577216679",
  },
  {
    label: "Location",
    value: "Kabesa, Thimphu",
    href: "https://maps.app.goo.gl/uztnw5ThQDjhjqVo9",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }

    setIsLoading(false);
  };

  return (
    <section id="contact" className="py-32 bg-background relative">
      {/* subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/5 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let’s create{" "}
            <span className="font-serif italic font-normal text-white">
              intelligent solutions
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200 leading-relaxed">
            Open to AI, data science, software engineering, and collaborative
            opportunities.
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 bg-surface/40 rounded-xl outline-none border border-white/5 focus:border-white/10 transition"
            />

            <input
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 bg-surface/40 rounded-xl outline-none border border-white/5 focus:border-white/10 transition"
            />

            <textarea
              rows={5}
              placeholder="Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 bg-surface/40 rounded-xl outline-none border border-white/5 focus:border-white/10 transition resize-none"
            />

            <Button className="w-full" size="lg" disabled={isLoading}>
              {isLoading ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </Button>

            {submitStatus.type && (
              <div
                className={`text-sm flex items-center gap-2 mt-4 ${
                  submitStatus.type === "success"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {submitStatus.type === "success" ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <AlertCircle className="w-4 h-4" />
                )}
                {submitStatus.message}
              </div>
            )}
          </form>

          {/* INFO */}
          <div className="space-y-10">
            {/* contact items */}
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex justify-between items-center py-4 border-b border-white/5 hover:text-foreground transition"
                >
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="text-sm">{item.value}</span>
                </a>
              ))}
            </div>

            {/* availability */}
            <div className="pt-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Available for opportunities
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Open for AI, data science, and full-stack development roles,
                freelance projects, and collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
