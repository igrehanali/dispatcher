"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import service1 from "../public/images/service1.png";
import service2 from "../public/images/service2.png";
import service3 from "../public/images/service3.png";

const list = [
  {
    name: "Customer Service",
    text: "Our team is always ready to help regarding any issue you face with loads. We make sure everything goes smoothly.",
    img: service1,
  },
  {
    name: "Verified Loads",
    text: "We get loads from verified & trusted brokers for you, so you get paid on time. Don't worry about loads anymore.",
    img: service2,
  },
  {
    name: "Dispatching Service",
    text: "No matter how many trucks you have, we can supply as many loads as you want. Contact us today to learn more.",
    img: service3,
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center my-20">
      <p className="text-[#51CFED]">Truck Dispatching</p>
      <h3 className="text-4xl my-6 font-semibold">Explore Our Services</h3>
      <div className="flex flex-wrap justify-center items-center gap-10">
        {list.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up" // AOS animation
            className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md w-96 h-96 p-6 transition-transform transform hover:scale-105"
          >
            <Image
              width={544}
              height={544}
              src={item.img}
              alt={item.name}
              className="w-80 h-72 mb-4 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300 ease-in-out" // Hover effect on image
            />
            <h4 className="text-2xl font-bold">{item.name}</h4>
            <p className="text-gray-600 text-center">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
