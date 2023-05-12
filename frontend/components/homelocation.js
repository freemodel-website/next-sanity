import React from "react";
import Ctabutton from "./atoms/ctabutton";

export default function Homelocation() {
  return (
    <div className="py-16 mx-auto lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
        <h2 className="mb-10 text-5xl font-bold leading-none tracking-tight text-center text-black sm:text-5xl md:mx-auto">
          Why Freemodel?
        </h2>
      </div>
      {/* grid */}
      <div className="items-center px-4 max-w-screen-xl mx-auto md:px-8 grid gap-11 sm:grid-cols-3 gap-4">
        {[...Array(3)].map((_, index) => (
          <a key={index + 1} href="javascript:void(0)">
            <div className="group">
              <img
                alt="Lava"
                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
                className="h-72 w-full rounded-xl object-cover shadow-xl transition group-hover:opacity-80"
              />
              <div className="p-4">
                <h3 className="text-3xl underline underline-offset-4 decoration-1 font-bold sm:text-3xl text-FM-orange group-hover:text-orange-600">
                  California
                </h3>
              </div>
            </div>
          </a>
        ))}
      </div>
      {/*  */}
      <div className="flex justify-center mt-14">
        <Ctabutton href="/lets-talk" text="Let's Talk" />
      </div>
    </div>
  );
}
