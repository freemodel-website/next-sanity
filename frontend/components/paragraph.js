import React from "react";
import PortableText from "react-portable-text";
import { urlFor } from "../client";

/**
 * Paragraph component renders a paragraph of text using PortableText from an array of strings.
 *
 * @param {string} text - The text content to be rendered.
 * @param {string} h1 - The h1 tailwind css(default: text-2xl).
 * @param {string} h2 - The h2 tailwind css(default: text-xl).
 * @param {string} h3 - The h3 tailwind css(default: text-lg).
 * @param {string} width - The width tailwind css(default: md:max-w-6xl).
 * @param {boolean} centerText - The centerText tailwind css(default: false).
 * @param {boolean} whiteText - The whiteText tailwind css(default: false).
 * @returns {JSX.Element} - Rendered Paragraph component.
 */
export default function Paragraph({
  text,
  h1 = "",
  h2 = "",
  h3 = "",
  width = "",
  centerText = false,
  whiteText = false,
}) {
  return (
    <div
      className={`${
        width === "" ? "md:max-w-6xl" : width
      } px-8 md:mx-auto pb-16 pt-8`}
    >
      <PortableText
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        content={text}
        className={`text-lg ${centerText ? "text-center" : ""} ${
          whiteText ? "text-white" : ""
        }`}
        serializers={{
          normal: (props) => (
            <p className="text-lg break-words my-4 min-h-[6px] font-light custom-styling-broker">
              {props.children}
            </p>
          ),
          em: (props) => <em className="italic">{props.children}</em>,
          underline: (props) => <u className=" underline ">{props.children}</u>,
          h1: (props) => (
            <h1
              className={`${h1 === "" ? "text-2xl" : h1} font-bold pgh1custom`}
            >
              {props.children}
            </h1>
          ),
          h2: (props) => (
            <h2 className={`${h2 === "" ? "text-xl" : h2} font-bold`}>
              {props.children}
            </h2>
          ),
          h3: (props) => (
            <h3 className={`${h3 === "" ? "text-lg" : h3} font-bold`}>
              {props.children}
            </h3>
          ),
          ul: (props) => <ul className="ml-6">{props.children}</ul>,
          li: (props) => (
            <li className="list-disc list-outside my-2 font-light ">
              {props.children}
            </li>
          ),
          strong: (props) => (
            <strong className="font-black">{props.children}</strong>
          ),
          link: ({ href, children }) => (
            <a href={href} className="text-FM-orange">
              {children}
            </a>
          ),
          image: (props) => (
            <img
              src={urlFor(props)}
              alt={props.node}
              className="mx-auto 
              max-h-[500px]
               md:px-10"
            />
          ),
        }}
      />
    </div>
  );
}
