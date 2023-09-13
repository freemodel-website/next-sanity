import Image from "next/image";
import { urlFor } from "../client";
import Ctabutton from "./atoms/ctabutton";

export default function Steps({ data, title }) {
  let steps = 1;
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 mx-auto text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6  text-4xl font-bold leading-none tracking-tight text-gray-900 pb-8 mx-auto sm:text-4xl">
          {title}
        </h2>
      </div>

      {data.map((item) => (
        <div className="flex justify-between flex-col gap-8 mb-20 sm:flex-row">
          <div>
            <div className="sm:text-center">
              <div className="flex items-center justify-center w-10 h-10 mb-4 text-2xl font-extrabold rounded-full text-white bg-FM-orange mx-auto">
                {steps++}
              </div>
              {/* <h6 className="mb-2 font-semibold leading-5">Slugging catcher</h6> */}
              <p className="max-w-md text-center mb-3 text-2xl text-gray-900 mx-auto sm:max-w-xs">
                {item.left}
              </p>
            </div>
          </div>
          <div className="order-last sm:order-none">
            <div className="sm:text-center sm:mt-32">
              <div className="relative h-64 object-contain rounded mx-auto sm:w-96">
                <Image
                  fill
                  src={urlFor(item.image).url()}
                  className="object-contain rounded"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="sm:text-center sm:mt-60">
              <div className="flex items-center justify-center w-10 h-10 mb-4 text-2xl font-extrabold rounded-full text-white bg-FM-orange mx-auto">
                {steps++}
              </div>
              {/* <h6 className="mb-2 font-semibold leading-5">Slugging catcher</h6> */}
              <p className="max-w-md text-center mb-3 text-2xl text-gray-900 mx-auto sm:max-w-xs">
                {item.right}
              </p>
            </div>
          </div>
        </div>
      ))}

      <div
        className="
        flex flex-col items-center justify-center w-full mt-32"
      >
        <Ctabutton text="Let's Talk" />
      </div>
    </div>
  );
}
