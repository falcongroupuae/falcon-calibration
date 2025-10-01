"use client";

import React, { useState } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const ServicesGridSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: 'Calibration',
      description: 'Precision instrument calibration services',
      image: '/images/calibration.jpg',
      gradient: 'from-blue-900 to-blue-600',
      color: 'blue'
    },
    {
      title: 'CMM Calibration Services',
      description: 'Coordinate Measuring Machine calibration',
      image: '/images/cmm-calibration-services.jpeg',
      gradient: 'from-slate-700 to-slate-500',
      color: 'slate'
    },
    {
      title: 'Weigh Bridge Calibration',
      description: 'Heavy-duty weighbridge calibration',
        image: '/images/weigh-bridge-calibration.webp',
        gradient: 'from-teal-900 to-teal-600',
      color: 'teal'
    },
    {
      title: 'Temperature Mapping',
      description: 'Comprehensive temperature mapping solutions',
      image: '/images/temperature-mapping.jpeg',
      gradient: 'from-gray-800 to-gray-600',
      color: 'gray'
    },
    {
      title: 'PAT Testing',
      description: 'Portable Appliance Testing services',
      image: '/images/pat-testing.jpg',
      gradient: 'from-cyan-900 to-cyan-600',
      color: 'cyan'
    },
    {
      title: 'Repair',
      description: 'Expert instrument repair services',
      image: '/images/Repair.jpg',
      gradient: 'from-slate-800 to-slate-600',
      color: 'slate'
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(30deg, #000 12%, transparent 12.5%, transparent 87%, #000 87.5%, #000),
            linear-gradient(150deg, #000 12%, transparent 12.5%, transparent 87%, #000 87.5%, #000),
            linear-gradient(30deg, #000 12%, transparent 12.5%, transparent 87%, #000 87.5%, #000),
            linear-gradient(150deg, #000 12%, transparent 12.5%, transparent 87%, #000 87.5%, #000)
          `,
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-50 rounded-full px-6 py-2 mb-4">
            <Zap className="w-4 h-4 text-red-600" />
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
              What We Do
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet your calibration and testing needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0">
                {/* Fallback gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}></div>
                
                {/* Actual background image - replace with your images */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${service.image})`,
                  }}
                ></div>

                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-20">
                  {service.title === 'Temperature Mapping' && (
                    <div className="w-full h-full" style={{
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)'
                    }}></div>
                  )}
                  {service.title === 'PAT Testing' && (
                    <div className="w-full h-full" style={{
                      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)'
                    }}></div>
                  )}
                  {service.title === 'Weigh Bridge Calibration' && (
                    <div className="w-full h-full" style={{
                      backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 15px, rgba(255,255,255,0.1) 15px, rgba(255,255,255,0.1) 30px)'
                    }}></div>
                  )}
                  {service.title === 'CMM Calibration Services' && (
                    <div className="w-full h-full" style={{
                      backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(255,255,255,0.05) 5px, rgba(255,255,255,0.05) 10px)'
                    }}></div>
                  )}
                  {service.title === 'Repair' && (
                    <div className="w-full h-full" style={{
                      backgroundImage: 'repeating-linear-gradient(135deg, transparent, transparent 12px, rgba(255,255,255,0.08) 12px, rgba(255,255,255,0.08) 24px)'
                    }}></div>
                  )}
                  {service.title === 'Calibration' && (
                    <div className="w-full h-full" style={{
                      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}></div>
                  )}
                </div>

                {/* Dark Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ${
                  hoveredIndex === index 
                    ? 'from-black/90 via-black/60 to-black/20' 
                    : 'from-black/70 via-black/40 to-black/10'
                }`}></div>

                {/* Animated Border on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8 z-10">
                {/* Title */}
                <h3 className={`text-3xl font-bold text-white mb-3 transform transition-all duration-500 ${
                  hoveredIndex === index ? 'translate-y-0' : 'translate-y-4'
                }`}>
                  {service.title}
                </h3>

                {/* Description - Hidden by default, shown on hover */}
                <p className={`text-gray-300 text-base mb-4 transform transition-all duration-500 ${
                  hoveredIndex === index 
                    ? 'opacity-100 translate-y-0 max-h-20' 
                    : 'opacity-0 translate-y-4 max-h-0'
                }`}>
                  {service.description}
                </p>

                {/* Learn More Button */}
                <div className={`flex items-center gap-2 text-white font-semibold transform transition-all duration-500 ${
                  hoveredIndex === index 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}>
                  <span>Learn More</span>
                  <ArrowRight className={`w-5 h-5 transform transition-transform duration-300 ${
                    hoveredIndex === index ? 'translate-x-2' : 'translate-x-0'
                  }`} />
                </div>

                {/* Corner Accent */}
                <div className={`absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-white/30 transform transition-all duration-500 ${
                  hoveredIndex === index 
                    ? 'scale-100 opacity-100 rotate-0' 
                    : 'scale-75 opacity-0 -rotate-45'
                }`}></div>

                {/* Number Badge */}
                {/* <div className={`absolute top-6 left-6 w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center font-bold text-white transition-all duration-500 ${
                  hoveredIndex === index ? 'scale-110 border-red-500' : 'scale-100'
                }`}>
                  {index + 1}
                </div> */}
              </div>

              {/* Shine Effect on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 transition-transform duration-1000 ${
                hoveredIndex === index ? 'translate-x-full' : '-translate-x-full'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Looking for a specific service? We're here to help.
          </p>
          <button className="group relative px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGridSection;