
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ImpactSection: React.FC = () => {
  const impacts = [
    {
      statistic: "30%",
      title: "Reduced OpEx for Global Logistics Firm",
      description: "Implemented AI-driven route optimization and warehouse automation, resulting in significant operational cost savings."
    },
    {
      statistic: "99.99%",
      title: "Uptime Achieved in Cloud Migration",
      description: "Navigated a complex cloud migration for a financial services client with zero business disruption."
    },
    {
      statistic: "15%",
      title: "Market Share Growth",
      description: "Pioneered a bespoke AI solution for a retail client, revolutionizing their customer personalization capabilities."
    }
  ];

  return (
    <section id="impact" className="py-20 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Impact Delivered: Transforming Businesses</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <div 
              key={index}
              className="card p-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-4">
                <span className="text-4xl md:text-5xl font-bold text-modern-accent">{impact.statistic}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{impact.title}</h3>
              <p className="text-modern-text-muted mb-4">{impact.description}</p>
              
              <a href="#contact" className="inline-flex items-center text-modern-accent hover:text-modern-accent-muted transition-colors">
                <span className="mr-1">Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-modern-text-muted mb-6">Ready to achieve similar results for your organization?</p>
          <a 
            href="#contact" 
            className="cta-button"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start Your Transformation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
