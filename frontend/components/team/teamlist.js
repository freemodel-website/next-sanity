import Image from "next/image";
import { client, urlFor } from "../../client";
import Link from "next/link";

export default function TeamList({ title, team }) {
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
            {team.map((item, idx) => (
              <li key={idx}>
                <Link href={`/team/${item.slug.current}`}>
                  <div className="relative w-20 h-20 mx-auto">
                    <Image
                      src={urlFor(item.image).url()}
                      className="w-full h-full rounded-full object-cover object-center shadow-md"
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="mt-2">
                    <h4 className="text-black font-semibold sm:text-lg">
                      {item.name}
                    </h4>
                    {item.location?.name && (
                      <p className="text-slate-600">{item.location?.name}</p>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
