import React, { useEffect, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import dynamic from "next/dynamic";
import Select from "./atoms/select";
const Projectcard = dynamic(() => import("./atoms/projectcard"));

const IsotopeReact = ({
  casestudies,
  propertytype,
  spacetype,
  locationstype,
}) => {
  const containerRef = useRef();
  const isotopeRef = useRef(null); // Initialize with null instead of undefined

  const [filter1, setfilter1] = useState("*");
  const [filter2, setfilter2] = useState("*");
  const [filter3, setfilter3] = useState("*");

  console.log(`filter1`, filter1);
  console.log(`filter2`, filter2);
  console.log(`filter3`, filter3);

  console.log(`casestudies`, casestudies);

  useEffect(() => {
    const loadIsotope = async () => {
      const Isotope = (await import("isotope-layout")).default; // Use .default to access the Isotope constructor
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

  useEffect(() => {
    if (isotopeRef.current) {
      switch (true) {
        case filter1 == "*" && filter2 == "*" && filter3 == "*":
          isotopeRef.current.arrange({ filter: "*" });
          break;
        case filter1 == "*" && filter2 !== "*" && filter3 == "*":
          isotopeRef.current.arrange({ filter: filter2 });
          break;
        case filter1 !== "*" && filter2 == "*" && filter3 == "*":
          isotopeRef.current.arrange({ filter: filter1 });
          break;
        case filter1 !== "*" && filter2 !== "*" && filter3 == "*":
          isotopeRef.current.arrange({ filter: filter1 + filter2 });
          break;
        case filter1 == "*" && filter2 == "*" && filter3 !== "*":
          isotopeRef.current.arrange({ filter: filter3 });
          break;
        case filter1 !== "*" && filter2 == "*" && filter3 !== "*":
          isotopeRef.current.arrange({ filter: filter1 + filter3 });
          break;
        case filter1 == "*" && filter2 !== "*" && filter3 !== "*":
          isotopeRef.current.arrange({ filter: filter2 + filter3 });
          break;
        case filter1 !== "*" && filter2 !== "*" && filter3 !== "*":
          isotopeRef.current.arrange({ filter: filter1 + filter2 + filter3 });
          break;

        default:
          isotopeRef.current.arrange({ filter: "*" });
          break;
      }
    }
  }, [filter1, filter2, filter3]);

  return (
    <div>
      <div className="flex max-w-6xl mx-auto mb-6 gap-8">
        {/* First */}
        <Select
          setFilter={setfilter1}
          label="By:"
          baseoptiontitle="All Property Types"
          options={propertytype}
        />
        {/* Second */}
        <Select
          setFilter={setfilter2}
          label="By:"
          baseoptiontitle="All Space Types"
          options={spacetype}
        />
        {/* Third */}
        <Select
          setFilter={setfilter3}
          label="By:"
          baseoptiontitle="Show All"
          options={locationstype}
        />
      </div>

      {/* Container */}
      <div ref={containerRef} className="md:mx-auto">
        {casestudies.map((casestudy) => (
          <div
            key={casestudy.id}
            className={`my-item ${casestudy.hometype.slug.current} ${casestudy.spacetype.slug.current} ${casestudy.location.slug.current}`}
          >
            <Projectcard
              title={casestudy.title}
              slug={casestudy.slug.current}
              image={casestudy.mainImage.asset.url}
              baths={casestudy.baths}
              beds={casestudy.beds}
              duration={casestudy.durationmonths}
            />
          </div>
        ))}

        {/* Fake Items */}
        <div className={`my-item bathroom sm:!static lg:!absolute`}>
          <Projectcard
            title={"title A bathroom"}
            slug={"slug"}
            image={"/testhouse.jpg"}
            baths={2}
            beds={3}
            duration={4}
          />
        </div>
        <div
          className={`my-item categoryB home bathroom sm:!static lg:!absolute `}
        >
          <Projectcard
            title={"title B home bathroom"}
            slug={"slug"}
            image={"/testhouse.jpg"}
          />
        </div>
        <div className={`my-item categoryC sm:!static lg:!absolute`}>
          <Projectcard
            title={"title C"}
            slug={"slug"}
            image={"/testhouse.jpg"}
          />
        </div>
        <div className={`my-item categoryD sm:!static lg:!absolute `}>
          <Projectcard
            title={"title D"}
            slug={"slug"}
            image={"/testhouse.jpg"}
          />
        </div>
        <div className={`my-item categoryD sm:!static lg:!absolute cattest`}>
          <Projectcard
            title={"title D"}
            slug={"slug"}
            image={"/testhouse.jpg"}
          />
        </div>
        {/* END: Items */}
      </div>
    </div>
  );
};

export default IsotopeReact;
