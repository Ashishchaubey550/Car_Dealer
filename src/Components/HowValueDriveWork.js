import React from 'react';
import sticker1 from "../images/Sticker1.avif"
import sticker2 from "../images/Sticker2.avif"
import sticker3 from "../images/Sticker3.avif"


function HowValueDriveWork() {
  return (
    <div className="mt-10 min-h-[40v] bg-neutral-100 p-16">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-bold p-2">How Value Drive Works</h1>
        <p className="text-gray-600">
          You won't just love our cars, you'll love the way you buy them.
        </p>

        <div className="flex flex-row justify-center mt-8 gap-10">
          {/* Step 1 */}
          <div className="flex flex-col items-center max-w-xs">
            <img src={sticker1} alt="Choose car" className="w-52 h-40" />
            <h2 className="text-lg font-semibold mt-4">Choose from the best pre-owned cars</h2>
            <p className="text-gray-500 text-sm text-center">
              20,000+ fully inspected cars online
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center max-w-xs">
            <img src={sticker2} alt="Test drive" className="w-52 h-40" />
            <h2 className="text-lg font-semibold mt-4">Take a test drive at Value Drive Hub</h2>
            <p className="text-gray-500 text-sm text-center">
              Sanitized cars for every test drive
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center max-w-xs">
            <img src={sticker3} alt="Payment and delivery" className="w-52 h-40" />
            <h2 className="text-lg font-semibold mt-4">Online Payment. Doorstep Delivery.</h2>
            <p className="text-gray-500 text-sm text-center">
              And 5-day money back guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowValueDriveWork;
