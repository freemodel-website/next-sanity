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

export default () => {
  const videoData = [
    {
      videourl: "https://player.vimeo.com/video/903438744?h=d43eaf3756",
      title: "Title 1",
      description: "Description 1",
    },
    {
      videourl: "https://player.vimeo.com/video/903438744?h=d43eaf3756",
      title: "Title 2",
      description: "Description 2",
    },
    {
      videourl: "https://player.vimeo.com/video/903438744?h=d43eaf3756",
      title: "Title 3",
      description: "Description 3",
    },
  ];

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
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
    loop: true,
  });

  // <iframe src="https://player.vimeo.com/video/903438744?h=d43eaf3756" width="400" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  //Array of objects, videourl, title, description
  return (
    <div className="text-center">
      <div className="navigation-wrapper relative sm:mx-10">
        <div className="slider-container w-[85%] mx-auto">
          <div ref={sliderRef} className="keen-slider">
            {videoData.map((project, index) => (
              <div
                className="keen-slider__slide sm:w-[74vw] md:w-[51vw] lg:w-[30vw] lg:max-w-[23rem] xl:max-w-[20rem] 2xl:max-w-[26rem] max-w-lg rounded-lg border-2 bg-white border-stone-100   sm:mx-auto"
                key={index}
              >
                {/* Project Image */}
                <div className="relative w-full mx-auto object-cover mt-3">
                  <iframe
                    src={project.videourl}
                    className="mx-auto rounded-lg"
                    width="340"
                    height="564"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowfullscreen
                  ></iframe>
                </div>

                {/* Project Title */}
                <div className="mt-2">
                  <dl>
                    <div className="projectcardtitle">
                      <dt className="sr-only">{project.title}</dt>
                      <h2 className="font-bold text-center text-2xl min-h-[65px] line-clamp-2">
                        {project.title}
                      </h2>
                    </div>
                  </dl>
                </div>
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
