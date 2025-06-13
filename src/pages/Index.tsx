import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EdgeSection from "@/components/EdgeSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import FoundersSection from "@/components/FoundersSection";
import ImpactSection from "@/components/ImpactSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  const location = useLocation();

  // Handle hash-based navigation
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the # from the hash
      const section = document.getElementById(sectionId);
      if (section) {
        // Small delay to ensure the page is fully loaded
        setTimeout(() => {
          window.scrollTo({
            top: section.offsetTop - 80,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [location]);

  // Intersection Observer to animate elements on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe elements with the opacity-0 class
    document.querySelectorAll(".opacity-0").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-modern-text">
      <Navbar />
      <HeroSection />
      <EdgeSection />
      <CapabilitiesSection />
      <FoundersSection />
      <ImpactSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
