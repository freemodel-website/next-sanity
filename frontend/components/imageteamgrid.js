import Ctabutton from "./atoms/ctabutton";
import { client, urlFor } from "../client";

export default ({ title, images, button }) => {
  console.log("DEBUG images: ", images);

  return (
    <div class="relative p-4 px-4 py-24 mx-auto bg-white  sm:px-6 lg:px-20 py-26">
      <div class="relative">
        <div class="columns-2 md:columns-3 max-w-5xl mx-auto">
          <img
            class="w-full mb-5 aspect-video object-cover rounded-xl"
            src={urlFor(images[0]).url()}
          />
          <img
            class="w-full mb-5 aspect-square object-cover rounded-xl"
            src={urlFor(images[1]).url()}
          />
          <img
            class="w-full mb-5 aspect-square object-cover rounded-xl"
            src={urlFor(images[2]).url()}
          />
          <img
            class="w-full mb-5 aspect-video object-cover rounded-xl"
            src={urlFor(images[3]).url()}
          />
          <img
            class="w-full mb-5 aspect-square object-cover rounded-xl"
            src={urlFor(images[4]).url()}
          />
          <img
            class="w-full mb-5 aspect-video object-cover rounded-xl"
            src={urlFor(images[5]).url()}
          />
        </div>
        <div class="mx-auto ">
          <div class="mx-auto text-center mt-16 max-w-xl">
            <h4 class="mt-2 text-2xl mb-5 font-extrabold max-w-xl text-center leading-8 text-gray-900  sm:text-3xl sm:leading-9">
              Check out our amazing team of project directors and their
              portfolios:
            </h4>
            <Ctabutton href="/team" text="Our team" />
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};
