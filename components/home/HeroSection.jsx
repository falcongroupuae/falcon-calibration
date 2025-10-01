"use client";
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Subtitle */}
          <div className="inline-block">
            <span className="text-red-600 font-bold text-lg tracking-wide">
              Falcon Calibration
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Leading Calibration Services Provider
            <br />
            <span className="text-gray-800">in UAE & GCC</span>
          </h1>

          {/* Tagline */}
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 max-w-4xl mx-auto">
            Precision You Can Trust
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-md text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Explore More
            </button>
          </div>

          {/* Contact Info Bar */}
          <div className="pt-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-red-600" />
                <span>Ras Al Khor, Industrial Area 1, Dubai - UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-red-600" />
                <span>+971 4 327 9333</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-red-600" />
                <span>sales@falcon-geosystems.com</span>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 pt-8">
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            <div className="w-3 h-3 rounded-full bg-red-600"></div>
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;