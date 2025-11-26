import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PocketbaseForm = ({ onAdd }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [date, setDate] = useState(new Date());

  const handleAdd = () => {
    if (input1 && input2 && date) {
      onAdd({
        input1,
        input2,
        date: date.toLocaleDateString(),
      });
      setInput1("");
      setInput2("");
      setDate(new Date());
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg overflow-visible">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Aggiungi Item
      </h2>
      <div className="flex gap-3 mb-6 items-center">
        <input
          type="text"
          placeholder="Input 1"
          className="border rounded px-4 py-3 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
          value={input1}
          onChange={e => setInput1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Input 2"
          className="border rounded px-4 py-3 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
          value={input2}
          onChange={e => setInput2(e.target.value)}
        />
        <DatePicker
          selected={date}
          onChange={setDate}
          dateFormat="dd/MM/yyyy"
          className="border rounded px-4 py-3 flex-1 min-w-0 max-w-[150px] focus:outline-none focus:ring-2 focus:ring-blue-300"
          popperClassName="z-50 max-w-xs"
          calendarClassName="rounded-lg shadow-lg border"
        />
        <button
          className="bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-600 font-semibold"
          onClick={handleAdd}
        >
          Aggiungi
        </button>
      </div>
    </div>
  );
};

export default PocketbaseForm;
