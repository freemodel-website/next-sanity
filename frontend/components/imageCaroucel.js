import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { urlFor } from "../client";
import "keen-slider/keen-slider.min.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Image from "next/image";

export default ({ gallery }) => {
  let imageType = false;

  // If there is no gallery, set a default image
  if (!gallery) {
    imageType = true;
    gallery = [
      // 1
      {
        title: "Living Rooms",
        image: {
          asset: {
            url: "/defaultCarousel/1.png",
          },
        },
      },
      // 2
      {
        title: "Conversions",
        image: {
          asset: {
            url: "/defaultCarousel/2.jpeg",
          },
        },
      },
      // 3
      {
        title: "Kitchens",
        image: {
          asset: {
            url: "/defaultCarousel/3.jpg",
          },
        },
      },
      // 4
      {
        title: "Backyards",
        image: {
          asset: {
            url: "/defaultCarousel/4.jpg",
          },
        },
      },
      // 5
      {
        title: "Dining Rooms",
        image: {
          asset: {
            url: "/defaultCarousel/5.jpg",
          },
        },
      },
      // 6
      {
        title: "Exteriors",
        image: {
          asset: {
            url: "/defaultCarousel/6.jpg",
          },
        },
      },
      // 7
      {
        title: "Family Rooms",
        image: {
          asset: {
            url: "/defaultCarousel/7.jpg",
          },
        },
      },
      // 8
      {
        title: "Bathrooms",
        image: {
          asset: {
            url: "/defaultCarousel/8.png",
          },
        },
      },
    ];
  }

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
          {gallery.map((gallery, index) => (
            <div className="keen-slider__slide" key={index}>
              <div className="relative h-96 mx-4">
                {/*  If image is false  */}
                {!imageType && (
                  <Image
                    src={urlFor(gallery.image).url()}
                    alt={gallery.title}
                    fill
                    className="object-cover w-full h-full"
                  />
                )}
                {/*  If image is true  */}

                {imageType && (
                  <Image
                    src={gallery.image.asset.url}
                    alt={gallery.title}
                    fill
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
              <h3 className="text-white text-lg mt-4">{gallery.title}</h3>
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
