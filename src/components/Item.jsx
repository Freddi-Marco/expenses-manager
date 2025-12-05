import React from "react";
import { FiTrash2 } from "react-icons/fi";

const ExpenseItem = ({ id, name, price, date, onDelete }) => (
  <div className="border border-black rounded px-4 py-3 bg-white flex justify-between items-center font-inter">
    <div>
      <span className="font-semibold text-black text-base tracking-tight">{name}</span>
      <span className="ml-2 text-black/60">€{price}</span>
    </div>
    <div className="flex items-center gap-3">
      <span className="text-xs text-black/40 font-mono">{typeof date === 'object' && date instanceof Date ? date.toLocaleString('it-IT') : String(date)}</span>
      <button
        className="ml-2 p-1 rounded hover:bg-black hover:text-white border border-black transition-colors duration-200"
        onClick={() => onDelete(id)}
        title="Elimina"
      >
        <FiTrash2 className="text-lg" />
      </button>
    </div>
  </div>
);

export default ExpenseItem;
