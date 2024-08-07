/**
 * Projectcard Component
 *
 * This component represents a card displaying information about a project.
 *
 * @param {string} title - The title of the project.
 * @param {string} image - The URL of the project's image.
 * @param {number} beds - The number of beds in the project.
 * @param {number} baths - The number of baths in the project.
 * @param {number} duration - The duration of the project (in weeks or months).
 * @param {string} slug - The slug of the project for creating a link.
 * @param {boolean} bool - A boolean flag indicating the duration unit (true: months, false: weeks).
 *                         Defaults to 'false' if not provided.
 *
 * @returns {JSX.Element} A React component displaying project information in a card format.
 */
/** documentation here */
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBed, FaBath, FaCalendarAlt } from "react-icons/fa";
import useIntersectionObserver from "../../lib/useIntersectionObserver";

export default function Projectcard({
  title,
  image,
  beds,
  baths,
  duration,
  slug,
  bool = false,
}) {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <Link
      href={`/projects/${slug}`}
      className="block w-[90vw] max-w-lg rounded-lg p-4 border-2 bg-white border-stone-100 mx-5 my-5 lg:w-[30vw] lg:max-w-[26rem] sm:mx-auto"
    >
      {/* Project Image */}
      <div className="relative h-72 w-full object-cover" ref={ref}>
        {isIntersecting && (
          <img
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",

              background:
                "linear-gradient(126deg, rgba(0, 0, 0, 0.5) 0%, rgb(0 0 0 / 29%) 100%)",
            }}
            alt={title}
            src={image}
            height={288}
            width={380}
            loading="lazy"
            //blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0"
            //placeholder="blur"
            className="rounded-lg object-cover h-72"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 30vw, 26rem"
          />
        )}
      </div>

      {/* Project Title */}
      <div className="mt-2">
        <dl>
          <div className="projectcardtitle">
            <dt className="sr-only">{title}</dt>
            <h2 className="font-bold text-left text-2xl min-h-[65px] line-clamp-2">
              {title}
            </h2>
          </div>
        </dl>

        {/* Project Details (Beds, Baths, Duration) */}
        <div className="mt-3 flex items-center gap-8 text-xs">
          {/* Number of Beds */}
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <FaBed className="h-5 w-5 text-FM-orange" />
            <p className="text-black text-lg">{beds}</p>
          </div>

          {/* Number of Baths */}
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <FaBath className="h-5 w-5 text-FM-orange" />
            <p className="text-black text-lg">{baths}</p>
          </div>

          {/* Project Duration */}
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <FaCalendarAlt className="h-5 w-5 text-FM-orange" />
            <p className="text-black text-lg">
              {duration} {bool ? "Months" : "Weeks"}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
