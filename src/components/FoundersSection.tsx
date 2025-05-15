
import React from 'react';
import { Linkedin } from 'lucide-react';

const FoundersSection: React.FC = () => {
  const founders = [
    {
      name: "Mauro L. S. Moura",
      title: "Co-Founder & Lead Technologist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
      quote: "Technology should be the catalyst for business evolution, not just a support system.",
      bio: "With over 15 years in enterprise architecture and AI solutions, Mauro has led digital transformations for Fortune 500 companies. His expertise spans machine learning, cloud infrastructure, and emerging technologies.",
      linkedin: "#"
    },
    {
      name: "Ana Carolina",
      title: "Co-Founder & Chief Strategist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
      quote: "Strategic vision combined with technical excellence creates transformative business outcomes.",
      bio: "Ana brings 12+ years of experience in business strategy and technology integration. Her background in enterprise software and digital innovation has helped numerous organizations achieve sustainable growth through technology.",
      linkedin: "#"
    }
  ];

  return (
    <section id="founders" className="py-20 md:py-28 bg-modern-darkbg/70">
      <div className="section-container">
        <h2 className="section-title">The Founders: Visionaries at the Helm</h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {founders.map((founder, index) => (
            <div 
              key={founder.name} 
              className="card p-6 md:p-8 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-lg border-2 border-modern-accent/30">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                  <p className="text-modern-accent font-medium mb-4">{founder.title}</p>
                  
                  <blockquote className="border-l-2 border-modern-secondary pl-4 mb-4 italic text-modern-text-muted">
                    "{founder.quote}"
                  </blockquote>
                  
                  <p className="mb-4 text-sm text-modern-text-muted">
                    {founder.bio}
                  </p>
                  
                  <a 
                    href={founder.linkedin}
                    className="inline-flex items-center text-modern-accent hover:text-modern-accent-muted transition-colors"
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
