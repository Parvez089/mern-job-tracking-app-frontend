import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return <div className="flex flex-row  md:justify-between justify-between  shadow p-6 bg-white">
     <p>©️ 2025 ApplyFlow. ALl rights reserved.</p>
     <div className="flex md:flex-row flex-col gap-4">
        
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/'>Privacy Policy</Link>
          <Link to='/'>Terms of Service</Link>
     </div>
  </div>;
};

export default Footer;
