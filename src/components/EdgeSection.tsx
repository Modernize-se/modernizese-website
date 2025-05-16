import React from "react";
import { Check, Brain, Layers, FileChartColumn } from "lucide-react";

const EdgeSection: React.FC = () => {
  const differentiators = [
    {
      icon: (
        <Brain className="w-12 h-12 text-modern-accent animate-pulse-glow" />
      ),
      title: "Deep Tech Acumen",
      description:
        "Our team consists of industry veterans with specialized knowledge in cutting-edge technologies and methodologies.",
    },
    {
      icon: (
        <Layers className="w-12 h-12 text-modern-accent animate-pulse-glow" />
      ),
      title: "Strategic Co-Creation",
      description:
        "We don't just consult - we collaborate closely to build solutions that perfectly align with your business objectives.",
    },
    {
      icon: (
        <FileChartColumn className="w-12 h-12 text-modern-accent animate-pulse-glow" />
      ),
      title: "Future-Proof Solutions",
      description:
        "Our solutions are built with scalability and adaptability in mind, ensuring long-term value for your investment.",
    },
  ];

  const principles = [
    "Proactive Innovation",
    "Founder-Led Expertise",
    "Measurable Impact",
  ];

  return (
    <section id="edge" className="py-12 md:py-24 bg-modern-darkbg">
      <div className="section-container">
        <h2 className="section-title">Our Edge: Modernize-se Difference</h2>

        <p className="text-lg mb-12 max-w-3xl">
          At Modernize-se, we don't just advise; we build, integrate, and
          elevate. Our methodology is rooted in
          {principles.map((principle, index) => (
            <span
              key={principle}
              className="relative inline-flex items-center mx-1"
            >
              <span className="text-modern-accent font-medium">
                {principle}
              </span>
              {index < principles.length - 1 ? ", " : "."}
            </span>
          ))}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <div
              key={item.title}
              className="card p-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-modern-text">
                  {item.title}
                </h3>
                <p className="text-modern-text-muted">{item.description}</p>

                <ul className="mt-4 space-y-2 text-left">
                  {Array(3)
                    .fill(0)
                    .map((_, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="w-4 h-4 text-modern-accent mr-2" />
                        <span className="text-sm text-modern-text-muted">
                          {
                            [
                              "Proven methodology",
                              "Industry expertise",
                              "Tailored solutions",
                            ][i]
                          }
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EdgeSection;
