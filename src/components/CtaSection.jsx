import React from 'react'

const CtaSection = () => {
  return (
  <>
   <section className='bg-[#ff5500] text-white py-20'>
    <div className='container mx-auto px-4'>
      <div className='text-center'>
        <h2 className='text-5xl md:text-4xl font-bold mb-6 text-white'>Ready to Transform Your Global Trade?</h2>
        <p className='text-white  mb-10 text-lg'>Join thousands of businesses that trust 2113 Mercatores for their <br /> import/export needs.</p>
        <div class="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
             <a href="#contact">   <button className="bg-white hover:bg-gray-100 cursor-pointer text-black font-bold py-3 px-8 rounded-md shadow-lg transition-colors">
                    Contact Our Team
                </button></a>
               <a href="#contact"> <button className="bg-black hover:bg-gray-800 cursor-pointer text-white font-bold py-3 px-8 rounded-md shadow-lg transition-colors">
                    Request a Quote
                </button></a>
            </div>
      </div>
    </div>
    
    </section>  
  
  
  </>
  )
}

export default CtaSection