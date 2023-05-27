import React from "react";
import SquareProfileCard from "../atoms/squareprofilecard";

export default function MeetTheTeam() {
  return (
    <div className="py-10">
      <h1 className="text-4xl text-center text-black font-bold mt-10 mb-10">
        Meet the Team
      </h1>

      {/* 3 section grid */}
      <div className="flex flex-col md:flex-row mb-10">
        <SquareProfileCard
          image="/testhouse.jpg"
          name="Samantha Black - Designer"
          question="Whats your favorite design style or element?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non
            deserunt Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non"
        />

        <SquareProfileCard
          image="/testhouse.jpg"
          name="Samantha Blue - Designer"
          question="Whats your favorite design style or element?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non
            deserunt Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non"
        />
        <SquareProfileCard
          image="/testhouse.jpg"
          name="Samantha Green - Designer"
          question="Whats your favorite design style or element?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non
            deserunt Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non"
        />
      </div>
    </div>
  );
}
