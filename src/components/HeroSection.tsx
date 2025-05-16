import React, { useEffect, useRef } from "react";

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticles = () => {
      if (!heroRef.current) return;

      // Clear existing particles
      const existingParticles = heroRef.current.querySelectorAll(".particle");
      existingParticles.forEach((particle) => particle.remove());

      // Create new particles
      const particleCount = window.innerWidth < 768 ? 15 : 30;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        const size = Math.random() * 6 + 2;

        particle.classList.add("particle");
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.opacity = `${Math.random() * 0.5}`;

        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;

        // Random movement
        const duration = Math.random() * 20 + 15;
        const delay = Math.random() * 10;
        particle.style.setProperty("--duration", `${duration}s`);
        particle.style.setProperty("--delay", `${delay}s`);

        // Random movement direction
        const xMove = (Math.random() - 0.5) * 200;
        const yMove = (Math.random() - 0.5) * 200;
        particle.style.setProperty("--x", `${xMove}px`);
        particle.style.setProperty("--y", `${yMove}px`);

        heroRef.current.appendChild(particle);
      }
    };

    createParticles();
    window.addEventListener("resize", createParticles);

    return () => {
      window.removeEventListener("resize", createParticles);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-modern-bg">
        {/* Radial gradient for subtle effect */}
        <div className="absolute inset-0 bg-gradient-radial from-modern-darkbg/0 via-modern-bg to-modern-darkbg"></div>
      </div>

      {/* Abstract animated 3D shape */}
      <div className="hidden lg:block absolute right-20 animate-float opacity-70">
        <div className="w-48 h-48 relative">
          <div className="absolute inset-0 border-2 border-modern-accent/30 rounded-lg transform rotate-45"></div>
          <div className="absolute inset-0 border-2 border-modern-secondary/20 rounded-full"></div>
          <div className="absolute inset-0 border border-modern-accent-muted/20 transform rotate-12 scale-75"></div>
        </div>
      </div>

      <div className="section-container z-10 text-center max-w-4xl">
        <h1 className="opacity-0 animate-fade-in-up [animation-delay:300ms] text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Modernize Your Business Through
          <span className="text-modern-accent"> Smart Technology</span>
        </h1>

        <p className="opacity-0 animate-fade-in-up [animation-delay:700ms] text-modern-text-muted max-w-2xl mx-auto text-lg mb-10">
          Custom-built solutions that simplify operations, integrate data, and
          fuel growth — all tailored to your business needs.
        </p>

        <div className="opacity-0 animate-fade-in-up [animation-delay:1000ms]">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="cta-button inline-block"
          >
            Start Your Transformation
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
