import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Site() {
  const navigate =useNavigate();
  const [plan, setPlan] = useState("monthly");

  const getPrice = (basePrice) => {
    if (plan === "monthly") return `$${basePrice}/mo`;
    if (plan === "yearly") return `$${basePrice * 10}/yr`;
    return "Custom Plan";
  };

  const cards = [
    {
      title: "Standard",
      description: "Great for individuals and small teams getting started.",
      basePrice: 9,
    },
    {
      title: "Premium",
      description: "For large organizations with complex needs.",
      basePrice: 29,
    },
    {
      title: "Enterprise",
      description: "Includes everything plus premium support and more.",
      basePrice: null,
    },
  ];

  return (
    <div className="px-4">
      
      <h1 className="text-xl md:text-6xl font-bold text-center mt-16">
        <span className="text-white mr-4">Flexible</span>
        <span className="text-yellow-400 ml-4">Plans</span>
      </h1>
      <p className="text-2xl text-white text-center mt-3 mb-6">
        Choose the plan that works best for you & your team!
      </p>

      <div className="flex justify-center mb-12">
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto pb-20">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/20 
                       text-white transform transition duration-300 hover:-translate-y-6 hover:shadow-2xl"
          >
            <div className="flex flex-col items-center justify-start">
              <h2 className="text-xl text-center font-semibold mb-3">
                {card.title}
              </h2>
              <p className="text-gray-200 text-center">{card.description}</p>
              <p className="text-gray-200 text-center p-2 text-3xl">
                {card.basePrice !== null
                  ? getPrice(card.basePrice)
                  : "Custom Plan"}
              </p>
              <hr className="border-t-2 border-white my-3 w-full opacity-50" />
              <ol className="list-disc list-inside text-left text-gray-200 space-y-1">
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
                <li>King</li>
                <li>Malik</li>
                <li>Tuf</li>
                <li>Ana</li>
                <li>Kiga</li>
              </ol>
              <button
                onClick={() => navigate('/plan')}
                className="w-60 px-4 py-2 bg-blue-500 text-white rounded-3xl mt-9
                           hover:shadow-lg hover:shadow-amber-300 transition duration-300"
              >
                Choose Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Site;


