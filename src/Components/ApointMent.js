import { Divider } from "@mantine/core";
import teamImage from "../images/team.JPG";

export default function AppointmentForm() {
  return (
    <div className="h-[100vh]  max-w-screen-xl mx-auto">
      <div className="flex h-[80%] flex-col md:flex-row bg-white text-black rounded-lg shadow-lg">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2">
          <img
            src={teamImage}
            alt="Car Wash"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2 px-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">
            Appointment For Car Wash
          </h2>
          <p className="text-gray-600 mb-6">
            Now enjoy the car wash and car administration close to you. Make an
            arrangement and you're done!
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                required
                className="p-3 rounded border border-gray-300 w-full h-12 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
              <input
                type="email"
                placeholder="Your Email *"
                required
                className="p-3 rounded border border-gray-300 w-full h-12 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Subject *"
                required
                className="p-3 rounded border border-gray-300 w-full h-12 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
              <input
                type="tel"
                placeholder="Contact Number"
                className="p-3 focus:outline-none focus:ring-1 focus:ring-red-500 rounded border border-gray-300 w-full h-12"
              />
            </div>
            <textarea
              placeholder="Message *"
              required
              className="p-3 rounded border border-gray-300 w-full h-24 focus:outline-none focus:ring-1 focus:ring-red-500"
            ></textarea>

            {/* CAPTCHA Input */}
            <input
              type="text"
              placeholder="Type the below word"
              required
              className="p-3 rounded border border-gray-300 w-full h-12 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
            {/* Submit Button */}
            <button className="bg-black text-white font-bold p-3 w-fit rounded  h-12 hover:bg-red-500 transition-all duration-500 ease-in-out">
              MAKE AN APPOINTMENT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
