import React from "react";

function FoundingTeamAbout() {
  return (
    <div className="min-h-[50vh] py-12 px-4 sm:px-8">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-black">Founding Team</h1>
        <div className="flex justify-center items-center mt-2">
          <div className="flex gap-2 justify-center items-center mb-8 sm:mb-16">
            <span className="border-2 border-red-500 w-8 sm:w-12"></span>
            <span className="border-2 border-black w-4 sm:w-5"></span>
            <span className="border-2 border-red-500 w-8 sm:w-12"></span>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8">
        {/* First Team Member */}
        <div className="bg-white p-6 sm:p-10 rounded-lg shadow-lg max-w-md lg:max-w-2xl text-center">
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            Ambitious targets are a driving force for our organization, pushing
            us to reach new heights and achieve the impossible. Our focus is on
            People, Culture, and keeping our employees happy, as we believe that
            a positive and motivated workforce is the key to success. We aim to
            foster a culture of limitless possibilities and empower employees to
            reach their full potential.
          </p>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Amith Reddy</h1>
          <span className="text-gray-600 text-sm sm:text-base">Founder</span>
        </div>

        {/* Second Team Member */}
        <div className="bg-white p-6 sm:p-10 rounded-lg shadow-lg max-w-md lg:max-w-2xl text-center">
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            I am committed to leading by example and fostering a
            process-oriented culture where efficiency and output are of utmost
            importance. I firmly believe that clear basics lead to optimized
            performance and continuous improvement in operations. This approach
            allows us to meet and exceed the expectations of our customers,
            while also driving growth and success for our company.
          </p>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Srikanth Reddy</h1>
          <span className="text-gray-600 text-sm sm:text-base">Co-founder & Managing Partner</span>
        </div>
      </div>
    </div>
  );
}

export default FoundingTeamAbout;