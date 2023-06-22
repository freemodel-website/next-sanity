import React, { useEffect, useRef } from "react";
import Projectcard from "./atoms/projectcard";

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
      <div>
        <button onClick={() => handleFilter("*")}>Show All</button>
        <button onClick={() => handleFilter(".categoryA")}>CategoryA | </button>
        <button onClick={() => handleFilter(".categoryB")}>CategoryB | </button>
        <button onClick={() => handleFilter(".categoryC")}>CategoryC | </button>
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
