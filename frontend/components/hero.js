import React from "react";
import { motion } from "framer-motion";
import Ctabutton from "./atoms/ctabutton";
import Image from "next/image";

const Hero = ({
  hero,
  buttontext,
  buttontext2,
  image,
  pomp = false,
  buttonurl = "",
  buttonurl2 = "",
  logo,
}) => {
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
        alt="hero"
        loading="eager"
        priority={true}
      />
      <motion.div
        className="relative bg-gray-900 bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={pomp ? { duration: 1 } : { duration: 0.4 }}
      >
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl max md:px-24 lg:px-8 lg:py-28 2xl:py-36">
          <motion.div
            className="text-center m-auto"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            {logo && (
              <div className="relative h-40 w-96 mx-auto">
                <Image
                  src={logo ? logo : "/testhouse.jpg"}
                  className="object-contain"
                  fill
                  alt="hero"
                  loading="eager"
                  //priority={true}
                />
              </div>
            )}

            {hero.title && (
              <motion.h2
                className={`text-center m-auto
                ${pomp ? "my-10" : "my-6"}
                text-6xl font-bold tracking-tight text-white sm:text-8xl sm:leading-none`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={pomp ? { delay: 0.5, duration: 1 } : null}
              >
                {hero.title}
              </motion.h2>
            )}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={pomp ? { delay: 1, duration: 0.5 } : null}
            >
              <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center justify-center">
                {buttontext && (
                  <Ctabutton
                    href={buttonurl ? buttonurl : "/request-estimate"}
                    text={buttontext}
                  />
                )}
                {buttontext2 && (
                  <Ctabutton
                    href={buttonurl2 ? buttonurl2 : "/request-estimate"}
                    text={buttontext2}
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
