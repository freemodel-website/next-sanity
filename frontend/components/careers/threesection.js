import React from "react";
import Image from "next/image";
import PortableText from "react-portable-text";
import { urlFor } from "../../client";
import Ctabutton from "../atoms/ctabutton";

export default function ThreeSection({
  imageArray,
  reverseIndexBg = false,
  sec3title,
  sec3link,
  newpage = false,
}) {
  return (
    <div className="mx-auto">
      <section>
        {imageArray.map((section, index) => {
          const isEven = index % 2 === 0;
          const applyBlueBg = reverseIndexBg ? !isEven : isEven;
          const textColor = applyBlueBg ? "text-white" : "text-black";
          const bgColor = applyBlueBg ? "bg-FM-blue" : "";
          const portableTextColor = applyBlueBg ? "text-white" : "text-black";

          const serializers = {
            normal: (props) => (
              <p
                className={`text-lg ${portableTextColor} my-4 min-h-[6px] font-light`}
              >
                {props.children}
              </p>
            ),
            em: (props) => <em className="italic">{props.children}</em>,
            underline: (props) => <u className="underline">{props.children}</u>,
            h1: (props) => (
              <h1 className={`text-2xl font-bold ${portableTextColor}`}>
                {props.children}
              </h1>
            ),
            h2: (props) => (
              <h2 className={`text-xl font-bold ${portableTextColor}`}>
                {props.children}
              </h2>
            ),
            h3: (props) => (
              <h3 className={`text-lg font-bold ${portableTextColor}`}>
                {props.children}
              </h3>
            ),
            ul: (props) => (
              <ul className={`ml-6 ${portableTextColor}`}>{props.children}</ul>
            ),
            li: (props) => (
              <li className="list-disc list-outside my-2 font-light">
                {props.children}
              </li>
            ),
            strong: (props) => (
              <strong className={`font-black ${portableTextColor}`}>
                {props.children}
              </strong>
            ),
            link: ({ href, children }) => (
              <a href={href} className="text-FM-orange">
                {children}
              </a>
            ),
          };

          return (
            <div
              key={index}
              className={`mx-auto px-4 py-8 ${bgColor} sm:py-12 sm:px-6 lg:py-16 lg:px-8`}
            >
              <div
                className={`grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-7xl ${
                  applyBlueBg ? "5xl:max-w-[90vw]" : "4xl:max-w-[80vw]"
                } mx-auto lg:gap-16 ${applyBlueBg ? "lg:py-8" : "lg:py-8"}`}
              >
                <div
                  className={`relative object-contain rounded-lg overflow-hidden mx-auto w-[90vw] h-[90vw] md:w-[30vw] md:h-[30vw] ${
                    applyBlueBg ? "lg:order-last" : ""
                  }`}
                >
                  <Image
                    alt={section.title}
                    fill
                    src={urlFor(section.image).url()}
                    className="object-cover rounded-lg"
                  />
                </div>

                <div>
                  <h2
                    className={`text-3xl font-bold ${textColor} underline-offset-4 sm:text-4xl`}
                  >
                    {section.title}
                  </h2>

                  <PortableText
                    dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                    projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                    content={section.text}
                    className={`text-lg ${portableTextColor}`}
                    serializers={serializers}
                  />
                  {sec3title && (
                    <div className="mx-auto mt-8 flex justify-center">
                      <Ctabutton
                        href={sec3link}
                        text={sec3title}
                        newpage={newpage}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
