import React from "react";
import Accordianlist from "../atoms/accordianlist";
import Ctabutton from "../atoms/ctabutton";

export default function LearnSection({ faqsList }) {
  return (
    <div class="flex flex-col items-center mt-24">
      <div className="mt-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Learn about our services
        </h1>
      </div>
      <div className="mt-14 mb-20">
        <Accordianlist faqsList={faqsList} />
      </div>

      <div className="mb-24">
        <Ctabutton text="Let's Talk" href="/lets-talk" className="mt-12" />
      </div>
    </div>
  );
}
