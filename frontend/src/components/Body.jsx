import React from "react";
import { useNavigate } from "react-router-dom";

function Body() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-between items-center p-2">
      <h1 className="text-4xl md:text-4xl font-bold text-center mt-24">
        <span className="text-white">Well Come To Your </span>
        <span className="text-yellow-400">Virtual Office</span>
      </h1>

      <div className="flex space-x-8 md:space-x-16 lg:space-x-64 mt-10">
        <button 
          onClick={() => navigate('/site')}
          className="bg-yellow-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold transition duration-300 transform hover:scale-105 shadow-md hover:shadow-xl cursor-pointer">
          Instant Demo
        </button>

        <button
          onClick={() => navigate('/setup')}
          className="text-white px-6 py-3 rounded-md font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition duration-300 transform hover:scale-105 shadow-md hover:shadow-xl cursor-pointer"
        >
          SetUp Your Company
        </button>
      </div>
    </div>
  );
}

export default Body;


