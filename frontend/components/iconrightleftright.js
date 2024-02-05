import React from "react";
import Ctabutton from "../components/atoms/ctabutton";
import Image from "next/image";
import { urlFor } from "../client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionDiv = motion.div;

export default function iconrightleftright({ title, imageArray }) {
  return (
    <div className="bg-FM-blue py-16 mx-auto lg:py-20">
      {/* Title */}
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
        <h2 className="mb-10 text-5xl font-bold leading-none tracking-tight mx-auto text-center text-white sm:text-5xl">
          {title}
        </h2>
      </div>

      {/* Image and text blocks */}
      {imageArray.map((section, index) => (
        <Section key={index} section={section} index={index} />
      ))}

      {/* CTA */}
      <div className="flex justify-center mt-10">
        <Ctabutton href="/lets-talk" text="Let's Talk" />
      </div>
    </div>
  );
}

function Section({ section, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative mx-auto max-w-screen-lg px-4 py-8 sm:py-12 sm:px-6 lg:py-10 lg:px-8">
      {section?.link && (
        <a href={section?.link} rel="noopener noreferrer">
          <h2 className="text-3xl font-bold text-white underline underline-offset-4 decoration-1 sm:text-4xl hover:text-FM-orange">
            {section.title}
          </h2>
        </a>
      )}
      {!section?.link && (
        <div
          className={`relative h-6 overflow-hidden rounded-lg sm:h-80 ${
            index % 2 === 0 ? "lg:order-last" : ""
          } lg:h-full`}
        >
          <div
            className={`lg:flex ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className={`lg:w-1/2 ${index % 2 === 0 ? "" : ""}`}>
              <div className=" inset-0 object-contain">
                <Image
                  src={urlFor(section.image).url()}
                  height={448}
                  width={392}
                  alt={section.title}
                  className="w-16 h-full object-contain"
                />
              </div>
            </div>
            <div className="lg:w-1/2 ">
              <h2 className="text-3xl font-bold text-white underline underline-offset-4 decoration-1 sm:text-4xl">
                {section.title}
              </h2>
            </div>
          </div>
        </div>
      )}

      <p className="mt-4 text-white font-light text-3xl">{section.text}</p>
    </div>
  );
}
