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
  const lines = body.split("\n");
  console.log(lines);
  switch (theme) {
    case "titletext":
      text = (
        <div className="bg-gray-800">
          <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
              {title}
            </h2>

            <div className="text-3xl mt-4 max-w-5xl mx-auto text-white">
              {body}
            </div>
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
                <p className="mt-3 text-2xl text-white">{body}</p>
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
            {lines.map((line, index) => (
              <h2
                key={index}
                className="text-3xl font-extrabold text-white mx-auto sm:text-[38px] sm:max-w-5xl"
              >
                {line.match(/\S+@\S+/) ? (
                  <span>
                    {line.split(/\s/).map((word, i) => {
                      if (word.match(/\S+@\S+/)) {
                        return (
                          <a
                            key={i}
                            href={`mailto:${word}`}
                            className="text-FM-orange brightness-125 hover:underline"
                          >
                            {word}
                          </a>
                        );
                      } else {
                        return word + " ";
                      }
                    })}
                  </span>
                ) : (
                  line
                )}
              </h2>
            ))}
          </div>
        </div>
      );
      break;
  }

  return text;
}
