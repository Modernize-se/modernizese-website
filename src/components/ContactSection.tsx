import React from "react";
import { Mail, Linkedin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection: React.FC = () => {
  const { toast } = useToast();

  return (
    <section
      id="contact"
      className="py-12 md:py-24 bg-gradient-to-b from-modern-darkbg to-modern-bg"
    >
      <div className="section-container max-w-5xl">
        <h2 className="section-title">Connect: Let's Engineer Your Success</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Ready to Innovate? Let's Talk.
            </h3>
            <p className="text-modern-text-muted mb-6">
              Partner with Modernize-se to redefine your technological
              landscape. Reach out for a confidential consultation.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:contact@modernizese.com"
                className="flex items-center text-modern-text-muted hover:text-modern-accent transition-colors"
              >
                <Mail className="w-5 h-5 mr-3 text-modern-accent" />
                <span>contact@modernizese.com</span>
              </a>

              <a
                href="#"
                className="flex items-center text-modern-text-muted hover:text-modern-accent transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-3 text-modern-accent" />
                <span>Modernize-se</span>
              </a>
            </div>

            <div className="border border-modern-text-subtle/30 rounded-lg p-6 bg-modern-darkbg/50 backdrop-blur-sm">
              <h4 className="text-lg font-semibold mb-2 text-modern-accent">
                We'll help you
              </h4>
              <ul className="space-y-3">
                {[
                  "Assess your current technological landscape",
                  "Identify opportunities for innovation",
                  "Create a roadmap for digital transformation",
                  "Implement solutions with measurable impact",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-modern-accent rounded-full mr-3"></div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>

            <div className="space-y-6">
              <p className="text-modern-text-muted">
                Please send your inquiries directly to our email address:
              </p>

              <a
                href="mailto:contact@modernizese.com"
                className="flex items-center justify-center p-4 bg-modern-darkbg/50 border border-modern-text-subtle/30 rounded-md hover:border-modern-accent/50 transition-colors group"
              >
                <Mail className="w-6 h-6 mr-3 text-modern-accent" />
                <span className="text-lg font-medium group-hover:text-modern-accent transition-colors">
                  contact@modernizese.com
                </span>
              </a>

              <div className="flex items-center text-modern-text-muted mt-4">
                <Clock className="w-5 h-5 mr-3 text-modern-accent" />
                <p>
                  We usually respond in less than 15 minutes during business
                  hours.
                </p>
              </div>

              <div className="bg-modern-accent/10 p-4 rounded-md border border-modern-accent/20 mt-6">
                <p className="text-modern-text text-sm">
                  Our team of experts is ready to discuss your project
                  requirements and provide tailored solutions for your business
                  needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
