import { Bell, ChartNoAxesCombined, ClipboardCheck } from "lucide-react";
import React from "react";


const featuresData = [
  {
    num: 1,
    title: "Add Application",
    description: " Input job details such as company,position, and application date.",
  },
  {
    num: 2,
    title: "Track Progress",
    description: "Get notified about new job opportunities instantly",
  },

  {
    num: 3,
    title: "Get Hired",
    description: "Track your applications and see progress over time",
  },
];
const Work = () => {
  return (
    <div className='mt-24 bg-white p-8'>
      <div className='flex flex-col items-center'>
        <h1 className='font-bold md:text-3xl text-2xl'>How It Works</h1>
        <p>
          A simple process to get you started on tracking you success.
        </p>
      </div>

      <div className='mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
        {featuresData.map((feature, index) => {
          return (
            <div key={index} className='flex flex-col gap-4 p-6  items-center'>
              <h1 className='w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold'>
                {feature.num}
              </h1>
              <h2 className='text-xl font-bold'>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
