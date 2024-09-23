"use client";
import { FaPhoneAlt } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const QuoteSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="Contact"
      className="flex flex-col lg:flex-row items-center justify-between px-4 py-10 lg:px-24 lg:py-16 bg-white"
    >
      {/* Text Section */}
      <div className="md:w-1/2 mb-8 lg:mb-0" data-aos="fade-right">
        <h4 className="text-[#51CFED] text-2xl font-semibold uppercase mb-2">
          Get a quote
        </h4>
        <h2 className="text-2xl lg:text-5xl font-bold text-black mb-10">
          Request A Free Quote!
        </h2>
        <p className="text-gray-600 mb-4">
          Ready to take your trucking business to the next level? Request a free
          quote today and see how our load providers network can help you
          streamline your operations and maximize your profits.
        </p>
        <p className="text-gray-600 mb-6">
          Don’t wait, contact today – start driving your success today.
        </p>
        <div className="flex items-center text-red-500">
          <FaPhoneAlt size={24} className="mr-3" />
          <a
            href="tel:+12012527549"
            className="text-[#FF3E41] font-bold text-lg"
            aria-label="Call (201) 252-7549"
          >
            (201) 252-7549
          </a>
        </div>
      </div>

      {/* Buttons Section */}
      <div
        className="flex flex-col items-center lg:ml-8 md:w-1/2"
        data-aos="fade-left"
      >
        <div className="w-full">
          {/* <button className="bg-red-500 text-white text-sm uppercase py-3 px-6 mb-4 w-full hover:bg-red-600 transition duration-300">
            Sign Up
          </button> */}
          <button className="bg-red-500 text-white text-sm uppercase py-3 px-6 w-full hover:bg-red-600 transition duration-300">
            Email Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
