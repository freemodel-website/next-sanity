import React from "react";
import Image from "next/image";

export default function ThreeSection() {
  return (
    <div className="mx-auto ">
      <section>
        {/* Section one */}
        <div className="mx-auto px-4 py-8 bg-FM-blue sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-7xl mx-auto lg:gap-16">
            <div className="relative object-contain rounded-lg overflow-hidden mx-auto w-[90vw] h-[90vw] md:w-[30vw] md:h-[30vw] lg:order-last">
              <Image
                alt="Party"
                fill
                src="/testhouse.jpg"
                className="object-cover rounded-lg"
              />
            </div>

            <div className="">
              <h2 className="text-3xl font-bold text-white underline-offset-4 sm:text-4xl">
                We’re local.
              </h2>

              <p className="mt-4 text-white font-light text-xl">
                Our local project directors are based in your region. They visit
                your site often and remain the trusted point of contact
                throughout the project. Our local project directors are based in
                your region. They visit your site often and remain the trusted
                point of contact throughout the project. Our local project
                directors are based in your region. They visit your site often
                and remain the trusted point of contact throughout the project.
                Our local project directors are based in your region. They visit
                your site often and remain the trusted point of contact
                throughout the project. Our local project directors are based in
                your region. They visit your site often and remain the trusted
                point of contact throughout the project. They visit your site
                often and remain the trusted point of contact throughout the
                project.
              </p>
            </div>
          </div>
        </div>

        {/* Section two */}
        <div className="mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-7xl mx-auto lg:gap-16">
            <div className="relative object-contain rounded-lg overflow-hidden mx-auto w-[90vw] h-[90vw] md:w-[30vw] md:h-[30vw]">
              <Image
                alt="Party"
                fill
                src="/testhouse.jpg"
                className="object-cover rounded-lg"
              />
            </div>

            <div className="">
              <h2 className="text-3xl font-bold text-black underline-offset-4 sm:text-4xl">
                What Makes Us Unique
              </h2>

              <p className="mt-4 text-black font-light text-xl">
                Our local project directors are based in your region. They visit
                your site often and remain the trusted point of contact
                throughout the project. Our local project directors are based in
                your region. They visit your site often and remain the trusted
                point of contact throughout the project. Our local project
                directors are based in your region. They visit your site often
                and remain the trusted point of contact throughout the project.
                Our local project directors are based in your region. They visit
                your site often and remain the trusted point of contact
                throughout the project.
              </p>
            </div>
          </div>
        </div>

        {/* Section three */}
        <div className="mx-auto px-4 py-8 bg-FM-blue sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-7xl mx-auto lg:gap-16">
            <div className="relative object-contain rounded-lg overflow-hidden mx-auto w-[90vw] h-[90vw] md:w-[30vw] md:h-[30vw] lg:order-last">
              <Image
                alt="Party"
                fill
                src="/testhouse.jpg"
                className="object-cover rounded-lg"
              />
            </div>

            <div className="">
              <h2 className="text-3xl font-bold text-white underline-offset-4 sm:text-4xl">
                Our Team
              </h2>

              <p className="mt-4 text-white font-light text-xl">
                Our local project directors are based in your region. They visit
                your site often and remain the trusted point of contact
                throughout the project. Our local project directors are based in
                your region. They visit your site often and remain the trusted
                point of contact throughout the project. Our local project
                directors are based in your region. They visit your site often
                and remain the trusted point of contact throughout the project.
                Our local project directors are based in your region. They visit
                your site often and remain the trusted point of contact
                throughout the project. Our local project directors are based in
                your region. They visit your site often and remain the trusted
                point of contact throughout the project. They visit your site
                often and remain the trusted point of contact throughout the
                project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
