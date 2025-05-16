import React, { useState } from "react";
import { Brain, Cloud, FileCode, Users, Star } from "lucide-react";

const CapabilitiesSection: React.FC = () => {
  const [activeService, setActiveService] = useState("ai");

  const services = [
    {
      id: "ai",
      icon: <Brain className="w-10 h-10 text-modern-accent" />,
      title: "AI & Machine Learning",
      description:
        "Harness the power of artificial intelligence to automate processes, gain predictive insights, and create smarter systems.",
      capabilities: [
        "Custom AI Model Development",
        "Machine Learning Integration",
        "NLP & Computer Vision Solutions",
      ],
    },
    {
      id: "cloud",
      icon: <Cloud className="w-10 h-10 text-modern-accent" />,
      title: "Cloud Architecture",
      description:
        "Build scalable, secure, and cost-effective cloud infrastructure tailored to your business needs.",
      capabilities: [
        "Cloud Migration Strategy",
        "Multi-Cloud Management",
        "Cloud-Native Application Development",
      ],
    },
    {
      id: "software",
      icon: <FileCode className="w-10 h-10 text-modern-accent" />,
      title: "Custom Software Development",
      description:
        "Create bespoke software solutions that perfectly align with your business processes and goals.",
      capabilities: [
        "Enterprise Application Development",
        "Legacy System Modernization",
        "Mobile & Web Solutions",
      ],
    },
    {
      id: "digital",
      icon: <Star className="w-10 h-10 text-modern-accent" />,
      title: "Digital Transformation",
      description:
        "Reimagine your business processes and customer experiences through strategic digital initiatives.",
      capabilities: [
        "Digital Strategy Consulting",
        "Process Automation",
        "Innovation Roadmapping",
      ],
    },
    {
      id: "team",
      icon: <Users className="w-10 h-10 text-modern-accent" />,
      title: "Team Augmentation",
      description:
        "Enhance your technical capabilities with our expert consultants who integrate seamlessly with your team.",
      capabilities: [
        "Specialized Tech Talent",
        "Project-Based Consulting",
        "Knowledge Transfer & Training",
      ],
    },
  ];

  return (
    <section id="capabilities" className="py-12 md:py-24">
      <div className="section-container">
        <h2 className="section-title">
          Core Capabilities: Our Arsenal of Expertise
        </h2>
        <p className="text-lg mb-12 max-w-3xl">
          Services tailored for peak performance. We offer comprehensive
          solutions across multiple domains to address your most complex
          technological challenges.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 border 
                hover:shadow-[0_0_12px_rgba(0,255,255,0.3)] hover:scale-105
                ${index === 4 ? "col-span-2 mx-auto w-[calc(50%-0.5rem)]" : ""}
                ${
                  activeService === service.id
                    ? "bg-modern-darkbg border-modern-accent/30 shadow-[0_0_12px_rgba(0,255,255,0.3)] scale-105"
                    : "border-transparent hover:bg-modern-darkbg/50"
                }`}
            >
              <div className="mb-2">{service.icon}</div>
              <h3
                className={`text-sm font-semibold ${
                  activeService === service.id
                    ? "text-modern-accent"
                    : "text-modern-text-muted"
                }`}
              >
                {service.title}
              </h3>
            </button>
          ))}
        </div>

        <div className="card p-8 min-h-[250px]">
          {services.map(
            (service) =>
              activeService === service.id && (
                <div key={service.id} className="animate-fade-in-up">
                  <div className="md:flex items-start">
                    <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                      <h3 className="text-2xl font-bold mb-4 text-modern-accent">
                        {service.title}
                      </h3>
                      <p className="text-modern-text-muted mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-3">
                        {service.capabilities.map((capability) => (
                          <li key={capability} className="flex items-center">
                            <div className="w-2 h-2 bg-modern-accent rounded-full mr-3"></div>
                            <span>{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:w-1/3 bg-modern-darkbg/50 rounded-lg p-6 border border-modern-text-subtle/10">
                      <div className="flex justify-center items-center mb-4">
                        {service.icon}
                      </div>
                      <h4 className="text-center text-modern-text font-medium mb-2">
                        Get Started With
                      </h4>
                      <h3 className="text-center text-modern-accent font-bold text-xl mb-4">
                        {service.title}
                      </h3>
                      <div className="text-center">
                        <button
                          onClick={() =>
                            document
                              .getElementById("contact")
                              ?.scrollIntoView({ behavior: "smooth" })
                          }
                          className="secondary-button text-sm"
                        >
                          Request Consultation
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
