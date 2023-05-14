import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Projectcard from "./atoms/projectcard";

export default () => {
  const [sliderRef] = useKeenSlider({
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
    <div className="text-center my-60">
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <Projectcard />
        </div>
        <div className="keen-slider__slide number-slide2">
          <Projectcard />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Projectcard />
        </div>
        <div className="keen-slider__slide number-slide4">
          <Projectcard />
        </div>
        <div className="keen-slider__slide number-slide5">
          <Projectcard />
        </div>
        <div className="keen-slider__slide number-slide6">
          <Projectcard />
        </div>
      </div>
    </div>
  );
};
