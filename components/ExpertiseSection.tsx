import Image from "next/image";
import Link from "next/link";

interface ExpertiseSectionProps {
  expertises: Array<{
    heading: string;
    url: string;
  }>;
}

export default function ExpertiseSection({ expertises }: ExpertiseSectionProps) {
  return (
    <section
      id="section"
      className=" overflow-hidden sm:py-12 py-4 relative w-full justify-center flex items-center"
    >
      <div id="container" className="px-4 sm:px-12 w-full h-full">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bebas">Our Expertise</h2>
        </div>
        <div className="w-full h-full gap-4 flex flex-col sm:flex-row justify-between items-center">
          {expertises.map((expertise: any, index: number) => {
            return (
              <Link
                key={index}
                href="/works"
                className="h-full w-full border-2 border-black p-4 group sm:w-1/2 flex items-center justify-center flex-col"
              >
                <span className="text-xl relative z-10 text-black font-bebas ">
                  {expertise.heading}
                </span>
                <div className="h-full sm:h-[40vh] w-full overflow-hidden">
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
  );
} 