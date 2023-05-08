import React from "react";

export default function Ctabutton({ href, text }) {
  return (
    <a
      href="javascript:void(0)"
      className="inline py-3 px-6 text-lg text-center text-white bg-FM-orange hover:bg-orange-600 active:bg-gray-500 active:shadow-none rounded-lg shadow md:inline"
    >
      Let's Talk
    </a>
  );
}
