"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Truck from "../public/images/truck.png";
import { FaGlobe, FaTruck } from "react-icons/fa"; // Importing icons
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

const Dispatching = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section
      id="Services"
      className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 space-y-8 lg:space-y-0 p-6 lg:p-16 bg-white"
    >
      {/* Image Section */}
      <div className="lg:w-1/2 w-full" data-aos="fade-right">
        <Image
          src={Truck} // Ensure the correct path to your truck image
          alt="Truck Dispatching"
          width={800}
          height={650}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Text and Info Section */}
      <div
        className="lg:w-1/2 w-full flex flex-col space-y-4"
        data-aos="fade-left"
      >
        <p className="text-sm uppercase tracking-widest text-[#51CFED]">
          WE PROVIDE LOADS
        </p>
        <h2 className="text-3xl font-bold text-gray-800">
          Quick Dispatching Services
        </h2>
        <p className="text-gray-600">
          Looking for reliable logistics solutions for your trucking needs in
          America? Look no further than our platform. We connect truckers with
          loads that match their needs, so you can focus on what you do best –
          driving. With nationwide coverage and a commitment to on-time
          delivery, you can trust us to keep your business moving forward.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* First feature */}
          <div className="flex items-center space-x-3" data-aos="zoom-in">
            <div>
              <FaGlobe className="text-5xl text-[#FF3E41]" />
              <h3 className="text-xl font-semibold text-gray-800 my-5">
                Wide Network
              </h3>
              <p className="text-gray-500">
                We can provide loads for any states you&aposre looking for.
              </p>
            </div>
          </div>

          {/* Second feature */}
          <div className="flex items-center space-x-3" data-aos="zoom-in">
            <div>
              <FaTruck className="text-5xl text-[#FF3E41]" />
              <h3 className="text-xl font-semibold text-gray-800 my-8">
                On Time
              </h3>
              <p className="text-gray-500">
                Our team is always ready to help you find the right loads.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Us Button */}
        <button
          className="bg-[#FF3E41] w-44 text-white px-8 py-3 mt-4 font-medium rounded-md shadow hover:bg-[#e3343d] transition"
          data-aos="fade-up"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Dispatching;
