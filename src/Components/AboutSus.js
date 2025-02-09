import React from 'react'

function AboutSus() {
  return (
    <div className=' min-h-[80vh] mt-10 bg-green-50'>
        <h1 className=' text-center text-4xl p-5'>Sustainability, driving change, <br></br> one car at a time</h1>
        <div className=' flex justify-center items-center mt-10'>
            <div className=' w-[40%] text-xl font-normal leading-8 text-slate-600 '>
                <p>
                We believe every car has the potential to make the world better—not just for its owner but for the planet. Owning a car is more than a privilege; it's a responsibility.
                </p>
                <br></br>
                <p>
                The environmental impact of manufacturing a new car can be staggering—up to 20 metric tons of CO2. But by giving pre-owned cars a new life, we actively reduce waste, emissions, and the overall carbon footprint.
                </p>
                <br></br>
                <p>
                <span className=' text-green-700'>In 2023 alone, over 200,000 used cars found new owners through CARS24, saving an incredible 2.5 million metric tons of CO2.</span>That’s more than just numbers—it’s tangible proof that sustainability isn’t a goal for tomorrow; it’s a commitment we’re delivering today.
                </p>
                <br></br>
                <button className='px-5 py-2 bg-blue-500 text-white rounded-xl border-none hover:bg-blue-600' >Know More</button>
            </div>
            <div className='w-[40%] flex items-center justify-center'>
                <img className=' rounded-3xl h-[500px]' src='https://cdn.cars24.com/prod/cms/2024/12/30/fd17b7f8-ad90-4fd9-a68f-8a3024516b56Content%20W%20Image.png' alt=''/>
            </div>
        </div>
    </div>
  )
}

export default AboutSus