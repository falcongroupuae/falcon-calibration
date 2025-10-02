"use client";
import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      subtitle: "Falcon Calibration",
      title: "Leading Calibration Services Provider",
      titleSecondLine: "in UAE & GCC",
      tagline: "Precision You Can Trust",
      image: "/images/bg-hero (1).jpg",
    },
    {
      id: 2,
      subtitle: "ISO Certified Excellence",
      title: "Advanced Laboratory Testing",
      titleSecondLine: "& Certification Services",
      tagline: "Quality Assured, Results Guaranteed",
      image: "/images/bg-hero (2).jpg",
    },
    {
      id: 3,
      subtitle: "Industry Leaders",
      title: "Comprehensive Calibration Solutions",
      titleSecondLine: "for Every Industry",
      tagline: "Your Partner in Precision",
      image: "/images/bg-hero (3).jpg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 600);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setIsAnimating(false);
      }, 600);
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsAnimating(false);
      }, 600);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Fade Transition */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Falcon Calibration ${slide.id}`}
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="text-gray-800" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="text-gray-800" />
      </button>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
        {/* Main Content with Animations */}
        <div className="space-y-8">
          {/* Subtitle */}
          <div
            className={`inline-block transition-all duration-700 ${
              isAnimating
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            <span className="text-red-600 font-bold text-lg tracking-wide drop-shadow-lg">
              {slides[currentSlide].subtitle}
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight transition-all duration-700 delay-100 drop-shadow-lg ${
              isAnimating
                ? "opacity-0 translate-x-8"
                : "opacity-100 translate-x-0"
            }`}
          >
            {slides[currentSlide].title}
            <br />
            <span className="text-gray-100">
              {slides[currentSlide].titleSecondLine}
            </span>
          </h1>

          {/* Tagline */}
          <p
            className={`text-2xl sm:text-3xl lg:text-4xl font-semibold text-white max-w-4xl mx-auto transition-all duration-700 delay-200 drop-shadow-lg ${
              isAnimating
                ? "opacity-0 translate-x-8"
                : "opacity-100 translate-x-0"
            }`}
          >
            {slides[currentSlide].tagline}
          </p>

          {/* CTA Button */}
          <div
            className={`pt-4 transition-all duration-700 delay-300 ${
              isAnimating ? "opacity-0 scale-90" : "opacity-100 scale-100"
            }`}
          >
            <button className="relative px-8 py-4 border-2 border-red-600 text-red-600 font-bold rounded overflow-hidden group transition-all duration-300 hover:text-white">
              <span className="relative z-10">Explore More...</span>
              <div className="absolute inset-0 bg-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
            </button>
          </div>

          {/* Contact Info Bar */}
          <div
            className={`pt-12 transition-all duration-700 delay-400 ${
              isAnimating
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm text-white drop-shadow-lg">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-red-500" />
                <span>Ras Al Khor, Industrial Area 1, Dubai - UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-red-500" />
                <span>+971 4 327 9333</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-red-500" />
                <span>sales@falcon-geosystems.com</span>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 pt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-red-600 w-8"
                    : "bg-gray-400 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
