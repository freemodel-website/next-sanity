import Head from "next/head";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Footer from "../../components/footer";
import React, { useState } from "react";

export default function LetsTalk() {
  const tabItems = ["Overview", "Billing", "Transactions"];
  const [selectedItem, setSelectedItem] = useState(0);

  const tabContent = [
    <div key={0} className={selectedItem === 0 ? "block" : "hidden"}>
      {/* Content for Overview */}
      Overview Content
    </div>,
    <div key={1} className={selectedItem === 1 ? "block" : "hidden"}>
      {/* Content for Billing */}
      Billing Content
    </div>,
    <div key={2} className={selectedItem === 2 ? "block" : "hidden"}>
      {/* Content for Transactions */}
      Transactions Content
    </div>,
  ];

  return (
    <div>
      {/* ... (Header and other components) */}
      <main>
        <Hero hero={{ title: "Let's Talk" }} />

        <div className="px-4 md:px-8">
          <ul
            role="tablist"
            className="max-w-screen-xl mx-auto px-2.5 items-center gap-x-3 overflow-x-auto text-sm bg-gray-50 rounded-lg sm:flex"
          >
            {tabItems.map((item, idx) => (
              <li key={idx} className="py-2">
                <button
                  role="tab"
                  aria-selected={selectedItem === idx}
                  aria-controls={`tabpanel-${idx + 1}`}
                  className={`py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-white active:bg-white/50 font-medium ${
                    selectedItem === idx
                      ? "bg-white text-indigo-600 shadow-sm"
                      : "text-gray-500"
                  }`}
                  onClick={() => setSelectedItem(idx)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <div className="relative text-gray-500 sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="pointer-events-none w-5 h-5 absolute right-2 inset-y-0 my-auto"
            >
              {/* ... (SVG path) */}
            </svg>
            <select
              value={tabItems[selectedItem]}
              className="p-3 w-full bg-transparent appearance-none outline-none border rounded-lg shadow-sm focus:border-indigo-600"
              onChange={(e) => setSelectedItem(tabItems.indexOf(e.target.value))}
            >
              {tabItems.map((item, idx) => (
                <option key={idx} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        {tabContent}

      </main>

      {/* ... (Footer and other components) */}
    </div>
  );
}

