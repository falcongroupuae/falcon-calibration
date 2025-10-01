"use client";
import React, { useState, useEffect, useRef } from "react";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { value: 1000, suffix: "+", label: "Happy Clients", delay: 0 },
    { value: 70, suffix: "+", label: "Awards Winning", delay: 400 },
    { value: 800, suffix: "+", label: "Works Completed", delay: 200 },
    { value: 30, suffix: "+", label: "Our Equipments", delay: 600 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const AnimatedNumber = ({ value, suffix, duration = 2000, delay = 0 }) => {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);

    useEffect(() => {
      if (!isVisible || started) return;

      const timeout = setTimeout(() => {
        setStarted(true);
        const startTime = Date.now();
        const endValue = value;

        const animate = () => {
          const now = Date.now();
          const progress = Math.min((now - startTime) / duration, 1);

          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentValue = easeOutQuart * endValue;

          setCount(currentValue);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(endValue);
          }
        };

        requestAnimationFrame(animate);
      }, delay);

      return () => clearTimeout(timeout);
    }, [isVisible, value, duration, delay, started]);

    // Format the number based on its value
    const formatNumber = (num) => {
      if (value >= 1000) {
        return Math.floor(num).toLocaleString();
      } else if (value >= 10) {
        return Math.floor(num);
      } else {
        return num.toFixed(1);
      }
    };

    return (
      <span>
        {formatNumber(count)}
        <span className="text-red-500">{suffix}</span>
      </span>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-black overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Simulated Building Background */}
        <div className="absolute inset-0 bg-white">
          {/* <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(/images/stats.jpg)",

              backgroundSize: "cover",
            }}
          ></div> */}
        </div>

        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/60"></div> */}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Side - Image with Text Overlay */}
          <div className="relative h-96 lg:h-auto">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              //   style={{
              //     backgroundImage: "url(/images/stats.jpg)",
              //   }}
            >
              {/* Dark Overlay for text readability */}
              <div className="absolute inset-0 bg-black/70"></div>
            </div>

            {/* Text Content Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-8 lg:px-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-6 leading-tight">
                Our Proven Track Record
              </h2>
              <p className="text-gray-300 text-center text-base lg:text-lg leading-relaxed max-w-xl">
                Delivering precision, trust, and excellence across industries,
                backed by measurable success and a history of satisfied clients,
                completed projects, and award-winning performance.
              </p>
            </div>

            {/* Fallback gradient background (hidden when image loads) */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700">
              {/* Abstract Building Pattern - Fallback */}
              <div className="absolute inset-0 opacity-30">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage: `
                    repeating-linear-gradient(
                      0deg,
                      transparent,
                      transparent 40px,
                      rgba(255,255,255,0.1) 40px,
                      rgba(255,255,255,0.1) 42px
                    ),
                    repeating-linear-gradient(
                      90deg,
                      transparent,
                      transparent 60px,
                      rgba(255,255,255,0.1) 60px,
                      rgba(255,255,255,0.1) 62px
                    )
                  `,
                  }}
                ></div>
              </div>

              {/* Geometric Building Shapes */}
              <div className="absolute bottom-0 left-0 right-0 h-3/4">
                <svg
                  className="w-full h-full opacity-20"
                  viewBox="0 0 600 400"
                  preserveAspectRatio="xMidYMax slice"
                >
                  <polygon
                    points="50,400 150,200 250,400"
                    fill="rgba(255,255,255,0.2)"
                  />
                  <polygon
                    points="200,400 300,150 400,400"
                    fill="rgba(255,255,255,0.15)"
                  />
                  <polygon
                    points="350,400 450,180 550,400"
                    fill="rgba(255,255,255,0.1)"
                  />
                  <rect
                    x="100"
                    y="250"
                    width="50"
                    height="150"
                    fill="rgba(255,255,255,0.1)"
                  />
                  <rect
                    x="300"
                    y="220"
                    width="50"
                    height="180"
                    fill="rgba(255,255,255,0.12)"
                  />
                  <rect
                    x="450"
                    y="260"
                    width="50"
                    height="140"
                    fill="rgba(255,255,255,0.08)"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className="flex flex-col justify-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`
                  group relative px-8 lg:px-16 py-8 border border-gray-700/50
                  transition-all duration-500 
                  ${index % 2 === 0 ? "bg-black/80" : "bg-gray-900/50"}
                  hover:border-red-500 hover:bg-gray-900/80
                  overflow-hidden
                `}
                style={{
                  transitionDelay: `${stat.delay}ms`,
                }}
              >
                {/* Full Border Hover Effect - Animated */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Top border */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-red-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
                  {/* Right border */}
                  <div className="absolute top-0 right-0 w-0.5 h-full bg-red-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out delay-200"></div>
                  {/* Bottom border */}
                  <div className="absolute bottom-0 right-0 w-full h-0.5 bg-red-500 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out delay-400"></div>
                  {/* Left border */}
                  <div className="absolute bottom-0 left-0 w-0.5 h-full bg-red-500 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out delay-600"></div>
                </div>

                {/* Number */}
                <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 tracking-tight">
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    delay={stat.delay}
                  />
                </div>

                {/* Label */}
                <div className="text-lg lg:text-xl text-white  font-semibold tracking-wide">
                  {stat.label}
                </div>

                {/* Background Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
