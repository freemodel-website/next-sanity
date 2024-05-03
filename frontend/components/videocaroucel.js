import React, { useMemo, useState, useEffect } from "react";
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

export default ({ videoData, horizontalslider }) => {
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
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 1300px)": {
        slides: {
          //if videodata.horizontalslider is true, then perView: 1, else perView: 2
          perView: horizontalslider ? 2 : 3,
          spacing: 10,
        },
      },
    },
    slides: { perView: 1 },
    loop: true,
  });

  return (
    <div className="text-center">
      <div
        className="navigation-wrapper relative mx-auto 
        w-full  sm:w-[65%] md:w-[65%] lg:w-[75%] xl:w-[95%] 2xl:w-[65%] 3xl:w-[75%] 4xl:w-[75%]"
      >
        <div className="slider-container w-[85%] mx-auto">
          <div ref={sliderRef} className="keen-slider">
            {videoData.map((project, index) => (
              <>
                {horizontalslider ? (
                  // Horizontal Video
                  <div
                    className="keen-slider__slide h-[350px] md:h-[500px] rounded-lg border-2 bg-white border-stone-100"
                    key={index}
                    style={{ maxWidth: 500, minWidth: 500 }}
                  >
                    {/* Project Image */}
                    <div className="relative w-full mx-auto object-cover mt-3">
                      {/* <iframe
                        src={project.videourl}
                        className="mx-auto rounded-lg"
                        width={ "500"}
                        height="350"
                        frameborder="0"
                        allow="autoplay; fullscreen"
                        allowfullscreen
                      ></iframe> */}
                      <style jsx>
                        {`
                          .responsive-iframe {
                            width: 90%; /* Takes full width on smaller screens */
                            max-width: 500px; /* Limits the maximum width */
                            height: 170px;
                          }

                          @media (min-width: 768px) {
                            .responsive-iframe {
                              width: 500px; /* Fixed width for larger screens */
                              height: 300px;
                            }
                          }
                        `}
                      </style>

                      <iframe
                        src={project.videourl}
                        className="mx-auto rounded-lg responsive-iframe"
                        frameborder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                      ></iframe>
                    </div>

                    {/* Project Title */}
                    <div className="mt-2">
                      <dl>
                        <div className="projectcardtitle px-8 md:px-0 md:w-[500px] md:mx-auto">
                          <h2 className="font-bold text-left text-xl min-h-[65px] line-clamp-2">
                            {project.title}
                          </h2>

                          <p className="text-sm text-left mb-6">
                            {project.description}
                          </p>
                        </div>
                      </dl>
                    </div>
                  </div>
                ) : (
                  // Vertical Video
                  <div
                    className="keen-slider__slide rounded-lg border-2 bg-white border-stone-100"
                    key={index}
                    style={{
                      maxWidth: 360,
                      width: "360px !important",
                      minWidth: "360px",
                    }}
                  >
                    {/* Project Image */}
                    <div className="relative w-full mx-auto object-cover mt-3">
                      <iframe
                        src={project.videourl}
                        className="mx-auto rounded-lg"
                        width="350"
                        height="500"
                        frameborder="0"
                        allow="autoplay; fullscreen"
                        allowfullscreen
                      ></iframe>
                    </div>

                    {/* Project Title */}
                    <div className="mt-2">
                      <dl>
                        <div className="projectcardtitle px-9">
                          <h2 className="font-bold text-left text-xl min-h-[65px] line-clamp-2">
                            {project.title}
                          </h2>

                          <p className="text-sm text-left mb-6">
                            {project.description}
                          </p>
                        </div>
                      </dl>
                    </div>
                  </div> //Slide end
                )}
              </>
            ))}
          </div>
          {/* Arrows */}
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
