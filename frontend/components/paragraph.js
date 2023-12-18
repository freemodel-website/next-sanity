import React from "react";
import PortableText from "react-portable-text";
import { urlFor } from "../client";

/**
 * Paragraph component renders a paragraph of text using PortableText from an array of strings.
 *
 * @param {string} text - The text content to be rendered.
 * @returns {JSX.Element} - Rendered Paragraph component.
 */
export default function Paragraph({ text }) {
  return (
    <div className="md:max-w-6xl px-8 md:mx-auto pb-16 pt-8">
      <PortableText
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        content={text}
        className="text-lg"
        serializers={{
          normal: (props) => (
            <p className="text-lg break-words my-4 min-h-[6px] font-light custom-styling-broker">
              {props.children}
            </p>
          ),
          em: (props) => <em className="italic">{props.children}</em>,
          underline: (props) => <u className=" underline ">{props.children}</u>,
          h1: (props) => (
            <h1 className="text-2xl font-bold">{props.children}</h1>
          ),
          h2: (props) => (
            <h2 className="text-xl font-bold">{props.children}</h2>
          ),
          h3: (props) => (
            <h3 className="text-lg font-bold">{props.children}</h3>
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
