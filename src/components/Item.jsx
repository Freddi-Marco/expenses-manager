import React from "react";

const ExpenseItem = ({ id, name, price, date, onDelete }) => {
  date = date.toLocaleString("it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
  return (
    <div className="border rounded px-4 py-3 bg-gray-50 shadow-sm flex justify-between items-center">
      <div>
        <span className="font-medium text-gray-700">{name}</span>
        <span className="ml-2 text-gray-500">€ {price}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-400">{date}</span>
        {onDelete && (
          <button
            className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-xs"
            onClick={() => onDelete(id)}
          >
            Elimina
          </button>
        )}
      </div>
    </div>
  );
};

export default ExpenseItem;
