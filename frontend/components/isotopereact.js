import React, { useEffect, useRef } from "react";
//import Projectcard from "./atoms/projectcard";
import { BsChevronDown } from "react-icons/bs";
import dynamic from "next/dynamic";
import Select from "./atoms/select";
const Projectcard = dynamic(() => import("./atoms/projectcard"));

const IsotopeReact = () => {
  const containerRef = useRef();
  const isotopeRef = useRef();

  useEffect(() => {
    const loadIsotope = async () => {
      const Isotope = await require("isotope-layout");
      isotopeRef.current = new Isotope(containerRef.current, {
        itemSelector: ".my-item",
        masonry: {
          columnWidth: 200,
          gutter: 20,
          // center in container
          fitWidth: true,
        },
      });
    };

    loadIsotope();
  }, []);

  const handleFilter = (filterValue) => {
    isotopeRef.current.arrange({ filter: filterValue });
  };

  const testhundo = Array.from({ length: 100 }, (_, index) => index);

  return (
    <div>
      <div className="flex max-w-6xl mx-auto">
        {/* <button onClick={() => handleFilter("*")}>Show All</button>
        <button onClick={() => handleFilter(".categoryA")}>CategoryA | </button>
        <button onClick={() => handleFilter(".categoryB")}>CategoryB | </button>
        <button onClick={() => handleFilter(".categoryC")}>CategoryC | </button> */}

        <Select handleFilter={handleFilter} />

        {/* <div class="flex items-center max-w-min bg-white border border-gray-300 rounded-md px-5">
          <label class="mr-2 text-black font-bold">By:</label>
          <select
            id="select-input"
            onChange={(e) => handleFilter(e.target.value)}
            className="block px-4 py-2 pr-8 leading-tight bg-white  appearance-none focus:outline-none focus:border-blue-500"
          >
            <option value="*">Show All</option>
            <option value=".categoryA">CategoryA</option>
            <option value=".categoryB">CategoryB</option>
            <option value=".categoryC">CategoryC</option>
          </select>
          <label class="pointer-events-none flex items-center px-2 text-gray-600">
            <BsChevronDown className="h-5 w-5 text-gray-600" />
          </label>
        </div> */}
      </div>

      <div ref={containerRef} className="md:mx-auto">
        {testhundo.map((item) => (
          <>
            <div
              className="my-item categoryA sm:!static lg:!absolute"
              key={item}
            >
              <Projectcard
                title={"title A"}
                slug={"slug"}
                image={"/testhouse.jpg"}
              />
            </div>

            <div className="my-item categoryB sm:!static lg:!absolute">
              <Projectcard
                title={"title B"}
                slug={"slug"}
                image={"/testhouse.jpg"}
              />
            </div>
          </>
        ))}
        <div className="my-item categoryB sm:!static lg:!absolute">
          <Projectcard
            title={"title B"}
            slug={"slug"}
            image={"/testhouse.jpg"}
          />
        </div>
        <div className="my-item categoryC sm:!static lg:!absolute">
          <Projectcard
            title={"title C"}
            slug={"slug"}
            image={"/testhouse.jpg"}
          />
        </div>
        <div className="my-item categoryA sm:!static lg:!absolute">
          <Projectcard
            title={"title A"}
            slug={"slug"}
            image={"/testhouse.jpg"}
          />
        </div>
        <div className="my-item categoryB sm:!static lg:!absolute">
          <Projectcard
            title={"title B"}
            slug={"slug"}
            image={"/testhouse.jpg"}
          />
        </div>
        <div className="my-item categoryC sm:!static lg:!absolute">
          <Projectcard
            title={"title C"}
            slug={"slug"}
            image={"/testhouse.jpg"}
          />
        </div>
        <div className="my-item categoryA sm:!static lg:!absolute">
          <Projectcard
            title={"title A"}
            slug={"slug"}
            image={"/testhouse.jpg"}
          />
        </div>
        <div className="my-item categoryB sm:!static lg:!absolute">
          <Projectcard
            title={"title B"}
            slug={"slug"}
            image={"/testhouse.jpg"}
          />
        </div>
        <div className="my-item categoryC sm:!static lg:!absolute">
          <Projectcard
            title={"title C"}
            slug={"slug"}
            image={"/testhouse.jpg"}
          />
        </div>
      </div>
    </div>
  );
};

export default IsotopeReact;
