import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-modern-darkbg py-6 border-t border-modern-text-subtle/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-modern-text-muted text-sm">
          © {currentYear} Modernize-se Automatizações Tecnológicas. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
