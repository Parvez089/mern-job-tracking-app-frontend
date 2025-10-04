import React from "react";

const CTA = () => {
  return  <div className='flex flex-col items-center mt-24  p-16 gap-2'>
      <h1 className='text-xl font-bold md:text-3xl '>
        <span className='block '>Ready To Take Control of Your Job</span>
        <span className='block text-center'>Search</span>
      </h1>
      <p className='mt-2 text-lg sm:text-lg md:text-xl'>
        <span className='block text-center'>
          Sing up today and start tracking your applications for free
        </span>
       
      </p>

      <button className='mt-4 border-none outline-none bg-[#137FEC] rounded-lg px-4 py-1 text-white font-bold'>
        Get Started
      </button>
    </div>;
};

export default CTA;
