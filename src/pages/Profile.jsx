import React from "react";
import Navbar from "../components/UserDashboard/Navbar";
import Apply from "./Apply";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
  
  <div>
   
    <h1 className="text-center mt-5 text-3xl font-bold">Dashboard</h1>
    <div className="grid grid-cols-5 grid-rows-5 gap-4">
      <div>
<Navbar/>
      </div>
    <div className="col-span-4 col-start-2 bg-green-300">
      <Outlet/>
    </div>
    </div>
    
    
    </div>
  );
};

export default Profile;
