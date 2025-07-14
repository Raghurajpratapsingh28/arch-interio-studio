"use client";
import React from "react";
import Image from "next/image";

const founders = [
  {
    name: "Rupal yadav",
    description:
      "Our principle architect, a graduate from IP university, is a person who only thinks about design, making the client happy about every nook and corner of the house. She likes to update the team with every intricate detail. She is the best critic making her and their team perfect in every task.",
    image: "/founder/founder1.jpeg",
  },
  {
    name: "Vatsalya bajpai",
    description:
      "Co-founder and creative lead, Chirag brings a unique vision and passion for architecture and design. His leadership ensures every project is executed with precision and creativity.",
    image: "/images/bruno1.png",
  },
];

const testimonials = [
  {
    name: "Mr. & Mrs. Ailawadi",
    text:
      "Through a website search, my husband and I discovered Arch Interio Studio – The Best Interior Designers in Delhi, and I was so moved by the glowing testimonials. As soon as we met Vardha and her team, we felt at ease and confidence in their ability to produce blueprints for our new single-family home. Everyone was proficient, amiable, competent, knowledgeable, compassionate, and responsive right from the start. Response times for emails, texts, and phone calls were quick. We had a one-stop shop for all of our needs. The plans created were excellent, and it appears that no detail was overlooked. I have no reservations about recommending Arch Interio Studio. They are excellent at what they do and genuinely care.",
    image: "/images/books.jpg",
    rating: 5,
  },
];

const ParallaxHeader = () => (
  <div
    style={{
      backgroundImage: 'linear-gradient(rgba(30,30,30,0.5),rgba(30,30,30,0.5)), url("/actutechtural-project/ap10.jpeg")',
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
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10" />
    <h1 className="relative z-20 text-xl md:text-2xl font-semibold text-white tracking-widest drop-shadow-lg animate-slide-down uppercase" style={{letterSpacing: '0.1em'}}>About Us</h1>
  </div>
);

const AboutSection = () => (
  <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
    <Image
      src="/interior/i4.jpeg"
      alt="About Interior"
      width={600}
      height={400}
      className="rounded-2xl shadow-2xl w-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
    />
    <div className="bg-gradient-to-br from-white/80 to-gray-50/80 rounded-xl p-8 shadow-lg animate-fade-in">
      <h2 className="text-4xl font-extrabold mb-6 text-gray-800">About Us</h2>
      <p className="mb-4 text-lg text-gray-700">
        Welcome to Arch Interio Studio, where creativity meets craftsmanship in interior design, construction, and architectural excellence. We specialize in transforming spaces into inspiring environments that reflect your unique vision and lifestyle. With a passion for innovative design, sustainable building practices, and meticulous attention to detail, our team of experienced architects, designers, and builders collaborates to deliver spaces that are both functional and aesthetically captivating.
      </p>
      <p className="text-gray-700">
        From modern residential interiors to cutting-edge commercial builds, we approach every project with a commitment to quality, precision, and client satisfaction. Our holistic process integrates architectural expertise, thoughtful interior design, and seamless construction to bring your ideas to life. Let us shape your space into a masterpiece that inspires and endures.
      </p>
    </div>
  </section>
);

const FoundersSection = () => (
  <section className="bg-gradient-to-b from-gray-50 to-white py-16 animate-fade-in">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-800">Founders</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-12">
        {founders.map((founder) => (
          <div key={founder.name} className="bg-white rounded-2xl shadow-xl p-0 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300 max-w-2xl w-full">
            <div className="w-full aspect-square overflow-hidden rounded-2xl shadow-lg mb-6 relative group">
              <Image
                src={founder.image}
                alt={founder.name}
                width={400}
                height={400}
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay for desktop */}
              <div className="hidden md:flex flex-col items-center justify-center absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-white rounded-2xl">
                <h3 className="text-2xl font-bold mb-3">{founder.name}</h3>
                <p className="text-base">{founder.description}</p>
              </div>
            </div>
            {/* Always show text below on mobile */}
            <div className="md:hidden px-4 pb-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-800">{founder.name}</h3>
              <p className="text-gray-600 text-lg">{founder.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="py-16 animate-fade-in">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-800">What People Say?</h2>
      {testimonials.map((t, idx) => (
        <div key={idx} className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
          <Image
            src={t.image}
            alt={t.name}
            width={112}
            height={112}
            className="w-28 h-28 object-cover rounded-full mb-6 border-4 border-primary/30 shadow-lg"
          />
          <h3 className="text-xl font-bold mb-2 text-gray-800">{t.name}</h3>
          <div className="flex mb-3">
            {Array.from({ length: t.rating }).map((_, i) => (
              <span key={i} className="text-yellow-400 text-2xl">★</span>
            ))}
          </div>
          <p className="text-gray-600 text-lg">{t.text}</p>
        </div>
      ))}
    </div>
  </section>
);

// Animations (add to globals.css or tailwind config if not present)
// .animate-fade-in { animation: fadeIn 1s ease-in; }
// .animate-slide-down { animation: slideDown 1s ease-out; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes slideDown { from { transform: translateY(-40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

export default function AboutPage() {
  return (
    <div className="bg-white">
      <ParallaxHeader />
      <AboutSection />
      <FoundersSection />
    </div>
  );
} 