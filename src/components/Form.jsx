import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExpenseForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState(new Date());

  const handleAdd = () => {
    if (name && price && date) {
      casted_price = Number(price);
      casted_name = toString(name)
      onAdd({
        name,
        price,
        date,
      });
      setName("");
      setPrice("");
      setDate(new Date());
    }
  };

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-lg w-full p-8 bg-white rounded-xl shadow-lg overflow-visible">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Aggiungi Spesa
        </h2>
        <div className="grid gap-3 mb-6 items-center">
          <input
            type="text"
            placeholder="Nome"
            className="border rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <div className="flex items-center border rounded w-full">
            <span className="px-3 text-gray-500">€</span>
            <input
              type="number"
              placeholder="Prezzo"
              className="px-2 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 border-0 bg-transparent"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </div>
          <div className="grid justify-center">
        <DatePicker
          selected={date}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy HH:mm"
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          className="border rounded px-4 py-3 flex-1 min-w-0 max-w-[180px] focus:outline-none focus:ring-2 focus:ring-blue-300"
          popperClassName="z-50 max-w-xs"
          calendarClassName="rounded-lg shadow-lg border"
        />
          </div>
          <button
            className="bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-600 font-semibold w-full"
            onClick={handleAdd}
          >
            Aggiungi
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseForm;
