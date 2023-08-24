import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Testimonial from "../atoms/testimonial";
import Image from "next/image";
import { urlFor } from "../../client";

export default function ImageCaroucel({ images }) {
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
    loop: true,
  });

  return (
    <>
      <div className="navigation-wrapper relative py-20">
        <h1 className="text-5xl text-center text-black font-bold mb-20">
          Featured Design Boards
        </h1>
        <div ref={sliderRef} className="keen-slider">
          {images.map((image, index) => (
            <div className="keen-slider__slide" key={index}>
              <div className="relative mx-auto h-[40vw] w-[80vw]">
                <Image
                  alt={image.alt}
                  src={urlFor(image).url()}
                  fill
                  className="object-contain"
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
    </>
  );
}
function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <div
      onClick={props.onClick}
      className={`arrow absolute top-1/2 translate-y-2/4 ${
        props.left ? "arrow--left left-8" : "arrow--right left-auto right-8"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <BsFillArrowLeftCircleFill
          className="w-10 h-10 text-FM-orange bg-white rounded-full"
          aria-hidden="true"
        />
      )}
      {!props.left && (
        <BsFillArrowRightCircleFill
          className="w-10 h-10 text-FM-orange bg-white rounded-full"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
