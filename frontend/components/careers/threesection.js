import React from "react";
import Image from "next/image";
import PortableText from "react-portable-text";

export default function ThreeSection({ imageArray }) {
  const sections = [
    {
      textColor: "text-white",
      heading: "We’re local.",
      content:
        "Our local project directors are based in your region. They visit your site often and remain the trusted point of contact throughout the project.",
    },
    {
      textColor: "text-black",
      heading: "What Makes Us Unique",
      content:
        "Our local project directors are based in your region. They visit your site often and remain the trusted point of contact throughout the project.",
    },
    {
      textColor: "text-white",
      heading: "Our Team",
      content:
        "Our local project directors are based in your region. They visit your site often and remain the trusted point of contact throughout the project.",
    },
  ];

  return (
    <div className="mx-auto">
      <section>
        {imageArray.map((section, index) => (
          <div
            key={index}
            className={`mx-auto px-4 py-8 ${
              index % 2 === 0 ? "bg-FM-blue" : ""
            } sm:py-12 sm:px-6 lg:py-16 lg:px-8`}
          >
            {index % 2 === 0 ? (
              <div className="mx-auto px-4 py-8 bg-FM-blue sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-7xl mx-auto lg:gap-16">
                  <div className="relative object-contain rounded-lg overflow-hidden mx-auto w-[90vw] h-[90vw] md:w-[30vw] md:h-[30vw] lg:order-last">
                    <Image
                      alt="Party"
                      fill
                      src="/testhouse.jpg"
                      className="object-cover rounded-lg"
                    />
                  </div>

                  <div className="">
                    <h2
                      className={`text-3xl font-bold ${
                        index % 2 === 0 ? "font-black" : "font-white"
                      } underline-offset-4 sm:text-4xl`}
                    >
                      {section.title}
                    </h2>

                    <PortableText
                      dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                      projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                      content={section.text}
                      className="text-lg text-white"
                      serializers={{
                        normal: (props) => (
                          <p className="text-lg text-white my-4 min-h-[6px] font-light">
                            {props.children}
                          </p>
                        ),
                        em: (props) => (
                          <em className="italic">{props.children}</em>
                        ),
                        underline: (props) => (
                          <u className=" underline ">{props.children}</u>
                        ),
                        h1: (props) => (
                          <h1 className="text-2xl font-bold text-white">
                            {props.children}
                          </h1>
                        ),
                        h2: (props) => (
                          <h2 className="text-xl font-bold text-white">
                            {props.children}
                          </h2>
                        ),
                        h3: (props) => (
                          <h3 className="text-lg font-bold text-white">
                            {props.children}
                          </h3>
                        ),
                        ul: (props) => (
                          <ul className="ml-6 text-white">{props.children}</ul>
                        ),
                        li: (props) => (
                          <li className="list-disc list-outside my-2 font-light ">
                            {props.children}
                          </li>
                        ),
                        strong: (props) => (
                          <strong className="font-black text-white">
                            {props.children}
                          </strong>
                        ),
                        link: ({ href, children }) => (
                          <a href={href} className="text-FM-orange">
                            {children}
                          </a>
                        ),
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-7xl mx-auto lg:gap-16">
                <div className="relative object-contain rounded-lg overflow-hidden mx-auto w-[90vw] h-[90vw] md:w-[30vw] md:h-[30vw]">
                  <Image
                    alt="Party"
                    fill
                    src="/testhouse.jpg"
                    className="object-cover rounded-lg"
                  />
                </div>

                <div className="">
                  <h2
                    className={`text-3xl font-bold ${
                      index % 2 === 0 ? "font-black" : "font-white"
                    } underline-offset-4 sm:text-4xl`}
                  >
                    {section.title}
                  </h2>

                  <PortableText
                    dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                    projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                    content={section.text}
                    className="text-lg text-white"
                    serializers={{
                      normal: (props) => (
                        <p className="text-lg text-white my-4 min-h-[6px] font-light">
                          {props.children}
                        </p>
                      ),
                      em: (props) => (
                        <em className="italic">{props.children}</em>
                      ),
                      underline: (props) => (
                        <u className=" underline ">{props.children}</u>
                      ),
                      h1: (props) => (
                        <h1 className="text-2xl font-bold text-white">
                          {props.children}
                        </h1>
                      ),
                      h2: (props) => (
                        <h2 className="text-xl font-bold text-white">
                          {props.children}
                        </h2>
                      ),
                      h3: (props) => (
                        <h3 className="text-lg font-bold text-white">
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
                        <strong className="font-black text-white">
                          {props.children}
                        </strong>
                      ),
                      link: ({ href, children }) => (
                        <a href={href} className="text-FM-orange">
                          {children}
                        </a>
                      ),
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
