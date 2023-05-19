import React from "react";

export default function Testimonial() {
  return (
    <div class="flex items-center justify-center px-5 py-5 ">
      <div class="w-full max-w-3xl px-5 pt-5 pb-10 mx-auto text-gray-800">
        <div class="w-full pt-1 pb-5 mx-auto  text-center">
          <a href="#" class="relative block">
            <img
              alt="profil"
              src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              class="mx-auto object-cover rounded-full h-28 w-28"
            />
          </a>
        </div>
        <div class="w-full mb-10">
          <p class="px-5 text-4xl text-center text-gray-600 dark:text-gray-100">
            "I appreciate how responsive Freemodel is when I reach out with a
            potential project. It's great to give them all of the prep work so I
            can focus on building my business. They work fast and make my
            listings look great."
          </p>
        </div>
        <div class="w-full">
          <p class="font-bold text-center text-white text-lg">
            Eddie O'Sullivan
          </p>
          <p class="text-center text-gray-500 text-sm">Agent</p>
        </div>
      </div>
    </div>
  );
}