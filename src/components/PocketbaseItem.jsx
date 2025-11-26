import React from "react";

const PocketbaseItem = ({ input1, input2, date }) => (
  <div className="border rounded px-4 py-3 bg-gray-50 shadow-sm flex justify-between items-center">
    <div>
      <span className="font-medium text-gray-700">{input1}</span>
      <span className="ml-2 text-gray-500">€{input2}</span>
    </div>
    <span className="text-xs text-gray-400">{date}</span>
  </div>
);

export default PocketbaseItem;
