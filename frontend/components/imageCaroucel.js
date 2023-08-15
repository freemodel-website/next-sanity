import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { urlFor } from "../client";
import "keen-slider/keen-slider.min.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Image from "next/image";

export default ({ images }) => {
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
        slides: { perView: 1, spacing: 5 },
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
      <div className="navigation-wrapper relative">
        <div ref={sliderRef} className="keen-slider">
          {images.map((image, index) => (
            <div className="keen-slider__slide" key={index}>
              <div className="relative h-96">
                <Image
                  src={urlFor(image.asset).url()}
                  alt={image.alt}
                  fill
                  className="object-cover w-full h-full"
                />
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
