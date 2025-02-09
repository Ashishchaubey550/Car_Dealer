import React from 'react'
import { Carousel } from '@mantine/carousel';

function HeroNeedHelp() {
  return (
    <div className='min-h-[40%]'>
        <h1 className=' ml-14 text-5xl font-semibold'>Need help?</h1>
        <div className=' flex  items-center mt-20 mb-10 cursor-pointer'>
        <div className='p-2 ml-14 flex gap-5  bg-gray-400 justify-center items-center'>
          <div><i className="ri-whatsapp-line text-3xl"></i></div>
          <div className='text-xl font-semibold'>
            <h1>Ask Us On Whatsapp!</h1>
            <h2>Get Instent Support via Experts</h2>
          </div>
          <div>
          <i className="ri-arrow-right-line text-2xl"></i>
          </div>
        </div>
        <div className=' p-2 bg-gray-400 ml-14 flex gap-5 justify-center items-center'>
          <div><i className="ri-whatsapp-line text-3xl"></i></div>
          <div className='text-xl font-semibold'>
            <h1>Ask Us On Whatsapp!</h1>
            <h2>Get Instent Support via Experts</h2>
          </div>
          <div>
          <i className="ri-arrow-right-line text-2xl"></i>
          </div>
        </div>
        <div className=' bg-gray-400 p-2 ml-14 flex gap-5 justify-center items-center'>
          <div><i className="ri-whatsapp-line text-3xl"></i></div>
          <div className='text-xl font-semibold'>
            <h1>Ask Us On Whatsapp!</h1>
            <h2>Get Instent Support via Experts</h2>
          </div>
          <div>
          <i className="ri-arrow-right-line text-2xl"></i>
          </div>
        </div>
        </div>
    </div>
  )
}

export default HeroNeedHelp;