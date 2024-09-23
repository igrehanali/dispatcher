import React from "react";

const Footer = () => {
  return (
    <footer class="bg-[#0b0d21] text-white py-10 px-6 md:px-16">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 class="text-white text-xl font-semibold mb-4">Address</h4>
          <p class="text-gray-300 mb-4">
            Overlook Center, Princeton, NJ 08540 Quickhaul dispatchers
          </p>
          <p class="text-gray-300 flex items-center mb-2">
            <span class="hover:text-[#FE5244] mr-2">📞</span>
            <a
              href="tel:+12012527549"
              className="hover:text-[#FF3E41] font-medium text-lg"
              aria-label="Call (201) 252-7549"
            >
              (201) 252-7549
            </a>
          </p>
          <p class="text-gray-300 flex items-center">
            <span class="text-[#FE5244] mr-2">✉️</span>
            <a
              href="mailto:usadispatchers1@gmail.com"
              class="hover:text-[#FE5244]"
            >
              info@quickhauldispatcher.com
            </a>
          </p>
        </div>

        <div>
          <h4 class="text-white text-xl font-semibold mb-4">Quick Links</h4>
          <ul class="text-gray-300">
            <li class="mb-2">
              <a href="#" class="hover:text-[#FE5244]">
                Carrier Setup
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:text-[#FE5244]">
                About Us
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:text-[#FE5244]">
                Contact Us
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:text-[#FE5244]">
                Our Services
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-white text-xl font-semibold mb-4">Quick Connect</h4>
          <p class="text-gray-300 mb-4">
            Are you ready to get started & make more money? Contact Us
          </p>
          <div class="space-x-4">
            <a
              href="tel:(585) 207-8508"
              class="bg-[#FE5244] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition"
            >
              Call Now
            </a>
            <a
              href="mailto:usadispatchers1@gmail.com"
              class="bg-[#FE5244] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>

      <div class="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400">
        <p>
          Copyright © 2024 by USA Dispatchers Services, Co. All Right Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
