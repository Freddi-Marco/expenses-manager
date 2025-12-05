import React, { useState } from "react";
import ExpenseItem from "./Item";

const ExpenseList = ({ items, onDelete }) => (
  <div className="flex flex-col gap-3 mt-0 w-full">
    {items.length === 0 ? (
      <div className="text-gray-400 text-center font-inter">Nessuna spesa</div>
    ) : (
      items.map((item, idx) => (
        <ExpenseItem key={item.id || idx} {...item} onDelete={onDelete} />
      ))
    )}
  </div>
);

export default ExpenseList;
