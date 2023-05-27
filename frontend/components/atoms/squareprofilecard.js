import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function SquareProfileCard({ image, name, question, answer }) {
  return (
    <Link href="/design-services" className="group mx-auto">
      <div className="flex flex-col max-w-md p-6 dark:text-gray-100">
        <div className="relative h-64 sm:h-64">
          <Image
            src={image}
            alt=""
            fill
            className="flex-shrink-0 object-cover rounded-lg aspect-square"
          />
        </div>

        <div>
          <h2 className="text-xl text-FM-orange font-semibold mt-3 group-hover:underline">
            {name}
          </h2>
          <h3 className="block pb-2 text-sm text-black">{question}</h3>
          <p className="text-black">{answer}</p>
        </div>
      </div>
    </Link>
  );
}
