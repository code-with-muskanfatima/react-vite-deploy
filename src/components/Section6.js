"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BestSellers;
var _7_png_1 = require("../assets/7.png");
var _8_png_1 = require("../assets/8.png");
var _9_png_1 = require("../assets/9.png");
function BestSellers() {
    var products = [
        {
            image: _7_png_1.default,
            title: "PureClean Toothbrush",
            price: "$12.8",
            description: "Featuring ultra-soft bristles that gently sweep away plaque and debris.",
        },
        {
            image: _8_png_1.default,
            title: "Product Name",
            price: "$13.8",
            description: "Short description of the product or service of the website.",
        },
        {
            image: _9_png_1.default,
            title: "Product Name",
            price: "$12.8",
            description: "Short description of the product or service of the website.",
        },
    ];
    return (<section className="w-full bg-[#B3C2B2] py-16 px-6">
      {/* Heading & Paragraph */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-900">Explore our best-sellers</h2>
        <p className="text-gray-700 mt-2">
          Each product is crafted with the finest materials and backed by rave reviews from our loyal customers.
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(function (product, index) { return (<div key={index} className="bg-white p-6">
            <img src={product.image} alt={product.title} className="w-full h-64 object-cover"/>
            <div className="justify-between flex py-4">
              <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
            <p className="text-gray-700">{product.description}</p>
            <button className="mt-4 px-5 py-2 bg-green-900 text-white hover:bg-green-800">
              Shop Now
            </button>
          </div>); })}
      </div>
    </section>);
}
