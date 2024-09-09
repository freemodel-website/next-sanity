import React from "react";
import Accordianlist from "../atoms/accordianlist";
import Ctabutton from "../atoms/ctabutton";
import { urlFor } from "../../client";

/**
 *
 * @param {object} props
 * @param {object} props.faqsList - array of objects with q and a keys
 * @param {object} props.image - image object
 * @param {string} props.buttontitle - default is "Let's Talk"
 * @param {string} props.title - default is "Our Process"
 * @returns
 * @example
 * <Ourprocess
 *  image={data.questionimage}
 * faqsList={data.questionsanswers}
 * buttontitle={data.buttontitle}
 * />
 */
export default function Ourprocessdark({
  faqsList,
  image,
  buttontitle,
  title = "Our Process",
}) {
  return (
    <div className="px-4 py-16 mx-auto bg-FM-blue sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className="mb-1 text-4xl font-semibold tracking-wide text-center text-white sm:text-5xl md:mb-20 ">
        {title}
      </h1>
      <div className="grid gap-12 row-gap-8 content-start lg:grid-cols-2">
        <div className="relative">
          <img
            className="object-cover w-full h-56 mt-6 mb-6 rounded-md sm:h-96"
            src={urlFor(image).url()}
            alt={image.alt}
          />
        </div>
        <div className="flex flex-col justify-center">
          <Accordianlist faqsList={faqsList} dark={true} />
        </div>
      </div>
      <div className="text-center mt-12">
        <Ctabutton text={buttontitle} href="/lets-talk" />
      </div>
    </div>
  );
}
