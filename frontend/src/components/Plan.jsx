import React, { useState } from "react";

function Plan() {
  const [plan, setPlan] = useState("monthly");

  return (
    <div className="mt-16 w-full">
      {/* Heading */}
      <h1 className="relative inline-block text-2xl md:text-4xl font-bold m-2">
        <span className="text-white mr-4">Your Order</span>
        <span className="text-yellow-400 ml-4">Summary</span>
        <span className="absolute left-0 bottom-0 w-full border-b-4 border-amber-500"></span>
      </h1>

      {/* Card Container */}
      <div className="bg-white/15 backdrop-blur-md p-6 border border-white/20 text-white transform transition duration-300 hover:shadow-2xl">
        {/* Flex row for label + toggle */}
        <div className="w-[500px]">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          {/* Label */}
          <p className="text-lg font-semibold text-white">Select Plan</p>

          {/* Toggle */}
          <div className="bg-[#414266] rounded-full p-1 flex shadow-inner border border-gray-700">
            <button
              onClick={() => setPlan("monthly")}
              className={`px-8 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                plan === "monthly"
                  ? "bg-yellow-400 text-black shadow-md"
                  : "text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setPlan("yearly")}
              className={`px-8 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                plan === "yearly"
                  ? "bg-yellow-400 text-black shadow-md"
                  : "text-white"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Standard Plan */}
          <div className="bg-white/15 backdrop-blur-md flex items-center gap-6 mb-6 p-6 rounded-2xl">
            {/* Circle Check */}
            <div className="w-6 h-6 rounded-full border-2 border-yellow-400 flex items-center justify-center">
              <span className="text-yellow-400 font-bold">✓</span>
            </div>

            {/* Plan Details (Title and Description Stack) */}
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold text-white">Standard</h2>
              <p className="text-gray-200">Great for individuals <br></br>and small teams <br></br>getting started.</p>
            </div>

            {/* Payment Plan */}
            <div className="ml-auto">
              <p className="text-lg text-yellow-400">{plan === "monthly" ? "$1000" : "$10000"}</p>
              <p className="text-xs text-yellow-400">per month</p>
            </div>
          </div>


        {/* Premium Plan */}
        <div className="flex items-center gap-6 mb-6 bg-white/15 backdrop-blur-md p-6 rounded-2xl">
          {/* Circle Check */}
          <div className="w-6 h-6 rounded-full border-2 border-yellow-400 flex items-center justify-center">
            <span className="text-yellow-400 font-bold">✓</span>
          </div>

          {/* Plan Details */}
          <div>
            <h2 className="text-xl font-semibold text-white">Premium</h2>
            <p className="text-gray-200">For large organizations <br></br>with complex needs.</p>
          </div>
          <div className="ml-auto">
              <p className="text-lg text-yellow-400">{plan === "monthly" ? "$1800" : "$18000"}</p>
              <p className="text-xs text-yellow-400">per month</p>
            </div>
        </div>
        </div>

      </div>
    </div>
  );
}

export default Plan;

