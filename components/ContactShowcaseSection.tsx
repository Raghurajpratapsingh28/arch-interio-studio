export default function ContactShowcaseSection() {
  // Dynamically import contact.json
  // @ts-ignore
  const contactData = require("@/data/contact.json");
  const items = contactData.ContactInfo.items;

  return (
    <section className="w-full bg-white py-16 flex flex-col items-center">
      <h2 className="text-black text-center font-bebas text-3xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight">KEEP IN TOUCH</h2>
      <h3 className="text-black text-center font-bebas text-xl sm:text-2xl font-bold mb-12 tracking-tight">CONTACT US</h3>
      <div className="w-full max-w-5xl px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {items.map((item: any, idx: number) => (
          <div
            key={item.type}
            className="bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-8 text-center border-2 border-black min-h-[220px]"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h4 className="text-lg font-bold font-bebas mb-2 text-black">{item.label}</h4>
            <p className="text-base text-gray-700 break-words">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 