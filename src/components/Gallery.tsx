import React from 'react';

const Gallery: React.FC = () => {
  const images = Array(9).fill(null).map((_, index) => ({
    url: `/images/gallery-${index + 1}.jpg`,
    alt: `Gallery image ${index + 1}`
  }));

  return (
    <div className="py-28 bg-[#FFFBF2]">
      <div className="container mx-auto px-6">
        <div className="max-w-lg mx-auto text-center mb-20">
          <h2 className="text-[2.5rem] font-extralight text-gray-900 mb-5 leading-tight">
            Buy what you love on Instagram
          </h2>
          <p className="text-[1.1rem] text-gray-600">
            Follow us <span className="font-medium">@pureandsimple</span>
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 max-w-[1200px] mx-auto">
          {images.map((image, index) => (
            <div key={index} className="aspect-square relative group cursor-pointer">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery; 