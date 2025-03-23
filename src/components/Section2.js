"use strict";
// import image1 from "../assets/11.png";
// import image2 from "../assets/12.png";
// import image3 from "../assets/13.png";
// import image4 from "../assets/14.png";
// import image5 from "../assets/15.png";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ReviewsSection;
// export default function ReviewsSection() {
//   return (
//     <section className="w-full bg-[#FFFBF2] py-12 px-4">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center text-center">
//         <div className="flex flex-col items-center">
//           <img src={image1} alt="Review 1" className="w-16 h-16" />
//           <p className="text-gray-700 mt-2">It effectively fights cavities, reduces plaque, and promotes overall oral health.</p>
//         </div>
//         <div className="flex flex-col items-center">
//           <img src={image2} alt="Review 2" className="w-16 h-16" />
//           <p className="text-gray-700 mt-2">Trusted by healthcare professionals, PureBrush is a reliable choice for daily care.</p>
//         </div>
//         <div className="flex flex-col items-center">
//           <img src={image3} alt="Review 3" className="w-16 h-16"/>
//           <p className="text-gray-700 mt-2">At our store, PureBrush’s toothpaste has consistently been a top-selling product.</p>
//         </div>
//         <div className="flex flex-col items-center">
//           <img src={image4} alt="Review 4" className="w-16 h-16"/>
//           <p className="text-gray-700 mt-2">It complements our commitment to high-quality, natural products.</p>
//         </div>
//         <div className="flex flex-col items-center">
//           <img src={image5} alt="Review 5" className="w-16 h-16" />
//           <p className="text-gray-700 mt-2">It’s a product we recommend to consumers seeking a reliable toothbrush.</p>
//         </div>
//       </div>
//     </section>
//   );
// }
var react_1 = require("react");
var _11_png_1 = require("../assets/11.png");
var _12_png_1 = require("../assets/12.png");
var _13_png_1 = require("../assets/13.png");
var _14_png_1 = require("../assets/14.png");
var _15_png_1 = require("../assets/15.png");
var reviews = [
    { image: _11_png_1.default, text: "It effectively fights cavities, reduces plaque, and promotes overall oral health." },
    { image: _12_png_1.default, text: "Trusted by healthcare professionals, PureBrush is a reliable choice for daily care." },
    { image: _13_png_1.default, text: "At our store, PureBrush’s toothpaste has consistently been a top-selling product." },
    { image: _14_png_1.default, text: "It complements our commitment to high-quality, natural products." },
    { image: _15_png_1.default, text: "It’s a product we recommend to consumers seeking a reliable toothbrush." }
];
function ReviewsSection() {
    var _a = (0, react_1.useState)(0), currentIndex = _a[0], setCurrentIndex = _a[1];
    return (<section className="w-full bg-[#FFFBF2] py-12 px-4">
      {/* Full Screen View */}
      <div className="hidden lg:grid max-w-6xl mx-auto grid-cols-5 gap-8 items-center text-center">
        {reviews.map(function (review, index) { return (<div key={index}>
            <img src={review.image} alt={"Review ".concat(index + 1)} className="w-20 h-auto mx-auto"/>
            <p className="text-gray-700 mt-2">{review.text}</p>
          </div>); })}
      </div>

      {/* Tab & Mobile View */}
      <div className="lg:hidden text-center">
        <img src={reviews[currentIndex].image} alt="Review Image" className="w-20 h-auto mx-auto"/>
        <p className="text-gray-700 mt-4 max-w-md mx-auto">{reviews[currentIndex].text}</p>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {reviews.map(function (_, index) { return (<button key={index} onClick={function () { return setCurrentIndex(index); }} className={"w-3 h-3 rounded-full ".concat(currentIndex === index ? "bg-green-950" : "bg-gray-400")}></button>); })}
        </div>
      </div>
    </section>);
}
