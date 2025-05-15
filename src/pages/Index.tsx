
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EdgeSection from '@/components/EdgeSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import FoundersSection from '@/components/FoundersSection';
import ImpactSection from '@/components/ImpactSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

const Index: React.FC = () => {
  // Intersection Observer to animate elements on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Observe elements with the opacity-0 class
    document.querySelectorAll('.opacity-0').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="min-h-screen text-modern-text relative">
      {/* Background geometric effect */}
      <div className="fixed inset-0 w-full h-full z-0">
        <HeroGeometric 
          badge="Modernize-se"
          title1=""
          title2=""
        />
      </div>
      
      {/* Main content with higher z-index */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <EdgeSection />
        <CapabilitiesSection />
        <FoundersSection />
        <ImpactSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
