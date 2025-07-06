export const revalidate = 0;

import { getHomepage, ImageType } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default async function Home() {
  const data = await getHomepage();

  const { Hero, Content, Expertises, Gallery, SectionImageOverlay } = data;

  return (
    <main className="no-scrollbar w-screen">
      <section
        id="section"
        className="py-6 sm:py-24 max-h-[1120px] h-screen sm:max-h-screen relative w-full justify-center flex items-center"
      >
        <div id="container" className=" px-6 sm:px-24 w-full h-full">
          <Image
            src={Hero.heroImage}
            alt="Hero Background cover"
            fill
            className="w-full h-full object-cover absolute"
          />
          <div className="flex sm:flex-row flex-col-reverse items-start sm:items-end gap-3 xl:gap-0 sm:justify-between w-full relative bottom-0 h-full">
            <button className="border-2 font-bebas pt-1 text-white hover:bg-white hover:text-black text-lg duration-300 border-white rounded-full px-9 py-1">
              Explore
            </button>
            <div className="flex flex-col">
              <h2 className="font-bold text-4xl leading-none font-bebas text-white">
                {Hero.heading}
              </h2>
              <p className="text-white text-lg">{Hero.tagline} </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="section"
        className="py-6 sm:py-24 h-fit sm:h-[50vh] sm:max-h-screen relative w-full justify-center flex items-center"
      >
        <div id="container" className=" px-6 sm:px-24 w-full h-full">
          <div className="flex xl:flex-row xl:gap-64 flex-col h-full justify-center xl:items-center">
            <div className="flex flex-col h-full sm:justify-center xl:gap-12 xl:text-center">
              <p className="uppercase text-xl">{Content.heading}</p>
              <p>{Content.tagline}</p>
            </div>
            <div className="flex flex-col gap-3 items-start sm:gap-9 xl:w-3/4">
              <p className="text-base">{Content.excerpt}</p>
              <Link href="/works">
                <button className="border-2 hover:bg-black hover:text-white duration-300 font-bebas pt-1 border-black rounded-full px-6 font-bold py-1">
                  Detail
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section
        id="section"
        className=" overflow-hidden h-fit relative w-full justify-center flex items-center"
      >
        <div id="container" className=" px-6 sm:px-24 w-full h-full">
          <div className="w-full h-fit">
            <h3 className="text-[100vh] leading-none font-bebas tracking-tighter">
              {SectionImageOverlay.heading}
            </h3>
            <div className="absolute top-[25%] aspect-square w-[88vw] sm:w-[30vw] left-0">
              <Image
                src={SectionImageOverlay.imageOverlay}
                alt=""
                width={320}
                height={320}
                className="h-full object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>
       {/* Services Section - like the reference image */}
       <section className="w-full flex flex-col justify-center items-center py-6 sm:py-12 bg-black">
        <h2 className="text-white text-center font-bebas text-3xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight">OUR SERVICES</h2>
        <div className="w-full max-w-7xl px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              number: '01',
              title: 'Architecture',
              desc: 'The unique and artistic practice of creating structures, especially livable ones. Architecture awakens us with abstract designs in space and light that overcome its engineering, safety, function, climate, and economic limits.'
            },
            {
              number: '02',
              title: 'Interior Designing',
              desc: 'We, as designers, use a wide range of abilities and technical expertise to create environments that anticipate our needs and appeal to our emotions. To create your interior, we work with a variety of disciplines, including architecture, graphic design, decorative arts, textiles, furniture, and lighting design.'
            },
            {
              number: '03',
              title: 'Interior Styling',
              desc: 'Everything in interior design revolves around how we use spaces. It has a significant impact on how we live, work, play, and even recover on a daily basis. We plan and execute cosy homes, practical offices, and lovely public areas.'
            },
            {
              number: '04',
              title: 'Furniture Designing',
              desc: 'Function and fashion converge in the specialist field of furniture design. Furthermore, we truly feel that furnishings are among the most significant features of interior design. Furniture gives a room flair and personality in addition to adding purpose and practicality.'
            }
          ].map((service, idx) => (
            <div
              key={service.number}
              className="group transition-colors duration-300 bg-white hover:bg-black border-2 border-black rounded-xl p-4 flex flex-col h-full shadow-md cursor-pointer"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl font-bebas font-bold mb-2 text-black group-hover:text-white transition-colors duration-300">{service.number}</span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-bebas mb-2 text-black group-hover:text-white transition-colors duration-300">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-700 group-hover:text-gray-200 transition-colors duration-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
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
                {Gallery.imageUrls.map((image: ImageType, index: number) => {
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
      {/* IN THE SPOTLIGHT Publication Section */}
      <section className="w-full bg-white py-10 sm:py-16 flex flex-col items-center">
        <h2 className="text-black text-center font-bebas text-xl sm:text-2xl md:text-3xl font-bold mb-2 tracking-tight">IN THE SPOTLIGHT</h2>
        <h3 className="text-black text-center font-bebas text-l sm:text-xl font-bold mb-10 tracking-tight">ALL PUBLICATION</h3>
        <div className="w-full max-w-7xl px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
              title: "The Architect's Diary",
              desc: 'The Visionaries Transforming Interiors: How Todays Most Innovative Designers Are Revolutionizing the Way We Live, Work, and Feel Within Spaces',
            },
            {
              img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
              title: 'Architectural Digest India',
              desc: 'The Visionaries Transforming Interiors: How Todays Most Innovative Designers Are Revolutionizing the Way We Live, Work, and Feel Within Spaces',
            },
            {
              img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
              title: 'India Today Home',
              desc: 'The Visionaries Transforming Interiors: How Todays Most Innovative Designers Are Revolutionizing the Way We Live, Work, and Feel Within Spaces',
            },
            {
              img: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=600&q=80',
              title: 'Elle Decor',
              desc: 'The Visionaries Transforming Interiors: How Todays Most Innovative Designers Are Revolutionizing the Way We Live, Work, and Feel Within Spaces',
            },
          ].map((pub, idx) => (
            <div
              key={idx}
              className="relative rounded-[2.5rem] overflow-hidden shadow-lg flex flex-col justify-end min-h-[450px] h-[55vw] max-h-[500px] group"
              style={{animation: `fadeUp 0.7s ${0.1 * idx + 0.2}s both`}}
            >
              <img
                src={pub.img}
                alt={pub.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-10 p-6 flex flex-col justify-end h-full bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <h4 className="text-white font-bebas text-2xl sm:text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg animate-fade-up opacity-0 group-hover:opacity-100 transition-opacity duration-500">{pub.title}</h4>
                {pub.desc && (
                  <p className="text-white text-base sm:text-lg font-semibold drop-shadow-lg animate-fade-up opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{pub.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <style>{`
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>
        {/* Blog Posts Section - below the photos section */}
        <section className="w-full bg-white py-10 sm:py-16 flex flex-col items-center">
        <h2 className="text-black text-center font-bebas text-3xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight">RECENT BLOGS</h2>
        <div className="w-full max-w-7xl px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(() => {
            // Dynamically import posts.json
            // @ts-ignore
            const postsData = require("@/data/posts.json");
            const posts = postsData.posts || [];
            return posts.map((post: any, idx: number) => (
              <div
                key={post.slug.current}
                className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col h-full group border border-gray-200"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-bebas mb-2 text-black group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-2">
                    {new Date(post.publishedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <p className="text-sm text-gray-700 flex-1 mb-4">
                    {/* Show excerpt from first block of body */}
                    {post.body && post.body[1] && post.body[1].children && post.body[1].children[0] && post.body[1].children[0].text
                      ? post.body[1].children[0].text.slice(0, 120) + (post.body[1].children[0].text.length > 120 ? '...' : '')
                      : ''}
                  </p>
                  <Link href={`/blog/${post.slug.current}`} className="mt-auto">
                    <span className="text-primary font-semibold hover:underline">Read More</span>
                  </Link>
                </div>
              </div>
            ));
          })()}
        </div>
      </section>
      <section
        id="section"
        className=" overflow-hidden sm:py-24 py-6 relative w-full justify-center flex items-center"
      >
        <div id="container" className="px-6 sm:px-24 w-full h-full">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-5xl font-bebas">Our Expertise</h2>
          </div>
          <div className="w-full h-full gap-6 flex flex-col sm:flex-row justify-between items-center">
            {Expertises.map((expertise: any, index: number) => {
              return (
                <Link
                  key={index}
                  href="/works"
                  className="h-full w-full border-2 border-black p-6 group sm:w-1/2 flex items-center justify-center flex-col"
                >
                  <span className="text-2xl relative z-10 text-black font-bebas ">
                    {expertise.heading}
                  </span>
                  <div className="h-full sm:h-[60vh] w-full overflow-hidden">
                    <Image
                      src={expertise.url}
                      alt=""
                      width={320}
                      height={320}
                      className=" group-hover:scale-105 duration-300 h-full w-full object-cover"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      {/* Contact Us Showcase Section */}
      <section className="w-full bg-white py-16 flex flex-col items-center">
        <h2 className="text-black text-center font-bebas text-3xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight">KEEP IN TOUCH</h2>
        <h3 className="text-black text-center font-bebas text-xl sm:text-2xl font-bold mb-12 tracking-tight">CONTACT US</h3>
        <div className="w-full max-w-5xl px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {(() => {
            // Dynamically import contact.json
            // @ts-ignore
            const contactData = require("@/data/contact.json");
            const items = contactData.ContactInfo.items;
            return items.map((item: any, idx: number) => (
              <div
                key={item.type}
                className="bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-8 text-center border-2 border-black min-h-[220px]"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold font-bebas mb-2 text-black">{item.label}</h4>
                <p className="text-base text-gray-700 break-words">{item.value}</p>
              </div>
            ));
          })()}
        </div>
      </section>
      {/* Get In Touch Section - Form and Map */}
      <section className="w-full flex flex-col items-center justify-center py-16 bg-white">
        <div className="w-full max-w-5xl px-4 flex flex-col md:flex-row gap-8 md:gap-0 md:justify-between md:items-stretch shadow-xl rounded-2xl bg-white border border-gray-200">
          {/* Form */}
          <div className="flex-1 p-8 flex flex-col justify-center rounded-l-2xl">
            <h2 className="text-black font-bebas text-3xl sm:text-4xl font-bold mb-6">Get In Touch</h2>
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-base font-semibold mb-1">Name <span className="text-red-500">*</span></label>
                <input type="text" required placeholder="Enter Your Name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition" />
              </div>
              <div>
                <label className="block text-base font-semibold mb-1">Mobile Number <span className="text-red-500">*</span></label>
                <input type="tel" required placeholder="Enter Your Mobile Number" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition" />
              </div>
              <div>
                <label className="block text-base font-semibold mb-1">City <span className="text-red-500">*</span></label>
                <input type="text" required placeholder="Enter Your City Name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition" />
              </div>
              <div>
                <label className="block text-base font-semibold mb-1">Project Size (SQ Feet) <span className="text-red-500">*</span></label>
                <input type="text" required placeholder="Enter Your Project Size" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition" />
              </div>
              <div>
                <label className="block text-base font-semibold mb-1">Project location <span className="text-red-500">*</span></label>
                <input type="text" required placeholder="Enter Your Project location" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition" />
              </div>
              <div>
                <label className="block text-base font-semibold mb-1">Your Requirements <span className="text-red-500">*</span></label>
                <textarea required placeholder="Enter Your Requirements" className="w-full border border-gray-300 rounded-md px-4 py-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-black transition" />
              </div>
              <button type="submit" className="mt-2 bg-black text-white font-bold py-2 rounded-md hover:bg-gray-900 transition">Submit</button>
            </form>
          </div>
          {/* Map */}
          <div className="flex-1 p-4 flex items-center justify-center rounded-r-2xl">
            <div className="w-full h-80 md:h-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.01399336713!2d77.068899!3d28.667856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d035b6b6b6b6b%3A0x7b7b7b7b7b7b7b7b!2sDelhi!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
