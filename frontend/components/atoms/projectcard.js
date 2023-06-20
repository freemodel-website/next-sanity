import React from "react";
import Image from "next/image";
import { FaBed, FaBath, FaCalendarAlt } from "react-icons/fa";

export default function Projectcard({ title, image, beds, baths, duration }) {
  return (
    <a
      href="#"
      className="block w-[90vw] max-w-lg rounded-lg p-4 border-2 bg-white border-stone-100 mx-5 my-5 lg:w-[30vw] sm:mx-auto"
    >
      <div className="relative h-72 w-full">
        <Image
          alt={title}
          src={image}
          fill
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0"
          placeholder="blur"
          className="rounded-lg object-cover h-20"
        />
      </div>

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">{title}</dt>

            <h2 className="font-bold text-left text-2xl">{title}</h2>
          </div>
        </dl>

        <div className="mt-3 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <FaBed className="h-5 w-5 text-FM-orange" />
            <p className="text-black text-lg">{beds}</p>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <FaBath className="h-5 w-5 text-FM-orange" />
            <p className="text-black text-lg">{baths}</p>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <FaCalendarAlt className="h-5 w-5 text-FM-orange" />
            <p className="text-black text-lg">{duration} months</p>
          </div>
        </div>
      </div>
    </a>
  );
}
