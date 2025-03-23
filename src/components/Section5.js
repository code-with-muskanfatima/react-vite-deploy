"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = InstagramSection;
var fa_1 = require("react-icons/fa");
var _1_png_1 = require("../assets/1.png");
var _2_png_1 = require("../assets/2.png");
var _3_png_1 = require("../assets/3.png");
var _4_png_1 = require("../assets/4.png");
var _5_png_1 = require("../assets/5.png");
var _6_png_1 = require("../assets/6.png");
var images = [_1_png_1.default, _2_png_1.default, _3_png_1.default, _4_png_1.default, _5_png_1.default, _6_png_1.default];
function InstagramSection() {
    return (<section className="w-full bg-[#FFF8F0] py-16 px-6">
      {/* Heading & Paragraph */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold text-gray-900">Be a part of the PureBrush family!</h2>
        <p className="text-gray-700 mt-2">
          Our feed is filled with inspiration to help you maintain a healthy and beautiful smile
        </p>
      </div>

      {/* Image Grid (2 per row on all screens) */}
      <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
        {images.map(function (img, index) { return (<div key={index} className="overflow-hidden">
            <img src={img} alt={"PureBrush ".concat(index + 1)} className="w-full h-64 object-cover"/>
          </div>); })}
      </div>

      {/* Instagram Link */}
      <div className="flex justify-center items-center gap-2 mt-10">
        <fa_1.FaInstagram className="text-xl text-gray-900"/>
        <span className="text-gray-900 text-lg font-medium">Join us on Instagram</span>
      </div>
    </section>);
}
