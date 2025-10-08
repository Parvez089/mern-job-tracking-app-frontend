import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = ({user,handleLogout}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <div className='w-full shadow-md bg-white px-6 py-4'>
      <div className='flex flex-row justify-between '>
        <h1 className='font-bold text-xl'> ApplyFlow </h1>

        {/* Desktop Nav Links  */}
        <nav className='hidden md:flex gap-8 text-lg'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
        <div className='hidden md:block'>
          {user ? (
            <div className='flex gap-8'>
              <button
                onClick={() => navigate(`/dashboard`)}
                className='border-none outline-none bg-[#137FEC] rounded-lg px-3 py-1 text-white font-bold'>
                {user.name}
              </button>
              <button
                onClick={handleLogout}
                className='border-none outline-none bg-red-500 rounded-lg px-3 py-1 text-white font-bold'>
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className='border-none outline-none bg-[#137FEC] rounded-lg px-4 py-1 text-white font-bold'>
              Get Started
            </button>
          )}
        </div>

        {/* Hamburger Icon  */}

        <button className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className='flex flex-col gap-4 justify-between mt-4'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          {user ? (
            <div className='flex gap-16'>
              <Link>{user.name}</Link>
              <button
                onClick={handleLogout}
                className='border-none outline-none bg-red-500 rounded-lg px-3 py-1 text-white font-bold'>
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className='border-none outline-none bg-[#137FEC] rounded-lg px-4 py-1 text-white font-bold'>
              Get Started
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
