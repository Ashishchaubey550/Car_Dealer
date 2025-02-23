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
    question: "Does Value Drive assist with car financing?  ",
    answer: "Yes, Value Drive provides loan assistance and helps you secure financing through banks, ensuring a smooth and hassle-free process.",
  },
  {
    question: "Does Value Drive provide a warranty on their cars?",
    answer: "Yes, Value Drive offers a warranty on certified cars to ensure quality and reliability. Their vehicles go through thorough inspections before being sold.",
  },
  {
    question: "What is the background of Value Drive?",
    answer: "Established in 2019, Value Drive is a part of the renowned Ram Group. With a strong presence in the automotive industry, we have successfully sold over 5,000+ used cars to satisfied customers. Backed by a team of 2,000+ employees, Ram Group has strategic partnerships with leading brands such as Toyota, MG, Hyundai, Honda, Mercedes, and Ather, ensuring quality and trust in every transaction.",
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
