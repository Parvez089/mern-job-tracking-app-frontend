/** @format */

import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState(""); // store email input
  const [password, setPassword] = useState(""); // store password input
  const [error, setError] = useState(""); // store error messages
  const navigate = useNavigate(); // navigate programmatically

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    try{
      const API_BASE_URL = import.meta.env.VITE_API_URL;
      const response = await axios.post(`${API_BASE_URL}/api/auth/login`,{
        email,
        password
      });

      if(response.status === 200 && response.data.user && response.data.token){
        localStorage.setItem("token", response.data.token)

        localStorage.setItem("user", JSON.stringify(response.data.user));

        onLoginSuccess(response.data.user);

        navigate("/")
      } else{
        
        setError("Invalid email or password");
      }
    }catch(err){
      console.error(err);
      setError(err.response?.data?.error || "Login failed. Try again.");
    }
    
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-50'>
      <div className='bg-white p-8 rounded-md shadow-md w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>

        {error && <p className='text-red-500 mb-4'>{error}</p>}

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            required
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            autoComplete='current-password'
            required
          />
          <p>
            have't account?{" "}
            <span
              className='cursor-pointer text-blue-500'
              onClick={() => navigate("/register")}>
              Sign up
            </span>
          </p>

          <button
            type='submit'
            className='bg-[#137FEC] text-white px-4 py-2 rounded font-bold hover:bg-blue-600 transition'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
