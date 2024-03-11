import Image from "next/image";
import { client, urlFor } from "../client";

export default function ImageLeftTextRight({ image, title, text }) {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
          {/* Image */}
          <div className="flex-1 px-4 sm:hidden lg:block">
            <div className="relative flex-1 h-72 sm:hidden lg:block">
              <Image
                src={urlFor(image).url()}
                fill
                className="relative object-cover md:max-w-lg rounded-lg"
                alt=""
              />
            </div>
            <h3 className="relative text-lg font-semibold pt-2">{title}</h3>
          </div>
          {/* Text */}
          <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
            <h3 className="mt-3 mb-5 text-2xl text-gray-600">{text}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
