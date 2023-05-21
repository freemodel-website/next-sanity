import React from "react";

export default function Threesegment() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-2xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
        <h1 className="mb-1 text-4xl font-semibold tracking-wide text-center md:mb-20 ">
          How Freemodel Benifits Agents
        </h1>
      </div>
      <div className="grid gap-20 row-gap-5 justify-center lg:grid-cols-3">
        <div className="w-72 mx-auto">
          <img
            className="object-contain w-full h-32 mb-6"
            src="/Icon-award-wreath@4x.png"
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none text-center sm:text-2xl">
            A slice of heaven
          </h5>
          <p className="text-base text-center text-black">
            O for awesome, this chocka full cuzzie is as rip-off as a cracker.
            Meanwhile, in behind the bicycle shed, Hercules Morse.
          </p>
        </div>
        <div className="w-72 mx-auto">
          <img
            className="object-contain w-full h-32 mb-6"
            src="/Icon-award-wreath@4x.png"
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none text-center sm:text-2xl">
            A slice of heaven
          </h5>
          <p className="text-base text-center text-black">
            O for awesome, this chocka full cuzzie is as rip-off as a cracker.
            Meanwhile, in behind the bicycle shed, Hercules Morse.
          </p>
        </div>
        <div className="w-72 mx-auto">
          <img
            className="object-contain w-full h-32 mb-6"
            src="/Icon-award-wreath@4x.png"
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none text-center sm:text-2xl">
            Sell for more
          </h5>
          <p className="text-base text-center text-black">
            Getting your clients a higher than expected return on their
            investment makes them happy. And happy clients are the lifeblood of
            the real estate world!
          </p>
        </div>
      </div>
    </div>
  );
}
