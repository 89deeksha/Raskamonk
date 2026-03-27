import React from "react";
import image from "../assets/image1.png";

function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-200 to-white px-6">

      {/* Image */}
      <img
        src={image}
        alt="hero"
        className="w-full max-h-[400px]  shadow-md mb-6 animate-float"
      />

      {/* Button */}
      <button className="bg-purple-600 text-white px-6 py-3 rounded-xl">
  Our Services • हमारी सेवाएं • আমাদের পরিষেবা • எங்கள் சேவைகள்
</button>
<h1 className="pt-4 text-4xl font-bold text-pink-400">Take Care Your Mind, <span className="text-purple-400">Just Like Your Body</span></h1>
<p className="font-semibold text-gray-500">Life gets overwhelming sometimes—and that’s completely normal.
சிறிது நிம்மதி எடுத்துக்கொள்ளுங்கள் — நாங்கள் உங்களுடன் இருக்கிறோம்</p>

    </section>
  );
}

export default Hero;