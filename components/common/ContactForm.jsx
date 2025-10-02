"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const ContactForm = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form data:", formData);

    // ✅ Put your API call or backend integration here
    // Example: fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) });

    alert("Thank you! We will get back to you shortly.");

    // Reset form after submit
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className={`space-y-6 ${className}`}>
      <p className="text-gray-900 text-base">
        Have questions about our calibration services? We're here to help.
        Reach out to our team for expert guidance.
      </p>

      <div className="space-y-4">
        {/* First Row: Name and Email */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-900 text-gray-900 placeholder-gray-500 focus:border-lime-400 focus:outline-none transition-all"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-900 text-gray-900 placeholder-gray-500 focus:border-lime-400 focus:outline-none transition-all"
          />
        </div>

        {/* Second Row: Phone and Subject */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Mobile Number"
            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-900 text-gray-900 placeholder-gray-500 focus:border-lime-400 focus:outline-none transition-all"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-900 text-gray-900 placeholder-gray-500 focus:border-lime-400 focus:outline-none transition-all"
          />
        </div>

        {/* Message */}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          placeholder="Message"
          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-900 text-gray-900 placeholder-gray-500 focus:border-lime-400 focus:outline-none transition-all resize-none"
        ></textarea>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-gray-100 hover:bg-lime-400 text-black font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group border border-gray-900"
        >
          Submit
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
