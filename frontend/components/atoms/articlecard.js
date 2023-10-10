import React from "react";
import Image from "next/image";
import { urlFor } from "../../client";

export default function ArticleCard({ image, title, body, url }) {
  return (
    <div className="relative w-full mx-auto group px-4 pb-10 sm:max-w-lg">
      <a href={url}>
        <div className="relative h-80 w-full">
          <Image
            src={urlFor(image).url()}
            alt={title}
            fill
            className="w-full object-cover rounded-lg"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0"
          />
        </div>
        <div className="mt-3 space-y-2">
          <h3 className="text-2xl text-gray-800 duration-150 group-hover:underline font-semibold">
            {title}
          </h3>
        </div>
      </a>
    </div>
  );
}
