import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popover from '../Popover/Popover';


const Navbar = () => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleMouseEnter = () => {
    // Your logic for handling mouse enter
  };

  return (
    <div>

<header className="bg-gray-800 text-white py-4 px-6 shadow-md flex justify-between items-center">
  <a href="#" className="text-white text-3xl font-extrabold hover:text-gray-400 transition-colors duration-200">
    BizPulse
  </a>
  <nav className="hidden md:flex space-x-8">
    <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
      Home
    </Link>
    <Link to="#" className="text-gray-300 hover:text-white transition-colors duration-200">
      About
    </Link>
    <Link to="#" className="text-gray-300 hover:text-white transition-colors duration-200">
      Services
    </Link>
    <Link to="#" className="text-gray-300 hover:text-white transition-colors duration-200">
      Blogs
    </Link>
    <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
      Contact
    </Link>
    
    <div className="relative group">
     
        <Popover className="text-gray-300 hover:text-white transition-colors duration-200"
  handleMouseEnter={handleMouseEnter}
  children={<>
    Pages 
  </>}
  content={<>
    <Link to="/Prices" className="block px-4 py-2 text-gray-800 hover:bg-gray-700 hover:text-white">Pricing Plan</Link>
    <Link to="/Features" className="block px-4 py-2 text-gray-800 hover:bg-gray-700 hover:text-white"> Our Features</Link>
    <Link to="/FreeQuates" className="block px-4 py-2 text-gray-800 hover:bg-gray-700 hover:text-white">Free Quotes</Link>
    <Link to="/TestimonialSlider" className="block px-4 py-2 text-gray-800 hover:bg-gray-700 hover:text-white">Team Member</Link>
    <Link to="/TestimonialSlider" className="block px-4 py-2 text-gray-800 hover:bg-gray-700 hover:text-white">Team Member</Link>

  </>}
/>
      {/* {/* </Link> */}
     
    </div> 
  </nav>
  <div className="flex items-center space-x-4 md:hidden">
    <button className="text-white focus:outline-none">
      <svg
        className="h-6 w-6"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="bars"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M16 132h416c8.837 0 16-7.163 16-16V92c0-8.837-7.163-16-16-16H16C7.163 76 0 83.163 0 92v24c0 8.837 7.163 16 16 16zm0 128h416c8.837 0 16-7.163 16-16v-24c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v24c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-24c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v24c0 8.837 7.163 16 16 16z"
        ></path>
      </svg>
    </button>
  </div>
  <div className="hidden md:flex space-x-4">
    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
      <svg
        className="h-5 w-5"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="twitter"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
        ></path>
      </svg>
    </a>
    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
      <svg
        className="h-5 w-5"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="facebook-f"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path
          fill="currentColor"
          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
        ></path>
      </svg>
    </a>
    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
      <svg
        className="h-5 w-5"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="linkedin-in"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
        ></path>
      </svg>
    </a>
    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
      <svg
        className="h-5 w-5"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="youtube"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path
          fill="currentColor"
          d="M549.655 124.083c-6.281-23.673-24.844-42.344-48.526-48.645C454.6 64 288 64 288 64S121.4 64 74.871 75.438c-23.682 6.3-42.245 24.972-48.526 48.645C16 170.965 16 256.01 16 256.01s0 85.046 10.345 131.927c6.281 23.673 24.844 42.344 48.526 48.645C121.4 448 288 448 288 448s166.6 0 213.129-11.438c23.682-6.3 42.245-24.972 48.526-48.645C560 341.056 560 256.011 560 256.011s0-85.046-10.345-131.928zM231.181 338.515V173.507l142.466 82.498-142.466 82.51z"
        ></path>
      </svg>
    </a>
  </div>
</header>


       

{/* <header className="bg-white shadow-lg h-24 hidden md:flex">
      <a href="#" className="border flex-shrink-0 flex items-center justify-center px-4 font-bold text-red-600 text-2xl lg:px-6 xl:px-8">
       
        BizPulse
      </a>
      <nav className="header-links contents font-semibold text-base lg:text-lg">
        <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
          <li className="p-3 xl:p-6 active">
            <a href="/">
              <span className='hover:text-red-500 '>Home</span>
            </a>
          </li>
          <li className="p-3 xl:p-6">
            <a href="#">
              <span className='hover:text-red-500 '>About</span>
            </a>
          </li>
          <li className="p-3 xl:p-6">
            <a href="#">
              <span className='hover:text-red-500 '>Service</span>
            </a>
          </li>
          <li className="p-3 xl:p-6">
            <a href="#">
              <span className='hover:text-red-500 '>Blogs</span>
            </a>
          </li>
          
          <li className="p-3 xl:p-6">
            <a href="/contact">
              <span className='hover:text-red-500 '>Contacts</span>
            </a>
          </li>
          <li className="p-3 xl:p-6">
            <a href="/Page" className="flex items-center">
              <span className='hover:text-red-500 '>Pages</span>
              <svg
                className="h-3 opacity-30 ml-2"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="chevron-down"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
      <nav className="hidden xl:contents">
        <ul className="flex items-center mr-4 lg:mr-6 xl:mr-8">
          <li className="p-1">
            <a
              href="#"
              className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
            >
              <svg
                className="h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="twitter"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                ></path>
              </svg>
            </a>
          </li>
          <li className="p-1">
            <a
              href="#"
              className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
            >
              <svg
                className="h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-f"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                ></path>
              </svg>
            </a>
          </li>
          <li className="p-1">
            <a
              href="#"
              className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
            >
              <svg
                className="h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="linkedin-in"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                ></path>
              </svg>
            </a>
          </li>
          <li className="p-1">
            <a
              href="#"
              className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
            >
              <svg
                className="h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="youtube"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M549.655 124.083c-6.281-23.673-24.844-42.344-48.526-48.645C454.6 64 288 64 288 64S121.4 64 74.871 75.438c-23.682 6.3-42.245 24.972-48.526 48.645C16 170.965 16 256.01 16 256.01s0 85.046 10.345 131.927c6.281 23.673 24.844 42.344 48.526 48.645C121.4 448 288 448 288 448s166.6 0 213.129-11.438c23.682-6.3 42.245-24.972 48.526-48.645C560 341.056 560 256.011 560 256.011s0-85.046-10.345-131.928zM231.181 338.515V173.507l142.466 82.498-142.466 82.51z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header> */}
    </div>
  );
};

export default Navbar;
