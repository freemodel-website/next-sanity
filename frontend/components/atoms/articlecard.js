import React from "react";
import Image from "next/image";

export default function ArticleCard({ image, title, body }) {
  return (
    <a href="#" class="mx-auto w-5/6 md:w-[30vw]">
      <div className="relative h-52 md:h-[20vw]">
        <Image alt="Lava" src={image} fill class=" rounded-xl object-cover" />
      </div>

      <div class="py-4">
        <h3 class="text-xl text-gray-900">{title}</h3>
        {body && (
          <p class="mt-2 line-clamp-3 text-base/relaxed text-black">{body}</p>
        )}
      </div>
    </a>
  );
}
