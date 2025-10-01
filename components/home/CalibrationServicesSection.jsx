import React from "react";
import {
  Gauge,
  Thermometer,
  Zap,
  Scale,
  BatteryCharging,
  Radio,
  Rotate3d,
  Stethoscope,
  Weight,
  Flame,
  Beaker,
  Timer,
  RotateCcw,
  Target,
  Maximize,
  Activity,
  Atom,
  Cpu,
} from "lucide-react";

const CalibrationServicesSection = () => {
  const services = [
    { icon: Gauge, name: "Pressure", color: "from-blue-500 to-blue-600" },
    {
      icon: Thermometer,
      name: "Temperature",
      color: "from-orange-500 to-red-600",
    },
    { icon: Zap, name: "Electrical", color: "from-yellow-500 to-yellow-600" },
    {
      icon: Scale,
      name: "Mass/Balance",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: BatteryCharging,
      name: "High Voltage",
      color: "from-red-500 to-red-600",
    },
    { icon: Radio, name: "RF", color: "from-indigo-500 to-indigo-600" },
    { icon: Rotate3d, name: "Torque", color: "from-teal-500 to-teal-600" },
    {
      icon: Stethoscope,
      name: "Medical",
      color: "from-green-500 to-green-600",
    },
    { icon: Weight, name: "Load", color: "from-gray-600 to-gray-700" },
    { icon: Flame, name: "Gas", color: "from-orange-600 to-red-500" },
    { icon: Beaker, name: "Volume", color: "from-cyan-500 to-cyan-600" },
    { icon: Timer, name: "General T&M", color: "from-slate-500 to-slate-600" },
    { icon: RotateCcw, name: "Flow", color: "from-blue-400 to-blue-500" },
    { icon: Target, name: "PD Instrument", color: "from-pink-500 to-pink-600" },
    {
      icon: Maximize,
      name: "Dimensional",
      color: "from-violet-500 to-violet-600",
    },
    {
      icon: Activity,
      name: "Laser Power Meter",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: Atom,
      name: "Particle Counter",
      color: "from-emerald-500 to-emerald-600",
    },
    { icon: Cpu, name: "Optical", color: "from-indigo-500 to-purple-600" },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="service-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M 30 0 L 30 60 M 0 30 L 60 30"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#service-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Our Calibration Services
          </h2>
          <div className="mt-4 w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-100 hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer overflow-hidden"
              >
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
                {/* Animated Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative flex flex-col items-center justify-center space-y-4">
                  {/* Icon Container */}
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>

                  {/* Service Name */}
                  <h3 className="text-center font-semibold text-gray-800 text-sm group-hover:text-gray-900 transition-colors duration-300">
                    {service.name}
                  </h3>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-8 h-8 transform translate-x-4 -translate-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className={`w-full h-full rounded-full bg-gradient-to-br ${service.color} blur-lg`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Need a specific calibration service? We've got you covered.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default CalibrationServicesSection;
