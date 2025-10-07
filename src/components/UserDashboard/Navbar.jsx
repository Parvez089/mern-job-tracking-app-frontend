import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
  return( 
  <div className="mt-5 mb-5">
  
    <nav className="flex flex-col gap-4">
      <Link to="/dashboard">Home</Link>
        <Link to="/dashboard/apply">Apply</Link>
        <Link to="/dashboard/status">Status</Link>
        <Link to="/dashboard/jobs">Jobs</Link>
        <Link to="/dashboard/update">Update</Link>
    </nav>
  </div>
  );
};

export default Navbar;
