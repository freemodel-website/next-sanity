import Image from "next/image";
import { urlFor } from "../../client";

const TwoByTwo = ({ items, title, text = "" }) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 px-10 sm:px-0 md:mx-auto text-center lg:max-w-5xl md:mb-12">
        <h2 className="mb-10 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
          {title}
        </h2>
      </div>
      <h3 className="max-w-xl mb-10 text-xl text-gray-900 sm:mx-auto">
        {text}
      </h3>
      <div className="md:grid md:grid-cols-2 gap-4 justify-items-center mb-20 md:px-44">
        {items
          .slice(0, items.length - (items.length % 2))
          .map((item, index) => (
            <div key={index} className="p-4 ">
              {/* TEST Top */}
              <div className="text-center w-80" key={index}>
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
                  <div className="relative w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
                    <Image
                      src={urlFor(item.image).url()}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 33vw, 25vw"
                      alt={item.title}
                    />
                  </div>
                </div>
                <h6 className="text-2xl mb-2 font-semibold leading-5">
                  {item.title}
                </h6>
                <p className="max-w-md mb-3 text-base text-gray-900 sm:mx-auto">
                  {item.text}
                </p>
              </div>
              {/* TEST Bottom */}
            </div>
          ))}
        {/* Center the last item if odd number of items */}
        {items.length % 2 !== 0 && (
          <div className="col-span-2 flex justify-center">
            <div className="p-4 ">
              {/* {items[items.length - 1]} */}
              <div className="text-center w-80">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
                  <div className="relative w-16 h-16 mb-4 rounded-full mx-auto sm:w-24 sm:h-24">
                    <Image
                      src={urlFor(items[items.length - 1].image).url()}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 33vw, 25vw"
                      alt={items[items.length - 1].title}
                    />
                  </div>
                </div>
                <h6 className="text-2xl mb-2 font-semibold leading-5">
                  {items[items.length - 1].title}
                </h6>
                <p className="max-w-md mb-3 text-base text-gray-900 sm:mx-auto">
                  {items[items.length - 1].text}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TwoByTwo;
