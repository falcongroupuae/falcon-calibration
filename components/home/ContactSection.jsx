"use client";
import React from "react";
import { Phone, Mail } from "lucide-react";
import ContactForm from "../common/ContactForm";

const ContactSection = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Diagonal Background Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              135deg,
              transparent,
              transparent 80px,
              rgba(0, 0, 0, 0.02) 80px,
              rgba(0, 0, 0, 0.02) 160px
            )`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <button className="inline-block bg-red-500 text-white font-bold px-5 py-2 rounded-full text-xs hover:bg-red-600 transition-colors uppercase tracking-wider">
              CONTACT US
            </button>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              We'd love to
              <br />
              hear from you
            </h2>

            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={22} />
                </div>
                <a
                  href="tel:+97146652286"
                  className="text-xl font-semibold text-gray-900 hover:text-red-500 transition-colors"
                >
                  + (971) 4 66 522 86
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={22} />
                </div>
                <a
                  href="mailto:info@flacongroupme.com"
                  className="text-xl font-semibold text-gray-900 hover:text-red-500 transition-colors break-all"
                >
                  info@Flacongroupme.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
