import React from "react";
import hello from "../images/insight/hello.gif";
import rating from "../images/insight/rating.gif";
import testdrive from "../images/insight/testdrive.gif";

function HeroInsight() {
  const details = [
    { video: hello, point: "3.5/5", para: "Our average review rating",  },
    { video: rating, point: "4.2/5", para: "Customer satisfaction",  },
    { video: testdrive, point: "80%", para: "Test drives completed",  },
  ];

  return (
    <div className="min-h-[30vh] mt-4 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-4xl font-bold text-black mb-6">Insights That Drive Us</h1>

      {/* Stats Container */}
      <div className="flex items-center justify-center gap-6 w-[80%]">
        {details.map((elem, index) => (
          <div
            key={index}
            className={`w-64 p-6 h-32 rounded-2xl shadow-lg flex items-center justify-center group transition-all duration-300 ease-in-out`}
          >
            <div className="group-hover:opacity-100">
              {/* When hovered, the image gets full opacity and shows animation */}
              <img
                src={elem.video}
                alt="Insight"
                className="w-16 h-16 mb-2 transition-all duration-300 ease-in-out"
              />
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-xl font-bold text-purple-800">{elem.point}</h2>
              <p className="text-gray-600 text-center text-sm">{elem.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroInsight;
