import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (isHomePage) {
        // Determine active section only on home page
        const sections = [
          "hero",
          "edge",
          "capabilities",
          "founders",
          "impact",
          "contact",
        ];
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section && window.scrollY >= section.offsetTop - 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Close the mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (isMenuOpen) {
        const target = e.target as HTMLElement;
        if (
          !target.closest(".mobile-menu") &&
          !target.closest(".menu-button")
        ) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const handleNavigation = (sectionId: string) => {
    setIsMenuOpen(false);

    if (isHomePage) {
      // Scroll to section on home page
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: "smooth",
        });
      }
    } else {
      // Navigate to home page with hash
      navigate(`/#${sectionId}`);
    }
  };

  const navLinks = [
    { title: "Our Edge", id: "edge" },
    { title: "Services", id: "capabilities" },
    { title: "Founders", id: "founders" },
    { title: "Impact", id: "impact" },
    { title: "Connect", id: "contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          isScrolled ? "glassmorphism py-3" : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 relative overflow-hidden">
              {/* Abstract logo shape */}
              <div className="absolute inset-0 w-6 h-6 bg-modern-accent rounded-sm transform rotate-45 group-hover:scale-110 transition-transform duration-300"></div>
              <div className="absolute inset-0 w-4 h-4 bg-modern-secondary rounded-full translate-x-2 translate-y-3 group-hover:translate-y-2 transition-transform duration-300"></div>
            </div>
            <span className="text-xl font-montserrat font-bold">
              Modernize-se
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigation(link.id)}
                className={cn(
                  "text-sm font-semibold relative",
                  isHomePage && activeSection === link.id
                    ? "text-modern-accent"
                    : "text-modern-text-muted hover:text-modern-text"
                )}
              >
                <span className="relative">
                  {link.title}
                  {isHomePage && activeSection === link.id && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-modern-accent"></span>
                  )}
                </span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => handleNavigation("contact")}
            className="hidden md:block px-5 py-2 rounded-full bg-modern-accent text-modern-bg font-medium text-sm transition-all hover:shadow-[0_0_10px_rgba(0,255,255,0.5)]"
          >
            Initiate Contact
          </button>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden menu-button"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={cn(
                  "w-full h-0.5 bg-modern-text transition-all duration-300",
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                )}
              ></span>
              <span
                className={cn(
                  "w-full h-0.5 bg-modern-text transition-all duration-300",
                  isMenuOpen ? "opacity-0" : ""
                )}
              ></span>
              <span
                className={cn(
                  "w-full h-0.5 bg-modern-text transition-all duration-300",
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                )}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-3/4 max-w-sm z-50 bg-modern-darkbg border-l border-modern-text-subtle/20 mobile-menu">
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-modern-text-muted hover:text-modern-text"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavigation(link.id)}
                    className={cn(
                      "text-lg font-semibold relative py-2 border-b border-modern-text-subtle/20",
                      isHomePage && activeSection === link.id
                        ? "text-modern-accent"
                        : "text-modern-text-muted hover:text-modern-text"
                    )}
                  >
                    {link.title}
                  </button>
                ))}
              </nav>

              <div className="mt-auto">
                <button
                  onClick={() => handleNavigation("contact")}
                  className="w-full py-3 rounded-full bg-modern-accent text-modern-bg font-medium transition-all hover:shadow-[0_0_10px_rgba(0,255,255,0.5)]"
                >
                  Initiate Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
