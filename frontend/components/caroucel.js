import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Projectcard from "./atoms/projectcard";
import { urlFor } from "../client";
import Image from "next/image";
import Link from "next/link";
import { FaBed, FaBath, FaCalendarAlt } from "react-icons/fa";

export default ({ projects }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 1 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 1 },
      },
    },
    slides: { perView: 1 },
    loop: true,
  });

  return (
    <div className="text-center">
      <div className="navigation-wrapper relative sm:mx-10">
        <div className="slider-container w-10/12 mx-auto">
          <div ref={sliderRef} className="keen-slider">
            {projects.map((project, index) => (
              <div className="keen-slider__slide" key={index}>
                {/* <Projectcard
                key={project.slug.current}
                title={project.title}
                image={urlFor(project.mainImage).url()}
                beds={project.beds}
                baths={project.baths}
                duration={project.durationmonths}
                slug={project.slug.current}
                bool={project.bool}
              /> */}

                <Link
                  href={`/projects/${project.slug.current}`}
                  className="block w-[90vw] max-w-lg rounded-lg p-4 border-2 bg-white border-stone-100 mx-5 lg:w-[30vw] lg:max-w-[26rem] sm:mx-auto"
                >
                  {/* Project Image */}
                  <div className="relative h-72 w-full object-cover">
                    <Image
                      alt={project.title}
                      src={urlFor(project.mainImage).url()}
                      height={288}
                      width={380}
                      loading="lazy"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0"
                      placeholder="blur"
                      className="rounded-lg object-cover h-72"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 30vw, 26rem"
                    />
                  </div>

                  {/* Project Title */}
                  <div className="mt-2">
                    <dl>
                      <div className="projectcardtitle">
                        <dt className="sr-only">{project.title}</dt>
                        <h2 className="font-bold text-left text-2xl min-h-[65px] line-clamp-2">
                          {project.title}
                        </h2>
                      </div>
                    </dl>

                    {/* Project Details (Beds, Baths, Duration) */}
                    <div className="mt-3 flex items-center gap-8 text-xs">
                      {/* Number of Beds */}
                      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <FaBed className="h-5 w-5 text-FM-orange" />
                        <p className="text-black text-lg">{project.beds}</p>
                      </div>

                      {/* Number of Baths */}
                      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <FaBath className="h-5 w-5 text-FM-orange" />
                        <p className="text-black text-lg">{project.baths}</p>
                      </div>

                      {/* Project Duration */}
                      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <FaCalendarAlt className="h-5 w-5 text-FM-orange" />
                        <p className="text-black text-lg">
                          {project.duration} {project.bool ? "Months" : "Weeks"}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <div
      onClick={props.onClick}
      className={`arrow absolute top-[40%] translate-y-2/4 ${
        props.left ? "arrow--left left-1" : "arrow--right left-auto right-1"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <BsFillArrowLeftCircleFill
          className="w-10 h-10 text-FM-orange bg-white rounded-full opacity-75"
          aria-hidden="true"
        />
      )}
      {!props.left && (
        <BsFillArrowRightCircleFill
          className="w-10 h-10 text-FM-orange bg-white rounded-full opacity-75"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
