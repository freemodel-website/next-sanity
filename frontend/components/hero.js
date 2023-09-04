import React from "react";
import { motion } from "framer-motion";
import Ctabutton from "./atoms/ctabutton";
import Image from "next/image";

const Hero = ({ hero, buttontext, image, pomp = false }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative">
      <Image
        src={image ? image : "/testhouse.jpg"}
        className="absolute inset-0 object-cover w-full h-full"
        fill
        alt=""
      />
      <motion.div
        className="relative bg-gray-900 bg-opacity-75"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={pomp ? { duration: 1 } : { duration: 0.4 }}
      >
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-36">
          <motion.div
            className="text-center m-auto"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <motion.h2
              className="text-center m-auto mb-16 text-5xl font-bold tracking-tight text-white sm:text-8xl sm:leading-none"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={pomp ? { delay: 0.5, duration: 1 } : null}
            >
              {hero.title}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={pomp ? { delay: 1, duration: 0.5 } : null}
            >
              {buttontext && <Ctabutton href="/lets-talk" text={buttontext} />}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
