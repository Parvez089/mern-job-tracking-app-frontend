/** @format */

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ onRegisterSuccess }) => {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(""); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const API_BASE_URL = import.meta.env.VITE_API_URL;
    try{
      const response = await axios.post(`${API_BASE_URL}/api/auth/register`,{
        name,
        email,
        password
      });

      if(response.status === 201 && response.data.user){
        onRegisterSuccess(response.data.user)
        localStorage.setItem("user",JSON.stringify(response.data.user));
         navigate("/");
      }
    }catch(err){
      console.error(err)
    }

   
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-50'>
      <div className='bg-white p-8 rounded-md shadow-md w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Register</h2>

        {error && <p className='text-red-500 mb-4'>{error}</p>}

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input
            type='text'
            placeholder='Full Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            required
          />
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
            required
          />

          <button
            type='submit'
            className='bg-[#137FEC] text-white px-4 py-2 rounded font-bold hover:bg-blue-600 transition'>
            Register
          </button>
        </form>

        <p className='mt-4 text-center text-sm'>
          Already have an account?{" "}
          <span
            className='text-blue-500 cursor-pointer'
            onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
