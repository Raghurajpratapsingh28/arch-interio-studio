"use client";
import React, { useState } from "react";
import Link from "next/link";

interface ContactPageClientProps {
  data: any;
}

const ContactPageClient: React.FC<ContactPageClientProps> = ({ data }) => {
  const { Hero, ContactInfo, Form, CallToAction } = data;

  // Add form state and handlers
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    city: "",
    projectSize: "",
    projectLocation: "",
    requirements: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({
          name: "",
          mobile: "",
          city: "",
          projectSize: "",
          projectLocation: "",
          requirements: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // Helper to filter only email, phone, location
  const filteredContactItems = ContactInfo.items.filter((item: any) => {
    const label = item.label.toLowerCase();
    return label.includes("email") || label.includes("phone") || label.includes("location");
  });

  return (
    <React.Fragment>
      {/* Hero Section */}
      <section
        id="section"
        className="py-24 overflow-hidden sm:py-24 sm:h-screen sm:max-h-screen relative w-full justify-center flex items-center bg-black"
      >
        <div id="container" className="px-6 sm:px-24 w-full h-full">
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-white text-6xl font-bebas mb-6">{Hero.heading}</h1>
            <p className="text-white text-xl mb-4">{Hero.tagline}</p>
            <p className="text-white text-lg opacity-80">{Hero.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Contact Info Section (email, phone, location) */}
      <section className="py-12 bg-white w-full flex flex-col items-center">
        <h2 className="text-black text-4xl font-bebas mb-8">{ContactInfo.heading}</h2>
        <div className="flex flex-col sm:flex-row gap-8 w-full max-w-2xl justify-center items-center">
          {filteredContactItems.map((item: any, index: number) => (
            <div key={index} className="flex items-center space-x-4">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="text-black font-bold">{item.label}</p>
                <p className="text-black opacity-70">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-white w-full flex flex-col items-center">
        <div className="w-full max-w-xl">
          <h3 className="text-black text-2xl font-bebas mb-6">{Form.heading}</h3>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-base font-semibold mb-1">Name <span className="text-red-500">*</span></label>
              <input name="name" value={form.name} onChange={handleChange} type="text" required placeholder="Enter Your Name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition" />
            </div>
            <div>
              <label className="block text-base font-semibold mb-1">Mobile Number <span className="text-red-500">*</span></label>
              <input name="mobile" value={form.mobile} onChange={handleChange} type="tel" required placeholder="Enter Your Mobile Number" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition" />
            </div>
            <div>
              <label className="block text-base font-semibold mb-1">City <span className="text-red-500">*</span></label>
              <input name="city" value={form.city} onChange={handleChange} type="text" required placeholder="Enter Your City Name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition" />
            </div>
            <div>
              <label className="block text-base font-semibold mb-1">Project Size (SQ Feet) <span className="text-red-500">*</span></label>
              <input name="projectSize" value={form.projectSize} onChange={handleChange} type="text" required placeholder="Enter Your Project Size" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition" />
            </div>
            <div>
              <label className="block text-base font-semibold mb-1">Project location <span className="text-red-500">*</span></label>
              <input name="projectLocation" value={form.projectLocation} onChange={handleChange} type="text" required placeholder="Enter Your Project location" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition" />
            </div>
            <div>
              <label className="block text-base font-semibold mb-1">Your Requirements <span className="text-red-500">*</span></label>
              <textarea name="requirements" value={form.requirements} onChange={handleChange} required placeholder="Enter Your Requirements" className="w-full border border-gray-300 rounded-md px-4 py-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-black transition" />
            </div>
            <button type="submit" className="mt-2 bg-black text-white font-bold py-2 rounded-md hover:bg-gray-900 transition" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Submit"}
            </button>
            {status === "success" && <p className="text-green-600 mt-2">Message sent successfully!</p>}
            {status === "error" && <p className="text-red-600 mt-2">Failed to send message. Please try again.</p>}
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section
        id="section"
        className="py-12 bg-gray-100 w-full flex flex-col items-center"
      >
        <div className="w-full max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-black text-4xl font-bebas mb-4">Visit Our Studio</h2>
            <p className="text-black text-lg opacity-70">Find us in the heart of Tokyo</p>
          </div>
          <div className="w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3558.954866750857!2d80.992578!3d26.873175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUyJzIzLjQiTiA4MMKwNTknMzMuMyJF!5e0!3m2!1sen!2sin!4v1752338550592!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Arch Interio Studio Location"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="mt-8 text-center">
            <p className="text-black text-lg font-semibold mb-2">Arch Interio Studio</p>
            <p className="text-black opacity-70">Lucknow, Uttar Pradesh</p>
            <p className="text-black opacity-70 mt-2">Open Monday - Friday: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        id="section"
        className="py-24 sm:py-24 relative w-full justify-center flex flex-col items-center bg-black"
      >
        <div id="container" className="px-6 sm:px-24 w-full h-full">
          <div className="text-center">
            <h2 className="text-6xl text-white font-bebas leading-none mb-6">
              {CallToAction.title}
            </h2>
            <p className="text-white text-xl mb-8 opacity-80">
              {CallToAction.subtitle}
            </p>
            <Link
              href={CallToAction.link}
              className="inline-block px-6 font-bebas py-3 w-fit border-white border-2 text-xl hover:bg-white hover:text-black duration-300 text-white rounded-full"
            >
              {CallToAction.label}
            </Link>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactPageClient; 