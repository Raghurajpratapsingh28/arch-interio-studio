"use client";

import { getWorksPage, ImageType, ProjectType } from "@/libs/data";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";

const WorksPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    getWorksPage().then(setData);
  }, []);

  if (!data) return <div className="text-white p-10">Loading...</div>;

  const { Content, Hero, CallToAction } = data;

  return (
    <React.Fragment>
      {/* Modal Overlay */}
      {modalOpen && selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-opacity"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative max-w-3xl w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-90 transition"
              onClick={() => setModalOpen(false)}
              aria-label="Close preview"
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Preview"
              width={1200}
              height={800}
              className="rounded-lg object-contain max-h-[80vh] max-w-full shadow-2xl border-2 border-white"
              priority
            />
          </div>
        </div>
      )}
      <section
        id="section"
        className="py-24 overflow-hidden sm:py-24 sm:h-screen sm:max-h-screen relative w-full justify-center flex items-center bg-black"
      >
        <div id="container" className=" px-6 sm:px-24 w-full h-full">
          <h1 className="text-white text-6xl font-bebas">{Hero.heading}</h1>
          <div className="w-full h-full aspect-video flex flex-col">
            <span className="text-md block italic font-bold text-white">
              {Hero.tagline}
            </span>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/NoWyNgAQe34?si=Jthrx77fB35CoOlS&amp;start=10&autoplay=1&mute=1"
              title="YouTube video player"
              allow="autoplay; muted;"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full object-cover"
            ></iframe>
          </div>
        </div>
      </section>
      <section
        id="section"
        className="py-24 sm:py-24 sm:h-fit relative w-full justify-center flex flex-col items-center bg-black"
      >
        {Content.map((project: ProjectType, index: number) => {
          const { location, url, imageUrls, excerpt, tagline, projectname } =
            project;

          return (
            <div
              key={index}
              className={clsx(
                "sticky text-black overflow-hidden top-0 sm:h-[75vh] pb-24 shrink-0 w-full",
                index % 2 == 0 ? "bg-white text-black" : "bg-black text-white"
              )}
            >
              <div id="container" className="px-6 sm:px-24 w-full h-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 justify-between py-6 px-6 border-b-black">
                  <div className="">
                    <h3 className="text-3xl font-bebas">{projectname}</h3>
                    <div className="flex xl:flex-row flex-col gap-3 sm:gap-6 xl:items-center">
                      <span className="font-bold text-xl">{location}</span>
                      <span
                        className={clsx(
                          "border-2  italic rounded-full px-2 py-2 w-fit",
                          index % 2 == 0
                            ? "bg-white text-black border-black"
                            : "bg-black text-white border-white"
                        )}
                      >
                        {tagline}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col my-3 sm:my-0 sm:flex-row sm:justify-between">
                    <p>{excerpt}</p>
                    <Link
                      href={url}
                      target="_blank"
                      className={clsx(
                        "bg-black font-bebas w-fit h-fit shrink-0  border-solid px-6 py-2 rounded-full border-2 duration-300 ",
                        index % 2 == 0
                          ? "bg-black text-white border-white hover:bg-white hover:border-black hover:text-black"
                          : "bg-white text-black border-white hover:bg-black hover:border-white hover:text-white"
                      )}
                    >
                      
                    </Link>
                  </div>
                </div>
                <div className="relative flex -mx-[50%]">
                  <Marquee
                    className="w-fit overflow-hidden"
                    speed={90}
                    pauseOnHover
                  >
                    {imageUrls?.map((image: ImageType, idx: number) => {
                      return (
                        <div
                          key={idx}
                          className="w-[88vw] overflow-hidden shrink-0 cursor-pointer flex items-center justify-center sm:w-[450px] aspect-video"
                          onClick={() => {
                            setSelectedImage(image?.url || "");
                            setModalOpen(true);
                          }}
                        >
                          <Image
                            loading="lazy"
                            src={image?.url || ""}
                            alt="Images"
                            width={200}
                            height={300}
                            className="h-full w-full object-cover px-1 hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                      );
                    })}
                  </Marquee>
                </div>
              </div>
            </div>
          );
        })}

        <div className="sticky text-black top-82 bg-slate-600 opacity-0 h-[600px] shrink-0 w-full"></div>
      </section>
      <section
        id="section"
        className="py-24 sm:py-24 sm:h-fit h-screen relative w-full justify-center flex flex-col items-center bg-black"
      >
        <div id="container" className=" px-6 sm:px-24 w-full h-full">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="text-6xl text-white font-bebas leading-none max-w-96">
                {CallToAction.title}
              </h2>
              <Link
                href="/"
                className="px-6 font-bebas py-3 w-fit border-white border-2 text-xl hover:bg-white hover:text-black duration-300 text-white"
              >
                {CallToAction.label}
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default WorksPage;
