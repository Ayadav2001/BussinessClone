import React from 'react';
import Profile1 from '../../assets/Profile1.jpg';

const About = () => {
  return (
    <>
      <section className="relative bg-white py-16 px-6 md:px-12 lg:px-24 flex flex-col items-center text-center">
        {/* Background Shapes */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 opacity-50 w-full h-full transform rotate-45 scale-150"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h4 className="text-purple-700 font-bold text-sm uppercase tracking-widest mb-4">Who We Are</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Innovative IT Solutions for Your Business
          </h2>
          <p className="text-gray-700 mb-8">
            With over a decade of experience, we specialize in providing cutting-edge technology solutions tailored to your unique business needs. Our dedicated team is here to support you at every step.
          </p>

          {/* Feature List */}
          <ul className="grid grid-cols-2 gap-6 text-left text-gray-600 mb-12">
            <li className="flex items-start space-x-4">
              <div className="bg-purple-500 text-white p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span>Award-Winning Team</span>
            </li>
            <li className="flex items-start space-x-4">
              <div className="bg-purple-500 text-white p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span>24/7 Customer Support</span>
            </li>
            <li className="flex items-start space-x-4">
              <div className="bg-purple-500 text-white p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span>Expert Staff Members</span>
            </li>
            <li className="flex items-start space-x-4">
              <div className="bg-purple-500 text-white p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span>Competitive Pricing</span>
            </li>
          </ul>

          {/* Call to Action */}
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:from-purple-600 hover:to-pink-600 transition duration-300">
            Get Started Today
          </button>
        </div>

        {/* Image */}
        <div className="mt-12 w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg relative">
          <img
            src={Profile1}
            alt="Our Team"
            className="w-full h-auto rounded-full shadow-xl transform hover:scale-105 transition duration-300"
          />
        </div>
      </section>
    </>
  );
}

export default About;
