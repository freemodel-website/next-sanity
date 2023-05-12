import React from "react";
import Ctabutton from "./atoms/ctabutton";

export default function rightleftright() {
  return (
    <div className="bg-FM-blue py-16 mx-auto lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
        <h2 className="mb-10 text-5xl font-bold leading-none tracking-tight mx-auto text-center text-white sm:text-5xl">
          Why Freemodel?
        </h2>
      </div>

      <section>
        {/* Section one */}
        <div className="mx-auto max-w-screen-lg px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Party"
                src="https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80=format&fit=crop&w=1770&q=80"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold text-white underline underline-offset-4 decoration-1 sm:text-4xl">
                We’re local.
              </h2>

              <p className="mt-4 text-white font-light text-3xl">
                Our local project directors are based in your region. They visit
                your site often and remain the trusted point of contact
                throughout the project.
              </p>
            </div>
          </div>
        </div>

        {/* Section two */}
        <div className="mx-auto max-w-screen-lg px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Party"
                src="https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80=format&fit=crop&w=1770&q=80"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24 sm:order-last">
              <h2 className="text-3xl font-bold text-white underline underline-offset-4 decoration-1 sm:text-4xl">
                We’re talented.
              </h2>

              <p className="mt-4 text-white font-light text-3xl">
                Each Freemodel project director is also a skilled designer. They
                work closely with the agent and homeowner to establish scope and
                design.
              </p>
            </div>
          </div>
        </div>

        {/* Section three */}
        <div className="mx-auto max-w-screen-lg px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Party"
                src="https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80=format&fit=crop&w=1770&q=80"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold text-white underline underline-offset-4 decoration-1 sm:text-4xl">
                We’re flexible.
              </h2>

              <p className="mt-4 text-white font-light text-3xl">
                We have no arbitrary caps on the scope or size of a project.
                We’ll greenlight any renovation job that will boost a home’s
                selling price.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Ctabutton href="/lets-talk" text="Let's Talk" />
        </div>
      </section>
    </div>
  );
}
