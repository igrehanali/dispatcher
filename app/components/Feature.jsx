"use client";
import { useEffect } from "react";
import { FaGlobeAmericas, FaTruck, FaHeadset } from "react-icons/fa";
import Image from "next/image";
import about from "../public/images/about.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const FeaturesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center gap-6 justify-center md:justify-between p-6 md:p-20 bg-white">
      {/* Left Side: Features List */}
      <div
        className="w-full md:w-1/2 space-y-6"
        data-aos="fade-right" // AOS animation
      >
        <h2 className="text-[#51CFED] font-bold text-xl md:text-3xl">
          OUR FEATURES
        </h2>
        <h3 className="text-black text-2xl md:text-5xl font-semibold leading-tight">
          We Are Trusted Logistics <br /> Company Since 1990
        </h3>
        <div className="space-y-8">
          {/* Feature 1 */}
          <div className="flex items-start space-x-4" data-aos="fade-up">
            <FaGlobeAmericas className="text-red-600 text-5xl" />
            <div>
              <h4 className="font-bold text-black">Nationwide Service</h4>
              <p className="text-gray-600">
                Discover a world of new business opportunities with our
                nationwide network of local shipping partners.
              </p>
            </div>
          </div>
          {/* Feature 2 */}
          <div
            className="flex items-start space-x-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <FaTruck className="text-red-600 text-5xl" />
            <div>
              <h4 className="font-bold text-black">On Demand Loads</h4>
              <p className="text-gray-600">
                Whether you need single or multiple loads, we can provide in any
                location daily.
              </p>
            </div>
          </div>
          {/* Feature 3 */}
          <div
            className="flex items-start space-x-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaHeadset className="text-red-600 text-5xl" />
            <div>
              <h4 className="font-bold text-black">Team Support</h4>
              <p className="text-gray-600">
                Our agents stay in touch with you by call or message, from
                booking to delivery in case you need any help!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0" data-aos="fade-left">
        <Image
          src={about}
          alt="Logistics team working"
          className="w-full h-auto object-cover rounded-lg"
          width={1000}
          height={500}
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
