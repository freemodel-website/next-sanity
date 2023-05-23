import React from "react";
import Projectcard from "../atoms/projectcard";

export default function FeaturedProjects() {
  return (
    <div className="bg-FM-blue py-10">
      <h1 className="text-4xl text-center text-white font-bold mt-10 mb-10">
        Featured Projects
      </h1>

      {/* 3 section grid */}
      <div className="flex flex-col md:flex-row mb-10">
        <Projectcard
          title="Lake Top Majesty"
          image="/testhouse.jpg"
          beds="2"
          baths="1"
          duration="4 months"
        />
        <Projectcard
          title="Lake Top Majesty"
          image="/testhouse.jpg"
          beds="2"
          baths="1"
          duration="4 months"
        />
        <Projectcard
          title="Lake Top Majesty"
          image="/testhouse.jpg"
          beds="2"
          baths="1"
          duration="4 months"
        />
      </div>
    </div>
  );
}
