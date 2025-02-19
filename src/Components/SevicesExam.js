import React from 'react';
import servicesbg from '../images/Servicebg.JPG';

function ServicesExam() {
  const services = [
    { title: "Standard Car Wash", description: "Keep your vehicle fine and running, we give a normal examination which will stay away from your vehicle from confronting." },
    { title: "Premium Car Wash", description: "A thorough cleaning service with additional waxing and tire shine to make your car look brand new." },
    { title: "Interior Cleaning", description: "Detailed cleaning of seats, carpets, and dashboard to maintain a fresh interior." },
    { title: "Exterior Detailing", description: "Complete cleaning and polishing of your car’s exterior to remove dirt and scratches." }
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-20 space-y-10 p-10 mb-28">
      {services.map((service, index) => (
        <div key={index} className="relative w-full md:w-[50%] lg:w-[40%] flex justify-center items-center">
          <div className="relative w-[40vw]">
            <img className="w-full h-full object-cover rounded-lg" src={servicesbg} alt="Service" />
          </div>

          <div className="absolute top-3/4 left-[20%] w-[60%] h-[40%] justify-center items-center bg-white shadow-lg p-8 flex rounded-lg">
            <div className="text-4xl font-bold text-gray-300 mr-4">{`0${index + 1}`}</div>

            <div>
              <h2 className="text-xl font-bold hover:text-red-500 cursor-pointer transition-all duration-300 ease-in">{service.title}</h2>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServicesExam;
