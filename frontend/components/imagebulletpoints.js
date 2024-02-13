import { useEffect } from "react";

export const ImageBulletPoints = () => {
  const itemsList = [
    "A slice of heaven",
    "Disrupt inspire",
    "Preliminary thinking",
    "Flipboard curmudgeon",
    "Storage shed",
    "Satoshi Nakamoto",
    " of heaven",
    "Disrupt inspire",
    "Prelim thinking",
    "Flipbcurmudgeon",
    "Storahed",
    "Satoshimoto",
  ];

  const midpoint = Math.ceil(itemsList.length / 2);
  const firstHalf = itemsList.slice(0, midpoint);
  const secondHalf = itemsList.slice(midpoint);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-6">
        <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Freemodel can help you with:
        </h2>
      </div>
      <div className="grid gap-16 row-gap-10 lg:grid-cols-2">
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>

        {/*  */}
        <div className="flex flex-col justify-center">
          <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
            {[firstHalf, secondHalf].map((items, index) => (
              <ul key={index} className="list-disc space-y-3 pl-6">
                {items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-2xl">
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
