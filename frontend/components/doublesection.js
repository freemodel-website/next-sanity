import Image from "next/image";
import { urlFor } from "../client";
export default function DoubleSection({ imageArray }) {
  return (
    <section className="py-14">
      <div className="max-w-screen-lg mx-auto px-4 text-gray-600 md:px-0">
        <div className="relative max-w-2xl mx-auto sm:text-center">
          <div className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]"></div>
        </div>
        <div className="relative mt-12">
          <ul className="grid gap-10 sm:grid-cols-2 ">
            {imageArray.map((item, idx) => (
              <li
                key={idx}
                className="bg-white space-y-3 p-6 border rounded-2xl"
              >
                <div className="relative h-32 w-32 mb-4 rounded-full mx-auto sm:w-36 sm:h-36">
                  <Image
                    src={urlFor(item.image).url()}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 33vw, 25vw"
                    alt={item.title}
                  />
                </div>
                <h2 className="text-3xl text-gray-800 font-semibold">
                  {item.title}
                </h2>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
