import React, { useEffect, useState } from "react";

const TotalExpenses = ({ items }) => {
  const total = items.reduce((sum, item) => sum + Number(item.price), 0);
  return (
    <div className="w-full text-center py-2 mb-2 font-inter text-lg font-semibold tracking-widest text-black border-b border-black uppercase bg-white">
      Totale: <span className="font-bold">€{total.toFixed(2)}</span>
    </div>
  );
};

export default TotalExpenses;