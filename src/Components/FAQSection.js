import { useState } from "react";

const faqs = [
  {
    question: "When and where can I take a test drive?",
    answer:
      "With our test drive booking form, you can conveniently schedule a test drive at home or visit our hub to try out multiple cars. Once you book your preferred option, your relationship manager will call you to confirm the details before arriving at your location.",
  },
  {
    question: "What’s the process for booking my car?",
    answer: "The process is simple. You can book your car online or visit our nearest hub. Once you select a car, complete the paperwork, and the car is yours!",
  },
  {
    question: "Will Value Drive help me with car finance?",
    answer: "Yes, Spinny provides financing options with low-interest rates starting from 12.99%. You can apply for a loan directly through our platform.",
  },
  {
    question: "How does Value Drive money-back guarantee work?",
    answer: "If you’re not satisfied with your purchase, you can return the car within a specified period for a full refund, no questions asked.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl  font-bold text-center text-black mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 mt-10 ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4 overflow-hidden transition-all duration-500 ease"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center font-semibold text-black py-2 transition-all duration-500 ease-in"
            >
              {faq.question}
              <span className="transition-transform duration-500 ease-in transform "
              >
                {openIndex === index ? (
                  <i className="ri-arrow-up-s-fill text-red-400 text-xl"></i>
                ) : (
                  <i className="ri-arrow-down-s-fill text-red-500 text-xl"></i>
                )}
              </span>
            </button>
            <div
              className={`transition-max-height duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 p-6 bg-[#19191B] rounded-lg transition-all duration-500 ease-in">
        <h3 className="text-lg font-bold text-white mb-2">
          Why buy a used car from <span className=" text-red-500 font-semibold">Value Drive</span>?
        </h3>
        <p className="text-white text-sm font-normal">
        Value Drive takes the uncertainty out of buying a used car. Every car undergoes a rigorous 200-point quality check, ensuring top-notch reliability and performance. We provide hassle-free paperwork, free RC transfer, and flexible financing options with low-interest rates. Experience a seamless, transparent, and trustworthy car-buying journey with Value Drive – where quality meets trust. Buy a car you'll love, guaranteed.
        </p>
      </div>
    </div>
  );
}
