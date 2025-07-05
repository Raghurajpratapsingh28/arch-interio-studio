export const revalidate = 0;

import { getContactPage } from "@/libs/data";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

const ContactPage = async () => {
  const data = await getContactPage();

  const { Hero, ContactInfo, Form, CallToAction } = data;

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

      {/* Contact Information Section */}
      <section
        id="section"
        className="py-24 sm:py-24 relative w-full justify-center flex items-center bg-white"
      >
        <div id="container" className="px-6 sm:px-24 w-full h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-black text-4xl font-bebas mb-8">{ContactInfo.heading}</h2>
              <div className="space-y-6">
                {ContactInfo.items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-black font-bold">{item.label}</p>
                      <p className="text-black opacity-70">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-black p-8 rounded-lg">
              <h3 className="text-white text-2xl font-bebas mb-6">{Form.heading}</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Form.fields.slice(0, 2).map((field, index) => (
                    <div key={index} className={clsx(field.name === "email" && "sm:col-span-2")}>
                      <label className="block text-white text-sm font-bold mb-2">
                        {field.label}
                        {field.required && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        required={field.required}
                        className="w-full px-4 py-3 bg-white text-black rounded border-2 border-white focus:border-gray-300 focus:outline-none"
                      />
                    </div>
                  ))}
                </div>
                
                {Form.fields.slice(2, 4).map((field, index) => (
                  <div key={index}>
                    <label className="block text-white text-sm font-bold mb-2">
                      {field.label}
                      {field.required && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      required={field.required}
                      className="w-full px-4 py-3 bg-white text-black rounded border-2 border-white focus:border-gray-300 focus:outline-none"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    {Form.fields[4].label}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name={Form.fields[4].name}
                    required={Form.fields[4].required}
                    rows={6}
                    className="w-full px-4 py-3 bg-white text-black rounded border-2 border-white focus:border-gray-300 focus:outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black font-bebas py-3 px-6 border-2 border-white hover:bg-black hover:text-white hover:border-white duration-300 rounded-full"
                >
                  {Form.submitText}
                </button>
              </form>
            </div>
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

export default ContactPage; 