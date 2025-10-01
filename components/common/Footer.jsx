"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Linkedin, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-100 py-12">
      {/* Container: max width 7xl */}
      <div className="mx-auto max-w-7xl px-8 sm:px-12">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 xl:gap-16">
          {/* Left: Logo + About + Socials (2/5) */}
          <div className="lg:col-span-2 flex flex-col justify-start">
            <Link href="/">
              <img
                src="/logos/logo.png"
                alt="Falcon Calibration Logo"
                className="w-40"
              />
            </Link>
            <p className="mt-6 text-slate-600 font-bold leading-relaxed text-sm">
              Falcon Calibration LLC stands as a premier leader in industrial
              Calibration Services across the GCC region.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-blue-700 hover:bg-blue-800 text-white">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-slate-800 hover:bg-slate-900 text-white">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Right: Links & Contact (3/5) */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-slate-900 font-semibold text-base">Quick Links</h4>
              <ul className="mt-6 space-y-4">
                {["Home", "About Us", "Calibrations", "Services", "Contact Us"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-slate-900 text-slate-600 font-bold text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-slate-900 font-semibold text-base">Company</h4>
              <ul className="mt-6 space-y-4">
                {[
                  "Falcon Group",
                  "Falcon Geomatics LLC",
                  "Falcon Laboratory LLC",
                  "Falcon Survey Engineering",
                  "BIM Middle East",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-slate-900 text-slate-600 font-bold text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-slate-900 font-semibold text-base">Contact Us</h4>
              <ul className="mt-6 space-y-4 text-slate-600 font-bold text-sm">
                <li className="flex items-center space-x-2">
                  <Phone size={16} className="text-slate-500" />
                  <Link href="tel:+97143279333">+971 4 327 9333</Link>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail size={16} className="text-slate-500" />
                  <Link href="mailto:sales@falcon-geosystems.com">
                    sales@falcon-geosystems.com
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin size={16} className="text-slate-500" />
                  <span>Ras Al Khor, Industrial Area 1, Dubai - UAE</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-10 mb-6 border-gray-300" />

        {/* Bottom section */}
        <div className="flex flex-wrap max-md:flex-col gap-4">
          <ul className="md:flex md:space-x-6 max-md:space-y-2">
            <li>
              <Link href="#" className="hover:text-slate-900 text-slate-600 font-bold text-sm">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-slate-900 text-slate-600 font-bold text-sm">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-slate-900 text-slate-600 font-bold text-sm">
                Security
              </Link>
            </li>
          </ul>
          <p className="text-slate-600 font-bold text-sm md:ml-auto">
            © Falcon Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
