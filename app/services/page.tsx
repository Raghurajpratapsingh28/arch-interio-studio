export const revalidate = 0;

import { SERVICES } from "@/constant/services";
import { ContentType, getServicesPage, ImageType } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import FAQAccordion from "@/components/FAQAccordion";

const architecturalQA = [
  {
    question: "Architecture for Homes That Reflect You",
    answer: "We design bespoke homes that reflect your personality, lifestyle, and aspirations. Our approach ensures every detail is tailored to your unique vision.",
  },
  {
    question: "Architecture For Developers:",
    answer: "Comprehensive architectural solutions for residential and commercial developments, balancing aesthetics, functionality, and cost-effectiveness.",
  },
  {
    question: "Architecture For Hospitality & Commercial Projects:",
    answer: "Expertise in designing hotels, resorts, restaurants, and commercial spaces that create memorable experiences and drive business success.",
  },
];

const interiorQA = [
  {
    question: "Interior For Private Residential Clients:",
    answer: "Personalized interior design services for homes, from concept to completion, ensuring comfort, style, and functionality.",
  },
  {
    question: "Interior For Developers:",
    answer: "Turnkey interior solutions for residential and commercial projects, enhancing value and appeal for developers.",
  },
  {
    question: "Interior For Hospitality & Commercial Projects:",
    answer: "Designing interiors for hotels, restaurants, offices, and retail spaces that inspire and engage.",
  },
  {
    question: "Interior For Offices:",
    answer: "Workplace design that boosts productivity, well-being, and brand identity through thoughtful spatial planning and aesthetics.",
  },
];

const interiorStylingQA = [
  {
    question: "Interior Styling for Homes:",
    answer: "Expert guidance on color schemes, materials, and decor to create harmonious and visually stunning living spaces tailored to your taste.",
  },
  {
    question: "Styling for Commercial Spaces:",
    answer: "Transforming offices, retail, and hospitality environments with cohesive styling that enhances brand identity and customer experience.",
  },
];

const furnitureDesignQA = [
  {
    question: "Custom Furniture Design:",
    answer: "Bespoke furniture pieces designed to fit your space, style, and functional needs, ensuring uniqueness and quality craftsmanship.",
  },
  {
    question: "Furniture Selection & Sourcing:",
    answer: "Professional assistance in selecting and sourcing furniture that complements your interiors, balancing aesthetics, comfort, and budget.",
  },
];

const ServicesPage = async () => {
  const data = await getServicesPage(SERVICES.PATH);

  const { Content, Heading, Gallery, CallToAction, Video, FormContact } = data;

  return (
    <div className="bg-white">
      {/* Parallax Header - shows image clearly */}
      <div
        style={{
          backgroundImage: 'url("/interior/i8.jpeg")',
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        }}
        className="relative w-full animate-fade-in"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <h1 className="relative z-20 text-6xl font-bebas text-white tracking-widest drop-shadow-lg animate-slide-down">
          Our Services
        </h1>
      </div>

      {/* Architectural Design Section */}
      <section className="py-16 bg-white flex flex-col md:flex-row gap-8 max-w-7xl mx-auto px-4 md:px-8 items-center">
        <div className="flex-1 bg-[#f7f5ef] rounded-2xl p-8 shadow-md border border-gray-200 w-full">
          <h2 className="text-4xl font-bebas font-bold mb-4 tracking-wider">ARCHITECTURAL DESIGN</h2>
          <FAQAccordion qaList={architecturalQA} />
        </div>
        <div className="flex-1 flex justify-center items-center w-full">
          <Image
            src="/actutechtural-project/ap1.jpeg"
            alt="Architectural Design"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full h-auto max-h-[400px]"
          />
        </div>
      </section>

      {/* Interior Design Section */}
      <section className="py-16 bg-white flex flex-col md:flex-row-reverse gap-8 max-w-7xl mx-auto px-4 md:px-8 items-center">
        <div className="flex-1 bg-[#f7f5ef] rounded-2xl p-8 shadow-md border border-gray-200 w-full">
          <h2 className="text-4xl font-bebas font-bold mb-4 tracking-wider">INTERIOR DESIGN</h2>
          <FAQAccordion qaList={interiorQA} />
        </div>
        <div className="flex-1 flex justify-center items-center w-full">
          <Image
            src="/interior/i1.jpeg"
            alt="Interior Design"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full h-auto max-h-[400px]"
          />
        </div>
      </section>

      {/* Interior Styling Section */}
      <section className="py-16 bg-white flex flex-col md:flex-row gap-8 max-w-7xl mx-auto px-4 md:px-8 items-center">
        <div className="flex-1 bg-[#f7f5ef] rounded-2xl p-8 shadow-md border border-gray-200 w-full">
          <h2 className="text-4xl font-bebas font-bold mb-4 tracking-wider">INTERIOR STYLING</h2>
          <FAQAccordion qaList={interiorStylingQA} />
        </div>
        <div className="flex-1 flex justify-center items-center w-full">
          <Image
            src="/interior/i2.jpeg"
            alt="Interior Styling"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full h-auto max-h-[400px]"
          />
        </div>
      </section>

      {/* Furniture Designing Section */}
      <section className="py-16 bg-white flex flex-col md:flex-row-reverse gap-8 max-w-7xl mx-auto px-4 md:px-8 items-center">
        <div className="flex-1 bg-[#f7f5ef] rounded-2xl p-8 shadow-md border border-gray-200 w-full">
          <h2 className="text-4xl font-bebas font-bold mb-4 tracking-wider">FURNITURE DESIGNING</h2>
          <FAQAccordion qaList={furnitureDesignQA} />
        </div>
        <div className="flex-1 flex justify-center items-center w-full">
          <Image
            src="/villa/v1.jpeg"
            alt="Furniture Designing"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full h-auto max-h-[400px]"
          />
        </div>
      </section>

      {/* Marquee Gallery Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-2 sm:px-6">
          <Marquee className="h-full w-full" loop={50} gradient={true} gradientWidth={80} speed={40}>
            {Gallery.imageUrls?.map((image: ImageType, index: number) => {
              return (
                <div className="sm:w-[33vw] h-[400px] flex items-center justify-center mx-4" key={index}>
                  <Image
                    src={image.url}
                    alt="Images"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
