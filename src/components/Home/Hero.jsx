import React from "react";

const Home = () => {
  return (
    <div className='flex flex-col items-center mt-24 shadow p-16 bg-white'>
      <h1 className='text-4xl font-bold sm:text-4xl md:text-5xl text-center'>
        <span className='block'>Track Your Job</span>
        <span className='block'>Applications With Easy</span>
      </h1>

      <p className='mt-2 text-lg sm:text-lg md:text-xl text-center'>
        <span className='block'>
          Streamline your job search process with our intuitive tracking
          tool. Stay
        </span>
        <span className='block'>
          organized, manage applications, and never miss an opportunity
        </span>
      </p>

      <button className='mt-4 border-none outline-none bg-[#137FEC] rounded-lg px-4 py-1 text-white font-bold'>
        Get Started for free
      </button>
    </div>
  );
};

export default Home;
