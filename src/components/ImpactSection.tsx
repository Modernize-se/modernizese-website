import React from "react";
import { ArrowRight } from "lucide-react";

const ImpactSection: React.FC = () => {
  const impacts = [
    {
      statistic: "30%",
      title: "OpEx Reduction",
      description:
        "Reduced operational expenses for a global logistics firm through process automation and optimization.",
    },
    {
      statistic: "10x",
      title: "Data Accuracy Improvement",
      description:
        "Improved data accuracy for identifying assets, transactions and investment holdings, with 99.9% automated processes.",
    },
    {
      statistic: "15%",
      title: "Market Share Increase",
      description:
        "Helped a client grow their market share through AI-based personalization technology.",
    },
  ];

  return (
    <section id="impact" className="py-12 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Results That Speak for Themselves</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="card p-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-4">
                <span className="text-4xl md:text-5xl font-bold text-modern-accent">
                  {impact.statistic}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3">{impact.title}</h3>
              <p className="text-modern-text-muted mb-4">
                {impact.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-modern-text-muted mb-6">
            Want to see similar results in your organization?
          </p>
          <a
            href="#contact"
            className="cta-button"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
