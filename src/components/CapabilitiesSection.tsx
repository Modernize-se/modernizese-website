import React, { useState } from "react";
import { LayoutGrid, Database, Code, BrainCircuit } from "lucide-react";

const CapabilitiesSection: React.FC = () => {
  const [activeService, setActiveService] = useState("automation");

  const services = [
    {
      id: "automation",
      icon: <LayoutGrid className="w-10 h-10 text-modern-accent" />,
      title: "Process Automation",
      description:
        "Save time, reduce errors, and free your team from repetitive tasks with smart automated workflows.",
      capabilities: [
        "Workflow Automation",
        "Document Processing",
        "Task Management",
      ],
    },
    {
      id: "data",
      icon: <Database className="w-10 h-10 text-modern-accent" />,
      title: "Data Integration & Cleanup",
      description:
        "Organize your business insights in one place with consolidated, clean data that drives decision-making.",
      capabilities: [
        "Data Consolidation",
        "Data Cleansing",
        "Dashboard Creation",
      ],
    },
    {
      id: "software",
      icon: <Code className="w-10 h-10 text-modern-accent" />,
      title: "Custom Software",
      description:
        "Solutions built around your reality, not a generic platform that forces you to change how you work.",
      capabilities: [
        "Bespoke Applications",
        "System Modernization",
        "Process-Oriented Design",
      ],
    },
    {
      id: "ai",
      icon: <BrainCircuit className="w-10 h-10 text-modern-accent" />,
      title: "AI Applications",
      description:
        "Practical, no-hype artificial intelligence that makes a real difference in your business outcomes.",
      capabilities: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Intelligent Automation",
      ],
    },
  ];

  return (
    <section id="capabilities" className="py-12 md:py-24">
      <div className="section-container">
        <h2 className="section-title">
          From Task Automation to Full System Transformation
        </h2>
        <p className="text-lg mb-12 max-w-3xl">
          We build practical solutions that solve real business problems, from
          simple automations to complete digital transformations.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 border 
                hover:shadow-[0_0_12px_rgba(0,255,255,0.3)] hover:scale-105
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
