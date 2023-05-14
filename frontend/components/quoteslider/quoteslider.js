import React, { useState } from "react";
import Projectcard from "../atoms/projectcard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default function Guoteslider() {
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
      <div className="navigation-wrapper relative">
        <style jsx>{`
          body {
            margin: 0;
            font-family: "Inter", sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          [class^="number-slide"],
          [class*=" number-slide"] {
            background: grey;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 50px;
            color: #fff;
            font-weight: 500;
            height: 300px;
            max-height: 100vh;
          }

          .number-slide1 {
            background: rgb(64, 175, 255);
            background: linear-gradient(
              128deg,
              rgba(64, 175, 255, 1) 0%,
              rgba(63, 97, 255, 1) 100%
            );
          }

          .number-slide2 {
            background: rgb(255, 75, 64);
            background: linear-gradient(
              128deg,
              rgba(255, 154, 63, 1) 0%,
              rgba(255, 75, 64, 1) 100%
            );
          }

          .number-slide3 {
            background: rgb(182, 255, 64);
            background: linear-gradient(
              128deg,
              rgba(182, 255, 64, 1) 0%,
              rgba(63, 255, 71, 1) 100%
            );
            background: linear-gradient(
              128deg,
              rgba(189, 255, 83, 1) 0%,
              rgba(43, 250, 82, 1) 100%
            );
          }

          .number-slide4 {
            background: rgb(64, 255, 242);
            background: linear-gradient(
              128deg,
              rgba(64, 255, 242, 1) 0%,
              rgba(63, 188, 255, 1) 100%
            );
          }

          .number-slide5 {
            background: rgb(255, 64, 156);
            background: linear-gradient(
              128deg,
              rgba(255, 64, 156, 1) 0%,
              rgba(255, 63, 63, 1) 100%
            );
          }
          .number-slide6 {
            background: rgb(64, 76, 255);
            background: linear-gradient(
              128deg,
              rgba(64, 76, 255, 1) 0%,
              rgba(174, 63, 255, 1) 100%
            );
          }

          .navigation-wrapper {
            position: relative;
          }

          .dots {
            display: flex;
            padding: 10px 0;
            justify-content: center;
          }

          .dot {
            border: none;
            width: 10px;
            height: 10px;
            background: #c5c5c5;
            border-radius: 50%;
            margin: 0 5px;
            padding: 5px;
            cursor: pointer;
          }

          .dot:focus {
            outline: none;
          }

          .dot.active {
            background: #000;
          }

          .arrow {
            width: 30px;
            height: 30px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            -webkit-transform: translateY(-50%);
            fill: #fff;
            cursor: pointer;
          }

          .arrow--left {
            left: 5px;
          }

          .arrow--right {
            left: auto;
            right: 5px;
          }

          .arrow--disabled {
            fill: rgba(255, 255, 255, 0.5);
          }
        `}</style>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">1</div>
          <div className="keen-slider__slide number-slide2">2</div>
          <div className="keen-slider__slide number-slide3">3</div>
          <div className="keen-slider__slide number-slide4">4</div>
          <div className="keen-slider__slide number-slide5">5</div>
          <div className="keen-slider__slide number-slide6">6</div>
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
      {loaded && instanceRef.current && (
        <div className="dots flex p-3 justify-center">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
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
        <FaArrowAltCircleLeft
          className="w-6 h-6 text-FM-orange"
          aria-hidden="true"
        />
      )}
      {!props.left && (
        <FaArrowAltCircleRight
          className="w-8 h-8 text-FM-orange"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
