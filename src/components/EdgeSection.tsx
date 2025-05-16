import React from "react";
import { User, BriefcaseBusiness, Clock } from "lucide-react";

const EdgeSection: React.FC = () => {
  const attributes = [
    {
      icon: <User className="w-12 h-12 text-modern-accent" />,
      title: "Business Decision-Makers",
      description:
        "Our clients are leaders focused on growth, not technical details.",
    },
    {
      icon: <BriefcaseBusiness className="w-12 h-12 text-modern-accent" />,
      title: "Operational Challenges",
      description:
        "Systems that no longer serve your growing needs or are causing bottlenecks.",
    },
    {
      icon: <Clock className="w-12 h-12 text-modern-accent" />,
      title: "Efficiency-Focused",
      description:
        "Leaders who value their team's time and want to eliminate unnecessary manual tasks.",
    },
  ];

  return (
    <section id="edge" className="py-12 md:py-24 bg-modern-darkbg">
      <div className="section-container">
        <h2 className="section-title">
          Built for Decision-Makers, Not Developers
        </h2>

        <p className="text-lg mb-12 max-w-3xl">
          Our clients are business leaders — not engineers. You know your
          systems are holding you back, but you don't have time to explore every
          tool or buzzword. That's where we come in. We translate business
          problems into powerful, easy-to-manage technology.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {attributes.map((item, index) => (
            <div
              key={item.title}
              className="card p-6 opacity-0 animate-fade-in-up hover:animate-pulse-glow transition-all duration-300"
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-modern-text">
                  {item.title}
                </h3>
                <p className="text-modern-text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EdgeSection;
