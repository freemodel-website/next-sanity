import Image from "next/image";
import { client, urlFor } from "../../client";
export default function BeforeAfter({
  beforeimages,
  afterimages,
  moreimages,
  moreimagestitle,
}) {
  return (
    <section className="pt-14 pb-24">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="mt-12">
          <div className="grid gap-8 grid-cols-2 ">
            {/* Before */}
            {beforeimages && (
              <ul className="grid gap-8 content-start">
                <li className="flex justify-center">
                  <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                    Before
                  </h1>
                </li>
                {beforeimages.map((item, idx) => (
                  <li
                    key={idx}
                    className={
                      idx % 2 === 0 ? "flex justify-start" : "flex justify-end"
                    }
                  >
                    <div className="relative w-full h-60 sm:h-52 md:h-96">
                      <Image
                        src={urlFor(item.beforeimage).url()}
                        alt={item.beforeimage.altText}
                        className="w-full h-full object-cover object-center shadow-md rounded-xl"
                        fill
                      />
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {/*  */}
            {/* After */}
            {afterimages && (
              <ul className="grid gap-8 content-start">
                <li className="flex justify-center">
                  <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                    After
                  </h1>
                </li>
                {afterimages.map((item, idx) => (
                  <li
                    key={idx}
                    className={
                      idx % 2 === 0 ? "flex justify-start" : "flex justify-end"
                    }
                  >
                    <div className="relative w-full h-60 sm:h-52 md:h-96">
                      <Image
                        src={urlFor(item.afterimage).url()}
                        alt={item.afterimage.altText}
                        className="w-full h-full object-cover object-center shadow-md rounded-xl"
                        fill
                      />
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {/* END after */}
          </div>
        </div>
      </div>

      {/* More photos section  */}
      {moreimages && (
        <div className="mt-24">
          <div className="flex justify-start max-w-screen-xl mx-auto md:px-8 mb-10">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
              {moreimagestitle ? moreimagestitle : "More Photos"}
            </h1>
          </div>
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="grid gap-8 grid-cols-2 ">
              {moreimages.map((item, idx) => (
                <div key={idx} className="relative w-full h-60 sm:h-52 md:h-96">
                  <Image
                    src={urlFor(item.moreimage).url()}
                    alt={item.moreimage.altText}
                    className="w-full h-full object-cover object-center shadow-md rounded-xl"
                    fill
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
