import React from "react";

/**
 *
 * @param theme - titletext, leftimg
 * @returns
 */
export default function Bluebar({ theme, body }) {
  let text;
  switch (theme) {
    case "titletext":
      text = (
        <div className="bg-gray-800">
          <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-4xl font-extrabold text-white sm:text-4xl">
              We Believe
            </h2>
            <p className="text-2xl mt-4 max-w-4xl mx-auto text-white">
              There’s a world where everyone involved in a real estate
              transaction can win. Freemodel takes the burden off the agent and
              seller to prepare a home for sale, and the buyer gets a move-in
              ready home!
            </p>
          </div>
        </div>
      );
      break;

    case "leftimg":
      text = (
        <section className="bg-FM-blue py-14">
          <div className="max-w-screen-xl mx-auto md:px-8">
            <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
              <div className=" ">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  className="md:max-w-lg sm:rounded-lg"
                  alt=""
                />
              </div>
              <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                <p className="mt-3 text-2xl text-white">
                  Our approach relies on your knowledge and guidance. And when
                  homeowners win, so do you. Freemodel markets exclusively
                  through individual agents and brokerages. When homeowners come
                  to us directly, we refer them to our top agents without any
                  fees.
                </p>
              </div>
            </div>
          </div>
        </section>
      );
      break;

    default:
      text = (
        <div className="bg-gray-800">
          <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-3xl font-extrabold text-white mx-auto sm:text-[38px] sm:max-w-4xl">
              {body}
            </h2>
          </div>
        </div>
      );
      break;
  }

  return text;
}
