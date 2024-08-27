import React from 'react';

// Image imports
import BestInIndustryImg from '../../assets/Profile2.jpg';
import ProfessionalStaffImg from '../../assets/Profile5.jpg';
import AwardWinningImg from '../../assets/Profile3.jpg';
import SupportImg from '../../assets/Profile4.jpg';

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-teal-600 text-lg font-semibold uppercase tracking-wide mb-3">What Sets Us Apart</h2>
          <h1 className="text-5xl font-bold text-gray-900 mb-10 leading-tight">
            Discover Why We’re the Top Choice for Your Business
          </h1>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          {/* Item 1 */}
          <div className="w-full lg:w-1/4 bg-gradient-to-br from-blue-200 to-blue-100 rounded-xl shadow-lg overflow-hidden mb-8 lg:mb-0">
            <div className="relative w-full h-60">
              <img
                src={BestInIndustryImg}
                alt="Best in Industry"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-50"></div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Industry Excellence</h3>
              <p className="text-gray-700">
                Harnessing advanced technology and innovative strategies to drive industry-leading results.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="w-full lg:w-1/4 bg-gradient-to-br from-green-200 to-green-100 rounded-xl shadow-lg overflow-hidden mb-8 lg:mb-0">
            <div className="relative w-full h-60">
              <img
                src={ProfessionalStaffImg}
                alt="Professional Staff"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-50"></div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Skilled Professionals</h3>
              <p className="text-gray-700">
                A team of experts dedicated to delivering exceptional service and innovative solutions.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="w-full lg:w-1/4 bg-gradient-to-br from-yellow-200 to-yellow-100 rounded-xl shadow-lg overflow-hidden mb-8 lg:mb-0">
            <div className="relative w-full h-60">
              <img
                src={AwardWinningImg}
                alt="Award Winning"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-50"></div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Award-Winning Service</h3>
              <p className="text-gray-700">
                Proud recipients of prestigious awards recognizing our commitment to excellence and innovation.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="w-full lg:w-1/4 bg-gradient-to-br from-red-200 to-red-100 rounded-xl shadow-lg overflow-hidden">
            <div className="relative w-full h-60">
              <img
                src={SupportImg}
                alt="24/7 Support"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-50"></div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Around-the-Clock Support</h3>
              <p className="text-gray-700">
                Our dedicated support team is available 24/7 to assist with any issues or inquiries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
