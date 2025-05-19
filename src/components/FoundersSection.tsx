import React from "react";
import { Linkedin, Building, FileCheck, Users } from "lucide-react";

const FoundersSection: React.FC = () => {
  const founders = [
    {
      name: "Mauro Moura",
      title: "Co-Founder & Technical Lead",
      image: "/mauro.png",
      quote:
        "Business leaders should spend their resources on what they do best, and let computers do the rest.",
      bio: `With over ${new Date().getFullYear() - 2017} years in enterprise architecture, web development and financial markets, Mauro specializes in building tech that speaks your business language — not just code.`,
      linkedIn: "https://www.linkedin.com/in/maurolsmoura/",
    },
    {
      name: "Ana Carolina",
      title: "Co-Founder & Chief Strategist",
      image: "/carol.png",
      quote:
        "Strategic vision combined with technical excellence creates transformative business outcomes.",
      bio: `Ana brings over ${new Date().getFullYear() - 2015} years of experience in healthcare solutions and growth strategy. She ensures every solution is grounded in business value, not buzzwords.`,
      linkedIn: "https://www.linkedin.com/in/anacarolinafarias/",
    },
  ];

  const experience = [
    {
      icon: <Building className="w-12 h-12 text-modern-accent" />,
      title: "Business Consultancy",
      description:
        "We understand operations, workflows, and organizational challenges.",
    },
    {
      icon: <FileCheck className="w-12 h-12 text-modern-accent" />,
      title: "Finance & Healthcare",
      description:
        "Experience with regulated industries and complex compliance requirements.",
    },
    {
      icon: <Users className="w-12 h-12 text-modern-accent" />,
      title: "Collaborative Approach",
      description:
        "Every project is founder-led and deeply collaborative with your team.",
    },
  ];

  return (
    <section id="founders" className="py-12 md:py-28 bg-modern-darkbg/70">
      <div className="section-container">
        <h2 className="section-title">We've been where you are</h2>

        <p className="text-lg mb-12 max-w-3xl">
          With a background in business consultancy, finance, and healthcare, we
          understand more than just code — we understand operations, people, and
          results. Every project is founder-led and deeply collaborative.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {experience.map((item, index) => (
            <div
              key={item.title}
              className="card p-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
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

        <h3 className="text-2xl font-bold mb-8 text-center">
          Meet our founders
        </h3>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className="card p-6 md:p-8 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full border-2 border-modern-accent/30">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                  <p className="text-modern-accent font-medium mb-4">
                    {founder.title}
                  </p>

                  <blockquote className="border-l-2 border-modern-secondary pl-4 mb-4 italic text-modern-text-muted">
                    "{founder.quote}"
                  </blockquote>

                  <p className="mb-4 text-sm text-modern-text-muted">
                    {founder.bio}
                  </p>

                  <a
                    href={founder.linkedIn}
                    className="inline-flex items-center text-modern-accent hover:text-modern-accent-muted transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    <span className="text-sm">View LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connection line between founders - visible on desktop */}
        <div className="hidden md:block relative h-4 my-4">
          <div className="absolute top-1/2 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-modern-secondary/0 via-modern-secondary/50 to-modern-secondary/0"></div>
          <div className="absolute top-1/2 left-1/2 w-4 h-4 -ml-2 -mt-2 bg-modern-darkbg border-2 border-modern-secondary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
