import React from 'react';

const ProductCategories: React.FC = () => {
  const categories = [
    {
      title: 'Sustainable Essentials',
      description: 'Eco-friendly daily care products',
      image: '/images/category-1.jpg',
      link: '/category/essentials'
    },
    {
      title: 'Natural Beauty',
      description: 'Clean beauty solutions',
      image: '/images/category-2.jpg',
      link: '/category/beauty'
    },
    {
      title: 'Zero Waste Living',
      description: 'Plastic-free alternatives',
      image: '/images/category-3.jpg',
      link: '/category/zero-waste'
    }
  ];

  return (
    <div className="py-16 bg-[#FFFBF2]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-light text-center mb-12 text-gray-800">
          Shop by Category
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <a
                href={category.link}
                className="text-[#1E293B] font-medium hover:underline"
              >
                Shop Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories; 