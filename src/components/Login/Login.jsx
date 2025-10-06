import React from "react";
import { useState } from "react";
import axios from "axios";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const API_BASE_URL = import.meta.env.VITE_API_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE_URL}/api/auth/login`, {
        email,
        password,
      });
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      onLogin(user);
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
    }
  };

  return <form onSubmit={handleSubmit}>
    <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
    <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
  </form>;
};

export default Login;
