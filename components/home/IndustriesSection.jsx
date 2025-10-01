"use client";

import React, { useState } from 'react';
import { Building2, Factory, Cpu, Car, Heart, Plane } from 'lucide-react';

const IndustriesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(2); // Center card active by default

  const industries = [
    {
      title: 'Aerospace & Defense / Aviation',
      description: 'Precision calibration for aviation and defense equipment ensuring safety and compliance.',
      image: '/images/aerospace.jpg',
      icon: Plane,
      gradient: 'from-slate-600 to-slate-700',
      size: 'small'
    },
    {
      title: 'Oil & Gas / Petrochemical',
      description: 'Specialized calibration services for petrochemical and oil & gas industries.',
      image: '/images/oil-gas.jpg',
      icon: Factory,
      gradient: 'from-slate-500 to-slate-600',
      size: 'medium'
    },
    {
      title: 'Electronics & Electrical Systems',
      description: 'We ensure precise calibration and testing of electrical components to maintain safety and performance.',
      image: '/images/electronics.jpg',
      icon: Cpu,
      gradient: 'from-gray-800 to-gray-900',
      size: 'large'
    },
    {
      title: 'Automotive & Transportation',
      description: 'Comprehensive calibration solutions for automotive and transportation sectors.',
      image: '/images/automotive.jpg',
      icon: Car,
      gradient: 'from-slate-600 to-slate-700',
      size: 'medium'
    },
    {
      title: 'Medical, Biomedical & Laboratory',
      description: 'High-precision calibration for medical and laboratory equipment.',
      image: '/images/medical.jpg',
      icon: Heart,
      gradient: 'from-slate-500 to-slate-600',
      size: 'small'
    },
  ];

  const getCardHeight = (size, isHovered) => {
    if (isHovered) return 'h-[550px]';
    if (size === 'large') return 'h-[500px]';
    if (size === 'medium') return 'h-[400px]';
    return 'h-[350px]';
  };

  const getCardWidth = (size, isHovered) => {
    if (isHovered) return 'flex-[1.2]';
    if (size === 'large') return 'flex-[1.1]';
    return 'flex-1';
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft gradient orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-red-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-10"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Industries We <span className="text-red-600">Serve</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Our expertise spans a wide range of sectors, enabling us to provide tailored calibration and engineering solutions that meet strict industry requirements.
          </p>
        </div>

        {/* Industries Cards - Staggered Layout */}
        <div className="flex flex-col lg:flex-row items-end justify-center gap-6 lg:gap-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isHovered = hoveredIndex === index;
            const isCenter = index === 2;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`
                  group relative rounded-2xl overflow-hidden cursor-pointer
                  transition-all duration-700 ease-out
                  ${getCardHeight(industry.size, isHovered)}
                  ${getCardWidth(industry.size, isHovered)}
                  ${isCenter ? 'lg:mt-0' : index < 2 ? 'lg:mt-16' : 'lg:mt-16'}
                  ${isHovered ? 'shadow-2xl scale-105 z-20' : 'shadow-lg hover:shadow-xl z-10'}
                `}
                style={{
                  transform: isHovered ? 'translateY(-10px)' : 'translateY(0)'
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  {/* Fallback gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient}`}></div>
                  
                  {/* Actual image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${industry.image})`
                    }}
                  ></div>

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ${
                    isHovered 
                      ? 'from-black/95 via-black/70 to-black/30' 
                      : 'from-black/80 via-black/50 to-black/20'
                  }`}></div>

                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full" style={{
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 40px)'
                    }}></div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8 z-10">
                  {/* Top Icon */}
                  <div className={`transition-all duration-500 ${
                    isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                  }`}>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div>
                    {/* Title */}
                    <h3 className={`text-white font-bold mb-4 transition-all duration-500 ${
                      isHovered 
                        ? 'text-3xl lg:text-4xl translate-y-0' 
                        : 'text-2xl lg:text-3xl translate-y-2'
                    }`}>
                      {industry.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-gray-300 text-base lg:text-lg leading-relaxed mb-6 transition-all duration-500 ${
                      isHovered 
                        ? 'opacity-100 translate-y-0 max-h-32' 
                        : 'opacity-0 translate-y-4 max-h-0 overflow-hidden'
                    }`}>
                      {industry.description}
                    </p>

                    {/* Learn More Link */}
                    <div className={`flex items-center gap-2 text-white font-semibold transition-all duration-500 ${
                      isHovered 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                    }`}>
                      <span className="text-sm uppercase tracking-wider">Explore Services</span>
                      <svg 
                        className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Animated Border Glow */}
                <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute inset-0 rounded-2xl border-2 border-red-500 animate-pulse"></div>
                  <div className="absolute inset-0 rounded-2xl border-2 border-white/30"></div>
                </div>

                {/* Shine Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-transform duration-1000 ${
                  isHovered ? 'translate-x-full' : '-translate-x-full'
                }`}></div>

                {/* Corner Accent */}
                <div className={`absolute top-6 right-6 transition-all duration-500 ${
                  isHovered ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 rotate-45'
                }`}>
                  <div className="w-12 h-12 border-t-2 border-r-2 border-white/40 rounded-tr-lg"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-6 bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
            <Building2 className="w-12 h-12 text-red-600" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Don't See Your Industry?
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                We work with diverse sectors. Contact us to discuss your specific needs.
              </p>
            </div>
            <button className="group relative px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden">
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;