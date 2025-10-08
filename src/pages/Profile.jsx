import React from "react";
import Navbar from "../components/UserDashboard/Navbar";
import Apply from "./Apply";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className='grid grid-cols-5 col-span-1 md:gap-80 '>
      <div>
        <Navbar />
      </div>
      <div className='col-span-4 '>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
