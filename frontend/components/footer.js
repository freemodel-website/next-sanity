import React from "react";
import { BsInstagram, BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs";
import { client, urlFor } from "../client";

export default function Footer({ data }) {
  //console.log(footerSettings);

  return (
    <footer aria-label="Site Footer" className="bg-FM-orange">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                {data && (
                  <img
                    src={urlFor(data.footerimage).url()}
                    alt="Company Logo"
                    className="w-48"
                  />
                )}
              </span>
            </a>
            <div className="pt-8 flex gap-6 max-w-xs items-center lg:max-w-sm">
              {/* instagram facebook linkedin twitter */}
              <a href="/" className="text-2xl text-white">
                <BsInstagram className="text-2xl text-white" />
              </a>
              <a href="/" className="text-2xl text-white">
                <BsFacebook className="text-2xl text-white" />
              </a>
              <a href="/" className="text-2xl text-white">
                <BsLinkedin className="text-2xl text-white" />
              </a>
              {/* <a href="/" className="text-2xl text-white">
                <BsTwitter className="text-2xl text-white" />
              </a> */}
            </div>
          </div>
          <div className="space-y-2 text-sm">
            {data.leftItems.map((item, index) => (
              <p
                key={index}
                className="text-base text-white font-bold tracking-wide"
              >
                <a href={item.link}>{item.title}</a>
              </p>
            ))}
          </div>
          <div className="space-y-2 text-sm">
            {data.rightItems.map((item, index) => (
              <p
                key={index}
                className="text-base text-white font-bold tracking-wide"
              >
                <a href={item.link}>{item.title}</a>
              </p>
            ))}
          </div>
          {/*  */}
        </div>
        <div className="border-t pt-5 pb-10 lg:flex lg:flex-row lg:justify-between flex-col-reverse">
          <p className="text-sm text-white">
            <a
              href="https://www.nickcancode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              © {new Date().getFullYear()} Freemodel Inc. All rights reserved.
            </a>
          </p>

          {/* <a
            href="https://www.nickcancode.com"
            target="_blank"
            className="text-white hover:underline float-right"
          >
            <img
              src="/nickcancode.svg"
              alt="Nick Can Code"
              className="w-6 inline-block ml-1"
            />
          </a> */}
        </div>
      </div>
    </footer>
  );
}
