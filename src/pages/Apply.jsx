import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Apply = () => {
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    status: "pending",
    appliedDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const API_BASE_URL = import.meta.env.VITE_API_URL;

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(`${API_BASE_URL}/api/jobs`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });
      toast.success(res.data.message || "Job applied successfully!");

      setFormData({
        company: "",
        position: "",
        status: "pending",
        appliedDate: "",
      });
    } catch (error) {
      console.error("Job apply error: ", error);
      toast.error(
        error.response?.data?.error || "Something went wrong while applying."
      );
    }
  };
  return (
    <div className='flex justify-center items-center min-h-screen '>
      <div className='w-full max-w-md bg-white p-6 rounded-lg shadow-md'>
        <h1 className='text-2xl font-bold mb-4'>Apply Job</h1>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <input
            type='text'
            name='company'
            placeholder='company name'
            value={formData.company}
            onChange={handleChange}
            className='w-full p-2 border rounded outline-none'
            required
          />

          <input
            type='text'
            name='position'
            placeholder='Position'
            value={formData.position}
            onChange={handleChange}
            className='w-full p-2 border rounded outline-none'
            required
          />

          <select
            name='status'
            value={formData.status}
            onChange={handleChange}
            className='w-full p-2 border rounded outline-none'>
            <option value='pending'>Pending</option>
            <option value='applied'>Applied</option>
            <option value='interview'>Interview</option>
          </select>

          <input
            type='date'
            name='appliedDate'
            value={formData.appliedDate}
            onChange={handleChange}
            className='w-full p-2 border rounded outline-none'
            required
          />

          <button
            type='submit'
            className='w-full bg-blue-600 text-white p -2 rounded'>
            Apply
          </button>
        </form>
        <ToastContainer
          position='top-center'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='colored'
        />
      </div>
    </div>
  );
};

export default Apply;
