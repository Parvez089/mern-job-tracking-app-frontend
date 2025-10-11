import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-white shadow p-6">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center gap-4">
        {/* Left side */}
        <p className="text-gray-600 text-center md:text-left">
          ©️ 2025 ApplyFlow. All rights reserved.
        </p>

        {/* Right side - links */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-blue-600">
          <Link to="/about" className="hover:font-semibold">
            About
          </Link>
          <Link to="/contact" className="hover:font-semibold">
            Contact
          </Link>
          <Link to="/" className="hover:font-semibold">
            Privacy Policy
          </Link>
          <Link to="/" className="hover:font-semibold">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
