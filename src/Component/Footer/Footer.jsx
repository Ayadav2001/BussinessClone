import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        {/* About Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-yellow-500 pb-2 inline-block">
            Who We Are
          </h2>
          <p className="text-gray-400">
            We are a creative agency focused on delivering innovative solutions that drive success. Our team
            is dedicated to crafting exceptional digital experiences tailored to your business needs.
          </p>
        </div>
        
        {/* Sections with Divider */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 border-t border-gray-700 pt-10">
          
          {/* Services Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Our Services</h3>
            <ul className="space-y-3">
              {['Web Design', 'Development', 'Marketing', 'SEO Optimization', 'Consulting'].map((service) => (
                <li key={service} className="hover:text-yellow-500 transition">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Get in Touch</h3>
            <p className="mb-2">123 Innovation Avenue, Tech City, USA</p>
            <p className="mb-2">contact@yourcompany.com</p>
            <p>+1 800 123 4567</p>
          </div>
          
          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Connect with Us</h3>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'linkedin', 'instagram'].map((social) => (
                <a key={social} href="#" className="p-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    {/* Add respective social media icon SVG path */}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-6">
          <p>© 2024 Your Company. All rights reserved.</p>
          <p>Powered by Your Innovation.</p>
        </div>
      </div>
      
      <a
        href="#"
        className="fixed bottom-5 right-5 bg-yellow-500 text-black p-3 rounded-full shadow-lg hover:bg-yellow-600 transition"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Add arrow up icon SVG path */}
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
