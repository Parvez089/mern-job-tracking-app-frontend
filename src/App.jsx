/** @format */

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";
import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  return (
    <div className='p-6 max-w-screen-xl mx-auto '>
      <Navbar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route
          path='/login'
          element={<Login onLoginSuccess={handleLoginSuccess} />}
        />
        <Route
          path='/register'
          element={<Register onRegisterSuccess={handleLoginSuccess} />}
        />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
