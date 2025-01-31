import React, { useState, useRef } from 'react';
import { ImFacebook2 } from "react-icons/im";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import bg4 from "../assets/images/bg4.png";

const ContactPage = ({ fadeInUp, sectionPadding }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  const iframeRef = useRef(null);
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = formRef.current;
    const iframe = iframeRef.current;

    iframe.onload = () => {
      setIsSubmitting(false);
      alert('Form submitted successfully!');
      form.reset();
      nav('/');
    };

    form.submit();
  };

  return (
    <div
      id="contact-us"
      className="bg-[#0033CC] min-h-screen w-full flex items-center justify-start"
      style={{
        backgroundImage: `url(${bg4})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "80%", // Size of the background image
        backgroundPosition: "100% 54%", // Position the image
      }}
    >
      <div className="w-full px-4 md:px-0">
        <h1 className="text-2xl sm:text-4xl font-bold text-white mb-8 font-exo-2 text-left sm:ml-32">
          Contact Us
        </h1>
        <motion.form 
          ref={formRef}
          className="w-full md:max-w-xl xl:max-w-2xl space-y-6 mb-8 sm:ml-32"
          variants={fadeInUp}
          onSubmit={handleSubmit}
          method='POST'
          target="hidden_iframe"
          action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSeBaVib7KdQZbk1XGVVe4jdwvBgrM7KsP58nFhzJJudFlYdxw/formResponse'
        >
          {['Name', 'Contact No.', 'Email'].map((label, index) => (
            <div key={label} className="relative">
              <label htmlFor={label.toLowerCase()} className="block text-sm font-medium text-white mb-2">
                {label} <span className='text-red-400'>*</span>
              </label>
              <input
                type={label === 'Email' ? 'email' : label === 'Contact No.' ? 'tel' : 'text'}
                id={label.toLowerCase()}
                name={["entry.2005620554", "entry.1166974658", "entry.1045781291"][index]}
                className="w-full p-3 rounded-md bg-white bg-opacity-10 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                placeholder={label}
                required
                style={{
                  '::placeholder': {
                    color: 'white',
                    opacity: '1'
                  }
                }}
              />
            </div>
          ))}
          <div className='flex justify-end'>
            <motion.button
              type="submit"
              className="bg-white bg-opacity-10 text-white border-2 py-2 px-6 rounded-full hover:bg-white hover:text-[#0033CC] transition duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              whileHover={{ scale: 1.05 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'SUBMIT'} 
              <motion.span 
                style={{ 
                  display: 'inline-block', 
                  marginLeft: '8px', 
                  fontSize: '15px',
                }}
                className="rotate-arrow"
                animate={{ rotate: 0 }}
                whileHover={{ rotate: -30 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                ➔
              </motion.span>   
            </motion.button>
          </div>
        </motion.form>
        <iframe name="hidden_iframe" ref={iframeRef} style={{display: 'none'}}></iframe>

        {/* Contact Details, Centered Bold Email, and Right-Aligned Social Media Links */}
        <div className="sm:ml-32 text-white mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          {/* Contact Details */}
          <div className="flex flex-col items-start mb-6 sm:mb-0">
            <p className="text-lg">+91 70126 06474</p>
            <p className="text-sm mt-1">Paul J Illickan</p>
            <p className="text-sm">Team Captain</p>
          </div>

          {/* Centered Bold Email */}
          <div className="flex justify-center mb-6 sm:mb-0 sm:flex-1">
            <p className="text-lg font-bold">teamstriderz.saintgits@gmail.com</p>
          </div>

          {/* Right-Aligned Social Media Icons */}
          <div className="flex justify-end mt-4 sm:mt-0 space-x-4 text-xl sm:pr-16">
            <motion.a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }} // Grow on hover
              className="text-white"
            >
              <ImFacebook2 />
            </motion.a>
            <motion.a 
              href="https://wa.me/917012606474" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }} // Grow on hover
              className="text-white"
            >
              <FaWhatsapp />
            </motion.a>
            <motion.a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }} // Grow on hover
              className="text-white"
            >
              <FaInstagram />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
