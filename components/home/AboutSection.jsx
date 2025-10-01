"use client";

import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              We are Leading Calibration Service Provider in the UAE
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              Falcon Calibration LLC is a leading provider of calibration
              services in the GCC, serving industries ranging from manufacturing
              and oil & gas to healthcare and aerospace. We combine cutting-edge
              technology with a team of certified experts, ensuring that your
              instruments meet the highest accuracy standards.
            </p>

            <div className="pt-4">
              <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold px-8 py-3 rounded transition-all duration-300">
                Explore More
              </button>
            </div>
          </div>

          {/* Right Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Top Left - Digital Display as Image */}
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/calibration-services (1).jpg"
                alt="Digital Display"
                fill
                className="object-cover"
              />
            </div>

            {/* Top Right - Pressure Gauges as Image */}
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/calibration-services (2).jpg"
                alt="Pressure Gauges"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Full Width - Green Devices as Image */}
            <div className="col-span-2 relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/calibration-services (3).jpg"
                alt="Green Devices"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
