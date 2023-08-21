import React, { Component } from "react";
import Ctabutton from "./atoms/ctabutton";
import Image from "next/image";
/**
 * A function that adds two numbers.
 *
 * @param  hero - object containing a string.
 * @param  buttontext - string for a button.
 */
export default function Hero({ hero, buttontext, image }) {
  return (
    <div className="relative">
      <Image
        src={image ? image : "/testhouse.jpg"}
        className="absolute inset-0 object-cover w-full h-full"
        fill
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
