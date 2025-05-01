import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-light py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          <div>
            <div className="flex items-center mb-6">
              <div className="text-[#ff5500] font-bold text-2xl mr-2">2113</div>
              <div className="text-white font-semibold text-xl">MERCATORES</div>
            </div>
            <p className="text-gray-300 mb-6">Redefining global trade with innovative solutions and unmatched expertise.</p>
            <div className="flex space-x-4">
              <a href="#" className="social-icon text-white hover:text-[#ff5500]">
              <FaLinkedin className="text-2xl text-white hover:text-[#ff5500]" />
              </a>
              <a href="#" className="social-icon text-gray-300 hover:text-[#ff5500]">
              <FaTwitter className="text-2xl text-white hover:text-[#ff5500]" />
              </a>
              <a href="#" className="social-icon text-gray-300 hover:text-[#ff5500]">
                  
             <FaFacebook className="text-2xl text-white hover:text-[#ff5500]" />
              </a>
              <a href="#" className="social-icon text-gray-300 hover:text-[#ff5500]">
              <FaInstagram className="text-2xl text-white hover:text-[#ff5500]" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl text-white font-extrabold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-[#ff5500] transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-[#ff5500] transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-[#ff5500] transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#ff5500] transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#ff5500] transition-colors">Resources</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl text-white font-extrabold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-[#ff5500] transition-colors">Product Sourcing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#ff5500] transition-colors">Logistics &amp; Shipping</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#ff5500] transition-colors">Customs &amp; Compliance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#ff5500] transition-colors">Market Analysis</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#ff5500] transition-colors">Trade Financing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl text-white ml-3 font-extrabold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
             <FontAwesomeIcon icon={faLocationDot} className='text-[#ff5500] mr-3 mt-1' />
                <span className="text-gray-300">2113 Trade Avenue, Chicago, IL 60607, USA</span>
              </li>
              <li className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className='text-[#ff5500] mr-3 mt-1' />
                <span className="text-gray-300 mt-1">+1 (800) 2113-TRADE</span>
              </li>
              <li className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className='text-[#ff5500] mr-3 mt-1' />
                <span className="text-gray-300 mt-0.5">info@2113mercatores.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2023 2113 Mercatores. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#ff5500] text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-[#ff5500] text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-[#ff5500] text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
