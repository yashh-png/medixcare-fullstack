import React from 'react';
import { assets } from '../assets/assets'; // Make sure doctorGroup.png is correctly imported in assets.js

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mx-4 my-8 shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row items-center px-6 md:px-16 py-10 gap-10">

        {/* Left Side: Text */}
        <div className="flex-1 text-white text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Book Appointment <br /> With Trusted Doctors
          </h1>

          <p className="text-sm md:text-base mb-6">
            Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
          </p>

          {/* User Images */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user1" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="user2" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="user3" className="w-10 h-10 rounded-full border-2 border-white" />
            </div>
            <p className="text-sm">Trusted by thousands</p>
          </div>

          {/* Button */}
          <button className="mt-6 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
            Book appointment →
          </button>
        </div>

        {/* Right Side: Doctor Image */}
        <div className="flex-1">
          <img
            src={assets.hero_doctor}
            alt="Doctors"
            className="w-full max-w-md mx-auto"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;
