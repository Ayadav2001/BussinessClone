import React, { useState } from 'react';

// Sample testimonials data
const testimonials = [
  {
    name: 'Alex Johnson',
    profession: 'Marketing Director',
    comment: 'The innovative solutions provided transformed our digital presence. Highly recommend!',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Samantha Lee',
    profession: 'CEO, TechStart',
    comment: 'Exceptional service and results. Our online engagement has skyrocketed since partnering with them.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Marcus Chen',
    profession: 'E-commerce Manager',
    comment: 'Their expertise in digital strategy has been invaluable.',
    image: 'https://randomuser.me/api/portraits/men/22.jpg'
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto flex flex-col items-center">
    <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full border-4 border-teal-500 mb-4" />
    <h3 className="text-2xl font-semibold mb-2">{testimonial.name}</h3>
    <p className="text-teal-600 mb-2">{testimonial.profession}</p>
    <p className="text-gray-700 italic">"{testimonial.comment}"</p>
  </div>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gradient-to-r from-teal-100 to-teal-300 min-h-screen flex items-center justify-center px-4 py-16">
      <div className="relative w-full max-w-2xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">What Our Clients Say</h2>
        
        <div className="flex justify-between items-center">
          <button onClick={prevTestimonial} className="p-2 bg-teal-500 text-white rounded-full shadow-md hover:bg-teal-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex-1 mx-4">
            <TestimonialCard testimonial={testimonials[activeIndex]} />
          </div>
          
          <button onClick={nextTestimonial} className="p-2 bg-teal-500 text-white rounded-full shadow-md hover:bg-teal-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-4 h-4 rounded-full ${
                index === activeIndex ? 'bg-teal-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
