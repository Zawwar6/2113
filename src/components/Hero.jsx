import React from 'react'

const Hero = () => {
  return (
    <>
    <section className='hero-section h-screen flex items-center justify-center text-light pt-16'>
      <div className='container mx-auto flex flex-col items-center justify-center h-full'>
        <div className='text-center'>
          <h1 className='text-4xl md:text-6xl text-white font-extrabold mb-4'>Global Trade, <span className='text-[#ff5500]'>Redefined</span></h1>
          <p className='text-white text-xl md:text-2xl mb-10 max-w-2xl mx-auto'>Connecting businesses across continents with innovative import/export solutions</p>
          <a href="contact" className='cta-button bg-[#ff5500] hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-md text-lg shadow-lg'>Get a Quote</a>
        </div>

      </div>

    </section>
    </>
  )
}

export default Hero