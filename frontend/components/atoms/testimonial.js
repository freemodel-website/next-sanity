import React from "react";

export default function Testimonial({ image, quote, name, jobtitle }) {
  return (
    <div className="flex items-center justify-center px-5 py-5 ">
      <div className="w-full max-w-3xl px-5 pt-5 pb-10 mx-auto text-gray-800">
        <div className="w-full pt-1 pb-5 mx-auto  text-center">
          <a href="#" className="relative block">
            <img
              alt="profil"
              src={image}
              className="mx-auto object-cover rounded-full h-36 w-36"
            />
          </a>
        </div>
        <div className="w-full mb-10">
          <p className="px-5 text-xl max-w-xs sm:max-w-none sm:text-4xl text-center text-gray-600 dark:text-gray-100">
            {quote}
          </p>
        </div>
        <div className="w-full">
          <p className="font-bold text-center text-white text-lg sm:text-xl">
            {name}
          </p>
          <p className="text-center text-gray-500 text-lg">{jobtitle}</p>
        </div>
      </div>
    </div>
  );
}
