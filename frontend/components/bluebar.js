import Image from "next/image";
import React from "react";
import { client, urlFor } from "../client";

/**
 *
 * @param theme - titletext, leftimg
 * @returns
 */
export default function Bluebar({ theme, title, body, img }) {
  let text;
  switch (theme) {
    case "titletext":
      text = (
        <div className="bg-gray-800">
          <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-4xl font-extrabold text-white sm:text-4xl">
              {title}
            </h2>
            <p className="text-2xl mt-4 max-w-4xl mx-auto text-white">{body}</p>
          </div>
        </div>
      );
      break;

    case "leftimg":
      text = (
        <section className="bg-FM-blue py-14">
          <div className="max-w-screen-xl mx-auto md:px-8">
            <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
              <div className="relative mx-auto w-80 h-48">
                <Image
                  src={urlFor(img).url()}
                  fill
                  alt={img.alt}
                  className="object-contain"
                />
              </div>
              <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                <p className="mt-3 text-2xl text-white">
                  Our approach relies on your knowledge and guidance. And when
                  homeowners win, so do you. Freemodel markets exclusively
                  through individual agents and brokerages. When homeowners come
                  to us directly, we refer them to our top agents without any
                  fees.
                </p>
              </div>
            </div>
          </div>
        </section>
      );
      break;

    default:
      text = (
        <div className="bg-gray-800">
          <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-3xl font-extrabold text-white mx-auto sm:text-[38px] sm:max-w-4xl">
              {body}
            </h2>
          </div>
        </div>
      );
      break;
  }

  return text;
}
