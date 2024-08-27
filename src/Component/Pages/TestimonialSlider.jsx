// import React from 'react';
// import Profile1 from '../../assets/Profile1.jpg'
// import Profile2 from '../../assets/Profile2.jpg'
// import Profile3 from '../../assets/Profile5.jpg'

// const testimonials = [
//   {
//     name: "John Doe",
//     profession: "Web Developer",
//     image: Profile1 ,
//     testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//   },
//   {
//     name: "Jane Smith",
//     profession: "Graphic Designer",
//     image: Profile2,
//     testimonial: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
//   },
//   {
//     name: "Alex Johnson",
//     profession: Profile3 ,
//     image: "assets/Profile3.jpg",
//     testimonial: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
//   }
// ];

// const TestimonialSlider = () => {
//   return (
//     <div className="flex flex-col items-center">
//       <h2 className="text-3xl font-bold mb-6">What Our Clients Say About Our Digital Services</h2>
//       <div className="relative w-full max-w-5xl">
//         <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 w-80 bg-white p-4 shadow-lg rounded-lg"
//             >
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-16 h-16 rounded-full"
//                 />
//                 <div>
//                   <h3 className="text-xl font-semibold">{testimonial.name}</h3>
//                   <p className="text-gray-600">{testimonial.profession}</p>
//                 </div>
//               </div>
//               <p className="mt-4 text-gray-700">{testimonial.testimonial}</p>
//             </div>
//           ))}
//         </div>
//       </div>


// <div className="flex flex-col items-center">
// <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">What Our Clients Say About Our Digital Services</h2>
// <div className="relative w-full max-w-5xl">
//   <div className="flex overflow-x-auto space-x-4 scrollbar-hide px-4 md:px-0">
//     {testimonials.map((testimonial, index) => (
//       <div
//         key={index}
//         className="flex-shrink-0 w-72 md:w-80 bg-white p-4 shadow-lg rounded-lg"
//       >
//         {/* Testimonial content */}
//       </div>
//     ))}
//   </div>
// </div>
// </div>
// </div>
//   );
// };

// import React, { useState } from 'react';
// import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import Profile1 from '../../assets/Profile1.jpg';
// import Profile2 from '../../assets/Profile2.jpg';
// import Profile3 from '../../assets/Profile5.jpg';

// const testimonials = [
//   {
//     name: "John Doe",
//     profession: "Web Developer",
//     image: Profile1,
//     testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//   },
//   {
//     name: "Jane Smith",
//     profession: "Graphic Designer",
//     image: Profile2,
//     testimonial: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
//   },
//   {
//     name: "Alex Johnson",
//     profession: "UI/UX Designer",
//     image: Profile3,
//     testimonial: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
//   }
// ];

// const TestimonialSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <div className="bg-gradient-to-r from-purple-500 to-indigo-600 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto">
//         <h2 className="text-3xl font-extrabold text-white text-center mb-12">
//           Client Testimonials
//         </h2>
//         <div className="relative bg-white rounded-lg shadow-xl p-8">
//           <FaQuoteLeft className="text-4xl text-indigo-500 mb-6" />
//           <p className="text-gray-600 text-lg mb-8">
//             {testimonials[currentIndex].testimonial}
//           </p>
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <img
//                 src={testimonials[currentIndex].image}
//                 alt={testimonials[currentIndex].name}
//                 className="w-16 h-16 rounded-full mr-4 object-cover"
//               />
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-900">
//                   {testimonials[currentIndex].name}
//                 </h3>
//                 <p className="text-indigo-600">
//                   {testimonials[currentIndex].profession}
//                 </p>
//               </div>
//             </div>
//             <div className="flex space-x-2">
//               <button
//                 onClick={prevTestimonial}
//                 className="p-2 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition-colors duration-300"
//               >
//                 <FaChevronLeft />
//               </button>
//               <button
//                 onClick={nextTestimonial}
//                 className="p-2 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition-colors duration-300"
//               >
//                 <FaChevronRight />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialSlider;


import React, { useState, useEffect } from 'react';
import Profile1 from '../../assets/Profile1.jpg';
import Profile2 from '../../assets/Profile2.jpg';
import Profile3 from '../../assets/Profile5.jpg';
import image from "../../assets/profile1.jpg";

const testimonials = [
  {
    name: "John Doe",
    profession: "Web Developer",
    image: Profile1,
    testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Jane Smith",
    profession: "Graphic Designer",
    image: Profile2,
    testimonial: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "Alex Johnson",
    profession: "UI/UX Designer",
    image: Profile3,
    testimonial: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
];

const TestimonialSlider = () => {
  const [activeTestimonials, setActiveTestimonials] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonials(prevActive => {
        const newActive = [...prevActive];
        newActive.push(testimonials[Math.floor(Math.random() * testimonials.length)]);
        if (newActive.length > 3) newActive.shift();
        return newActive;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
      <h1 className="text-6xl font-bold">Testimonial</h1>
      <p className="text-large  mb-2"> Home O Testimonials</p>
    </div>
    <div></div>
  </div>
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <div className="h-40 bg-blue-500 flex items-center justify-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full border-4 border-white"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-600 italic mb-4">"{testimonial.testimonial}"</p>
                <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-blue-500">{testimonial.profession}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default TestimonialSlider;

