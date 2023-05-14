import React from "react";
import { FaBed, FaBath, FaCalendarAlt } from "react-icons/fa";

export default function Projectcard() {
  return (
    <a
      href="#"
      className="block bg-white max-w-lg rounded-lg p-4  mx-auto my-5 "
    >
      <img
        alt="Home"
        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="h-72 w-full rounded-lg object-cover"
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">title</dt>

            <h2 className="font-bold text-left text-2xl">
              Mountain Top Majesty
            </h2>
          </div>
        </dl>

        <div className="mt-3 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <FaBed className="h-5 w-5 text-FM-orange" />
            <p className="text-black text-lg">2</p>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <FaBath className="h-5 w-5 text-FM-orange" />
            <p className="text-black text-lg">1</p>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <FaCalendarAlt className="h-5 w-5 text-FM-orange" />
            <p className="text-black text-lg">4 months</p>
          </div>
        </div>
      </div>
    </a>
  );
}
