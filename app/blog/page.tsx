export const revalidate = 0;

import { getPosts, Post } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ParallaxHeader = () => (
  <div
    style={{
      backgroundImage:
        'linear-gradient(rgba(30,30,30,0.5),rgba(30,30,30,0.5)), url("/images/books.jpg")',
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
    <h1 className="relative z-20 text-3xl md:text-5xl font-semibold text-white tracking-widest drop-shadow-lg animate-slide-down uppercase" style={{ letterSpacing: '0.1em' }}>Our Blogs</h1>
  </div>
);

const BlogPage = async () => {
  const postsData: Post[] = await getPosts();

  return (
    <div className="bg-white min-h-screen">
      <ParallaxHeader />
      <section
        id="section"
        className="py-24 sm:py-32 relative w-full min-h-screen"
      >
        <div id="container" className="px-6 sm:px-24 w-full">
          <div className="text-gray-900 text-6xl font-bebas mb-12">
            {/* <h2>Our Blogs</h2> */}
          </div>
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {postsData.map((post, index) => {
              // Generate excerpt from post.body
              let excerpt = '';
              if (Array.isArray(post.body)) {
                const normalBlock = post.body.find(
                  (block: any) => block._type === 'block' && block.style === 'normal' && Array.isArray(block.children)
                );
                if (normalBlock && normalBlock.children[0] && normalBlock.children[0].text) {
                  excerpt = normalBlock.children[0].text.slice(0, 120) + (normalBlock.children[0].text.length > 120 ? '...' : '');
                }
              }
              return (
                <Link key={index} href={`blog/${post.slug?.current}` || ""}>
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col h-full group cursor-pointer transform hover:-translate-y-1">
                    {/* Top image */}
                    <div className="relative w-full h-56 overflow-hidden">
                      <Image
                        src={post.imageUrl}
                        alt={post.title || ""}
                        fill
                        className="object-cover w-full h-full rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {/* Card content */}
                    <div className="flex flex-col flex-1 p-6">
                      <h2 className="text-xl font-bebas font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h2>
                      <div className="flex items-center gap-2 mb-2 text-xs text-gray-500">
                        <span>{post.author}</span>
                        <span className="mx-1">•</span>
                        <span>{post.publishedAt}</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-4 line-clamp-2 flex-1">
                        {excerpt}
                      </p>
                      <span className="text-primary font-semibold hover:underline text-sm mt-auto">Read More</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
