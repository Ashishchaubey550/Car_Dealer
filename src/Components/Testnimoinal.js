import React, { useState, useEffect, useCallback } from 'react';
import { Carousel } from '@mantine/carousel';
import { useInterval } from '@mantine/hooks';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import logo from '../images/logo.png';
import test from '../Data/Testnomial.json';

function Testnimoinal() {
  const [embla, setEmbla] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hover, setHover] = useState(false); // Track hover state

  // Auto-scroll interval
  const interval = useInterval(() => {
    if (embla) embla.scrollNext();
  }, 3000);

  useEffect(() => {
    if (embla) {
      interval.start();
      embla.on('select', () => setSelectedIndex(embla.selectedScrollSnap()));

      return () => {
        interval.stop();
      };
    }
  }, [embla]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (event) => {
      if (!embla) return;
      if (event.key === 'ArrowLeft') embla.scrollPrev();
      if (event.key === 'ArrowRight') embla.scrollNext();
    },
    [embla]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className='min-h-[50vh] max-w-screen-xl mx-auto mt-12 relative p-4 sm:p-8 lg:p-16'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Heading Section */}
      <div className='mb-6 flex justify-center items-center flex-col text-center'>
        <h1 className='text-xl sm:text-2xl font-semibold text-black'>Testimonial</h1>
        <h2 className='text-2xl sm:text-3xl font-bold text-black mt-2'>
          10000+ Unforgettable journeys
        </h2>
        <div className='flex gap-5 justify-center p-3 items-center'>
          <span className='border-2 border-red-500 w-12'></span>
          <span className='border-2 border-black w-5'></span>
          <span className='border-2 border-red-500 w-12'></span>
        </div>
      </div>

      {/* Carousel */}
      <Carousel
        height={250}
        slideSize={{ base: '100%', sm: '50%', md: '33.3333%' }}
        slideGap='md'
        loop
        align='start'
        getEmblaApi={setEmbla}
        dragFree
        transitionDuration={300}
      >
        {test.map((elem, index) => (
          <Carousel.Slide key={index} className='flex justify-center transition-all duration-500 ease-out'>
            <div className='w-full sm:w-96 p-6 sm:p-10 h-72 bg-white shadow-lg rounded-lg flex flex-col items-start justify-center relative border'>
              <p className='text-gray-700 text-sm'>{elem.testimonial}</p>
              <div className='mt-4 flex items-center gap-4'>
                <img src={logo} alt='User' className='h-12 sm:h-14 w-12 sm:w-14 rounded-full border-2 border-gray-300' />
                <div>
                  <h1 className='text-sm sm:text-md font-semibold text-gray-900'>{elem.name}</h1>
                  <h2 className='text-red-600 text-xs sm:text-sm font-medium'>{elem.designation}</h2>
                  <span className='text-yellow-500'>{'⭐'.repeat(elem.rating)}</span>
                </div>
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
      {/* Dots Navigation */}
      <div className='flex justify-center mt-4 space-x-2'>
        {test.slice(0,2).map((_, index) => (
          <button
            key={index}
            onClick={() => embla && embla.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ease-in-out ${
              index === selectedIndex ? 'bg-red-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Testnimoinal;