import React from 'react';
import category1 from "../assets/17.png";
import category2 from "../assets/18.png";
import category3 from "../assets/19.png";

const Categories: React.FC = () => {
  const categories = [
    {
      image: category1,
      title: "Makeup",
      description: "Shop our collection of natural makeup products"
    },
    {
      image: category2,
      title: "Skincare",
      description: "Discover our range of organic skincare solutions"
    },
    {
      image: category3,
      title: "Hair Care",
      description: "Find the perfect natural hair care products"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated collection of natural beauty products
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group relative overflow-hidden">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">{category.title}</h3>
                <p className="text-white opacity-90">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories; 