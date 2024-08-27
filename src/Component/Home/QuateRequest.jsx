import React from 'react';

const QuoteRequest = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* Form Section */}
        <div className="md:w-1/2 bg-gradient-to-r from-blue-400 to-blue-600 text-white p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">Get Your Free Quote</h2>
          <form className="space-y-6">
            <input type="text" placeholder="Full Name" className="w-full p-3 bg-white text-black rounded-md border border-gray-200" />
            <input type="email" placeholder="Email Address" className="w-full p-3 bg-white text-black rounded-md border border-gray-200" />
            <select className="w-full p-3 bg-white text-black rounded-md border border-gray-200">
              <option>Select Service</option>
              <option>Service 1</option>
              <option>Service 2</option>
            </select>
            <textarea placeholder="Your Message" className="w-full p-3 bg-white text-black rounded-md border border-gray-200 h-24"></textarea>
            <button className="w-full bg-yellow-400 text-black font-semibold p-3 rounded-md hover:bg-yellow-500 transition-colors">
              Submit Request
            </button>
          </form>
        </div>

        {/* Information Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center bg-gray-100">
          <h2 className="text-blue-600 uppercase font-semibold mb-2">Request a Quote</h2>
          <h1 className="text-3xl font-bold mb-6">We are here to assist you</h1>
          
          <div className="flex items-center mb-4">
            <div className="bg-blue-600 text-white rounded-full p-2 mr-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                {/* Add appropriate SVG path for reply icon */}
              </svg>
            </div>
            <span className="text-gray-700">We respond within 24 hours</span>
          </div>
          
          <div className="flex items-center mb-4">
            <div className="bg-blue-600 text-white rounded-full p-2 mr-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                {/* Add appropriate SVG path for telephone icon */}
              </svg>
            </div>
            <span className="text-gray-700">24/7 Support Available</span>
          </div>
          
          <p className="text-gray-600 mb-6">
            We are dedicated to providing you with the best service possible. Please fill out the form and one of our representatives will get back to you promptly.
          </p>

          <div className="flex items-center">
            <div className="bg-yellow-400 text-black rounded-full p-3 mr-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                {/* Add appropriate SVG path for phone icon */}
              </svg>
            </div>
            <div>
              <div>Have questions? Call us:</div>
              <div className="font-bold text-lg">+012 345 6789</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteRequest;
