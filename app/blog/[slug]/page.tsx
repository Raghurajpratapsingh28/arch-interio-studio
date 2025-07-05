export const revalidate = 0;

import Image from "next/image";
import Link from "next/link";
import { getDetailPost } from "@/libs/data";


const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const data = await getDetailPost(slug);

  if (!data) {
    return (
      <section className="py-24 sm:py-24 relative w-full justify-center flex items-center bg-black">
        <div className="px-6 sm:px-24 w-full h-full flex flex-col items-center">
          <h1 className="text-6xl text-white font-bebas">Post not found</h1>
        </div>
      </section>
    );
  }

  return (
    <section
      id="section"
      className="py-24 sm:py-24 relative w-full justify-center flex items-center bg-black"
    >
      <div
        id="container"
        className=" px-6 sm:px-24 w-full h-full flex flex-col items-center"
      >
        <div className="flex flex-col w-full">
          <div className="flex flex-col sm:flex-row text-white border-b-white border-b-2 pb-5 justify-between items-start sm:items-center">
            <div>
              <p>{data.author}</p>
              <p>{data.publishedAt}</p>
            </div>
            <div className="flex flex-wrap">
              {data.categories?.map((category: string, index: number) => {
                return (
                  <p
                    className="border-2 border-white rounded-full px-6 py-2"
                    key={index}
                  >
                    {category}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="py-6">
            <h1 className="text-6xl text-white font-bebas leading-none">
              {data.title}
            </h1>
          </div>
          <div className="aspect-auto h-[45vh] sm:h-auto w-full">
            <Image
              src={data.imageUrl}
              alt={data.slug?.current || ""}
              width={420}
              height={600}
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="text-white w-full sm:w-[60vw] flex justify-center items-start flex-col">
          {data.body && data.body.map((block: any, index: number) => {
            if (block._type === 'block' && block.style === 'normal') {
              return (
                <p key={index} className="!mb-6">
                  {block.children?.[0]?.text || ''}
                </p>
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogDetailPage;
