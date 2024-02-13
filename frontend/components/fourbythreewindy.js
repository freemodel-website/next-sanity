import { useEffect, useState } from "react";
import { urlFor } from "../client";

export const FourByThreeWindy = ({ data, title }) => {
  let stepsData = data;
  let [list, setList] = useState([]);

  console.log("title", title);

  useEffect(() => {
    console.log("DEBUG useEffect");
    if (window.innerWidth > 640) {
      console.log("DEBUG worked");
      // Assuming mobile width is considered as 768px
      // Filter odd and even numbered items
      const oddItems = stepsData.filter((item) => item.number % 2 !== 0);
      const evenItems = stepsData.filter((item) => item.number % 2 === 0);

      // Concatenate even items after odd items
      stepsData = oddItems.concat(evenItems);
      setList(stepsData);
    } else {
      setList(stepsData);
    }
  }, []);

  return (
    <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          {title}
        </h2>
      </div>
      {/* loop */}
      <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((step, index) => (
          <div key={index} className="flex flex-col justify-between">
            <li className="flex">
              <div className="pl-4 pr-2">
                <span className="flex items-center justify-center w-9 h-9 mx-auto text-2xl font-bold text-white rounded-full font-heading bg-FM-orange">
                  {step.number}
                </span>
              </div>
              <div className="sm:pr-4">
                <p className=" text-gray-500">{step.text}</p>
              </div>
            </li>
            {step.windyimage && (
              <img
                src={urlFor(step.windyimage).url()}
                alt=""
                className="object-contain w-full h-56  sm:h-96"
              />
            )}
          </div>
        ))}
      </div>
      {/*  */}
    </div>
  );
};
