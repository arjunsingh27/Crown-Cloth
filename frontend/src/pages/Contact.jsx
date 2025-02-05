import React from 'react';
import Title from '../components/Title.jsx';
import NewsletterBox from '../components/NewsLetterBox';
import { assets } from '../assets/frontend_assets/assets';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useEffect } from 'react';

const Contact = () => {
   useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);
  return (
    <div className="container mx-auto px-4 lg:px-8 xl:px-16">
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[480px] rounded-lg shadow-md" src={assets.contact_img} alt="Contact Us" />

        <div className="flex flex-col justify-center items-start gap-8">
          <div className="space-y-6">
            <h2 className="font-semibold text-xl text-gray-600">Our Store</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-600">
                <MapPin size={18} className="flex-shrink-0" />
                <span>B-12, Connaught Place, New Delhi, Delhi 110001, India</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Phone size={18} className="flex-shrink-0" />
                <span>+91-9759356471</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Mail size={18} className="flex-shrink-0" />
                <span>crowncloths.in@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Clock size={18} className="flex-shrink-0" />
                <span>Mon - Fri: 10:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-xl text-gray-600">Connect With Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/crowncloths/" className="text-gray-600 hover:text-pink-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-800 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-xl text-gray-600">Careers at Crown Cloths</h2>
            <p className="text-gray-500">Join our team and be part of something special. Explore exciting career opportunities with us.</p>
            <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
      
      <NewsletterBox />
    </div>
  );
};

export default Contact;