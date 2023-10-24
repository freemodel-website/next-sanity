import { urlFor } from "../../client";
import Ctabutton from "../atoms/ctabutton";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import the library

const MotionDiv = motion.div;

export default function Sixgrid({ title, imageArray, buttontext }) {
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
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 px-10 sm:px-0 md:mx-auto text-center lg:max-w-5xl md:mb-12">
        <h2 className="mb-10 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
          {title}
        </h2>
      </div>
      <MotionDiv
        ref={ref} // Attach the ref to the MotionDiv
        className="grid gap-12 row-gap-8 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // Animate based on inView status
      >
        {imageArray.map((section, index) => (
          <MotionDiv
            className="text-center px-14"
            key={index}
            variants={itemVariants}
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
              <div className="relative w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
                <Image
                  src={urlFor(section.image).url()}
                  fill
                  alt={section.title}
                />
              </div>
            </div>
            <h6 className="text-2xl mb-2 font-semibold leading-5">
              {section.title}
            </h6>
            <p className="max-w-md mb-3 text-base text-gray-900 sm:mx-auto">
              {section.text}
            </p>
          </MotionDiv>
        ))}
      </MotionDiv>

      {buttontext && (
        <div className="max-w-xl text-center mt-20 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
          <Ctabutton href="javascript:void(0)" text={buttontext} />
        </div>
      )}
    </div>
  );
}
