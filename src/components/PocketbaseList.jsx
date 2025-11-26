import React from "react";
import PocketbaseItem from "./PocketbaseItem";

const PocketbaseList = ({ items }) => (
  <div className="flex flex-col gap-3 mt-8">
    {items.length === 0 ? (
      <div className="text-gray-400 text-center">Nessun item aggiunto</div>
    ) : (
      items.map((item, idx) => (
        <PocketbaseItem key={idx} input1={item.input1} input2={item.input2} date={item.date} />
      ))
    )}
  </div>
);

export default PocketbaseList;
