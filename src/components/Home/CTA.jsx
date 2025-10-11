import React from "react";

const CTA = () => {
  return (
    <div className="flex flex-col items-center mt-24 p-16 gap-4 bg-white shadow rounded-lg">
  
      <h1 className="text-xl md:text-3xl font-bold text-center">
        <span className="block">Ready To Take Control of Your Job</span>
        <span className="block">Search</span>
      </h1>

    
      <p className="mt-2 text-lg md:text-xl text-center">
        Sign up today and start tracking your applications for free
      </p>

      <button className="mt-4 bg-[#137FEC] text-white font-bold rounded-lg px-6 py-2 hover:bg-[#0f69d9] transition">
        Get Started
      </button>
    </div>
  );
};

export default CTA;
