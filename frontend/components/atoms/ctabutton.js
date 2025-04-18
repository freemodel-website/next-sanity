import React from "react";

/**
 * A function that adds two numbers.
 *
 * @param {string} href - The url of the button.
 * @param {string} text - The text of the button.
 */
export default function Ctabutton({ href, text }) {
  return (
    <div className="inline-block cursor-pointer py-3 px-6 bg-[#EA4326] hover:bg-orange-600 active:shadow-none rounded-lg shadow ">
      <a
        href={href}
        id="cta_contact_button"
        className="text-lg text-center text-white "
      >
        {text ? text : "Let's Talk"}
      </a>
    </div>
  );
}
