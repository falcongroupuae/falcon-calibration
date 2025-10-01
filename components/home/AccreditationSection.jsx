import React from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

const AccreditationSection = () => {
  const accreditations = [
    {
      name: "ISO/IEC 17025",
      logo: "/logos/iso-17025.png",
      description: "Laboratory Accreditation",
    },
    {
      name: "GCC Accreditation Center",
      logo: "/logos/gcc.png",
      description: "Regional Standards",
    },
    {
      name: "ENAS",
      logo: "/logos/enas.png",
      description: "Emirates National Accreditation System",
    },
    {
      name: "ICV",
      logo: "/logos/icv.png",
      description: "In-Country Value Program",
    },
    {
      name: "EIAC",
      logo: "/logos/eiac.png",
      description: "Emirates International Accreditation Centre",
    },
  ];

  return (
    <section
      className="
        relative py-20 
        bg-cover bg-center bg-no-repeat
        bg-[url('/images/bg-iso.jpg')]
      "
    >
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-white/20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-md border border-gray-300">
            <ShieldCheck className="w-5 h-5 text-red-600" />
            <span className="text-gray-800 font-semibold text-sm uppercase tracking-wider">
              Quality Assurance
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Authorized & Accredited for{" "}
            <span className="text-red-600">Precision</span>
          </h2>

          <p className="text-lg lg:text-xl text-gray-800 max-w-5xl mx-auto leading-relaxed font-medium">
            Falcon Calibration LLC is officially authorized and accredited to
            perform calibration services across a wide range of instruments,
            ensuring every calibration is recognized and traceable to
            international standards.
          </p>
        </div>

        {/* Accreditation Logos */}
        <div className="relative">
          <div
            className="
              grid 
              grid-cols-1        /* default = 1 per row */
              sm:grid-cols-3     /* small screens = 3 per row */
              lg:grid-cols-5     /* large screens = all in one row */
              gap-8 place-items-center
            "
          >
            {accreditations.map((accreditation, index) => (
              <div key={index} className="group relative flex-shrink-0">
                {/* Logo Container */}
                <div className="relative w-32 h-24 sm:w-36 sm:h-24 lg:w-40 lg:h-28 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                  {/* Logo Image using Next.js Image */}
                  <Image
                    src={accreditation.logo}
                    alt={accreditation.name}
                    width={192}
                    height={128}
                    className="object-contain w-full h-full transition-all duration-500"
                    quality={90}
                    priority={index < 3}
                  />
                </div>

                {/* Tooltip on hover */}
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs font-semibold px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10 shadow-xl">
                  <div className="text-center">
                    <div className="font-bold mb-1">{accreditation.name}</div>
                    <div className="text-gray-300 text-[10px]">
                      {accreditation.description}
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative corner elements */}
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t-4 border-l-4 border-red-600 rounded-tl-lg"></div>
          <div className="absolute -top-3 -right-3 w-6 h-6 border-t-4 border-r-4 border-red-600 rounded-tr-lg"></div>
          <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-4 border-l-4 border-red-600 rounded-bl-lg"></div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-4 border-r-4 border-red-600 rounded-br-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default AccreditationSection;
