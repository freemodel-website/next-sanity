import React from "react";
import { BsInstagram, BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <footer aria-label="Site Footer" class="bg-FM-orange">
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
                <img
                  src="/Freemodel-logo-White@2x.png"
                  alt="Company Logo"
                  className="w-48"
                />
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
              <a href="/" className="text-2xl text-white">
                <BsTwitter className="text-2xl text-white" />
              </a>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base text-white font-bold tracking-wide">Blog</p>
            <p className="text-base text-white font-bold tracking-wide">
              Design Services
            </p>
            <p className="text-base text-white font-bold tracking-wide">FAQ</p>
            <p className="text-base text-white font-bold tracking-wide">
              Media
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base text-white font-bold tracking-wide">
              About Us
            </p>
            <p className="text-base text-white font-bold tracking-wide">
              Careers
            </p>
            <p className="text-base text-white font-bold tracking-wide">
              For Contractors
            </p>
            <p className="text-base text-white font-bold tracking-wide">
              Privacy Policy
            </p>
          </div>
          {/*  */}
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} Freemodel Inc. All rights reserved
            <a
              href="https://www.nickcancode.com"
              className="text-white ml-1"
              rel="noopener noreferrer"
            >
              .
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
