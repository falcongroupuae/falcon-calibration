import React from "react";
import { Target, Users, Cpu, Globe } from "lucide-react";

const WhyTrustFalcon = () => {
  const features = [
    {
      icon: Target,
      title: "Accuracy",
      description:
        "We follow strict quality standards with traceability to international labs, ensuring precise and reliable results.",
      gradient: "from-red-900/80 to-red-800/80",
    },
    {
      icon: Users,
      title: "Expertise",
      description:
        "Our trained team handles the latest equipment and industry needs with skill and efficiency.",
      gradient: "from-orange-900/80 to-orange-800/80",
    },
    {
      icon: Cpu,
      title: "Technology",
      description:
        "We use modern tools and software for faster, more accurate, and error-free calibration.",
      gradient: "from-red-800/80 to-red-700/80",
    },
    {
      icon: Globe,
      title: "Coverage",
      description:
        "We serve industries from manufacturing and oil & gas to healthcare, automotive, and aerospace.",
      gradient: "from-amber-900/80 to-amber-800/80",
    },
  ];

  return (
    <section
      className="
        relative h-screen bg-cover bg-center bg-no-repeat
        bg-[url('/images/bg-whyus.jpg')]
      "
    >
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="text-white">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 leading-tight">
                Why Thousands Trust <br />
                <span className="text-red-600">Falcon Calibration</span>
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
                Calibration is not just a technical process — it's the
                foundation for quality, safety, and compliance that keeps your
                operations running smoothly, your equipment performing at its
                best, and your reputation strong. Here’s why clients trust us:
              </p>

              <button className="relative px-8 py-4 border-2 border-red-600 text-red-600 font-bold rounded overflow-hidden group transition-all duration-300 hover:text-white">
                <span className="relative z-10">Learn More...</span>
                <div className="absolute inset-0 bg-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
              </button>
            </div>

            {/* Right Column - Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map(({ icon: Icon, title, description, gradient }, i) => (
                <div
                  key={i}
                  className={`relative bg-gradient-to-br ${gradient} rounded-2xl p-6 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-red-500/50 group`}
                >
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                      <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">{title}</h3>

                  {/* Description */}
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {description}
                  </p>

                  {/* Hover shine effect */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
    </section>
  );
};

export default WhyTrustFalcon;
