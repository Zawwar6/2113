import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faShip, faFileContract } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  return (
    <>
      <section className='bg-white text-black py-20' id='services'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-3xl md:text-4xl font-extrabold text-center mb-4'>Our Services</h2>

          <div className="w-24 h-1 bg-[#ff5500] mx-auto"></div>
          <p className="mt-6 text-gray-800 text-center max-w-2xl mx-auto">
            Comprehensive solutions to streamline your global trade operations
          </p>

          <div className=' grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-x-30'>

            {/* Service 1 - with card zoom and shadow on hover */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 ">
              <div className="service-icon text-5xl text-secondary mb-6 transition-all duration-300 hover:scale-110 hover:text-[#ff5500]">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Product Sourcing</h3>
              <p className="text-gray-700">
                Access our global network of verified suppliers to find the perfect products for your business needs.
              </p>
            </div>

            {/* Service 2 - with icon zoom and color change on hover */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              <div className="service-icon text-5xl mb-6 transition-all duration-300 hover:scale-110 hover:text-[#ff5500]">
                <FontAwesomeIcon icon={faShip} />
              </div>
              <h3 className='text-2xl font-bold mb-4'>Logistics & Shipping</h3>
              <p className='text-gray-700'>End-to-end logistics solutions with real-time tracking and optimized shipping routes.</p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              <div className="service-icon text-5xl mb-6 transition-all duration-300 hover:scale-110 hover:text-[#ff5500]">
                <FontAwesomeIcon icon={faFileContract} />
              </div>
              <h3 className='text-2xl font-bold mb-4'>Customs & Compliance</h3>
              <p className='text-gray-700'>Navigate complex international regulations with our expert compliance team and documentation services.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Services
