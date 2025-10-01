"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CarouselSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: 'Pressure Calibration',
      image: 'pressure',
      description: 'Precision pressure calibration services for all industries'
    },
    {
      title: 'Temperature Calibration',
      image: 'temperature',
      description: 'Accurate temperature measurement calibration'
    },
    {
      title: 'Electrical Calibration',
      image: 'electrical',
      description: 'Comprehensive electrical instrument calibration'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Carousel Container */}
        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          {/* Slides */}
          {services.map((service, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Background Image Simulation */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900 to-black">
                {/* Simulated Gauge/Equipment Visual */}
                {service.image === 'pressure' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Pressure Gauge Visual */}
                      <div className="w-64 h-64 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-2xl flex items-center justify-center">
                        <div className="w-56 h-56 rounded-full bg-gradient-to-br from-blue-800 to-blue-900 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-6xl font-bold text-cyan-400">12</div>
                            <div className="text-2xl text-cyan-300 mt-2">PSI</div>
                          </div>
                        </div>
                        {/* Gauge markers */}
                        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                          <div
                            key={deg}
                            className="absolute w-1 h-4 bg-white"
                            style={{
                              top: '50%',
                              left: '50%',
                              transform: `rotate(${deg}deg) translateY(-120px)`,
                              transformOrigin: 'center'
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {service.image === 'temperature' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-9xl font-bold text-orange-400 opacity-20">
                      °C
                    </div>
                  </div>
                )}
                
                {service.image === 'electrical' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-9xl font-bold text-yellow-400 opacity-20">
                      ⚡
                    </div>
                  </div>
                )}

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h2 className="text-5xl lg:text-7xl font-bold mb-4">
                    {service.title.split(' ')[0]}{' '}
                    <span className="text-cyan-400">{service.title.split(' ')[1]}</span>
                  </h2>
                  <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-white w-8'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;