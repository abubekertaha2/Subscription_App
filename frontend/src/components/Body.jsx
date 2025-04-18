import React from "react";

function Body() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center p-2">
      <h1 className="text-4xl md:text-6xl font-bold text-center mt-24">
        <span className="text-white">Well Come To Your </span>
        <span className="text-yellow-400">Virtual Office</span>
      </h1>

      <div className="flex space-x-64 mt-4">
        <button className="bg-yellow-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold">
          Instant Demo
        </button>
        <button className="text-white px-6 py-3 rounded-md font-semibold border-2">
          SetUp Your Company
        </button>
      </div>
    </div>
  );
}

export default Body;

