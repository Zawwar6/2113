import React from 'react';

const About = () => {
  return (
    <section id='about' className='bg-white py-20'>
      <div className='container mx-auto px-4'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About 2113 Mercatores</h2>
            <div className="w-24 h-1 bg-[#ff5500] mb-6"></div>
            <p className="text-gray-700 mb-6">
            2113 Mercatores has reimagined the way the world conducts trade by fusing years of hands-on
import/export expertise with cutting-edge technological innovation. What began as a bold vision to
simplify global commerce has evolved into a dynamic force reshaping how businesses of all sizes
connect, transact, and grow across borders.
<p className='text-gray-700 mb-7 mt-4'>
We are driven by a mission to modernize international trade—making it not only more efficient, but
also radically more accessible and transparent. In a world where outdated systems and fragmented
logistics often hinder progress, we bring clarity, speed, and reliability to every step of the process.
</p>
<p className='text-gray-700 mb-7 '>
Our team is composed of seasoned trade professionals, logistics strategists, and tech pioneers who
understand both the complexities of global supply chains and the transformative power of
technology. Together, we are eliminating traditional barriers to entry and empowering businesses—
from emerging startups to established enterprises—to thrive in the global marketplace.
</p>
            </p>
            <p className="text-gray-700 mb-6">
            At 2113 Mercatores, we don’t just facilitate trade; we engineer the future of commerce.
            </p>
          <a href="#contact"> <button className="bg-black cursor-pointer hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-md transition-colors">
              Learn More About Us
            </button></a> 
          </div>

          {/* SVG Illustration */}
          <div className="order-1 md:order-2">
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-xl">
              <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="600" height="400" fill="#e0e0e0"></rect>
                <rect x="50" y="50" width="500" height="300" fill="#f5f5f5" rx="10"></rect>
                <rect x="80" y="80" width="440" height="240" fill="#FF5500" rx="5"></rect>
                <circle cx="300" cy="200" r="80" fill="#121212"></circle>
                <path d="M270 170 L270 230 L340 200 Z" fill="#ffffff"></path>
                <rect x="80" y="340" width="440" height="30" fill="#121212" rx="5"></rect>
                <circle cx="120" cy="355" r="10" fill="#ffffff"></circle>
                <circle cx="150" cy="355" r="10" fill="#ffffff"></circle>
                <circle cx="180" cy="355" r="10" fill="#ffffff"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
