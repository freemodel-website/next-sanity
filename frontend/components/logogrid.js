import React, { useEffect, useRef, useState } from "react";
import { client, urlFor } from "../client";

const NUM_VISIBLE_LOGOS = 9;

function getUniqueRandomIndices(count, max) {
  const indices = new Set();
  while (indices.size < count && indices.size < max) {
    indices.add(Math.floor(Math.random() * max));
  }
  return [...indices];
}

export default function LogoGrid({ logoArray = [], title, subtitle }) {
  const sourceArray = logoArray?.length > 0 ? logoArray : logos;
  const [visibleLogos, setVisibleLogos] = useState(() =>
    getUniqueRandomIndices(NUM_VISIBLE_LOGOS, sourceArray.length)
  );
  const imgRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomLogoIndex = Math.floor(Math.random() * sourceArray.length);
      const randomImgIndex = Math.floor(Math.random() * NUM_VISIBLE_LOGOS);

      if (visibleLogos.includes(randomLogoIndex)) return;

      setVisibleLogos((prev) => {
        const updated = [...prev];
        updated[randomImgIndex] = randomLogoIndex;

        const img = imgRefs.current[randomImgIndex];
        if (img) {
          img.style.opacity = 0;
          img.onload = () => {
            img.style.transition = "opacity 2s";
            img.style.opacity = 1;
          };
        }

        return updated;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [sourceArray, visibleLogos]);

  return (
    <div className="text-center my-24 w-full mx-auto">
      <h2 className="text-4xl font-bold mb-3">{title}</h2>
      <p className="text-lg text-gray-600 mb-8">{subtitle}</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 list-none p-0 m-0">
        {visibleLogos.map((index, i) => {
          const logo = sourceArray[index];
          const src = logoArray?.length > 0 ? urlFor(logo.image).url() : logo;

          return (
            <li key={i} className="flex justify-center items-center">
              <img
                ref={(el) => (imgRefs.current[i] = el)}
                src={src}
                alt={`Logo ${i + 1}`}
                className="w-32 sm:w-40 md:w-48 lg:w-60 transition-opacity duration-1000"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const logos = [
  "https://uploads-ssl.webflow.com/61f90898c4cec7ee3121f823/646e027aafc3b665b8d8f4d7_Azalvo%20Color%20WP.webp",
  "https://uploads-ssl.webflow.com/61f90898c4cec7ee3121f823/646e01af2b348bb7f67e0719_Liz%20and%20Betty%20Color%20BW.webp",
  "https://uploads-ssl.webflow.com/61f90898c4cec7ee3121f823/646e014e442044cdf65b896a_Uma%20Color%20BW.webp",
  "https://uploads-ssl.webflow.com/61f90898c4cec7ee3121f823/646e0098f657a4100bf6fffb_Primal%20Color%20BW.webp",
  "https://uploads-ssl.webflow.com/61f90898c4cec7ee3121f823/646e004b37eee4ad80dfeded_Duke%20Language%20School%20BW.webp",
  "https://uploads-ssl.webflow.com/61f90898c4cec7ee3121f823/63159e13cf6f3be25a4d29a6_GLX%20BW.webp",
  "https://uploads-ssl.webflow.com/61f90898c4cec7ee3121f823/63159e2864bb4ecfe0ac43e0_Sleek%20BW.webp",
  "https://uploads-ssl.webflow.com/61f90898c4cec7ee3121f823/63159e4ab9c9fa827b737847_AIP%20BW.webp",
  "https://uploads-ssl.webflow.com/61f90898c4cec7ee3121f823/63159eab77fdaebe18a72cbd_Fat%20Mango%20BW.webp",
  "https://uploads-ssl.webflow.com/61f90898c4cec7ee3121f823/63159eb71b1c7653e6ae63b2_Happyer%20BW.webp",
  "https://uploads-ssl.webflow.com/61f90898c4cec7ee3121f823/63159e6e617b3d52dc93cdbf_Kandio%20BW.webp",
  "https://uploads-ssl.webflow.com/61f90898c4cec7ee3121f823/63159e9dcaf1238136a779c8_eBogholderen%20BW.webp",
  "https://uploads-ssl.webflow.com/61f90898c4cec7ee3121f823/63159e7b65cd536e2e6ceb45_MixCare%20Health%20BW.webp",
  "https://uploads-ssl.webflow.com/61f90898c4cec7ee3121f823/63159e8765cd53530b6ceb69_Schedult%20BW.webp",
  "https://uploads-ssl.webflow.com/61f90898c4cec7ee3121f823/63159e923c5896f9638fc105_Techsauce%20BW.webp",
  "https://uploads-ssl.webflow.com/61f90898c4cec7ee3121f823/63159e5d258fbb1128ff70f9_Jumpstart%20BW.webp",
];
