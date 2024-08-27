import React, { useState } from 'react';
import Details from '../Home/Details';
import About from './About'
import WhyChooseUs from './WhyChooseUs';
import PricingPlans from './PricingPlain';
import Testimonials from '../Home/Testimonials'
import QuateRequest from './QuateRequest'
import Tech from '../Home/TechIcon'

const slides = [
    {
        id: 1,
        content: "Opportunities don't happen. You create them.",
        location: " Chris Grosser",
        imageUrl: "public/profile.jpg",
    },
    {
        id: 2,
        content: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        location: " Winston Churchill",
        imageUrl: "public/profile2.jpg",
    },
    {
        id: 3,
        content: "Don't be afraid to give up the good to go for the great",
        location: "John D. Rockefeller",
        imageUrl: "public/profile3.jpg",
    },
];


const Home = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    };
  return (
        <>
            <div className="relative w-full h-screen overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className="w-full h-screen flex-shrink-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.imageUrl})` }}
                        >
                            <div className="w-full h-full bg-black bg-opacity-30 flex flex-col justify-center pt-20 gap-0 items-center text-center p-4">
                                <div>
                                    <span className="text-white text-3xl mb-4 px-2 py-1 rounded">
                                        {slide.location}
                                    </span>
                                    <h3 className="text-white text-2xl md:text-4xl font-bold leading-tight">
                                        {slide.content}
                                    </h3>
                                </div>
                                <div className='flex gap-10'>
                                <button className="bg-blue-400 text-white font-bold text-sm px-6 py-3 mt-8 rounded-md hover:bg-blue-600 transition">
                                   Free Quate
                                </button>
                                <button className="bg-blue-400 text-white font-bold text-sm px-6 py-3 mt-8 rounded-md hover:bg-blue-600 transition">
                                   Contact Us
                                </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white hover:bg-blue-700 p-4 rounded-full shadow-lg focus:outline-none"
                >
                    &#10094;
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:bg-blue-700 p-4 rounded-full shadow-lg focus:outline-none"
                >
                    &#10095;

      {/* Navigation Arrows */}
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"></button>
   
                </button>
            </div>

            <Details/>
            <About/>
            <WhyChooseUs/>
            <PricingPlans/>
            <QuateRequest/>
            <Testimonials/>
           
</>
  );
};

export default Home;