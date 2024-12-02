import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Testimonial from "./atoms/testimonial";
import { urlFor } from "../client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function QuoteSlider({ title, testimonials }) {
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
      <div className="navigation-wrapper relative bg-FM-blue pt-20">
        <h1 className="text-4xl sm:text-5xl text-center text-white font-bold mb-4">
          {title}
        </h1>
        <Carousel
          className="mx-auto mt-20 w-3/4 md:w-10/12 lg:w-9/12 xl:w-10/12"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 m-5">
                  <div class="mb-8 text-center md:mb-0">
                    <img
                      class="w-40 h-40 mx-auto -mb-24 rounded-full object-cover shadow-lg"
                      src={urlFor(testimonial.testimonialimage).url()}
                      alt={testimonial.testimonialperson}
                    />
                    <div class="px-8 pt-28 text-gray-400 bg-white rounded-lg shadow-lg min-h-[420px]">
                      <h3 class="text-xl text-gray-800 font-title">
                        {testimonial.testimonialperson}
                      </h3>
                      <p class="text-base pb-4 leading-tight">
                        {testimonial.testimonialposition}
                      </p>
                      <p class="mb-4 pb-4 text-sm font-body my-auto">
                        {testimonial.testimonialquote}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="!bg-FM-orange !border-none text-white" />

          <CarouselNext className="!bg-FM-orange !border-none text-white" />
        </Carousel>
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
