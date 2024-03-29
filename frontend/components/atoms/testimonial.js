import React from "react";
import Image from "next/image";

export default function Testimonial({ image, quote, name, jobtitle }) {
  return (
    <div className="flex items-center justify-center px-5 py-5 ">
      <div className="w-full max-w-4xl px-5 pt-5 pb-10 mx-auto text-gray-800">
        <div className="w-full pt-1 pb-5 mx-auto  text-center">
          <a href="#" className="relative block">
            {image && (
              // <img
              //   alt="profil"
              //   src={image}
              //   className="mx-auto object-cover rounded-full h-36 w-36"
              // />
              <Image
                src={image}
                className="mx-auto object-cover rounded-full h-36 w-36"
                width={144}
                height={144}
                loading="lazy"
                alt={name}
              />
            )}
          </a>
        </div>
        <div className="w-full mb-10">
          {quote && (
            <p className="px-10 text-lg  sm:max-w-none sm:text-2xl text-center text-white">
              {quote}
            </p>
          )}
        </div>
        <div className="w-full">
          {name && (
            <p className="font-bold text-center text-white text-lg sm:text-xl">
              {name}
            </p>
          )}
          {jobtitle && (
            <p className="text-center text-gray-500 text-lg">{jobtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}
