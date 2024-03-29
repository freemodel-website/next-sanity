import { urlFor, client } from "../../client";
import {
  BsLinkedin,
  BsInstagram,
  BsFacebook,
  BsPinterest,
  BsEnvelope,
} from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import Image from "next/image";
export const TeamHeader = ({ item }) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-x bg-FM-blue md:max-w-full  md:px-24 lg:px-8 lg:pt-20 lg:pb-5">
      <div className="grid gap-10 lg:grid-cols-2 lg:max-w-screen-lg lg:mx-auto">
        <div>
          <Image
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={urlFor(item.image).url()}
            width={500}
            height={500}
            loading="lazy"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0"
            placeholder="blur"
            alt={item.name}
          />
        </div>

        <div className="lg:pr-10">
          <h1 className="mb-4 text-4xl text-white font-extrabold leading-none">
            {item.name}
          </h1>
          <p className="mb-2 text-xl text-white leading-none">{item.title}</p>
          {item.location.name && (
            <p className="mb-12 text-xl text-white leading-none">
              {item.location.name}
            </p>
          )}
          {/* List of social links  */}
          <ul className="flex flex-col gap-5 mb-12">
            {/* Linkedin */}
            {item.linkedin && (
              <li className="mr-6">
                <a
                  href={item.linkedin.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* same line */}
                  <span className="flex items-center">
                    <BsLinkedin className="h-6 w-6 text-white" />
                    <span className="ml-2 text-white text-xl">
                      {item.linkedin.title}
                    </span>
                  </span>
                </a>
              </li>
            )}
            {/* Instagram */}
            {item.instagram && (
              <li className="mr-6">
                <a
                  href={item.instagram.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* same line */}
                  <span className="flex items-center">
                    <BsInstagram className="h-6 w-6 text-white" />
                    <span className="ml-2 text-white text-xl">
                      {item.instagram.title}
                    </span>
                  </span>
                </a>
              </li>
            )}
            {/* Facebook */}
            {item.facebook && (
              <li className="mr-6">
                <a
                  href={item.facebook.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* same line */}
                  <span className="flex items-center">
                    <BsFacebook className="h-6 w-6 text-white" />
                    <span className="ml-2 text-white text-xl">
                      {item.facebook.title}
                    </span>
                  </span>
                </a>
              </li>
            )}
            {/* Pintrest */}
            {item.pinterest && (
              <li className="mr-6">
                <a
                  href={item.pinterest.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* same line */}
                  <span className="flex items-center">
                    <BsPinterest className="h-6 w-6 text-white" />
                    <span className="ml-2 text-white text-xl">
                      {item.pinterest.title}
                    </span>
                  </span>
                </a>
              </li>
            )}
            {/* Website */}
            {item.website && (
              <li className="mr-6">
                <a
                  href={item.website.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* same line */}
                  <span className="flex items-center">
                    <CgWebsite className="h-6 w-6 text-white" />
                    <span className="ml-2 text-white text-xl">
                      {item.website.title}
                    </span>
                  </span>
                </a>
              </li>
            )}
            {/* Email */}
            {item.email && (
              <li className="mr-6">
                <a
                  href={`mailto:${item.email.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* same line */}
                  <span className="flex items-center">
                    <BsEnvelope className="h-6 w-6 text-white" />
                    <span className="ml-2 text-white text-xl">
                      {item.email.title}
                    </span>
                  </span>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      {/* Quote section */}
      <div className="max-w-screen-lg text-center mx-auto mt-8">
        <blockquote className="text-3xl text-white font-medium italic font-serif mb-8">
          {item.quote}
        </blockquote>
      </div>
    </div>
  );
};
