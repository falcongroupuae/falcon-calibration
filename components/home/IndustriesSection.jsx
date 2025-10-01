"use client";

import React, { useState } from "react";
import { Factory, Cpu, Car, Heart, Plane } from "lucide-react";
import { Award, ShieldCheck, CheckCircle2 } from "lucide-react";

const IndustriesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(2); // Center card active by default

  const industries = [
    {
      title: "Aerospace & Defense / Aviation",
      description:
        "Precision calibration for aviation and defense equipment ensuring safety and compliance.",
      image: "/images/aerospace.jpg",
      icon: Plane,
    },
    {
      title: "Oil & Gas / Petrochemical",
      description:
        "Specialized calibration services for petrochemical and oil & gas industries.",
      image: "/images/oil-gas.jpg",
      icon: Factory,
    },
    {
      title: "Electronics & Electrical Systems",
      description:
        "We ensure precise calibration and testing of electrical components to maintain safety and performance.",
      image: "/images/electronics.jpg",
      icon: Cpu,
    },
    {
      title: "Automotive & Transportation",
      description:
        "Comprehensive calibration solutions for automotive and transportation sectors.",
      image: "/images/automotive.jpg",
      icon: Car,
    },
    {
      title: "Medical, Biomedical & Laboratory",
      description:
        "High-precision calibration for medical and laboratory equipment.",
      image: "/images/medical.jpg",
      icon: Heart,
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Industries We <span className="text-red-600">Serve</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our expertise spans a wide range of sectors, enabling us to provide
            tailored calibration and engineering solutions that meet strict
            industry requirements.
          </p>
        </div>

        {/* Industries Cards */}
        <div className="flex flex-col lg:flex-row justify-center gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)} // 👈 reset on mouse leave
                className={`
                  group relative rounded-2xl overflow-hidden cursor-pointer
                  flex-1 transition-all duration-700 ease-out
                  ${
                    hoveredIndex === index
                      ? "scale-105 shadow-2xl z-20"
                      : "scale-100 shadow-lg"
                  }
                `}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${industry.image})` }}
                ></div>

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t transition-all duration-500 ${
                    isHovered
                      ? "from-black/90 via-black/70 to-black/20"
                      : "from-black/70 via-black/50 to-black/20"
                  }`}
                ></div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6 z-10">
                  {/* Icon */}
                  <div
                    className="mb-4 transition-all duration-500"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-white font-bold mb-3 transition-all duration-500 ${
                      isHovered ? "text-3xl" : "text-2xl"
                    }`}
                  >
                    {industry.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-gray-300 text-sm leading-relaxed transition-all duration-500 ${
                      isHovered
                        ? "opacity-100 translate-y-0 max-h-32"
                        : "opacity-0 translate-y-4 max-h-0 overflow-hidden"
                    }`}
                  >
                    {industry.description}
                  </p>

                  {/* CTA */}
                  <div
                    className={`mt-4 flex items-center gap-2 text-white font-semibold transition-all duration-500 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span className="text-sm uppercase tracking-wider">
                      Explore Services
                    </span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            {
              icon: CheckCircle2,
              title: "International Standards",
              text: "Fully compliant with ISO/IEC 17025 and international calibration standards.",
              color: "from-red-500 to-red-600",
            },
            {
              icon: ShieldCheck,
              title: "Traceable Results",
              text: "All calibrations are traceable to national and international standards.",
              color: "from-blue-500 to-blue-600",
            },
            {
              icon: Award,
              title: "Certified Excellence",
              text: "Recognized by regional and international accreditation bodies.",
              color: "from-green-500 to-green-600",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} mb-4`}
              >
                <card.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-700 text-sm">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
