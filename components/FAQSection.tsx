import FAQAccordion from "./FAQAccordion";

export default function FAQSection() {
  // Dynamically import Q&A data
  // @ts-ignore
  const qaData = require("@/data/Q&A.json");
  const qaList = qaData.qa || [];

  return (
    <section className="w-full bg-white py-10 sm:py-16 flex flex-col items-center">
      <h2 className="text-black text-center font-bebas text-2xl sm:text-3xl md:text-5xl font-bold mb-8 tracking-tight">FREQUENTLY ASKED QUESTIONS</h2>
      <div className="w-full max-w-7xl px-4">
        <FAQAccordion qaList={qaList} />
      </div>
    </section>
  );
} 