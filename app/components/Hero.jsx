"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import HeroImage from "../public/images/hero.png";
import Link from "next/link";

const Hero = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section id="#Home" className="relative w-full h-screen">
      {/* Next.js Image component for the background image */}
      <Image
        src={HeroImage}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        priority={true}
        className="z-0"
      />

      {/* Text overlay aligned to the left */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-start justify-start flex-col px-6 sm:px-12 lg:px-24 py-16 pt-56">
        <p
          className="text-white text-xl font-medium uppercase"
          data-aos="fade-right" // AOS animation
        >
          Truck Dispatcher Services
        </p>
        <h1
          className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-black p-2"
          data-aos="fade-right" // AOS animation
        >
          We Book <span className="text-[#FF3E41]">Loads</span> For Truckers
          <br />
          in <span className="text-[#FF3E41]">America</span>
        </h1>
        <p
          className="text-gray-300 text-base sm:text-lg mt-4 max-w-2xl bg-black p-2"
          data-aos="fade-right" // AOS animation
        >
          Looking for a hassle-free way to keep your trucking operations moving?
          Our dispatch service is designed to take the burden off your shoulders
          and keep your wheels turning. Contact us today to get started!
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4" data-aos="fade-up">
          {" "}
          {/* AOS for buttons */}
          {/* <button className="bg-[#FF3E41] text-white font-medium px-12 py-3">
            Sign Up
          </button> */}
          <Link href="#Services">
            <button className="bg-[#00BFFF] text-white font-medium px-12 py-3">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
