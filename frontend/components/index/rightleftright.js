import React from "react";
import Ctabutton from "../atoms/ctabutton";
import Image from "next/image";
import { urlFor } from "../../client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionDiv = motion.div;

export default function rightleftright({ title, imageArray }) {
  return (
    <div className="bg-FM-blue py-16 mx-auto lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
        <h2 className="mb-10 text-5xl font-bold leading-none tracking-tight mx-auto text-center text-white sm:text-5xl">
          {title}
        </h2>
      </div>
      {imageArray.map((section, index) => (
        <Section key={index} section={section} index={index} />
      ))}
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
    <section ref={ref}>
      <MotionDiv
        className="mx-auto max-w-screen-lg px-4 py-8 sm:py-12 sm:px-6 lg:py-10 lg:px-8"
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <div className="absolute inset-0 object-cover">
              <Image
                src={urlFor(section.image).url()}
                height={448}
                width={392}
                alt={section.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div
            className={index % 2 === 0 ? "lg:py-24" : "lg:py-24 sm:order-last"}
          >
            <h2 className="text-3xl font-bold text-white underline underline-offset-4 decoration-1 sm:text-4xl">
              {section.title}
            </h2>
            <p className="mt-4 text-white font-light text-3xl">
              {section.text}
            </p>
          </div>
        </div>
      </MotionDiv>
    </section>
  );
}
