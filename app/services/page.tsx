export const revalidate = 0;

import { SERVICES } from "@/constant/services";
import { ContentType, getServicesPage, ImageType } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const ServicesPage = async () => {
  const data = await getServicesPage(SERVICES.PATH);

  const { Content, Heading, Gallery, CallToAction, Video, FormContact } = data;

  return (
    <div className="bg-white">
      {/* Parallax Header - shows image clearly */}
      <div
        style={{
          backgroundImage: 'url("/images/cycle.jpg")',
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "85vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        }}
        className="relative w-full animate-fade-in"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <h1 className="relative z-20 text-6xl font-bebas text-white tracking-widest drop-shadow-lg animate-slide-down">
          {Heading}
        </h1>
      </div>

      {/* Services Section - starts below the parallax header */}
      <section className="py-24 relative w-full justify-center flex items-center bg-white">
        <div id="container" className="px-6 sm:px-24 w-full h-full">
          <div className="md:grid sm:grid-cols-2 xl:grid-cols-3 gap-3 grid grid-cols-1">
            {Content.map((element: ContentType, index: number) => {
              return (
                <div
                  key={index}
                  className="text-black flex justify-between flex-col gap-3 col-span-2 xl:col-span-1 p-6 border-black border"
                >
                  <div>
                    <h2 className="text-xl font-bebas font-bold leading-none">
                      {element.heading}
                    </h2>
                  </div>
                  <div className="text-sm">{element.excerpt}</div>
                  <Link
                    href={CallToAction.link}
                    target="_blank"
                    className="text-black border-2 border-black py-3 font-bebas text-xl text-center hover:bg-black hover:text-white duration-300"
                  >
                    {CallToAction.title}
                  </Link>
                </div>
              );
            })}

            <div className="col-span-1 md:col-span-3">
              <Marquee className="h-full w-full" loop={50}>
                {Gallery.imageUrls?.map((image: ImageType, index: number) => {
                  return (
                    <div className="h-[450px] aspect-auto w-full" key={index}>
                      <Image
                        src={image.url}
                        alt="Images"
                        width={450}
                        height={300}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  );
                })}
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
