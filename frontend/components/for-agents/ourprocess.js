import React from "react";
import Accordianlist from "../atoms/accordianlist";
import Ctabutton from "../atoms/ctabutton";

export default function Ourprocess({ faqsList }) {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className="mb-1 text-4xl font-semibold tracking-wide text-center md:mb-20 ">
        Our Process
      </h1>
      <div className="grid gap-12 row-gap-8 content-start lg:grid-cols-2">
        <div>
          <img
            className="object-cover w-full h-56 mt-6 mb-6 rounded-md sm:h-96"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
          />
          <div className="text-center mt-12">
            <Ctabutton text="Let's Talk" href="/lets-talk" />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <Accordianlist faqsList={faqsList} />
        </div>
      </div>
    </div>
  );
}
