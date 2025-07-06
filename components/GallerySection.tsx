import Image from "next/image";
import Marquee from "react-fast-marquee";
import { ImageType } from "@/libs/data";

interface GallerySectionProps {
  gallery: {
    imageUrls: ImageType[];
  };
}

export default function GallerySection({ gallery }: GallerySectionProps) {
  return (
    <section
      id="section"
      className=" h-fit sm:h-screen py-6 sm:py-24 relative w-full justify-center flex items-center"
    >
      <div id="container" className="px-6 sm:px-24 w-full h-full">
        <div className="w-full relative mb-6 sm:mb-0">
          <button className="sm:absolute z-10 top-0 left-0 border-2 border-black rounded-full px-3 py-1 hover:bg-black hover:text-white duration-300 font-bebas">
            See Our Works
          </button>
        </div>
        <div className="w-full h-full items-center justify-center">
          <Marquee className="w-full h-full" autoFill speed={15}>
            <div className="flex">
              {gallery.imageUrls.map((image: ImageType, index: number) => {
                return (
                  <div key={index} className="sm:w-[33vw] h-full">
                    <Image
                      src={image.url}
                      alt=""
                      width={320}
                      height={320}
                      className="h-full w-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
} 