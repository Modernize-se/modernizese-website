
import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Inquiry Sent",
        description: "We've received your message and will respond shortly.",
      });
      
      // Reset form
      const form = e.currentTarget;
      form.reset();
    }, 1000);
  };
  
  return (
    <section id="contact" className="py-20 md:py-24 bg-gradient-to-b from-modern-darkbg to-modern-bg">
      <div className="section-container max-w-5xl">
        <h2 className="section-title">Connect: Let's Engineer Your Success</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Ready to Innovate? Let's Talk.</h3>
            <p className="text-modern-text-muted mb-6">
              Partner with Modernize-se to redefine your technological landscape. Reach out for a confidential consultation.
            </p>
            
            <div className="space-y-4 mb-8">
              <a href="mailto:contact@modernizese.com" className="flex items-center text-modern-text-muted hover:text-modern-accent transition-colors">
                <Mail className="w-5 h-5 mr-3 text-modern-accent" />
                <span>contact@modernizese.com</span>
              </a>
              
              <a href="#" className="flex items-center text-modern-text-muted hover:text-modern-accent transition-colors">
                <Linkedin className="w-5 h-5 mr-3 text-modern-accent" />
                <span>Modernize-se</span>
              </a>
            </div>
            
            <div className="border border-modern-text-subtle/30 rounded-lg p-6 bg-modern-darkbg/50 backdrop-blur-sm">
              <h4 className="text-lg font-semibold mb-2 text-modern-accent">We'll help you</h4>
              <ul className="space-y-3">
                {[
                  "Assess your current technological landscape",
                  "Identify opportunities for innovation",
                  "Create a roadmap for digital transformation",
                  "Implement solutions with measurable impact"
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
            <h3 className="text-xl font-bold mb-6">Send Inquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-modern-text-muted">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-modern-darkbg border border-modern-text-subtle/30 rounded-md px-4 py-2 text-modern-text focus:border-modern-accent focus:outline-none focus:ring-1 focus:ring-modern-accent/50"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1 text-modern-text-muted">
                  Company
                </label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full bg-modern-darkbg border border-modern-text-subtle/30 rounded-md px-4 py-2 text-modern-text focus:border-modern-accent focus:outline-none focus:ring-1 focus:ring-modern-accent/50"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-modern-text-muted">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-modern-darkbg border border-modern-text-subtle/30 rounded-md px-4 py-2 text-modern-text focus:border-modern-accent focus:outline-none focus:ring-1 focus:ring-modern-accent/50"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-modern-text-muted">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  className="w-full bg-modern-darkbg border border-modern-text-subtle/30 rounded-md px-4 py-2 text-modern-text focus:border-modern-accent focus:outline-none focus:ring-1 focus:ring-modern-accent/50"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full cta-button"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
