"use client";

import React from "react";
import Image from "next/image";
import { Award, TrendingUp } from "lucide-react";

const BrandsSection = () => {
  const brands = [
    { name: "Fluke", logo: "/brands/fluke.jpg", color: "yellow" },
    { name: "Gazelle", logo: "/brands/gazelle.jpg", color: "blue" },
    { name: "Groz", logo: "/brands/groz.jpg", color: "orange" },
    { name: "Honeywell", logo: "/brands/honeywell.jpg", color: "red" },
    { name: "Husqvarna", logo: "/brands/husqvarna.jpg", color: "blue" },
    { name: "Irwin", logo: "/brands/irwin.jpg", color: "blue" },
    { name: "Karcher", logo: "/brands/karcher.jpg", color: "yellow" },
    { name: "Klauke", logo: "/brands/klauke.jpg", color: "blue" },
    { name: "Metabo", logo: "/brands/metabo.jpg", color: "green" },
    { name: "DJI", logo: "/brands/dji.jpg", color: "gray" },
    { name: "MSA", logo: "/brands/msa.jpg", color: "green" },
    { name: "Ridgid", logo: "/brands/ridgid.jpg", color: "red" },
    { name: "Rubi", logo: "/brands/rubi.jpg", color: "red" },
    { name: "UNI-T", logo: "/brands/uni-t.jpg", color: "red" },
    { name: "Zamil", logo: "/brands/zamil.jpg", color: "blue" },
    { name: "Bosch", logo: "/brands/bosch.jpg", color: "red" },
    { name: "DeWalt", logo: "/brands/dewalt.jpg", color: "yellow" },
    { name: "Emerson", logo: "/brands/emerson.jpg", color: "blue" },
    { name: "Expert", logo: "/brands/expert.jpg", color: "blue" },
    { name: "Extech", logo: "/brands/extech.jpg", color: "green" },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-red-200 rounded-full blur-3xl opacity-15 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50 to-orange-50 rounded-full px-6 py-3 mb-6">
            <Award className="w-5 h-5 text-red-600" />
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
              Our Partners
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Trusted Brands,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              Trusted Performance
            </span>
          </h2>

          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We collaborate with leading global brands to provide high-quality
            calibration and measurement solutions, ensuring reliability,
            precision, and compliance in
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-16">
          {brands.map((brand, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="relative h-28 bg-white rounded-sm border flex items-center justify-center p-6 transition-all duration-500 cursor-pointer border-black shadow-2xl -translate-y-2 scale-90">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-120"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 mb-4 shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">20+</div>
            <div className="text-gray-600 font-medium">Trusted Partners</div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 mb-4 shadow-lg">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-gray-600 font-medium">Quality Assured</div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 mb-4 shadow-lg">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-gray-600 font-medium">Quality Assured</div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 mb-4 shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">ISO</div>
            <div className="text-gray-600 font-medium">Certified Standards</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
