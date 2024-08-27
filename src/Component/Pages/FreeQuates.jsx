import image from "../../assets/profile1.jpg";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const QuoteRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission here
  };

  return (
    <>
    <div className="relative w-full h-72 bg-gray-900">
    <img
      src={image}
      alt="Property background"
      className="absolute inset-0 w-full h-full object-cover opacity-30"
    />

    <div className="absolute inset-0 bg-opacity-40"></div>

    <div className="relative flex flex-col justify-center items-center h-full text-white text-center">
      <h1 className="text-6xl font-bold">Free Quote</h1>
      <p className="text-large  mb-2"> Home O Free Quote</p>
    </div>
    <div></div>
  </div>
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 md:p-8 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 w-full max-w-4xl"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Get Your Custom Quote
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-full border-2 border-purple-300 focus:border-pink-500 focus:outline-none transition-all duration-300"
              required
            />
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-full border-2 border-purple-300 focus:border-pink-500 focus:outline-none transition-all duration-300"
              required
            />
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-full border-2 border-purple-300 focus:border-pink-500 focus:outline-none transition-all duration-300"
            />
            <motion.select
              whileFocus={{ scale: 1.05 }}
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-full border-2 border-purple-300 focus:border-pink-500 focus:outline-none transition-all duration-300"
              required
            >
              <option value="">Select a Service</option>
              <option value="web">Web Development</option>
              <option value="mobile">Mobile App Development</option>
              <option value="design">UI/UX Design</option>
              <option value="consulting">IT Consulting</option>
            </motion.select>
          </div>
          <motion.select
            whileFocus={{ scale: 1.05 }}
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-full border-2 border-purple-300 focus:border-pink-500 focus:outline-none transition-all duration-300"
            required
          >
            <option value="">Select Budget Range</option>
            <option value="0-5000">$0 - $5,000</option>
            <option value="5000-10000">$5,000 - $10,000</option>
            <option value="10000-25000">$10,000 - $25,000</option>
            <option value="25000+">$25,000+</option>
          </motion.select>
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-3 rounded-2xl border-2 border-purple-300 focus:border-pink-500 focus:outline-none transition-all duration-300 resize-none"
          ></motion.textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            Get My Free Quote
          </motion.button>
        </form>
      </motion.div>
    </div>
    </>
  );
};

export default QuoteRequest;