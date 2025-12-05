import React, { useState } from "react";
import ExpenseItem from "./Item";

const ExpenseList = ({ items, onDelete }) => {
  return (
    <div className="flex flex-col gap-3 mt-8 w-full p-8 bg-white rounded-xl shadow-lg overflow-visible">
      {items.length === 0 ? (
        <div className="text-gray-400 text-center">Nessuna spesa aggiunta</div>
      ) : (
        items.map((item, idx) => (
          <ExpenseItem id={item.id} key={idx} name={item.name} price={item.price} date={item.date} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};

export default ExpenseList;
