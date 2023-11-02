import React from "react";
import Ctabutton from "../atoms/ctabutton";
import Image from "next/image";
import { urlFor } from "../../client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionDiv = motion.div;
export default function Homelocation({ states, buttontext }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Animations will only trigger once when becoming visible
    threshold: 0.2, // Adjust this threshold as needed
  });

  return (
    <div className="py-16 mx-auto lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
        <h2 className="mb-10 text-5xl font-bold leading-none tracking-tight text-center text-black sm:text-5xl md:mx-auto">
          Locations
        </h2>
      </div>
      {/* grid */}

      <MotionDiv
        ref={ref}
        className="items-center px-4 max-w-screen-xl mx-auto md:px-8 grid gap-11 sm:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // Animate based on inView status
      >
        {states
          .filter(
            (state) =>
              state.statename != "Partnerships" &&
              state.statename != "In-House Design Team" &&
              state.statename != "Author"
          )
          .sort((a, b) => a.statename.localeCompare(b.statename))
          .map((state, index) => (
            <a key={index + 1} href={`/locations/${state.slug.current}`}>
              <MotionDiv className="group" key={index} variants={itemVariants}>
                <div className="relative h-72 w-full">
                  <Image
                    alt={state.statename}
                    fill
                    sizes="(max-width: 640px) 100vw, 640px"
                    src={urlFor(state.image).url()}
                    className="h-72 w-full rounded-xl object-cover shadow-xl transition group-hover:opacity-80"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-3xl underline underline-offset-4 decoration-1 font-bold sm:text-3xl text-FM-orange group-hover:text-orange-600">
                    {state.statename}
                  </h3>
                </div>
              </MotionDiv>
            </a>
          ))}
      </MotionDiv>

      {/*  */}
      <div className="flex justify-center mt-14">
        <Ctabutton href="/lets-talk" text={buttontext} />
      </div>
    </div>
  );
}
