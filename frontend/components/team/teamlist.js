import Image from "next/image";
import { client, urlFor } from "../../client";
import Link from "next/link";

export default function TeamList({ title, team }) {
  // Sort the team array based on a sorting criteria (e.g., name)
  const sortedTeam = team.slice().sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
        <div className="max-w-xl mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            {title}
          </h3>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {sortedTeam.map((item, idx) => (
              <li key={idx}>
                {item.bool === false ? (
                  <div>
                    <div className="relative w-28 h-28 md:w-24 md:h-24 mx-auto">
                      <Image
                        src={urlFor(item.image).url()}
                        className="w-full h-full rounded-full object-cover object-center shadow-md"
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="mt-2">
                      <h4 className="font-semibold sm:text-lg">{item.name}</h4>
                      {/* {item.title && <p className="text-black">{item.title}</p>} */}

                      {item.location?.name &&
                        item.location?.name != "Partnerships" &&
                        item.location?.name != "In-House Design Team" &&
                        item.location?.name != "Author" && (
                          <p className="text-slate-600 text-lg">
                            {item.location?.name}
                          </p>
                        )}
                    </div>
                  </div>
                ) : (
                  <Link href={`/team/${item.slug.current}`} className="group">
                    <div className="relative w-28 h-28 md:w-24 md:h-24 mx-auto">
                      <Image
                        src={urlFor(item.image).url()}
                        className="w-full h-full rounded-full object-cover object-center shadow-md"
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="mt-2">
                      <h4 className="text-black font-semibold sm:text-lg group-hover:underline">
                        {item.name}
                      </h4>
                      {/* {item.title && <p className="text-black">{item.title}</p>} */}

                      {item.location?.name &&
                        item.location?.name != "Partnerships" &&
                        item.location?.name != "In-House Design Team" &&
                        item.location?.name != "Author" && (
                          <p className="text-slate-600 text-lg">
                            {item.location?.name}
                          </p>
                        )}
                    </div>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
