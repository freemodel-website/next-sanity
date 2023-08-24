import React from "react";
import Image from "next/image";
import { urlFor } from "../../client";

export default function ArticleCard({ image, title, body, url }) {
  return (
    <a href={url} target="_blank" className="mx-auto w-5/6 md:w-[30vw]">
      <div className="relative h-52 md:h-[20vw]">
        <Image
          alt="Lava"
          src={urlFor(image).url()}
          fill
          className=" rounded-xl object-cover"
        />
      </div>

      <div className="py-4">
        <h3 className="text-xl text-gray-900">{title}</h3>
        {body && (
          <p className="mt-2 line-clamp-3 text-base/relaxed text-black">
            {body}
          </p>
        )}
      </div>
    </a>
  );
}
