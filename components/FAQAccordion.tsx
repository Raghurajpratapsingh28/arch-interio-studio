"use client";
import React, { useState } from "react";

interface QAItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  qaList: QAItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ qaList }) => {
  const [openIndex, setOpenIndex] = useState(-1);
  return (
    <div className="flex flex-col gap-4">
      {qaList.map((item, idx) => (
        <div key={idx} className="border border-black rounded-xl overflow-hidden bg-white shadow-md">
          <button
            className="w-full text-left px-6 py-4 font-bold font-bebas text-lg sm:text-xl flex justify-between items-center focus:outline-none hover:bg-gray-100 transition"
            onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            type="button"
          >
            <span>{item.question}</span>
            <span className="ml-4 text-2xl">{openIndex === idx ? '−' : '+'}</span>
          </button>
          {openIndex === idx && (
            <div className="px-6 pb-4 text-base text-gray-800 animate-fade-in">
              {item.answer.split('\n').map((line, i) => (
                <p key={i} className="mb-2 last:mb-0">{line}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion; 