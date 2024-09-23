"use client";
import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import { FaPhoneAlt, FaUsers, FaStar, FaTruck } from "react-icons/fa"; // Icons used

const TruckingInfo = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section
      id="About"
      className="flex flex-col lg:flex-row justify-between items-center lg:items-start p-8 lg:p-16 space-y-12 lg:space-y-0 bg-white w-full gap-20"
    >
      {/* Left Section - Main Text */}
      <div className="lg:w-1/2 w-full space-y-4" data-aos="fade-right">
        <p className="text-[#51CFED] uppercase tracking-widest text-sm">
          About
        </p>
        <h2 className="text-4xl font-bold text-gray-800">
          #1 Place To Manage <br /> All Your Truck Loads
        </h2>
        <p className="text-gray-600">
          Looking for the best truck dispatch solutions for your trucking
          business? We offer the best prices on the market, while connecting you
          with new loads as soon as possible & meeting your unique truck loads
          requirements.
        </p>
        <p className="text-gray-600">
          With customizable routes, and nationwide coverage, we’ll help you
          streamline your operations and reach new heights of success.
        </p>

        {/* Contact Info */}
        <div className="p-4 rounded-lg flex items-center space-x-4 mt-4 w-full md:w-auto">
          <FaPhoneAlt className="text-red-600 text-3xl" />
          <div>
            <p className="font-bold">Call for any query!</p>
            <a
              href="tel:+12012527549"
              className="text-[#FF3E41] font-semibold text-lg"
              aria-label="Call (201) 252-7549"
            >
              (201) 252-7549
            </a>
          </div>
        </div>
      </div>

      {/* Right Section - Stats/Features */}
      <div className="lg:w-1/2 w-full grid  sm:grid-cols-2 lg:grid-cols-2 justify-center gap-6">
        {/* First Feature */}
        <div
          className="bg-[#FF3E41] text-white p-6 rounded-lg shadow-lg text-center"
          data-aos="zoom-in"
        >
          <FaUsers className="text-4xl mb-4 mx-auto" />
          <h3 className="text-2xl font-bold">Happy Truckers</h3>
        </div>

        {/* Second Feature */}
        <div
          className="bg-[#00BFFF] text-white p-6 rounded-lg shadow-lg text-center"
          data-aos="zoom-in"
        >
          <FaTruck className="text-4xl mb-4 mx-auto" />
          <h3 className="text-2xl font-bold">100%</h3>
          <p className="text-lg">Professional Team</p>
        </div>

        {/* Third Feature */}
        <div
          className="bg-[#2ECC71] text-white p-6 rounded-lg shadow-lg text-center"
          data-aos="zoom-in"
        >
          <FaStar className="text-4xl mb-4 mx-auto" />
          <h3 className="text-2xl font-bold">10/10</h3>
          <p className="text-lg">Quality Service</p>
        </div>
      </div>
    </section>
  );
};

export default TruckingInfo;
