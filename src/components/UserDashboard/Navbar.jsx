/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/dashboard" },
    { name: "Apply", path: "/dashboard/apply" },
    { name: "Status", path: "/dashboard/status" },
    { name: "Jobs", path: "/dashboard/jobs" },
    { name: "Update", path: "/dashboard/jobs" },
  ];

  return (
    <div className='mt-5 mb-5 '>
      <div>
        <button
          className='md:hidden fixed top-4  bg-white p-2 rounded shadow '
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-[48rem] w-64 bg-white shadow-md p-6 flex flex-col transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:flex`}>
        <nav className='mt-12 md:mt-2 h-full'>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className='flex items-center gap-3 p-2 rounded hover:bg-blue-100 transition'
              onClick={() => setIsOpen(false)}>
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
