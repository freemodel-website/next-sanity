import React, { useEffect, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import dynamic from "next/dynamic";
import Select from "./atoms/select";
const Projectcard = dynamic(() => import("./atoms/projectcard"));

const IsotopeReact = () => {
  const containerRef = useRef();
  const isotopeRef = useRef(null); // Initialize with null instead of undefined
  const [activeFilters, setActiveFilters] = useState([]);

  const [filter1, setfilter1] = useState([]);
  const [filter2, setfilter2] = useState([]);

  console.log(`filter1`, filter1);
  console.log(`filter2`, filter2);

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

  const handleFilter = (filterValue) => {
    console.log("Selected filter value:", filterValue);
    if (activeFilters.includes(filterValue)) {
      setActiveFilters(
        activeFilters.filter((filter) => filter !== filterValue)
      );
    } else {
      setActiveFilters([...activeFilters, filterValue]);
    }
  };

  // useEffect(() => {
  //   if (isotopeRef.current) {
  //     isotopeRef.current.arrange({ filter: activeFilters.join(",") });
  //   }
  // }, [activeFilters]);

  useEffect(() => {
    if (isotopeRef.current) {
      if (filter1 == "*" && filter2 == "*") {
        isotopeRef.current.arrange({ filter: "*" });
      } else if (filter1 == "*" && filter2 !== "*") {
        isotopeRef.current.arrange({ filter: filter2 });
      } else if (filter1 !== "*" && filter2 == "*") {
        isotopeRef.current.arrange({ filter: filter1 });
      } else if (filter1 !== "*" && filter2 !== "*") {
        isotopeRef.current.arrange({ filter: filter1 + filter2 });
      }
    }
  }, [filter1, filter2]);

  return (
    <div>
      <div className="flex max-w-6xl mx-auto mb-6">
        {/* <Select handleFilter={handleFilter} activeFilters={activeFilters} /> */}
        <div className="flex items-center max-w-min bg-white border border-gray-300 rounded-md px-5">
          <label className="mr-2 text-black font-bold">By:</label>
          <select
            id="select-input"
            // onChange={(e) => handleFilter(e.target.value)}
            onChange={(e) => setfilter1(e.target.value)}
            className="block px-4 py-2 pr-8 leading-tight bg-white  appearance-none focus:outline-none focus:border-blue-500"
          >
            <option value="*">Show All</option>
            <option value=".cattest">cattest</option>
            <option value=".categoryA">Category A</option>
            <option value=".categoryB">Category B</option>
            <option value=".categoryC">Category C</option>
            <option value=".categoryD">Category D</option>
          </select>
          <label className="pointer-events-none flex items-center px-2 text-gray-600">
            <BsChevronDown className="h-5 w-5 text-gray-600" />
          </label>
        </div>

        <div className="flex items-center max-w-min bg-white border border-gray-300 rounded-md px-5">
          <label className="mr-2 text-black font-bold">By:</label>
          <select
            id="select-input"
            //onChange={(e) => handleFilter(e.target.value)}
            onChange={(e) => setfilter2(e.target.value)}
            className="block px-4 py-2 pr-8 leading-tight bg-white  appearance-none focus:outline-none focus:border-blue-500"
          >
            <option value="*">Show All</option>
            <option value=".cattest">cattest</option>
            <option value=".categoryA">Category A</option>
            <option value=".categoryB">Category B</option>
            <option value=".categoryC">Category C</option>
          </select>
          <label className="pointer-events-none flex items-center px-2 text-gray-600">
            <BsChevronDown className="h-5 w-5 text-gray-600" />
          </label>
        </div>
      </div>

      <div ref={containerRef} className="md:mx-auto">
        {/* Items */}
        <div className={`my-item categoryA sm:!static lg:!absolute`}>
          <Projectcard
            title={"title A"}
            slug={"slug"}
            image={"/testhouse.jpg"}
          />
        </div>
        <div className={`my-item categoryB sm:!static lg:!absolute `}>
          <Projectcard
            title={"title B"}
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
            title={"title D cattest"}
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
