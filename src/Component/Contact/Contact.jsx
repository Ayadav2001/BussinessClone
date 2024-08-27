import React from "react";
import image from "../../assets/profile1.jpg";

const Contact = () => {
  return (
    <>
      <div>
        <div className="relative w-full h-72 bg-gray-900">
          <img
            src={image}
            alt="Property background"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-opacity-40"></div>

          <div className="relative flex flex-col justify-center items-center h-full text-white text-center">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="text-sm  mb-2"> Home / Contact</p>
          </div>
          <div></div>
        </div>
      </div>
      <div className="bg-white py-12 px-6 lg:px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 
      <!-- Contact Information Section --> */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Contact Our Team
              </h2>
              <p className="text-base text-gray-700 mb-8">
                Have questions or need support? Reach out to us anytime. We are
                here to assist you and ensure you have the best experience with
                our services.
              </p>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-lg">
                  <div className="bg-blue-600 p-3 rounded-full text-white">
                    <i className="text-lg">📞</i>
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">010-020-0340</p>
                    <p className="text-gray-500">Call Us</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-lg">
                  <div className="bg-blue-600 p-3 rounded-full text-white">
                    <i className="text-lg">✉️</i>
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">info@villa.co</p>
                    <p className="text-gray-500">Email Us</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Contact Form Section --> */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">
                    Message
                  </label>
                  <textarea
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-200"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-gray-100 py-5 flex items-center justify-center">
        <div className="relative w-full max-w-3xl h-72">
          <iframe
            className="absolute inset-0 w-full h-full border-0 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.968923539965!2d-80.12267332488886!3d25.94047097821064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9abdc491be8c3%3A0xb5d9e2d9d8e3cf6c!2sSunny%20Isles%20Beach%2C%20FL%2033160%2C%20USA!5e0!3m2!1sen!2sin!4v1692866324449!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div> */}

<div className="bg-gray-100 p-4 sm:p-6 md:p-8 flex items-center justify-center min-h-screen">
  <div className="w-full max-w-5xl">
    <div className="relative w-full pb-[56.25%]">
      <iframe
        className="absolute inset-0 w-full h-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.968923539965!2d-80.12267332488886!3d25.94047097821064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9abdc491be8c3%3A0xb5d9e2d9d8e3cf6c!2sSunny%20Isles%20Beach%2C%20FL%2033160%2C%20USA!5e0!3m2!1sen!2sin!4v1692866324449!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map of Sunny Isles Beach, FL"
      ></iframe>
    </div>
    <div className="mt-4 text-center">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Sunny Isles Beach, FL</h2>
      <p className="text-sm sm:text-base text-gray-600">Explore the beautiful Sunny Isles Beach area</p>
    </div>
  </div>
</div>
      
    </>
  );
};

export default Contact;
