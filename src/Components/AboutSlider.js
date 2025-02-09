import { Carousel } from "@mantine/carousel";
import { useEffect, useRef } from "react";
import AboutData from "../Data/AboutUsSliderData";
import Autoplay from "embla-carousel-autoplay"; // Import autoplay plugin

function AboutSlider() {
  const autoplay = useRef(Autoplay({ delay: 1000 })); // Auto-slide every 3 seconds

  return (
    <div className="flex flex-col mt-10">
      <Carousel
        slideSize="50%"
        height={200}
        slideGap="sm"
        controlsOffset="xl"
        controlSize={40}
        loop
        dragFree
        withIndicators
        plugins={[autoplay.current]} // Add autoplay plugin
        breakpoints={[
          { maxWidth: "xl", slideSize: "100%" },
          { maxWidth: "sm", slideSize: "100%" },
        ]}
        onMouseEnter={() => autoplay.current.stop()} // Stop autoplay when hovering
        onMouseLeave={() => autoplay.current.reset()} // Restart autoplay when leaving
      >
        {AboutData.slice(0, 3).map((elem, index) => ( // Show only 3 slides
          <Carousel.Slide key={index}>
            <div className="flex flex-col items-center p-4  rounded-lg shadow-md">
              <img
                src={elem.image}
                alt={elem.headings}
                className="w-full relative h-full object-cover rounded-3xl"
              />
              <h3 className="mt-4 bottom-20 left-10 absolute text-xl font-semibold text-white text-center">
                {elem.headings}
              </h3>
              <p className="text-white text-xl bottom-11 mt-4 left-10 absolute text-center">{elem.description}</p>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}

export default AboutSlider;
