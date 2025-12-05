import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExpenseForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState(new Date());

  const handleAdd = () => {
    if (name && price && date) {
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
      <div className="max-w-lg w-full p-8 bg-white border border-black rounded-lg shadow-none">
        <h2 className="text-xl font-bold mb-6 text-center text-black font-inter tracking-tight uppercase">
          Aggiungi Spesa
        </h2>
        <div className="grid gap-3 mb-6 items-center">
          <input
            type="text"
            placeholder="Nome"
            className="border border-black rounded px-4 py-3 w-full bg-white text-black font-inter focus:outline-none focus:ring-2 focus:ring-black"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <div className="flex items-center border border-black rounded w-full bg-white">
            <span className="px-3 text-black font-inter">€</span>
            <input
              type="number"
              placeholder="Prezzo"
              className="px-2 py-3 w-full focus:outline-none focus:ring-2 focus:ring-black border-0 bg-white text-black font-inter"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <DatePicker
              selected={date}
              onChange={setDate}
              showTimeSelect
              dateFormat="dd/MM/yyyy HH:mm"
              timeFormat="HH:mm"
              className="border border-black rounded px-4 py-3 w-full min-w-0 max-w-[180px] bg-white text-black font-inter focus:outline-none focus:ring-2 focus:ring-black"
              popperClassName="z-50 max-w-xs"
              calendarClassName="rounded-lg border border-black bg-white text-black font-inter"
            />
          </div>
          <button
            className="bg-black text-white px-5 py-3 rounded-lg font-semibold w-full font-inter tracking-widest uppercase hover:bg-white hover:text-black border border-black transition-colors duration-200"
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
