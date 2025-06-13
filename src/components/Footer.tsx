import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-modern-darkbg py-6 border-t border-modern-text-subtle/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-modern-text-muted text-sm">
          © {currentYear} Modernize-se. All rights Reserved.
        </div>
        <div className="flex space-x-6">
          <Link
            to="/terms"
            className="text-modern-text-muted hover:text-modern-text text-sm transition-colors"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/privacy"
            className="text-modern-text-muted hover:text-modern-text text-sm transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
