import React from 'react'
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'
import { SiTailwindcss, SiMysql } from 'react-icons/si'

function About() {
  return (
    <div className="mt-12 p-6 max-w-3xl mx-auto text-center bg-indigo-100 rounded-xl shadow-lg transition-all duration-500 hover:scale-[1.01]">

      {/* Optional logo or avatar */}
      <img
        src="/logo.png" 
        alt="Team Logo"
        className="w-20 h-20 mx-auto mb-4 rounded-full border-4 border-cyan-300"
      />

      <h1 className="text-4xl font-bold text-cyan-300 mb-4">About Us</h1>

      <p className="text-base md:text-lg mb-6 px-2 sm:px-0">
        We are a passionate team dedicated to building high-quality, user-friendly web applications.
        Our mission is to create software that not only works great — but feels great to use.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">What We Value</h2>
      <ul className="list-disc list-inside text-left mx-auto max-w-md text-gray-700 px-6">
        <li>Clean and maintainable code</li>
        <li>Fast and responsive interfaces</li>
        <li>Open communication and transparency</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">Our Stack</h2>
      <div className="flex justify-center gap-6 text-3xl text-gray-700 mb-6">
        <FaReact className="text-blue-500" title="React" />
        <FaNodeJs className="text-green-600" title="Node.js" />
        <FaDatabase className="text-purple-500" title="Express" />
        <SiMysql className="text-blue-700" title="MySQL" />
        <SiTailwindcss className="text-cyan-400" title="Tailwind CSS" />
      </div>

      <p className="mt-10">
        Ready to connect? Check out our{' '}
        <a href="/contact" className="text-yellow-300 font-bold hover:underline">
          Contact Page
        </a>.
      </p>

      <p className="text-sm text-gray-500 mt-6 italic">
        Built with love by Abubeker & Team 💚
      </p>
    </div>
  )
}

export default About
