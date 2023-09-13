import React, { useEffect, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import dynamic from "next/dynamic";
import Select from "./atoms/select";
import $ from "jquery";
import { urlFor } from "../client";
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

  const [qsRegex, setQsRegex] = useState(null);

  const [areOtherFiltersActive, setAreOtherFiltersActive] = useState(false);

  // Create Isotope object with configs
  useEffect(() => {
    const loadIsotope = async () => {
      const Isotope = (await import("isotope-layout")).default; // Use .default to access the Isotope constructor
      isotopeRef.current = new Isotope(containerRef.current, {
        itemSelector: ".my-item",
        masonry: {
          gutter: 20,
          // center in container
          fitWidth: true,
        },
      });
    };
    loadIsotope();
  }, []);

  // Filter with Select
  useEffect(() => {
    setAreOtherFiltersActive(true);

    if (!isotopeRef.current) return;
    $("#quickSearchInput").val("");

    let filter = "*";
    if (filter1 !== "*") filter += filter1;
    if (filter2 !== "*") filter += filter2;
    if (filter3 !== "*") filter += filter3;

    isotopeRef.current.arrange({ filter });
  }, [filter1, filter2, filter3]);

  // Filter with Quick Search
  useEffect(() => {
    if (!isotopeRef.current) return;

    // if (areOtherFiltersActive) {
    //   setQsRegex(null); // Reset quick search
    //   setAreOtherFiltersActive(false); // Reset the flag
    // }

    isotopeRef.current.arrange({
      filter: function (itemElem) {
        return qsRegex ? $(itemElem).find("h2").text().match(qsRegex) : true;
      },
    });
  }, [qsRegex, areOtherFiltersActive]);

  return (
    <div className="lg:max-w-[95vw] lg:mx-auto">
      <div className="flex flex-wrap justify-center max-w-6xl mx-auto mb-6 gap-8">
        {/* First */}
        <Select
          setFilter={setfilter1}
          label="By:"
          baseoptiontitle="All Property Types"
          options={propertytype.sort((a, b) => a.name.localeCompare(b.name))}
        />
        {/* Second */}
        <Select
          setFilter={setfilter2}
          label="By:"
          baseoptiontitle="All Space Types"
          options={spacetype.sort((a, b) => a.name.localeCompare(b.name))}
        />
        {/* Third */}
        <Select
          setFilter={setfilter3}
          label="By:"
          baseoptiontitle="Show All"
          // sort and filter locations alphabetically, excluding "citya"
          options={locationstype
            .filter((location) => location.name != "In-House Design Team")
            .filter((location) => location.name != "Partnerships")
            .sort((a, b) => a.name.localeCompare(b.name))}
        />

        <div className="flex items-center max-w-min bg-white border border-gray-300 rounded-md px-1">
          <input
            id="quickSearchInput"
            className="quicksearch"
            type="text"
            placeholder="Search"
            onChange={(e) => setQsRegex(new RegExp(e.target.value, "gi"))}
          />
        </div>
      </div>

      {/* Container */}
      <div ref={containerRef} className="md:mx-auto ">
        {casestudies.map((casestudy) => {
          // Map through spacetype array and extract the slugs
          const spacetypeSlugs = casestudy.spacetype
            .map((space) => space.slug.current)
            .join(" ");

          return (
            <div
              key={casestudy.id}
              className={`my-item ${casestudy.hometype.slug.current}
        ${casestudy.location.slug.current} ${spacetypeSlugs} sm:!static lg:!absolute`}
            >
              <Projectcard
                title={casestudy.title}
                slug={casestudy.slug.current}
                image={urlFor(casestudy.mainImage).url()}
                baths={casestudy.baths}
                beds={casestudy.beds}
                duration={casestudy.durationmonths}
                bool={casestudy.bool}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IsotopeReact;
