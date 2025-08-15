import Image from "next/image";

interface ImageOverlaySectionProps {
  sectionImageOverlay: {
    heading: string;
    imageOverlay: string;
  };
}

export default function ImageOverlaySection({ sectionImageOverlay }: ImageOverlaySectionProps) {
  return (
    <section
      id="section"
      className=" overflow-hidden h-fit relative w-full justify-center flex items-center"
    >
      <div id="container" className=" px-6 sm:px-24 w-full h-full">
        <div className="w-full h-fit">
          <h3 className="text-[100vh] leading-none font-bebas tracking-tighter">
            {sectionImageOverlay.heading}
          </h3>
          <div className="absolute top-[25%] aspect-square w-[88vw] sm:w-[30vw] left-0">
            {/* <Image
              src={sectionImageOverlay.imageOverlay}
              alt=""
              width={320}
              height={320}
              className="h-full object-cover w-full"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
} 