/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";

const DashboardHome = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found. Please login first.");
          setLoading(false);
          return;
        }

        const res = await axios.get(`${API_BASE_URL}/api/jobs`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setJobs(res.data.jobs || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <p>Loading...</p>;

  // Calculate counts
  const totalApplications = jobs.length;
  const totalInterview = jobs.filter(
    (job) => job.status === "Interview"
  ).length;
  const totalRejected = jobs.filter((job) => job.status === "Rejected").length;

  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold mb-6'>Dashboard</h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {/* Total Applications */}
        <div className='bg-blue-100 p-6 rounded-lg shadow text-center'>
          <h2 className='text-xl font-semibold mb-2'>Total Applications</h2>
          <p className='text-3xl font-bold'>{totalApplications}</p>
        </div>

        {/* Total Interview */}
        <div className='bg-yellow-100 p-6 rounded-lg shadow text-center'>
          <h2 className='text-xl font-semibold mb-2'>Total Interviews</h2>
          <p className='text-3xl font-bold'>{totalInterview}</p>
        </div>

        {/* Total Rejected */}
        <div className='bg-red-100 p-6 rounded-lg shadow text-center'>
          <h2 className='text-xl font-semibold mb-2'>Total Rejected</h2>
          <p className='text-3xl font-bold'>{totalRejected}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
