import { useEffect, useState } from "react";
import { urlFor } from "../client";
import Image from "next/image";

export const ThreeByTwoWindy = ({ data, title }) => {
  let stepsData = data;
  let [list, setList] = useState([]);

  // Define the breakpoint for desktop
  const DESKTOP_BREAKPOINT = 1024; // Adjust as needed

  // Function to check if the device is a desktop
  const isDesktop = () => {
    return window.innerWidth >= DESKTOP_BREAKPOINT;
  };

  useEffect(() => {
    if (window.innerWidth > 640) {
      // Filter odd and even numbered items
      const oddItems = stepsData.filter((item) => item.number % 2 !== 0);
      const evenItems = stepsData.filter((item) => item.number % 2 === 0);

      // Concatenate even items after odd items
      stepsData = oddItems.concat(evenItems);
      setList(stepsData);
    } else {
      setList(stepsData);
    }
  }, []);

  return (
    <div className="py-16 mx-auto sm:max-w-xl relative md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center md:max-w-3xl md:mb-12">
        <h2 className="max-w-lg sm:max-w-3xl mb-10 pb-10 px-4 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
          {title}
        </h2>
      </div>
      {/* loop */}
      <div className="grid gap-4 row-gap-5 pr-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.slice(0, 3).map((step, index) => (
          <div
            key={index}
            className="flex flex-col justify-between sm:justify-normal sm:-mt-7"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
              <div className="relative w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
                <Image
                  src={urlFor(step.windyimage).url()}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 33vw, 25vw"
                  alt={step.title}
                />
              </div>
            </div>
            <h6 className="text-2xl mb-2 text-center font-semibold leading-5">
              {step.title}
            </h6>
            <p className="max-w-[15rem] mb-3 mx-auto text-base text-center text-gray-900 sm:mx-auto">
              {step.text}
            </p>
          </div>
        ))}
      </div>
      <div className="lg:col-start-2 lg:col-end-4 lg:max-w-xl lg:mx-auto grid gap-4 md:gap-28 sm:grid-cols-2 mt-4 md:mt-20">
        {list.slice(3, 5).map((step, index) => (
          <div
            key={index}
            className="flex flex-col justify-between sm:justify-normal sm:-mt-7"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
              <div className="relative w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
                <Image
                  src={urlFor(step.windyimage).url()}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 33vw, 25vw"
                  alt={step.title}
                />
              </div>
            </div>
            <h6 className="text-2xl mb-2 text-center font-semibold leading-5">
              {step.title}
            </h6>
            <p className="max-w-[15rem] mb-3 mx-auto text-base text-center text-gray-900 sm:mx-auto">
              {step.text}
            </p>
          </div>
        ))}
      </div>

      {/* <div
        className={`grid gap-4 row-gap-5 pr-4 sm:grid-cols-2 lg:grid-cols-3 ${
          list.length === 6 && isDesktop()
            ? "lg:grid-rows-2 lg:grid-cols-2 lg:justify-center"
            : ""
        }`}
      >
        {list.map((step, index) => (
          <>
            {[1, 2, 5, 6].includes(step.number) ? (
              <div
                key={index}
                className="flex flex-col justify-between sm:justify-normal sm:-mt-7"
              >
                <li className="flex">
                  <div className="pl-4 pr-2">
                    <span className="flex items-center justify-center w-9 h-9 mx-auto text-2xl font-bold text-white rounded-full font-heading bg-FM-orange">
                      {step.number}
                    </span>
                  </div>
                  <div className="sm:pr-4">
                    <p className=" text-gray-500">{step.text}</p>
                  </div>
                </li>
                <>
                  {step.windyimage && (
                    <img
                      src={urlFor(step.windyimage).url()}
                      alt={step.windyimage.alt}
                      className="object-contain w-full h-44 mb-8 sm:mb-0 sm:h-44"
                    />
                  )}
                </>
              </div>
            ) : (
              <div
                key={index}
                className="flex flex-col justify-between sm:mt-7"
              >
                <li className="flex">
                  <div className="pl-4 pr-2">
                    <span className="flex items-center justify-center w-9 h-9 mx-auto text-2xl font-bold text-white rounded-full font-heading bg-FM-orange">
                      {step.number}
                    </span>
                  </div>
                  <div className="sm:pr-4">
                    <p className=" text-gray-500">{step.text}</p>
                  </div>
                </li>
                <>
                  {step.windyimage && (
                    <img
                      src={urlFor(step.windyimage).url()}
                      alt={step.windyimage.alt}
                      className="object-contain w-full h-56 mb-8 sm:mb-0 sm:h-44"
                    />
                  )}
                </>
              </div>
            )}
          </>
        ))}
      </div> */}
      {/*  */}
    </div>
  );
};
