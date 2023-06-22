import React from "react";
import { BsChevronDown } from "react-icons/bs";

export default function Select({
  handleFilter,
  label,
  baseoptiontitle,
  options,
}) {
  return (
    <div class="flex items-center max-w-min bg-white border border-gray-300 rounded-md px-5">
      <label class="mr-2 text-black font-bold">By:</label>
      <select
        id="select-input"
        onChange={(e) => handleFilter(e.target.value)}
        className="block px-4 py-2 pr-8 leading-tight bg-white focus:outline-none focus:border-blue-500"
      >
        <option value="*">Show All</option>
        <option value=".categoryA">CategoryA</option>
        <option value=".categoryB">CategoryB</option>
        <option value=".categoryC">CategoryC</option>
      </select>
    </div>
  );
}
