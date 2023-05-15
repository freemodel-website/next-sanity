import React from "react";

export default function Testimonial() {
  return (
    <div class="flex items-center justify-center px-5 py-5">
      <div class="w-full max-w-xl px-5 pt-5 pb-10 mx-auto text-gray-800 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-50">
        <div class="w-full pt-1 pb-5 mx-auto -mt-16 text-center">
          <a href="#" class="relative block">
            <img
              alt="profil"
              src="/images/person/1.jpg"
              class="mx-auto object-cover rounded-full h-20 w-20 "
            />
          </a>
        </div>
        <div class="w-full mb-10">
          <div class="h-3 text-3xl leading-tight text-left text-indigo-500">
            “
          </div>
          <p class="px-5 text-sm text-center text-gray-600 dark:text-gray-100">
            To get social media testimonials like these, keep your customers
            engaged with your social media accounts by posting regularly
            yourself
          </p>
          <div class="h-3 -mt-3 text-3xl leading-tight text-right text-indigo-500">
            ”
          </div>
        </div>
        <div class="w-full">
          <p class="font-bold text-center text-indigo-500 text-md">Tom Hardy</p>
          <p class="text-xs text-center text-gray-500 dark:text-gray-300">
            @thom.hardy
          </p>
        </div>
      </div>
    </div>
  );
}
