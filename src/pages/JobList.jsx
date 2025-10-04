import React, { useEffect, useState } from "react";
import axios from "axios";
const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    const API_BASE_URL = import.meta.env.VITE_API_URL;
    const fetchJobs = async()=>{
      try{
        const token = localStorage.getItem("token")
        console.log(token)
        if (!token) {
          console.error("No token found. Please login first.");
          setLoading(false);
          return;
        }
        const res = await axios.get(`${API_BASE_URL}/api/jobs`,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setJobs(res.data.jobs);
        setLoading(false);
      } catch(error){
        console.error("Error fetching jobs:", error);
        setLoading(false);
      };
      
    
    }
      fetchJobs();
  },[])

  if(loading) return <p>Loading jobs...</p>
  return <div>
    <h1>Apply Now</h1>

    {
      jobs.length === 0 ?(
        <p>No jobs found.</p>
      ) :(
        <ul>
          {jobs.map((job)=>(
            <li key={job._id} className="p-4 border rounded-md shadow-sm bg-white">
              <h2>{job.position}</h2>
              <p>{job.company}</p>
              <p>{job.appliedDate}</p>
            </li>
          ))}
        </ul>
      )
    }
  </div>;
};

export default JobList;
