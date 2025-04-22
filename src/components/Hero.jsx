import React, { useEffect, useState } from 'react';

const slides = [
  {
    title: 'Global Import Solutions',
    description: 'Connecting you with the world’s best products.',
    image: '/slider1.jpg',
  },
  {
    title: 'Seamless Export Services',
    description: 'Expanding your reach to global markets.',
    image: '/slider2.jpg',
  },
  {
    title: 'Trusted International Logistics',
    description: 'Delivering excellence beyond borders.',
    image: '/slider3.jpg',
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-3000 ease-in-out ${
            index === current
              ? 'opacity-100'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover opacity-50 transform scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-center text-center px-4">
            <h1 
              className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-orange-400 to-black text-transparent bg-clip-text bg-300% animate-gradient"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
            >
              {slide.title}
            </h1>
            <p 
              className="text-lg md:text-2xl max-w-2xl mx-auto bg-gradient-to-r from-orange-500 via-orange-400 to-gray-800 text-transparent bg-clip-text font-medium mb-6"
              style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}
            >
              {slide.description}
            </p>

            {/* --- Get a Quote Button --- */}
            <a 
              href="#contact"
              className="bg-orange-500 hover:bg-orange-600 text-black font-extrabold py-3 rounded-2xl px-10  text-lg transition-all duration-300 shadow-lg hover:scale-105"
            >
              Get a Quote
            </a>

          </div>
        </div>
      ))}

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index 
                ? 'bg-orange-400 scale-125' 
                : 'bg-white/50 hover:bg-orange-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
