/** @format */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Update = () => {
  const { id } = useParams(); // ✅ get job id from URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    company: "",
    position: "",
    status: "",
    appliedDate: "",
    notes: "",
  });

  const API_BASE_URL = import.meta.env.VITE_API_URL;

  // ✅ Fetch existing job data when component loads
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API_BASE_URL}/api/job/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFormData({
          company: res.data.job.company,
          position: res.data.job.position,
          status: res.data.job.status,
          appliedDate: res.data.job.appliedDate?.split("T")[0] || "",
          notes: res.data.job.notes || "",
        });
      } catch (error) {
        console.error("❌ Error fetching job:", error);
        toast.error("Failed to load job details");
      }
    };
    fetchJob();
  }, [id, API_BASE_URL]);

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Submit updated job data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(`${API_BASE_URL}/api/job/${id}`, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        toast.success("✅ Job updated successfully!");
        navigate("/dashboard/jobs"); // redirect to jobs page
      }
    } catch (error) {
      console.error("❌ Update failed:", error);
      toast.error(error.response?.data?.message || "Failed to update job");
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Update Job</h2>

        <form onSubmit={handleSubmit} className='space-y-4'>
          {/* Company */}
          <div>
            <label className='block font-medium mb-1'>Company</label>
            <input
              type='text'
              name='company'
              value={formData.company}
              onChange={handleChange}
              className='w-full p-2 border rounded-md'
              required
            />
          </div>

          {/* Position */}
          <div>
            <label className='block font-medium mb-1'>Position</label>
            <input
              type='text'
              name='position'
              value={formData.position}
              onChange={handleChange}
              className='w-full p-2 border rounded-md'
              required
            />
          </div>

          {/* Status */}
          <div>
            <label className='block font-medium mb-1'>Status</label>
            <select
              name='status'
              value={formData.status}
              onChange={handleChange}
              className='w-full p-2 border rounded-md'>
              <option value=''>Select status</option>
              <option value='Applied'>Applied</option>
              <option value='Interview'>Interview</option>
              <option value='Offer'>Offer</option>
              <option value='Rejected'>Rejected</option>
            </select>
          </div>

          {/* Applied Date */}
          <div>
            <label className='block font-medium mb-1'>Applied Date</label>
            <input
              type='date'
              name='appliedDate'
              value={formData.appliedDate}
              onChange={handleChange}
              className='w-full p-2 border rounded-md'
            />
          </div>

          {/* Notes */}
          <div>
            <label className='block font-medium mb-1'>Notes</label>
            <textarea
              name='notes'
              value={formData.notes}
              onChange={handleChange}
              className='w-full p-2 border rounded-md'
              rows='3'
              placeholder='Additional details...'></textarea>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition duration-200'>
            Update Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
