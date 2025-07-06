export default function ServicesSection() {
  const services = [
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
  ];

  return (
    <section className="w-full flex flex-col justify-center items-center py-6 sm:py-12 bg-black">
      <h2 className="text-white text-center font-bebas text-3xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight">OUR SERVICES</h2>
      <div className="w-full max-w-7xl px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service) => (
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
  );
} 