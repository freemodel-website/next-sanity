import React from "react";
import Accordianlist from "../atoms/accordianlist";
import Ctabutton from "../atoms/ctabutton";

export default function Ourprocess() {
  const faqsList = [
    {
      q: "What are some random questions to ask?",
      a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
    },
    {
      q: "Do you include common questions?",
      a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
    },
    {
      q: "Can I use this for 21 questions?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      q: "Are these questions for girls or for boys?",
      a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",
    },
    {
      q: "What do you wish you had more talent doing?",
      a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
    },
  ];

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
