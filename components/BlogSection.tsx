import Image from "next/image";
import Link from "next/link";

export default function BlogSection() {
  // Dynamically import posts.json
  // @ts-ignore
  const postsData = require("@/data/posts.json");
  const posts = postsData.posts || [];

  return (
    <section className="w-full bg-white py-10 sm:py-16 flex flex-col items-center">
      <h2 className="text-black text-center font-bebas text-3xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight">RECENT BLOGS</h2>
      <div className="w-full max-w-7xl px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post: any, idx: number) => (
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
        ))}
      </div>
    </section>
  );
} 