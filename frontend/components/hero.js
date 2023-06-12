import React, { Component } from "react";
import Ctabutton from "./atoms/ctabutton";

/**
 * A function that adds two numbers.
 *
 * @param  hero - object containing a string.
 * @param  buttontext - string for a button.
 */
export default function Hero({ hero, buttontext }) {
  console.log(`hero`, hero);

  return (
    <div className="relative">
      <img
        src="https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-36">
          <div className=" text-center m-auto">
            <h2 className="text-center m-auto mb-16 text-5xl font-bold tracking-tight text-white sm:text-8xl sm:leading-none ">
              {hero.title}
            </h2>
            {buttontext && <Ctabutton href="/lets-talk" text={buttontext} />}
          </div>
        </div>
      </div>
    </div>
  );
}
