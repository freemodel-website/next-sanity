import React from "react";
import { BsChevronDown } from "react-icons/bs";

export default function Select({ setFilter, label, baseoptiontitle, options }) {
  return (
    <div class="flex items-center max-w-min bg-white border border-gray-300 rounded-md px-1">
      <label class="mr-2 text-black font-bold">{label}</label>
      <select
        id="select-input"
        onChange={(e) => setFilter(e.target.value)}
        className="block px-4 py-2 pr-8 leading-tight bg-white focus:outline-none focus:border-blue-500"
      >
        {/* make a default option */}
        <option value="*" defaultValue={baseoptiontitle}>
          {baseoptiontitle}
        </option>
        {options.map((option) => (
          <option value={`.${option.slug.current}`}>{option.name}</option>
        ))}
      </select>
    </div>
  );
}
