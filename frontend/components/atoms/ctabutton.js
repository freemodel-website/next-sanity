import React from "react";

/**
 * A function that adds two numbers.
 *
 * @param {string} href - The url of the button.
 * @param {string} text - The text of the button.
 */
export default function Ctabutton({ href, text }) {
  return (
    <div className="inline-block py-3 px-6 bg-FM-orange hover:bg-orange-600 active:bg-gray-500 active:shadow-none rounded-lg shadow ">
      <a href={href} className="text-lg text-center text-white ">
        {text}
      </a>
    </div>
  );
}
