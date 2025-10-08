/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token);
        if (!token) {
          console.error("No token found. Please login first.");
          setLoading(false);
          return;
        }
        const res = await axios.get(`${API_BASE_URL}/api/jobs`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setJobs(res.data.jobs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const handleUpdate = (id) => {
    navigate(`/dashboard/jobs/update/${id}`);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    await axios.delete(`${API_BASE_URL}/api/job/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setJobs(jobs.filter((job) => job._id !== id));
  };

  if (loading) return <p>Loading jobs...</p>;
  return (
    <div>
      <h1>Apply Now</h1>

      {jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        <div className='overflow-x-auto mt-4'>
          <table className='min-w-full border-collapse border border-gray-200'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='border border-gray-300 px-4 py-2 text-left'>
                  Position
                </th>
                <th className='border border-gray-300 px-4 py-2 text-left'>
                  Company
                </th>
                <th className='border border-gray-300 px-4 py-2 text-left'>
                  Applied Date
                </th>
                <th className='border border-gray-300 px-4 py-2 text-left'>
                  Update
                </th>
                <th className='border border-gray-300 px-4 py-2 text-left'>
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job._id} className='hover:bg-gray-50'>
                  <td className='border border-gray-300 px-4 py-2'>
                    {job.position}
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    {job.company}
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    {job.appliedDate}
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    <button
                      onClick={() => handleUpdate(job._id)}
                      className='bg-green-600 text-white px-3 py-1 rounded hover:bg-green-900'>
                      Update
                    </button>
                  </td>
                  <td className='border border-gray-300 px-4 py-2'>
                    <button
                      onClick={() => handleDelete(job._id)}
                      className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Jobs;
