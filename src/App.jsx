import React, { useState } from "react";
import { DBfetchItems, DBpushItem } from "./components/DBManager.jsx";
import TotalExpenses from "./components/TotalExpenses";
import ExpenseForm from "./components/Form";
import ExpenseList from "./components/ItemList";
import ExpenseTitle from "./components/ExpenseTitle";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [totale, setTotale] = useState(0);

  const handleAdd = (item) => {
    setItems([...items, item]);
    DBpushItem(item);
  };

  React.useEffect(() => {
    const getItems = async () => {
      const fetched = await DBfetchItems();
      setItems(fetched);
    };
    getItems();
  }, []);

  React.useEffect(() => {
    let sum = 0
    items.map((item) => {
      sum += item.price
    })
    setTotale(sum)
  }, [items]);

  return (
    <>
      <ExpenseTitle />
      <TotalExpenses total={totale} />
      <div className="w-full flex justify-center max-w-10xl">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <ExpenseForm onAdd={handleAdd} />
          <ExpenseList items={items} />
        </div>
      </div>
    </>
  );
};

export default App;
