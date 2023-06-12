import React from "react";
import PortableText from "react-portable-text";

export default function Paragraph({ text }) {
  console.log(text, "text");
  return (
    <div className="container mx-auto px-8 py-24">
      <PortableText
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        content={text}
        className="text-lg"
        serializers={{
          normal: (props) => (
            <p className="my-4 min-h-[6px]">{props.children}</p>
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
          ui: (props) => <ul className="ml-6">{props.children}</ul>,
          li: (props) => (
            <li className="list-disc list-inside my-2 font-medium ">
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
        }}
      />
    </div>
  );
}
