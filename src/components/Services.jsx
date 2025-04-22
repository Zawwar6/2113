import React from 'react';
import { FaShippingFast, FaGlobe, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Fast Shipping',
    description: 'Delivering products swiftly across the globe with guaranteed safety and tracking.',
    icon: <FaShippingFast className="text-white group-hover:rotate-[20deg] transition-transform duration-500" />,
  },
  {
    title: 'Global Network',
    description: 'Wide network coverage ensuring your products reach even the remotest locations.',
    icon: <FaGlobe className="text-white group-hover:rotate-[20deg] transition-transform duration-500" />,
  },
  {
    title: 'Reliable Partnership',
    description: 'Building long-term partnerships with transparent and efficient services.',
    icon: <FaHandshake className="text-white group-hover:rotate-[20deg] transition-transform duration-500" />,
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120
      }
    }
  };

  return (
    <section id="services" className="relative overflow-hidden py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-[400px] h-[400px] bg-gradient-radial from-orange-500 blur-[100px] opacity-40 animate-pulse -top-20 -left-20"></div>
        <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-orange-600 blur-[80px] opacity-30 animate-pulse top-1/2 right-0"></div>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 relative z-10"
      >
        {/* Section Heading */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-5xl  font-extrabold mb-9 bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
            Our Strategic Services
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Powering global trade through innovative solutions and cutting-edge logistics
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateZ: Math.random() * 2 - 1 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8 transform transition-all duration-500 hover:border-orange-500 shadow-xl hover:shadow-2xl hover:shadow-orange-500/20"
            >
              {/* Hover Effect Layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon Container */}
              <div className="mb-8 relative">
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-orange-500/10 blur-3xl"></div>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>

              {/* Animated Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500 transition-all duration-500 rounded-2xl"></div>
            </motion.div>
          ))}
        </div>

        {/* Floating Particles */}
        <div className="absolute -top-20 left-1/3 w-2 h-2 bg-orange-400 rounded-full animate-float"></div>
        <div className="absolute top-1/4 right-32 w-3 h-3 bg-amber-300 rounded-full animate-float-delayed"></div>
      </motion.div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
          100% { transform: translateY(0) rotate(360deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 10s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Services;