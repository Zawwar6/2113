import { faBold, faBolt, faDollarSign, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ChooseUs = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-[#ff5500] mx-auto"></div>
          <p className="mt-6 text-gray-800 max-w-2xl mx-auto">
            Our commitment to excellence sets us apart in the global trade industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Fast Turnaround */}
          <div className="value-item bg-white rounded-lg p-8 text-center shadow-md">
            <div className="bg-orange-50 bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <FontAwesomeIcon icon={faBolt} className="text-[#ff5500] text-3xl" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Fast Turnaround</h3>
            <p className="text-gray-700">
              Expedited processing and shipping to meet your tight deadlines and business requirements.
            </p>
          </div>

          {/* Transparent Pricing */}
          <div className="value-item bg-white rounded-lg p-8 text-center shadow-md">
            <div className="bg-orange-50 bg-opacity-60 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <FontAwesomeIcon icon={faDollarSign} className="text-[#ff5500]    text-3xl" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Transparent Pricing</h3>
            <p className="text-gray-700">
              Clear, upfront pricing with no hidden fees. Know exactly what you're paying for.
            </p>
          </div>

          {/* Global Reach */}
          <div className="value-item bg-white rounded-lg p-8 text-center shadow-md">
            <div className="bg-orange-50 bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <FontAwesomeIcon icon={faGlobe} className="text-[#ff5500] text-4xl" />
              {/* Replace with globe icon if needed */}
            </div>
            <h3 className="text-2xl font-bold mb-3">Global Reach</h3>
            <p className="text-gray-700">
              Operations in over 50 countries with local expertise and international standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChooseUs
