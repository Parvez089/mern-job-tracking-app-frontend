/** @format */

import { BarChart2, Bell, ChartNoAxesCombined, ClipboardCheck } from "lucide-react";
import React from "react";

const featuresData = [
  {
    icon: <ClipboardCheck className='mx-auto text-blue-500 w-10 h-10' />,
    title: "Job Tracking",
    description: "Easily add and manage all your job applications in one place",
  },
  {
    icon: <Bell className='mx-auto text-green-500 w-10 h-10' />,
    title: "Job Alerts",
    description: "Get notified about new job opportunities instantly",
  },
 
  {
    icon: <ChartNoAxesCombined className='mx-auto text-purple-500 w-10 h-10' />,
    title: "Analytics",
    description: "Track your applications and see progress over time",
  },
];

const Feature = () => {
  return (
    <div className='mt-16'>
      <div className='flex flex-col items-center'>
        <h1 className='font-bold md:text-3xl text-2xl'>Key Features</h1>
        <p>
          Our app offers a range of features to help you stay on top of your job
          search.
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {
            featuresData.map((feature,index)=>{
                return (
                  <div key={index} className='flex flex-col gap-4 p-6 md:shadow-xl shadow rounded-lg  bg-white'>
                    
                    {feature.icon}
                    <h2 className='text-xl font-bold'>{feature.title}</h2>
                    <p>{feature.description}</p>
                  </div>
                );
               
            })
        }
      </div>
    </div>
  );
};

export default Feature;
