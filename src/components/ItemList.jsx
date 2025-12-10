import React, { useState } from "react";
import ExpenseItem from "./Item";

const ExpenseList = ({ items, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return(
    <div className="flex flex-col gap-3 mt-0 w-full">
      <input
        type="text"
        placeholder="Cerca..."
        className="border border-gray-300 p-2 rounded"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {filteredItems.length === 0 ? (
        <div className="text-gray-400 text-center font-inter">Nessuna spesa</div>
      ) : (
        filteredItems.map((item, idx) => (
          <ExpenseItem key={item.id || idx} {...item} onDelete={onDelete} />
        ))
      )}
    </div>
  )
};

export default ExpenseList;
