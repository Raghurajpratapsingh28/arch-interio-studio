"use client";
import React, { useState } from "react";

const whatsappLink = "https://wa.me/your-number"; // Replace with your WhatsApp number
const instagramLink = "https://instagram.com/yourprofile"; // Replace with your Instagram profile

const FloatingContactBar = () => {
  const [open, setOpen] = useState(false);

  // Handle hover for desktop, click for mobile
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="fixed right-0 top-1/3 z-50 flex flex-col items-end gap-2 pointer-events-none">
      {/* Contact Us Tab - always visible, above the form */}
      <div
        className="flex items-center cursor-pointer group pointer-events-auto"
        style={{ zIndex: 2 }}
        onMouseEnter={handleOpen}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="bg-gray-900 text-white px-3 py-2 rounded-l-lg shadow-lg flex items-center gap-2 rotate-90 origin-bottom-right mb-2">
          <span className="font-semibold tracking-wide">Contact Us</span>
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/></svg>
        </div>
      </div>
      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center mb-2 pointer-events-auto"
        aria-label="WhatsApp"
        style={{ zIndex: 2 }}
      >
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A12 12 0 0 0 3.48 20.52l-1.32 4.84a1 1 0 0 0 1.22 1.22l4.84-1.32A12 12 0 1 0 20.52 3.48ZM12 22a10 10 0 1 1 10-10A10 10 0 0 1 12 22Zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9s-.44-.14-.62.14-.72.9-.88 1.08-.32.21-.6.07a8.18 8.18 0 0 1-2.4-1.48 9.06 9.06 0 0 1-1.68-2.08c-.18-.31 0-.48.13-.62.13-.13.28-.34.42-.51a.56.56 0 0 0 .08-.6c-.07-.14-.62-1.5-.85-2.06-.22-.53-.45-.46-.62-.47h-.53a1 1 0 0 0-.72.34A3 3 0 0 0 6.1 9.6c-.2.34-.3.74-.3 1.16a5.18 5.18 0 0 0 1.1 2.6 11.7 11.7 0 0 0 4.5 4.5 5.18 5.18 0 0 0 2.6 1.1c.42 0 .82-.1 1.16-.3a3 3 0 0 0 1.13-1.13c.23-.4.23-.74.16-.87s-.25-.2-.53-.34Z"/></svg>
      </a>
      {/* Instagram Button */}
      <a
        href={instagramLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center pointer-events-auto"
        aria-label="Instagram"
        style={{ zIndex: 2 }}
      >
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5Zm4.25 2.25A6.25 6.25 0 1 1 5.75 12 6.25 6.25 0 0 1 12 5.75Zm0 1.5A4.75 4.75 0 1 0 16.75 12 4.75 4.75 0 0 0 12 7.25Zm6.5 1.25a1 1 0 1 1-1-1 1 1 0 0 1 1 1Z"/></svg>
      </a>
      {/* Sliding Contact Form - appears behind the button */}
      <div
        className={`fixed top-1/3 right-0 z-40 transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        onMouseLeave={handleClose}
        style={{ pointerEvents: open ? 'auto' : 'none' }}
      >
        <div className="bg-white w-80 p-8 rounded-l-3xl shadow-2xl border border-gray-200 flex flex-col gap-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-l font-bold">Contact Form</h3>
            <button onClick={handleClose} className="text-gray-500 hover:text-black text-2xl rounded-full w-8 h-8 flex items-center justify-center transition-colors bg-gray-100 hover:bg-gray-200">&times;</button>
          </div>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Name*" className="border border-gray-300 rounded-xl px-2 py-1 focus:outline-none focus:ring-2 focus:ring-black/20 transition" required />
            <input type="tel" placeholder="Phone*" className="border border-gray-300 rounded-xl px-2 py-1 focus:outline-none focus:ring-2 focus:ring-black/20 transition" required />
            <textarea placeholder="Message*" className="border border-gray-300 rounded-xl px-2 py-1 focus:outline-none focus:ring-2 focus:ring-black/20 transition resize-none" rows={4} required />
            <button type="submit" className="bg-black text-white rounded-xl py-2 mt-1 font-semibold hover:bg-gray-800 transition">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FloatingContactBar; 