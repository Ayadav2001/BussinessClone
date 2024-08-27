import React from 'react';
import sm from '../../assets/Samsung_logo.png';
import Sw from '../../assets/SoundWave.jpg';
import Si from '../../assets/Simple.jpg';
import Br from '../../assets/Brand.jpg';
import Logo from '../../assets/Logo.png';
import Book from '../../assets/Book.jpg';
import fruit from '../../assets/fuityfreelogo.jpg';
import Audi from '../../assets/Audi.png';

const images = [
  { src: Book, alt: 'BookLogo' },
  { src: fruit, alt: 'Fruit Logo' },
  { src: Logo, alt: 'Graphic Design' },
  { src: Br, alt: 'Branding' },
  { src: Si, alt: 'Simple Design' },
  { src: Sw, alt: 'SoundWave' },
  { src: sm, alt: 'Samsung' },
  { src: Audi, alt: 'Audi Logo' },
];

const TechIcons = () => {
  const duplicateImages = [...images, ...images]; // Duplicate the images for seamless looping

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-8 px-6">
      <h2 className="text-4xl font-bold text-center text-white mb-6">Our Partners</h2>
      <div className="relative overflow-hidden">
        <div className="carousel-container flex">
          <div className="carousel flex gap-4">
            {duplicateImages.map((img, index) => (
              <div
                key={index}
                className="relative w-44 h-44 bg-white rounded-lg shadow-xl overflow-hidden flex items-center justify-center transition-transform transform hover:scale-110"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-60 h-70 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-70">
                  <p className="text-white text-xl font-semibold">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
  );
};

export default TechIcons;
