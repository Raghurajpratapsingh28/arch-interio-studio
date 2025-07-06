import Image from "next/image";

export default function PublicationsSection() {
  const publications = [
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
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-16 flex flex-col items-center">
      <h2 className="text-black text-center font-bebas text-xl sm:text-2xl md:text-3xl font-bold mb-2 tracking-tight">IN THE SPOTLIGHT</h2>
      <h3 className="text-black text-center font-bebas text-l sm:text-xl font-bold mb-10 tracking-tight">ALL PUBLICATION</h3>
      <div className="w-full max-w-7xl px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {publications.map((pub, idx) => (
          <div
            key={idx}
            className="relative rounded-[2.5rem] overflow-hidden shadow-lg flex flex-col justify-end min-h-[450px] h-[55vw] max-h-[500px] group"
            style={{animation: `fadeUp 0.7s ${0.1 * idx + 0.2}s both`}}
          >
            <Image
              src={pub.img}
              alt={pub.title}
              fill
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
  );
} 